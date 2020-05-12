 const hero = document.querySelector(".hero");
 const slider = document.querySelector(".slid");
 const headline = document.querySelector(".headline");
 
 const tl = new TimelineMax();

 tl.fromTo(hero, 1,  { height: "0%" }, { height: "80%" })
 .fromTo( hero, 1.2, { width: "100%" }, { width: "80%" })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%"});







var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}