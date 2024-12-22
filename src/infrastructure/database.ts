import { connect } from "mongoose";

const db_uri = process.env.DB_URI;

const connectDB = async () => {
    try {
        const uri = db_uri;
        if (!uri) {
            console.log('uri was empty');
            return ;
        }
        console.log(uri);
        await connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};

export default connectDB;