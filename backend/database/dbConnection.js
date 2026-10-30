import mongoose  from "mongoose";

export const dbConnection=()=>{
    
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName: "Restaurant"
        }
    ).then(()=>{
        console.log("Connected to db...");
        
    }).catch((err)=>{
            console.log(`Some Error...! ${err}`);
            
    })
}

