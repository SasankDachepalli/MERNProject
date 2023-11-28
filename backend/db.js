const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sasank21bce9133:umdNIkAvmJj2RUcv@cluster0.btxs5bs.mongodb.net/fda?retryWrites=true&w=majority';

const mongoDB = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log(err)
        else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("fooditems");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory =  await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;

                    }
                })
                // if(err) console.log(err);
                // else {
                //     global.food_items = data;
                    // console.log(global.food_items)
                // }
            })
        }
    })
}

module.exports = mongoDB;

