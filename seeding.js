const path = require('path');
const { Seeder } = require('mongo-seeding');
process.env.DEBUG = 'mongo-seeding';
const config = {
    database: 'mongodb://localhost:27017/cricket',
    dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve("./seeder-data/league-seeding"),
{
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
console.log("Collections-->>", collections);
seeder.import(collections)
.then(function(){
    console.log("Seeder success leagues");
})
.catch(function(err){
    console.log(err);
});

const collectionsTeams = seeder.readCollectionsFromPath(path.resolve("./seeder-data/team-seeding"),
{
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
console.log("Collections-->>", collectionsTeams);
seeder.import(collectionsTeams)
.then(function(){
    console.log("Seeder success Teams");
})
.catch(function(err){
    console.log(err);
});

const collectionsPlayers = seeder.readCollectionsFromPath(path.resolve("./seeder-data/player-seeding"),
{
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
console.log("Collections-->>", collectionsPlayers);
seeder.import(collectionsPlayers)
.then(function(){
    console.log("Seeder success Player");
})
.catch(function(err){
    console.log(err);
});

const collectionsMatches = seeder.readCollectionsFromPath(path.resolve("./seeder-data/match-seeding"),
{
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});
console.log("Collections-->>", collectionsMatches);
seeder.import(collectionsMatches)
.then(function(){
    console.log("Seeder success Match");
})
.catch(function(err){
    console.log(err);
});