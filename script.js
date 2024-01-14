let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displaytime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let HR = 30*hh + mm/2;
    let MR = 6*mm;
    let SR = 6*ss;

    hr.style.transform = `rotate(${HR}deg)`;
    min.style.transform = `rotate(${MR}deg)`;
    sec.style.transform = `rotate(${SR}deg)`;

    
}

setInterval(displaytime,1000);
