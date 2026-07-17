// require('dotenv').config({ path: "./env" })

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: "./env"
})

const port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("MongoDB Connection Error:", error)
            throw error
        })
        app.listen(port, () => {
            console.log(`\n Server is running at port: ${port}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed!", error)
    })

/*
import express from "express"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

const app = express()

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR:", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port: ${process.env.PORT}`);
            })

        } catch (error) {
            console.error("ERROR:", error)
            throw error
        }
    })()
*/