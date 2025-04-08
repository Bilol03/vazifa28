import { errorHandler } from "../utils/error.handler.js";

let GET = errorHandler(async (req, res) => {})
let POST = errorHandler(async (req, res) => {
    let teacher_id = req.id
    if(!teacher_id) throw new Error("You are not allowed to add new subject")
    
})


export default {
    GET, 
    POST,
}