import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    uniqueId: { type: String, required: true },
    email: { type: String, required: true },
    schedules: [{
        title: { type: String, required: true },
        description: { type: String, required: false},
        time: { type: Date, required: true},
        location: { type: String, required: true},
        participants: [{ type: String }]
    }], 
    friendlist: [{ type: mongoose.Types.ObjectId, ref: "User" }]
})

export default mongoose.model('User', userSchema)
