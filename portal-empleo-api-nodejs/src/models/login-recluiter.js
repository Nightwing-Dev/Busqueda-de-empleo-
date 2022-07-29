const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs')
const UserRecluiterSchema = mongoose.Schema({

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

UserRecluiterSchema.pre("save", async function (next) {
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

UserRecluiterSchema.methods.comparePassword = async function (clientPassword) {
    return await bcryptjs.compare(clientPassword, this.password)
}

module.exports = mongoose.model('UserRecluiter', UserRecluiterSchema);