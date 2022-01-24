
const mongoose=require("mongoose");
const models = require("./models");
const placeschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    adresse: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
        type: String,
        required: false,
      },

      ville: {
        type: String,
        enum: ['Montreal','Ottawa', 'Toronto'],
        required: false,
      },
  
      
    image: {
        type: String,
        required: false,
      }
  },
  {
    timestamps: true,
  }
)
 


module.exports = mongoose.model(models.Place, placeschema)