const express = require("express")
const bodyParser = require("body-parser")
const dotEnv = require("dotenv")
dotEnv.config()
const App = express()
const contactDb  = require("./contactUSModel")

App.use(bodyParser.json())
require("./dbConfig");

const cors = require("cors");


// Enable CORS for all routes with wildcard

App.use(
	cors({
		origin: "127.0.0.1:5500/contact-form-main/design/contactform.html",
		methods: ["GET", "POST", "PATCH", "DELETE"],
	})
); 

App.get("/", (req, res) => {
	// console.log("Just to make sure it's all running.");
	return res.status(200).send({
		message: "Up and running",
		by: " dev ifechukwu francis ",
	});
});


App.post("/api/contactUs", async (req, res) => { 
    const { firstName, lastName, emailAddress, queryType, message, consent } = req.body
    try { 
        const savedMessage = contactDb.create({
			firstName,
			lastName,
			emailAddress,
			queryType,
			message,
			consent,
        });
        
        if (!savedMessage) {
        return res.status(401).json({error:true , message:"error contacting us"})
        }
        
      return   res.status(200).json({ success: true, message: "message sent successfully" });


    } catch (error) {
        console.log(error)
        return res.status(500).json({error:true,message:"server error occurred "})
    }
})






const port = process.env.PORT
App.listen(port, () => { 
    console.log(`server running on port ${port}`)
})

