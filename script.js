const quoteStash = [
    {
        quote: "People who fit, do not seek.",
        author: "-"
    },
    {
        quote: "The right man in the wrong place can make all the difference in the world.",
        author: "-Half-Life 2"
    },
    {
        quote: "The world fears the inevitable plummet into the abyss. Watch for that moment and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly.",
        author: "-Dragon Age: Origins"
    },
    {
        quote: "Nothing is true, everything is permitted.",
        author: "-Assassin's Creed"
    },
    {
        quote: "War is where the young and stupid are tricked by the old and bitter into killing each other.",
        author: "-Grand Theft Auto IV"
    },
    {
        quote: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
        author: "-God of War 3"
    },
    {
        quote: "A man chooses; a slave obeys.",
        author: "-Bioshock"
    },
    {
        quote: "What is a drop of rain, compared to the storm? What is a thought, compared to the mind?",
        author: "-System Shock 2"
    },
    {
        quote: "No matter how dark the night, the morning always comes.",
        author: "-Final Fantasy X"
    },
    {
        quote: "What is bravery, without a dash of recklessness?",
        author: "-Dark Souls"
    },
    {
        quote: "A hero need not speak. When he is gone, the world will speak for him",
        author: "-Halo"
    },
    {
        quote: "What is better - to be born good, or to overcome your evil nature through great effort?",
        author: "-The Elder Scrolls V: Skyrim"
    },
    {
        quote: "There are two ways of arguing with a woman, and neither one works.",
        author: "Red Dead Redemption"
    }
]
window.onload = function() {
    newQuote();
};

let newQuote = () => {
    let arrQuote = Math.floor(Math.random() * quoteStash.length);
    document.getElementById("text").innerText = quoteStash[arrQuote].quote;
    document.getElementById("author").innerText = quoteStash[arrQuote].author;
    console.log("newquote");
}