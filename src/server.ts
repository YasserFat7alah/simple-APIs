import  express, {Request, Response}  from "express"; //server app provider
import cors from "cors";         //to access resources from different origins
import dotenv from "dotenv";     //to access environment variables
import { db } from './config/database.js';
import { usersTable } from './database/testSchema.js';
import { eq } from 'drizzle-orm';



dotenv.config(); //access environment variables

const port = process.env.port || 5000; // read port

/* --- --- Initialize the server --- --- */
const app = express();

/* --- --- Middlewares --- --- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* --- --- Connection TEST --- --- */
app.post('/',
     async (req: Request, res: Response): Promise<any> =>{
        try {  
            const users = await db //Database connection
                    .select()
                    .from(usersTable);

            console.log ('users: ',users);
            console.log(`--- --- --- --- --- --- ---`);
            return res.status(200).send("Connection is deployed!");}
        catch (err) { 
            console.log('Error :', err);
            return res.status(500).send("Internal server error" );
            }
});

/* --- --- Server listener --- --- */
app.listen(port, ()=> {

    console.log(`server running at port ${port}`);
    console.log(`--- --- --- --- --- --- ---`);

    });

