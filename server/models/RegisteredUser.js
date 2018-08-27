const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    password1: String


})
module.exports = mongoose.model('registeruser',userSchema,'users')
