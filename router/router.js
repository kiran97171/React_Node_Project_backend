const { addData, home, bollywood, technology, hollywood, fitness, food } = require("../controller/data");

const route = require("express").Router();
// http://localhost:5000/user/hollywood  // link api
//route.post("/addData", addData)
route.get("/home", home)
route.get("/bollywood", bollywood)
route.get("/technology", technology)
route.get("/hollywood", hollywood)
route.get("/fitness", fitness)
route.get("/food", food)

module.exports = route;