// alert("I am connected!");

var x = 0;

document.querySelector(".fas").addEventListener('click',function(){
// a  // alert("i was clicked!");
  x++;
  document.querySelector(".like").textContent=x;
  document.querySelector(".fas").classList.toggle('activeLike');
});
