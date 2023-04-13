window.onload = function() {
    newQuote();
};

let newQuote = () => {
    let quoteSize = QUOTESTASH.length;
    let arrQuote = Math.floor(Math.random() * quoteSize);
    let randomQuote = QUOTESTASH[arrQuote];

    let twQuote = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
    twQuote += "How%20wonderful%20it%20is%20that%20nobody%20need%20wait%20a%20single%20moment%20before%20starting%20to%20improve%20the%20world.%22%20"
    twQuote += "Anne%20Frank"

    document.getElementById("tweet-quote").href = twQuote;
    document.getElementById("text").innerText = randomQuote.quote;
    document.getElementById("author").innerText = randomQuote.author;
    document.getElementById("backgroud-pic").style.backgroundImage = randomQuote.backgroundimg;
}