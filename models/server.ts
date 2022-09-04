import express, { Application } from 'express';

class Server {
    private app: Application;
    private port: String;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port http://localhost:${this.port}`);
        });
    }
}

export default Server;
