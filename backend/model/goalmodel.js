const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const goalschema = mongoose.Schema({
    'text':
    {
        type:String,
        required : true
    }
},
{timestamps:true,
}
)

module.exports = (mongoose.model('Goal',goalschema))