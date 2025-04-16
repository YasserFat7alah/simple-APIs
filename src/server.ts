import  express  from "express"; //server app provider
import cors from "cors";         //to access resources from different origins
import dotenv from "dotenv";     //to access environment variables

dotenv.config(); //access environment variables

const port = process.env.port || 5000; // read port

/* --- --- Initialize the server --- --- */
const app = express();

/* --- --- Middlewares --- --- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* --- --- Server listener --- --- */
app.listen(port, ()=> {

    console.log(`server running at port ${port}`);
    console.log(`--- --- --- --- --- --- ---`);

    });

