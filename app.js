import  express  from "express";
import tasks from './routes/tasks.js';


const app = express();
const PORT = 5000;

// ROUTES

app.get("/home",(req,res)=>{
    res.send("Task Manager App");
})
app.use('/api/v1/tasks',tasks);


app.listen(PORT,()=>{
    console.log("server is listening on port ",PORT);
})