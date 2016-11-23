var images = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
var caption = ["Bus from Barranquilla to Santa Marta", "Taxi drive to the airport leaving Santa Marta", "Botanical Garden Bucaramanga, Colombia"];
var styles = ["width:480px;height:270px", "width:360px;height:640px", "width:360px;height:640px", "width:360px;height:640px;"]
var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
  imageNumber += x;
  if (imageNumber > imageLength) {
      imageNumber = 0;
  }
  if (imageNumber < 0) {
      imageNumber = imageLength;
  }
  document.getElementById("slideshow").src = images[imageNumber];
  document.getElementById("slideshow").innerHTML = caption[imageNumber];
  document.getElementById("slideshow").style = styles[imageNumber];

  return false;
}

function autoRun() {
    setInterval("changeImage(1)", 5000);
}
