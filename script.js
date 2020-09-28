//Optional objectives
const hoteles = {
  Bali: {
    name: "Bali",
    location: "Benidorm",
    srcImg:
      "https://thumbnails.trvl-media.com/C6QE0P7ppoDquSwneAZDphQn7Qs=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/2000000/1240000/1234500/1234444/0d40bb16_z.jpg",
  },
  Presidente: {
    name: "Presidente",
    location: "Benidorm",
    srcImg: "https://cf.bstatic.com/images/hotel/max1024x768/156/156096939.jpg",
  },
  Marina: {
    name: "Marina",
    location: "Benidorm",
    srcImg:
      "https://www.marinahotelbenidorm.com/wp-content/blogs.dir/1403/files/content-pics/01.jpg",
  },
};

const review = {
  score: {
    1: "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    2: "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    3: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
    4: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
    5: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
  },
  isAnonymous: undefined,
};

const reviewedHotel = prompt(
  "Indique el hotel sobre el que quiere hacer la reseña de entre las siguientes opciones: " +
    Object.keys(hoteles)
);
const stars = prompt("Puntuación: " + Object.keys(review.score) + " estrellas");

/*if Object.keys() cannot be used:
const reviewedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña de entre las siguientes opciones: Bali, Presidente o Marina");
const stars = prompt("Puntuación: 1,2, 3, 4 ó 5 estrellas");
*/

review.isAnonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("hotel-name").innerHTML =
  "Hotel " + hoteles[reviewedHotel].name;
document.getElementById("hotel-location").innerHTML =
  "Ubicado en " + hoteles[reviewedHotel].location;
document.getElementById("hotel-image").src = hoteles[reviewedHotel].srcImg;

document.getElementById("stars").innerHTML = review.score[stars];
document.getElementById("anonymous").checked = review.isAnonymous;

/*
//Basic objectives
const hotel = {
    name: "Bali",
    location: "Benidorm",
    srcImg: "https://thumbnails.trvl-media.com/C6QE0P7ppoDquSwneAZDphQn7Qs=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/2000000/1240000/1234500/1234444/0d40bb16_z.jpg",
};


const review = {
  score:"",
  isAnonymous: undefined,
};


review.score = prompt("Puntuación: del 1 al 5");
review.isAnonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel.location;
document.getElementById("hotel-image").src = hotel.srcImg;

document.getElementById("stars").innerHTML = review.score + " estrellas";
document.getElementById("anonymous").checked = review.isAnonymous;

*/
