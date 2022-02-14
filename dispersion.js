console.log("dispersion javascript connected");
let photoContainer = document.querySelector(".photoContainer")


for(let i = 0; i<100; i++){
    let ele = document.createElement("div");
    ele.classList.add("block");
    photoContainer.appendChild(ele);
}




let block = document.querySelectorAll(".block")
let animation = anime.timeline({
    targets: block,
    easing: "easeInOutExpo",
    loop: true,
    delay: anime.stagger(20, {start:0}),
})

animation
.add({
    delay: 4000,
    scale: 0,
    translateX: function(){return anime.random(-360,2100);},
    translateY: function(){return anime.random(-360,2100);},
    rotate: function(){return anime.random(360,-360);},

    duration : function(){return anime.random(500,3000);}
})
.add({
    scale: 1,
    translateX:0,
    translateY: 0,
    rotate: 0,

    duration : function(){return anime.random(2000,3000);}
})