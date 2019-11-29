const path = require('path');
const { Seeder } = require('mongo-seeding');
process.env.DEBUG = 'mongo-seeding';
const config = {
    database: 'mongodb://localhost:27017/cricket',
    dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve("./league-seeding"),
{
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
console.log("Collections-->>", collections);
seeder.import(collections)
.then(function(){
    console.log("Seeder success");
})
.catch(function(err){
    console.log(err);
});