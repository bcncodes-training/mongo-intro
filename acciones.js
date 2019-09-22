//abrimos terminal desde mongo.exe

 show dbs
 //orden para enseñarlas bbdd

Ejercicio1    0.000GB
admin         0.000GB
config        0.000GB
local         0.000GB
restaurantes  0.001GB

// entramos en la base de datos

use restaurantes

//vemos las colecciones

show collections

// entramos en el listado a enseñar

db.lista_restaurantes.find({})

//pretty

db.lista_restaurantes.find({}).pretty()

//encontrar SÓLO un dato

 db.lista_restaurantes.find({"cuisine": "American"}).pretty()

//entramos dentro de una array, lo tratamos como los objetos js

 db.lista_restaurantes.find({"address.zipcode": "11208"}).pretty()



 

 //entramos en array y sacamos resultado comparativo

 db.lista_restaurantes.find({"grades.score": {$gte: 70}}).pretty()

 //encontrar dos valores en array de objetos

 db.lista_restaurantes.find({$and:[{"borough": "Brooklyn"},{"grades.score": {$gte: 60}}]}).pretty()

//poscion y valores (sólo un valor)

db.lista_restaurantes.find({"grades.1.grade": "A"}).pretty()

// misma posicion y dos valores $and

db.restaurants_list.find({$and:[{ "grades.grade" :"A"},{"grades.grade": "B"}]}).pretty()

//misma posicion y con uno u otro valor $or

db.restaurants_list.find({$or:[{ "grades.grade" :"A"},{"grades.grade": "B"}]}).pretty()

// misma posicion con los dos valores refactorizado

db.restaurants_list.find({ "grades.grade" : { $in : [ "A", "B" ] } } ).pretty()

// encontrar una fecha en concreto en la bbdd

db.restaurants_list.find({ "grades.date" :ISODate("2014-09-16")}).pretty()

// ordenar una lista en orden de manera ascendente (del 1 al 10 d a-z)

db.restaurants_list.find().sort({ "name": 1}).pretty()

// ordenar descendente

db.restaurants_list.find().sort({ "name": -1}).pretty()

// encontrar fecha más tarde de

db.restaurants_list.find({ "grades.date" :{ $gte:ISODate("2015-01-01")}}).pretty()

// antes de

db.restaurants_list.find({ "grades.date" :{ $lt:ISODate("2015-01-01")}}).pretty()
