exports.getLatestNews = (req, res, next) => {
  const data = [
    {
      title: "Taylor Swift",
      artist: "Taylor Swift",
      url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
      image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
      info: "Lorem ipsum dolor sit amet, ne per quas senserit disputationi. No sed fierent pericula. Ius quodsi liberavisse mediocritatem ex, ea stet docendi iracundia quo. Vel in aperiri abhorreant, no vix mucius docendi. Ei modus augue choro pro, habemus accumsan pertinacia eu quo, in possim iisque explicari sed."
    },
    {
      title: "Fearless",
      artist: "Taylor Swift",
      url: "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
      image: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
      thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
      info: "Lorem ipsum dolor sit amet, ne per quas senserit disputationi. No sed fierent pericula. Ius quodsi liberavisse mediocritatem ex, ea stet docendi iracundia quo. Vel in aperiri abhorreant, no vix mucius docendi. Ei modus augue choro pro, habemus accumsan pertinacia eu quo, in possim iisque explicari sed."
    },
    {
      title: "Speak Now",
      artist: "Taylor Swift",
      url: "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
      image: "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
      thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
      info: "Lorem ipsum dolor sit amet, ne per quas senserit disputationi. No sed fierent pericula. Ius quodsi liberavisse mediocritatem ex, ea stet docendi iracundia quo. Vel in aperiri abhorreant, no vix mucius docendi. Ei modus augue choro pro, habemus accumsan pertinacia eu quo, in possim iisque explicari sed."
    },
    {
      title: "Red",
      artist: "Taylor Swift",
      url: "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
      image: "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
      thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
      info: "Lorem ipsum dolor sit amet, ne per quas senserit disputationi. No sed fierent pericula. Ius quodsi liberavisse mediocritatem ex, ea stet docendi iracundia quo. Vel in aperiri abhorreant, no vix mucius docendi. Ei modus augue choro pro, habemus accumsan pertinacia eu quo, in possim iisque explicari sed."
    },
    {
      title: "1989",
      artist: "Taylor Swift",
      url: "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
      image: "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
      info: "Lorem ipsum dolor sit amet, ne per quas senserit disputationi. No sed fierent pericula. Ius quodsi liberavisse mediocritatem ex, ea stet docendi iracundia quo. Vel in aperiri abhorreant, no vix mucius docendi. Ei modus augue choro pro, habemus accumsan pertinacia eu quo, in possim iisque explicari sed."
    }
  ]
  res.json({news: data});
}