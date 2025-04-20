import bcrypt from 'bcrypt';

export const validatePW = (passowrd: string) =>{
    return passowrd.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
}

export const encryptPW = async ( password: string ): Promise<string> =>{
   const hashedPW = await bcrypt.hash(password, 10);
    return hashedPW;
}

export const decryptPW = async ( ePW: string ): Promise<string> =>{
    const password = await ePW;
    return password;
}