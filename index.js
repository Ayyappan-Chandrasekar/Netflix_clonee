//add movie container

let popupove = document.querySelector(".popup-over")
let movie_cont = document.querySelector(".movie_container")
let popup_btnn = document.getElementById("popup-btn")

function popupover(){
    var popupove = document.querySelector(".popup-over")
    var movie_cont = document.querySelector(".movie_container")
    popupove.style.display="block"
    movie_cont.style.display="block"
}

// popup_btnn.addEventListener("click",function(){
//     popupove.style.display="block"
// })

//close btn container

// var close_btn = document.querySelector(".close-btn")

function close_btn(event){
    var popupove = document.querySelector(".popup-over")
    var movie_cont = document.querySelector(".movie_container")
    var close__btn = document.querySelector(".close-btn")
    event.preventDefault()
    popupove.style.display="none"
    movie_cont.style.display="none"  
}

// close__btn.addEventListener("click",function(event){
//     event.preventDefault()
//     popupove.style.display="none"
//     movie_cont.style.display="none"  
// })

// Add container,add_btn,card-title,card-text

function add_movie(event) {
    event.preventDefault();

    var popupove = document.querySelector(".popup-over");
    var movie_cont = document.querySelector(".movie_container");
    var container = document.querySelector(".card-group");
    var movie_title = document.getElementById("movie_title").value;
    var movie_scrip = document.getElementById("movie_scrip").value;
    var posterInput = document.getElementById("poster");
    var posterr = posterInput.files[0];

    if (posterr) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var div = document.createElement("div");
            div.setAttribute("class", "cardd");
            div.innerHTML = `
                <img src="${e.target.result}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5>${movie_title}</h5>
                    <p>${movie_scrip}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>`;
            container.append(div);

            // Hide the form if popup and movie container exist
            if (popupove) popupove.style.display = "none";
            if (movie_cont) movie_cont.style.display = "none";

            // Clear the form inputs
            document.getElementById("poster").value = "";
            document.getElementById("movie-title").value = "";
            document.getElementById("movie-scrip").value = "";
        };
        reader.readAsDataURL(posterr);
    } else {
        alert("Please select an image file.");
    }
}

// script.js

const container = document.querySelector('.card-group');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // The * 2 can be adjusted to increase/decrease scroll speed
  container.scrollLeft = scrollLeft - walk;
});

// Optional: Add touch support for mobile devices
container.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
  isDown = false;
});

container.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // The * 2 can be adjusted to increase/decrease scroll speed
  container.scrollLeft = scrollLeft - walk;
});


// API
