import userRouter from "./users";



const apiPrefix = "/api/v1"
const routes = (app)=>{
app.use(apiPrefix, userRouter)
}




export default routes