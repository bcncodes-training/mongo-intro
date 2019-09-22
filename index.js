// Find the restaurant with id 30112340.
db.primerDataset.find({"restaurant_id":'30112340'}).pretty()
// Find May May Kitchen.

db.primerDataset.find({"name":'May May Kitchen'}).pretty()

// Find the restaurants where their cuisine is Tapas.

db.primerDataset.find({"cuisine":'Tapas'}).pretty()

// Find the restaurants in postal code 11208.

db.primerDataset.find({"address.zipcode":'11208'}, {address.zipcode:1}).pretty()

// Find all restaurants that have a score greater or equal than 70.

db.primerDataset.find({"score":{$gte:70}).pretty()

// Find all restaurants in Brooklynthat have a score greater than 80
db.primerDataset.find({"borough":'Brooklyn',"grades.score":{$gte:70}}).pretty()

// All restaurants with Chilean or Czech cuisine.

db.primerDataset.find({$or: [{"cuisine":'Chilean'}, {"cuisine":'Czech'}]}).pretty()

// All restaurants with grade A in second position of the array.

db.primerDataset.find({"grades.1.grade": "A"})

// All restaurants with grades A or B.

db.primerDataset.find({$or: [{"grades.grade": "A"},{"grades.grade":"B"}]}).pretty()

// All restaurants that have a review made in 2014-09-16.

db.primerDataset.find({"grades.date": ISODate("2014-09-16")}).pretty()


// All restaurant their cuisine is Tapas ordered by name in ascending (normal) order.

db.primerDataset.find({"cuisine":'Tapas'}).sort({"name":1}).pretty()

// How many restaurants have been graded after 2015-01-01.

db.primerDataset.find({"grades.date": {$gte: ISODate("2015-01-01")}}).pretty()