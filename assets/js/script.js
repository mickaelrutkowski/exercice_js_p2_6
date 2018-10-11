// function image () {
// document.getElementById('image1').src = "assets/image/image1_2.jpg";
// document.getElementById('image2').src = "assets/image/image2_2.jpg";
// document.getElementById('image3').src = "assets/image/image3_2.jpg";
// document.getElementById('image4').src = "assets/image/image4_2.jpg";
// document.getElementById('image5').src = "assets/image/image5_2.jpg";
// }
// function imageretour () {
// document.getElementById('image1').src = "assets/image/image1.jpg";
// document.getElementById('image2').src = "assets/image/image2.jpg";
// document.getElementById('image3').src = "assets/image/image3.jpg";
// document.getElementById('image4').src = "assets/image/image4.jpg";
// document.getElementById('image5').src = "assets/image/image5.jpg";
// }
//donner une action a une image
//imagae1_2 photo suivante


//version this
function test(image){
  image.src = 'assets/image/' + image.id + '_2.jpg';
}

function imageretour(image){
  image.src = 'assets/image/' + image.id + '.jpg';
}
