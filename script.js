const hoteles = {
  "Bali": {
    name: "Bali",
    location: "Benidorm",
    srcImg: "https://thumbnails.trvl-media.com/C6QE0P7ppoDquSwneAZDphQn7Qs=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/2000000/1240000/1234500/1234444/0d40bb16_z.jpg",
  },
  "Presidente": {
    name: "Presidente",
    location: "Benidorm",
    srcImg: "https://cf.bstatic.com/images/hotel/max1024x768/156/156096939.jpg",
  },
  "Marina": {
    name: "Marina",
    location: "Benidorm",
    srcImg: "https://www.marinahotelbenidorm.com/wp-content/blogs.dir/1403/files/content-pics/01.jpg",
  },
};


const review = {
  score: {
      1 : "&#9733 &#9734 &#9734 &#9734 &#9734",
      2 : "&#9733 &#9733 &#9734 &#9734 &#9734",
      3 : "&#9733 &#9733 &#9733 &#9734 &#9734",
      4 : "&#9733 &#9733 &#9733 &#9733 &#9734",
      5 : "&#9733 &#9733 &#9733 &#9733 &#9733",
  },
  isAnonymous: undefined,
};


const reviewedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: " + Object.keys(hoteles));

const stars = prompt("Puntuación: " + Object.keys(review.score) + " estrellas");
review.isAnonymous = window.confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[reviewedHotel].name;
document.getElementById("hotel-location").innerHTML = hoteles[reviewedHotel].location;
document.getElementById("hotel-image").src = hoteles[reviewedHotel].srcImg;

document.getElementById("stars").innerHTML = review.score[stars];
document.getElementById("anonymous").checked = review.isAnonymous;

console.log(review.isAnonymous);
