console.log("Hello World!");

// calculate time difference from current timestamp (to calculate age of project)
function calculateTimeDifference(inputDate) {
    var currentTs = Date.now();
    var previousTs = new Date(inputDate).getTime();
    return currentTs - previousTs;
}

console.log(calculateTimeDifference("09-15-2017"));
