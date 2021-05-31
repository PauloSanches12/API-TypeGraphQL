import mongoose from 'mongoose';
import { config } from "dotenv";

config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@banco.sooca.mongodb.net/testes?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});