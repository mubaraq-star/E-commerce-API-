const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true},
    product:[ {
        productId:{
            type: String,
            
        },
        quantity: { type: Number, default: 1,
        },
     } ,

    ],
   amount: { type: Number, required:true},
   address: { type: object, required:true},
   status: { type: String, default: "pending"},
  },
  
  { timeStamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);