
let h = 0;
let n = 0;
let m = 0;
let time = document.createElement('time')
time.className = "timer"
time.innerHTML = "<h5>" + 0 + ":" + 00 + "</h5>"

strt.onsubmit = function (e) {
  e.preventDefault();
}
hr.onsubmit = function (e) {
  e.preventDefault();
}
min.onsubmit = function (e) {
  e.preventDefault();
}
strt.onclick = function timer () {
  document.body.append(time)
  m = 00
  h = 0
  function count() {
    m++;
    document.body.prepend(time);
    if (m < 60) {
      m = m
    } else {
      h++
      m = 0
    }
    
    if (m < 10) {
      time.innerHTML = "<br>" + "<h2>"+ h + ':' + n  + m + "<h2>"
      document.body.append(time)
    } else {
      time.innerHTML = "<br>" + "<h2>"+ h + ':'  + m + "<h2>"
      document.body.append(time)
    }
    if (h == hr.value && m == min.value) {
      alert("Times Up...Take a Break! And come back when you're ready to start again!")
      window.location.reload();
    }        
    
  }
  
  setInterval(() => count(), 60000);
}
