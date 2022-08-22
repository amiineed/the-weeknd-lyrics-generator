let btn = document.getElementById("btn");
let output = document.getElementById("output")
let quote = ["Say you’re mine, I’m yours for the night  -Party Monster-",
"I just want to see you shine ’cause I know you are a stargirl   -Stargirl-",
"If I could, I’d trade it all   -Ordinary Life-",

"I swear I’ll love you just like the past -Nothing Without You-",
 "Baby if you let me I won’t hesitate -All I Know-",

 "We don’t have to rush when you’re alone with me -I Feel It Coming-",
 "I feel the darkness when away from you  -Nothing Without You-",

 "Just know that I would die for you  -Die for you-",
"I'm just tryna get you out the friend zone   -The Hills-",

 "Nobody got me feeling this way  -Acquainted-",
 "I can't feel my face when I'm with you  -Can't Feel My Face-",

"You're always worth it -Earned It-",
"You're my favorite kind of night -Earned It-",

 "I'm on cloud nine -Life of the Party-",
 "Girl, I'm rewarded with you -Heaven Or Las Vegas-",
"Side bitch out of your league too  -Starboy-",

"You tryna leave him, you said I’m the reason -Party Monster-",

 "So obsessed with the camera lights  -False Alarm-",
 "You love her, but you’ll never be -False Alarm-",


  "I’m like goddamn, I am not a Teen Choice -Reminder-",
 "If it ain’t XO, then it gotta go  -Reminder-",


  "That’s why she ain’t approachable  -Six Feet Under-",
 "She rather die in the club  -Six Feet Under-",

"I said, 'It’s too late for me  -Too late-",
 "In this room, we are nothing but strangers in a bed  -Love to Lay-",

"And everybody around you is so basic  -Tell Your Friends-",
 "Main bitch out of your league too  -Starboy-",
 "Keep on tryna hide it but your friends know  -The hills-",

"I’m good, I’m good, I’m great  -Party monster-",

"I’m in the blue Mulsanne bumping New Edition  -Starboy -",
"I just won a new award for a kids show  -Starboy-",
 
 "I just seem to get the ones that always want to stay  -Rockin’-",


 
"This year I'm all focused on the vision  -Tell Your Friends-",
"I'm just tryna live life through a new lens  -Tell Your Friends-",
 

 "They gon' remember my legacy  -All I Know-",
"Stuntin' with the ceilings off  -All That Money-",

"Bump and grind  -Party Monster-",
"Know it’s been a while, now I’m mixing up the drank  -Party Monster-",

"You wanna be high for this  -High for This-",
 "I don't drink my liquor with a chasin'  -Tell Your Friends-",

"Baby girl just wanna smoke a pound  -Tell Your Friends-",
 "Now we get faded when we want, girl, we got choices  -Tell Your Friends",

 "Start to feeling like it's decaf  -The Hills-",
 "Drunk too much, you know what I'm like  -Party Monster-",

 "I switch up my cup, I kill any pain  -Starboy-",
 "This liquor got me crazy  -Rockin’-",  


 "And I’ma keep on smoking till I can’t hit another note  -Rolling Stone-",

 "Heaven knows that I've been told, paid for the life that I chose  -Ordinary life-",
 "Ballin’ ain’t an issue for me  -Kiss Land-",
 
 "“All I wanna do is make that money”  -Reminder-",
"I’ll make a hundred stacks right back next week  -Kiss Land-",
 
"You talking money  -Starboy-",
 "Pockets overweight, gettin' hefty  -Starboy-",
 
"When the cash overflow, let the cash overflow  -All I Know-",
"I feel useless when I'm never making money  -Sidewalks Lyrics-",
 "When it comes to money she play no games  -Six Feet Under-",
 "Cause with this money comes problems  -Coming Down-",
 "Make that money rain  -The Morning-",
 "Cuz this house is not a home, without my baby  -After Hours-",
 "All the misery was necessary when we're deep in love.  -Can't Feel My Face-",
 "You've been scared of love and what it did to you.  -I Feel It Coming-",
 "You make it look like it's magic, 'cause I see nobody, nobody but you.  -Earned It-",
 "I said I didn't feel nothing, baby, but I lied.  -Call Out My Name-",
 "Guess I was just another pit stop 'til you made up your mind. You just wasted my time  -Call Out My Name-",
 " I almost cut a piece of myself for your life.  -Call Out My Name-",
 "So tell me you love me, only for tonight. Only for one night, even though you don't love me.  -Wicked Games-",
 "The distance and the time between us, It'll never change my mind, 'cause baby I would die for you  -Die for You-",
 "And I know she'll be the death of me, at least we'll both be numb  -Can't Feel My Face-", 
 "And she'll always get the best of me, the worst is yet to come  -Can't Feel My Face-",
 "I feel there's someone else, worth your time, from the start. -Love to Lay-",
 "I realized, I belong to you. I feel the darkness, when I'm away from you  -Nothing Without You-",
 "I just can't say I don't love you cause I love you  -Die for you-",
 "I try to find reason to pull us apart, it ain't workin' 'cause you're perfect and I can't walk away  -Die for You-",
 "I dont wanna hurt you, but you live for the pain  -Shameless-",
 "Ill always be there for you -Shameless"






];
btn.addEventListener("click", function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})