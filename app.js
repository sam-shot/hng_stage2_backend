import express from "express";
import dotenv from 'dotenv';
import router from "./router/routes.js";
import connect from "./db/connection.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use('/', router)
const PORT = process.env.PORT || 5000

connect()
    .then(() => {
        try {
            app.listen(PORT, function () {
                console.log(`Server listening at port ${PORT}`);
            });
        } catch (error) {
            console.log(error);
        }
    })
    .catch((error) => {
        console.log("Invalid DB connection", error);
    });
