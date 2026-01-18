// Booking form alert
function bookNow(){
    alert("Thank you! Your appointment has been received. We will contact you shortly.");
}
const bgImages = ["bg1.jpg","bg2.jpg","bg3.jpg"];
let current = 0;

function changeBackground() {
    const bg = document.querySelector('.background-container');
    bg.style.backgroundImage = `url(${bgImages[current]})`;
    current = (current + 1) % bgImages.length;
}

// Initialize and rotate every 5 seconds
changeBackground();
setInterval(changeBackground, 5000);

