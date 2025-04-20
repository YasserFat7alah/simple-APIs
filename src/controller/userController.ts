
import { Request, Response } from "express";
import { db } from '../config/database.js';
import { usersTable } from '../database/testSchema.js';
import { eq } from 'drizzle-orm';

import { validateEmail } from '../utility/emailUtil.js';
import { validatePW, encryptPW, decryptPW } from '../utility/pwUtil.js';



export const registerUser = async (req: Request, res: Response): Promise<any> => {
    
        
    try {
        const {
            name, // REQUIRED
            address, // REQUIRED
            email, // REQUIRED
            password // REQUIRED
            } = req.body || {} ;
            console.log(req.body);
            console.log(name, address, email, password);
    
        //CHECK FOR ANYMISSING DATA
        if(!name || !address || !email || !password){
            console.log("error: couldn't register Missing data!");
            return res.status(500).send({error: "couldn't register Missing data!"});
        };

        // VALIDATE EMAIL
        if(!validateEmail(email)){
            console.log(`Invalid E-mail: ${email}`);
            return res.status(400).send({error: "Invalid E-mail"});
        }

        // CHECK FOR USER MATCHES
        const userExists = (await db.select().from(usersTable).where(eq(usersTable.email, email))).length;
        if(userExists){ 
            console.log(`USER EXISTS! ${email}`);
            return res.status(400).send({error: "user already registered, login?"});
        }

        // VALIDATE PASSWORD
        if(!validatePW(password)){
            console.log(`password must have:
                - atleast 8 characters
                - atleast one special character  @ $ ! % * ? & 
                - atleast one lower-case letter
                - atleast one upper-case letter`);
                
            return res.status(400).send({error: "Invalid password -follow password instructions"});
        }

        // ENCRYPT PASSWORD
        const ePW = encryptPW(password);

        // GENERATE USER-ID 
        const userId = email.replace(/[^a-zA-Z0-9_-]/g, "_");

        // SEND USER TO DATABASE
        await db.insert(usersTable).values({userId, name, address, email, password: `${ePW}` });
        // SERVER RESPONSE
        console.log(`
                    email: ${email}
                    password: ${password}
                    name: ${name}
                    address: ${address}`);
        return res.status(200).json({user: { name , address, email, password}});
    } catch (err) {
        return res.status(500).send({error: "Internal server error"});
        
    }
}


