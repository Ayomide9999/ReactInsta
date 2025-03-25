import app from "./src/app.js"
import connectToDb from "./src/config/database.js"

const port = process.env.port || 4500

if (!port) {
    throw new Error("please there is a port number provided")
}

//initialize server 
connectToDb()
.then(() => {
    startSever()
})
.catch((error) => {
    console.error("Invalid database connection", error);
    
})

function startSever() {
    app.listen(port, () => {
        console.log(`Server is connected to port ${port}`);
        
    })
}