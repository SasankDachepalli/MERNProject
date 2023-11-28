const mongoose  = require('mongoose')
const {Schema} = mongoose;

const ItemSchema = new Schema({
    CategoryName:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required : true
    },
    img:{
        type: String,
        required : true
    },
    options:{
        type: Object,
        // required : true
    },
    price:{
        type:String,
        required : true
    }
})
module.exports = mongoose.model('fooditems',ItemSchema);