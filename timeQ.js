var morningQuotes = [
	'Some people dream of success, while other people get up every morning and make it happen.',
	'No matter how bad things are, you can at least be happy that you woke up this morning.',
	'What is love? It is the morning and the evening star.',
	'It is a matter of shame that in the morning the birds should be awake earlier than you',
	'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it\'s not.',
	'A muscle is like a car. If you want it to run well early in the morning, you have to warm it up.',
	'You will never have this day again so make it count!'

];
var afternoonQuotes = [
	'Always bear in mind that your own resolution to succeed is more important than any one thing.',
	'A positive attitude may not solve all your problems, but it annoys enough people to make it worth.',
	'Never complain, never explain. Resist the temptation to defend yourself or make excuses.',
	'One small positive thought in the morning can change the entire outcome of your day!',
	'Today, wherever you go, carry the intention of peace, love, and harmony in your heart',
	'Your smile will give you a positive countenance that will make people feel comfortable around you',
	'We don’t have to agree on anything to be kind to one another.'
];
var eveningQuotes = [
	'Turn your face to the sun and the shadow falls behind you',
	'Opportunities are everywhere. It’s up to me to find (or create) them and make things happen.',
	'A great attitude becomes a great day which becomes a great year.',
	'Don’t quit. When things go wrong, as they sometimes will.',
	'Instead of thinking about what you’re missing, try thinking about what you have…',
	'Self-care is so important. When you take the time to replenish your spirit, it allows you to serve…',
	'It is better to live one day as a lion, than a thousand days as a lamb.'
];
var nightQuotes = [
	'Night is designed to end the worries and fears of the day.',
	'If you want to achieve greatness stop asking for permission',
	'There are only two ways to live your life. One is as though nothing is a miracle.',
	'I haven’t failed. I’ve just found 10,000 ways that won’t work.',
	'Positive thinking will let you do everything better than negative thinking will.',
	'Obstacles are things a person sees when he takes his eyes off his goal.',
	'Fill your children with good thoughts before they go to bed.'
];



var morningP = [ 
	'../img/m1.jpg',
	'../img/m2.jpg',
	'../img/m3.jpg',
	'../img/m4.jpg',
	'../img/m5.jpg',
	'../img/m6.jpg',
	'../img/m7.jpg'
];

var afterP = [
	'../img/a1.jpg',
	'../img/a2.jpg',
	'../img/a3.jpg',
	'../img/a4.jpg',
	'../img/a5.jpg',
	'../img/a6.jpg',
	'../img/a7.jpg'
];

var eveningP = [
	'../img/e1.jpg',
	'../img/e2.jpg',
	'../img/e3.jpg',
	'../img/e4.jpg',
	'../img/e5.jpg',
	'../img/e6.jpg',
	'../img/e7.jpg'
];

var nightP = [
	'../img/n1.jpg',
	'../img/n2.jpg',
	'../img/n3.jpg',
	'../img/n4.jpg',
	'../img/n5.jpg',
	'../img/n6.jpg',
	'../img/n7.jpg'
];
// это показывает время
var setTime = setInterval(myTime, 0);
function myTime() {
	var time = new Date();
	document.querySelector('#time').innerHTML = time.toLocaleTimeString();
	}

// это типа должны менятсья морнинг цытаты через 2 сек.
var rand = Math.floor(Math.random() * morningQuotes.length);
function change() {
	document.getElementById('quote').textContent = rand;
}
setInterval('change', 2000);

// вот второй варик, но тоже почему то не сработало
// вот тут я накосячила. значит пыталась с random math что-то сделать, но 
// не получилось. 
var time = new Date();
var j = date.getHours(); // я так сделала, потому что картинки должны меняться согласно почасовому 
						// изменению времени

for(i = 0; i < morningP.length; i++) {    // тут я интревал указала 2 сек, чтобы просто убедится что оно будет работать. но увы (
	var ch = setInterval('change', 2000);
	function change() {
		document.body.style.backgroundImage = morningP[i];
	}
	
if ( j >= 6 && j < 12) {
	document.body.style.backgroundImage = morningP[i];
}
}

// это я пыталась сделать так, чтобы quotes менялись каждые 2 сек.
for (i = 0; i < morningQuotes.length; i++) {
	var qCH = setInterval('changQ', 2000);
	function changQ () {
		document.getElementById('quote').textContent = morningQuotes[i];
	}
}
