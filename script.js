//your JS code here. If required.
setInterval(() => {
    let now = new Date();
    let date = (now.getMonth()+1).toString().padStart(2, '0') + '/' + now.getDate().toString().padStart(2, '0') + '/' + now.getFullYear();
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let time = hours.toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0') + ' ' + ampm;
    let dateTime = date + ', ' + time;
    document.getElementById("timer").innerHTML = dateTime;
}, 1000);