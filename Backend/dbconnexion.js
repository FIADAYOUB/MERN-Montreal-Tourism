const mongoose = require("mongoose");

const connectDB = async () => {


    const Connexion_url = "mongodb+srv://ayoub1234:ayoub1234@cluster0.zjvyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const PORT = process.env.Port || 5000;
try {
   const con=await mongoose.connect(Connexion_url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );  
    console.log(`MongoDB Connected: ${con.connection.host}`);
} catch (error) {
    console.log(error.message)
}
     
}

module.exports=connectDB;