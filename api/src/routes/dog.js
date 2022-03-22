const { Router } = require("express");
// Importar todos los routers;
const { Dog } = require("../db");


const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    height,
    weight,
    life_span,
    temperament,
    image,
  } = req.body;

  const createDog = await Dog.create({
    name:name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: image,
    temperament: temperament,
    
  });
  if(createDog){
    res.status(200).json(createDog);
  }else{
  res.status(500).send('uncreated dog')
}
});


module.exports = router;
