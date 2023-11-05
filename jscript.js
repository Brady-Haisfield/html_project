function zionFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg-zion");
    // Get the image text
    var imgText = document.getElementById("imgtext-zion");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }


  function junfrauFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg-jun");
    // Get the image text
    var imgText = document.getElementById("imgtext-jun");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }


  function romeFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg-rome");
    // Get the image text
    var imgText = document.getElementById("imgtext-rome");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  // function ysFunction(imgs) {
  //   // Get the expanded image
  //   var expandImg = document.getElementById("expandedImg-ys");
  //   // Get the image text
  //   var imgText = document.getElementById("imgtext-ys");
  //   // Use the same src in the expanded image as the image being clicked on from the grid
  //   expandImg.src = imgs.src;
  //   // Use the value of the alt attribute of the clickable image as text inside the expanded image
  //   imgText.innerHTML = imgs.alt;
  //   // Show the container element (hidden with CSS)
  //   expandImg.parentElement.style.display = "block";
  // }


  function ysFunction(media) {
    // Get the expanded image and video elements
    var expandImg = document.getElementById("expandedImg-ys");
    var expandVideo = document.getElementById("expandedVideo-ys");
    // Get the image text
    var imgText = document.getElementById("imgtext-ys");

    // Check if the clicked element is an image or a video
    if (media.tagName === 'IMG') {
        // Image logic
        expandImg.style.display = "block";
        expandVideo.style.display = "none";
        expandImg.src = media.src;
        imgText.innerHTML = media.alt;
    } else if (media.tagName === 'VIDEO') {
        // Video logic
        expandImg.style.display = "none";
        expandVideo.style.display = "block";
        expandVideo.src = media.children[0].src; // assuming <source> is a direct child
        imgText.innerHTML = media.children[0].getAttribute('alt'); // assuming alt attribute is set on the source tag
        expandVideo.load(); // to load the new video source
        expandVideo.play(); // play video
    }
    // Show the container element (hidden with CSS)
    imgText.parentElement.style.display = "block";
}
        // You can also set the video's source to an expanded video element similar to the image if needed
        // For simplicity, here we just control play/pause



































// function myFunction(media) {
//     var expandImg = document.getElementById("expandedImg");
//     var expandVideo = document.getElementById("expandedVideo"); // Assume you have this element for videos
//     var imgText = document.getElementById("imgtext");
  
//     // Check if the clicked element is an image or a video
//     if (media.tagName === 'IMG') {
//       // Use the same src in the expanded image as the image being clicked on from the grid
//       expandImg.src = media.src;
//       // Use the alt attribute of the clickable image as text inside the expanded image
//       imgText.innerHTML = media.alt;
//       // Show the expanded image
//       expandImg.style.display = "block";
//       // Hide the video if it was previously displayed
//       if (expandVideo) {
//         expandVideo.style.display = "none";
//       }
//     } else if (media.tagName === 'VIDEO') {
//       // Use the same src in the expanded video as the video being clicked on from the grid
//       expandVideo.src = media.children[0].src; // Assuming the video has source element as the first child
//       // Use the alt attribute of the clickable video as text inside the expanded video
//       imgText.innerHTML = media.getAttribute("alt");
//       // Show the expanded video
//       expandVideo.style.display = "block";
//       // Hide the image if it was previously displayed
//       expandImg.style.display = "none";
//     }
  
//     // Show the container element (hidden with CSS)
//     var container = expandImg.parentElement;
//     container.style.display = "block";
//   }