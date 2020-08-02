var quotes = [`"The greatest glory in living lies not in never falling, but in rising every time we fall."<br />  - Nelson Mandela`,
 `"The way to get started is to quit talking and begin doing." <br /> - Walt Disney`,
 `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." <br /> -James Cameron`,
 `"Spread love everywhere you go. Let no one ever come to you without leaving happier." <br /> - Mother Teresa`,
  `"Life is never fair, and perhaps it is a good thing for most of us that it is not." <br /> -Oscar Wilde`,
  `"You only live once, but if you do it right, once is enough." <br /> - Mae West`,
   `"Success is not final; failure is not fatal: It is the courage to continue that counts." <br /> -Winston S. Churchill`,
  `"If you really look closely, most overnight successes took a long time." <br /> - Steve Jobs`,
  `"I find that the harder I work, the more luck I seem to have." <br /> - Thomas Jefferson`,
  `"The way to get started is to quit talking and begin doing." <br /> - Walt Disney `,
  `"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."<br /> - Barack Obama `];

  function newQuote()
  {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
}