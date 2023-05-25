import mongoose from "mongoose";

let isConnected = false //track the connection

export const conneectDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected!');
        return
    }

    //else
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'aipedia',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
    }
}