function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + interval>2?" years":" year";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + (interval>2?" months": " month");
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + (interval>2?" days":" day");
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + (interval>2?" hours":" hour");
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + (interval>2?" minutes":" minute");
    }
    return Math.floor(seconds) + (interval<2?" second":" seconds");
}
var aDay = 24 * 60 * 60 * 1000;
console.log(timeSince(new Date(Date.now() - aDay)));
console.log(timeSince(new Date(Date.now() - aDay * 2)));

export default timeSince ;