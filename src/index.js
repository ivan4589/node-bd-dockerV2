const express = require('express');
//iniciamos una app expres
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "saludos desde mi app Node (modificado)"});
});

app.listen(3000, function(){
    console.log("servidor corriendo en el puerto 3000 (modificacion ultima)");

}) 