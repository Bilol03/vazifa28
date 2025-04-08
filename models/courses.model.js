import { mongoose } from 'mongoose'


let courseSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId(),
        ref: 'users'
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId(),
        ref: 'subjects'
    }
})

let course = mongoose.model('courses', courseSchema)

export default course