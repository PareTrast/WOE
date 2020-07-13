//Array for list of quotes.
var encourage = [
  "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!-Dita Von Teese",
  "Do not let what you cannot do interfere with what you can do- John Wooden",
  "Start by doing what's necessary; then do what is possible; and suddenly you are doing the impossible.- St. Francis of Assisi",
  "The greatest discovery of my generation is that a human being can change his life by changing his attitude of mind.- William James",
  "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.- Thomas Edison",
  "Forget past mistakes.  Forget Failures.  Forget about everything except what you're going to do now and do it.- WIlliam Durant",
   "There are two ways to live your life.  One is as though nothing is a miracle.  The other is as though everything is a miracle.- Albert Einstein",
   "Accept challenges, so that you may feel the exhilaration of victory.- George S. Patton",
   "Character cannot be developed in ease and quiet.  Only through experience of trial and suffering can the sould be strengthened, ambition inspired, and success achieved.- Helen Keller",
   "I walk slowly, but I never walk backward.- Abraham Lincoln",
   "The darkest hour has only sixty minutes.- Morris Mandel",
   "If you're going through Hell, keep going.- Winston Churchill",
   "Although the world is full of suffering, it is also full of the overcoming of it.- Helen Keller",
   "Our greatest glory is not in never falling, but in rising every time we fall.- Confucius",
   "A gem cannot be polished without friction, nor a man perfected without trials.- Chinese proverb",
   "Fall seven times, stand up eight.- Japanese proverb",
   "God does not guve us overcoming life--He gives us life as we overcome.- Oswald Chambers",
   "Victory is always possible for the person who refuses to stop fighting.- Napoleon Hill",
   "I was only 9 years old.  At that time you don't realize that you can work super hard and give everything you have and lose.  It was the best message for me.- Beyonce Knowles-Carter",
   "Remember, no one can make you feel inferior without your consent.- Elanor Roosevelt",
   "Self-esteem is a powerful force within each of us...Self-esteem is the experience that we are appropriate to life and to the requirements of life.- Nathaniel Branden",
   'In the middle of every difficulty lies opportunity. - Albert Einstein',
   'A word of encouragement during a failure is worth more than an hour of praise after success. - Unknown',
   'The best revenge is massive success. - Frank Sinatra',
   'Press on – nothing can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Perseverance and determination alone are omnipotent. - Calvin Coolidge',
   'This too shall pass. - Persian Sufi Poets',
   'Happiness is a direction, not a place. - Sydney J. Harris',
   'Folks are usually about as happy as they make their minds up to be. - Abraham Lincoln',
   'Be happy with what you have. Be excited about what you want. - Alain De Botton',
   'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
   'If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes. - Andrew Carnegie',
   'Happiness depends upon ourselves. - Aristotle',
   'Happy girls are the prettiest. - Audrey Hepburn',
   'Learn to value yourself, which means: fight for your happiness. - Ayn Rand',
   'Family, friends, a good laugh and beautiful weather are the best cures. - Bar Rafaeli',
   'All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love. - Baruch Spinoza',
   'Happiness consists more in conveniences of pleasure that occur everyday than in great pieces of good fortune that happen but seldom. - Benjamin Franklin',
   'The secret to happiness is freedom, the secret of freedom is courage. - Carrie Jones',
   'It is not how much we have, but how much we enjoy, that makes happiness. - Charles Spurgeon',
   'The only way to find true happiness is to risk being completely cut open. - Chuck Palahniuk',
   'Be happy.  It\'s one way of being wise. - Colette',
   'Happiness is not something ready made.  It comes from your own actions. - Dalai Lama',
   
];


//using .length will allow me to add more quotes later.

/*var randomQuote = Math.floor(Math.random()*(encourage.length))*/

function Quote(){
var randomQuote = Math.floor(Math.random()*(encourage.length));

document.getElementById('encouragement').innerHTML = encourage[randomQuote];
}

/*$('button').mouseover(function(){
  $('button').css('background-color', 'blue')
});*/

/*console.log(randomQuote);
$('button').click(function(){
    alert(randomQuote);
    if(alert('Get More Encouraging Words!')){} //used this instead of automatic refresh to restart function
    else window.location.reload();
});*/


/*var sad = document.getElementById(sad)
var randomQuoteSad =
encourageS[Math.floor(Math.random()*(encourageS.length))]*/
