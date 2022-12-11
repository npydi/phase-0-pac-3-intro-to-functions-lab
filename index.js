function shout(string) {
    // todo
    return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(str) {
    return str.toLowerCase();
}
console.log(whisper("HeLLO"));

function logShout(string) {
    console.log(string.toUpperCase());  
}
console.log(logShout("hello"));

function logWhisper(string) {
    console.log(string.toLowerCase());
}
console.log(logWhisper("HeLLo"));


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}
console.log(sayHiToHeadphonedRoommate("HELLO"));
