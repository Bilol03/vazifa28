import { errorHandler } from "../utils/error.handler.js";
import User from "../models/users.models.js";
let checkTeacher = errorHandler(async (req, res, next) => {
    let user_id = req.id
    let user = await User.findById(user_id).exec()
    if(!user) throw new Error("User not found")
    if(user.role != 'teacher') req.id == null
    next()

})

export {
    checkTeacher,
}