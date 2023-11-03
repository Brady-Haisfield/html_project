function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

































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