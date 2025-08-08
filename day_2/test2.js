//representing date and times
const today = new Date();
const endYear = new Date(1995,11,31,23,59,999);//set day and month
endYear.setFullYear(today.getFullYear());
const msPerDay = 24 * 60 * 60 * 1000;// Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft)// returns days left in a year
