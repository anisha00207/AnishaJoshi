
var navbar = document.getElementById("navbar")
var sidemenu=document.getElementById("sidemenu")
var blur=document.getElementById("navbar")

window.onscroll=function(){
    if(window.pageYOffset>=sidemenu.offsetTop){
        navbar.classList.add("sticky");
        navbar.classList.add("blur");
    }
    else{
        navbar.classList.remove("sticky");
        navbar.classList.remove("blur")
    }
}

// window.ityped.init(document.querySelector('.ityped'), {
//     strings: ['Web Developer!', 'Android Developer', 'Graphic Designer', 'Web/App Designer '],
//     loop: true
// })
// window.ityped.init(document.querySelector('.ityped2'), {
//     strings: ['Hello!', 'नमस्ते', 
//     // 'こんにちは'
//     , 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ '],
//     loop: true
// })

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        // tablinks.classList.remove("active-link");            
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemeu=document.getElementById("sidemenu");

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
sidemeu.style.width = "600px";
}

function closemenu() {
sidemeu.style.width = "0px";
}


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



