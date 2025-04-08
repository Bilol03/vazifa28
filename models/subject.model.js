import { mongoose } from 'mongoose'
const subjectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

let subject =  mongoose.model('subjects', subjectSchema)
export default subject
