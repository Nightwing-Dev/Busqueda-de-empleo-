const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs')
const UserSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified('password')) return next()

    try {
        const salt = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(user.password, salt)
        next()
    } catch (error) {
        console.log(error)
        throw new Error('fallo el hash de password')
    }
});

UserSchema.methods.comparePassword = async function (clientPassword) {
    return await bcryptjs.compare(clientPassword, this.password)
}

module.exports = mongoose.model('User', UserSchema);