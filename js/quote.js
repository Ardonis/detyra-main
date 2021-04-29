var quotes =[
    "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking."
]
    
    function newQuote(){
        var randomNumber=Math.floor(Math.random()*(quotes.length));
        document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    }