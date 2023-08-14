let loading = document.querySelector('.loading');
const tl = new TimelineMax();
let x = 0;
tl.fromTo(loading, 4, {width: "0%"}, {width: "100%"});
setInterval(Next, 1000);
function Next() {
  x++;
  if(x == 4)
  {
    window.location = "login.html"
  }
}