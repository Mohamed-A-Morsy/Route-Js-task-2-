
var arrOfQuotes = [
    {
        "aouther": "Albert Einstein",
        "qoute": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
        "aouther": "Dr. Seuss",
        "qoute": "So many books, so little time.",


    },
    {
        "aouther": "Frank Zappa",
        "qoute": "A room without books is like a body without a soul.",

    },
    {
        "aouther": "Marcus Tullius Cicero",

        "qoute": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",


    },
    {
        "aouther": "Bernard M. Baruch",

        "qoute": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening And live like it's heaven on earth",


    },
    {
        "aouther": "William W. Purkey",
        "qoute": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
        "aouther": "Mae West",
        "qoute": "You only live once, but if you do it right, once is enough.",
    }];
function getQoute() {
    var random =Math.floor(Math.random()*arrOfQuotes.length +1);

    document.getElementById("qoute").innerHTML = arrOfQuotes [random].qoute;
    document.getElementById("aouther").innerHTML = arrOfQuotes [random].aouther;
    
}

