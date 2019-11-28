// const rp = require('request-promise');
// const otcsv = require('objects-to-csv');
// const cheerio = require('cheerio');
const axios = require('axios');

// const baseURL = 'https://www.yellowpages.com';
// const searchURL = '/search?search_terms=printing&geo_location_terms=New+York%2C+NY';
// const baseURL = 'https://www.google.com/search?q=cricket-news';
// const searchURL = '/search?q=cricket-news';
const baseURL = 'https://rallycoding.herokuapp.com/api/music_albums';

exports.blankFunction = function (req, res, next) {
  axios.get(baseURL).then((response) => {
    // console.log(response.data);
    res.json({ news: response.data });
  }).catch((err) => {
    console.log(err);
  });
}

exports.teamRankings = function (req, res, next) {
  // axios.get(baseURL).then((response) => {
    // console.log(response.data);
    data = [
      {
        imageUrl: 'https://seeklogo.com//images/P/pakistan-cricket-team-logo-7693343AA7-seeklogo.com.png',
        title: 'Pakistan',
        points: '264'
      },
      {
        imageUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/b/b0/CricketAustralia.png/revision/latest?cb=20160315134728',
        title: 'Austuralia',
        points: '234'
      },
      {
        imageUrl: 'https://www.orissapost.com/wp-content/uploads/2019/02/BCCI-logo.png',
        title: 'India',
        points: '220'
      },
      {
        imageUrl: 'https://www.pinclipart.com/picdir/big/87-878484_file-england-cricket-team-logo-svg-wikipedia-ant.png',
        title: 'England',
        points: '210'
      },
      {
        imageUrl: 'https://www.searchpng.com/wp-content/uploads/2019/03/New-Zealand-Cricket.png',
        title: 'New Zeland',
        points: '209'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/1200px-Southafrica_cricket_logo.svg.png',
        title: 'South Africa',
        points: '208'
      },
      {
        imageUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072015/sri_lanka_cricket_logo.png?itok=0Tf7aDKS',
        title: 'Sri Lanka',
        points: '200'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png',
        title: 'West Indies',
        points: '190'
      },
      {
        imageUrl: 'https://s.ndtvimg.com/images/entities/300/afghanistan-2156.png',
        title: 'Afghanistan',
        points: '187'
      },
    ]
    res.json({ teams: data });
  // }).catch((err) => {
  //   console.log(err);
  // });
}