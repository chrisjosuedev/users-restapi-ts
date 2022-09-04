import express, { Application } from 'express';
/** import 'default export alias' from '..routes' */
import userRoutes from '../routes/users.routes';
import cors from 'cors';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: String;
    private apiPaths = {
        users: '/api/users',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';


        /** Init Middlewares -> ALWAYS before routes */
        this.middlewares();

        /** Define Routes */
        this.routes();

        /** DB Connection */
        this.dbConnection()
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // Body
        this.app.use(express.json());

        // Public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port http://localhost:${this.port}`);
        });
    }
}

export default Server;
