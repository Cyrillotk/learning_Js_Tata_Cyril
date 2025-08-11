//representing date and times
const today = new Date();
const endYear = new Date(1995,11,31,23,59,999);//set day and month
endYear.setFullYear(today.getFullYear());
const msPerDay = 24 * 60 * 60 * 1000;// Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft)// returns days left in a year
//times
function JSClock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = String(hour % 12);
    if (temp === "0") {
      temp = "12";
    }
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? " P.M." : " A.M.";
    return temp;
  }