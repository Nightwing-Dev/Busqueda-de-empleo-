const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
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

UserSchema.pre("save", async function(next){
 const user = this
  try {
    const salt = await bcrypt.hash(10)
     bcryptjs.hash(user.password)
  } catch (error) {
    
  }
})

module.exports = mongoose.model('User', UserSchema);