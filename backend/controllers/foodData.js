const Food_Data = require('../models/foodData');
const Food_Category = require('../models/foodCategory')
const foodData =async (req, res)=>{
   
    const data = await Food_Data.find({})
    res.send(data);
}
const foodCategory = async (req , res) =>{
      const foodCat = await Food_Category.find({})
      res.send(foodCat)
}



module.exports ={
    foodData,
    foodCategory,
}
