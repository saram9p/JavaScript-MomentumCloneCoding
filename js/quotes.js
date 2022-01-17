const quotes = [
    {
        quote: "There are always survivors at a massacre. Among the victors, if nowhere else.",
        author: "Lois McMaster Bujold",
    },
    {
        quote: "It is easier to forgive an enemy than to forgive a friend.",
        author: "William Blake",
    },
    {
        quote: "Love is not blind - it sees more, not less. But because it sees more, it is willing to see less.",
        author: "Rabbi Julius Gordon",
    },
    {
        quote: "Children begin by loving their parents; as they grow older they judge them; sometimes they forgive them.",
        author: "Oscar Wilde",
    },
    {
        quote: "I don't want to live in a world where I have to eat sugar-free sugar cookies.",
        author: "Takayuki Ikkaku",
    },
    {
        quote: "Character - the willingness to accept responsibility for one's own life - is the source from which self respect springs.",
        author: "Joan Didion",
    },
    {
        quote: "The glory of great men should always be measured by the means they have used to acquire it.",
        author: "Francois de La Rochefoucauld",
    },
    {
        quote: "Fathers send their sons to college either because they went to college or because they didn't.",
        author: "L. L. Henderson",
    },
    {
       quote: "The great tragedy of Science - the slaying of a beautiful hypothesis by an ugly fact.",
       author: "Thomas H. Huxley",
    },
    {
        quote: "Management is nothing more than motivating other people.",
       author: "Lee Iacocca",
    }
];

const quote = document.querySelector("#quote span:first-child"); // id가 quote 인 element의 첫번째 span을 가져온다.
const author = document.querySelector("#quote span:last-child"); // id가 quote 인 element의 마지막 span을 가져온다.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 랜덤한 명언 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;