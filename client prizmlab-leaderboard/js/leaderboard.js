var instancesRef = new Firebase("https://testingtbdatabase.firebaseio.com/instances1");
var redRef = new Firebase("https://testingtbdatabase.firebaseio.com/instances1/red");
var charRef = new Firebase("https://testingtbdatabase.firebaseio.com/instances1/red/pokemons")


// match_date //
instancesRef.on('value', function(snapshot){
	var matchDate = snapshot.val();
	$(".game-end-time").append(matchDate.match_date);

});

// Winner! //
redRef.on('value', function(snapshot){
	var winner = snapshot.key();
	var winnerCased = winner.toUpperCase(0);
	$(".game-team-winner").append(winnerCased);
});


// Game Duration //
instancesRef.once('value', function(snapshot){
	var duration = snapshot.val();
	$(".game-duration").append(duration.match_duration);
});


// charRef.once('value', function(snapshot){
// 	snapshot.forEach(function(childSnapshot){
// 		var key = childSnapshot.key();
// 		var childData = childSnapshot.key();
// 		for(key in childData){
// 			if(key === name){
// 				$(".displayed-content-creature-name").append(childData);		
// 			} else {
// 				console.log('Not working');
// 			};
// 		};
// 	});
// });

// charRef.once('value', function(snapshot){
// 	var key = snapshot.child('name');
// 	console.log(key);
// })
















// var dannyRef = new Firebase('https://tbssessions.firebaseio.com/dannysession/blue/pokemon');

// // dannyRef.on('value', function(snapshot){
// // 	var fuck = snapshot.val();
// // 	console.log(fuck);
// // 	$("#testing").append(fuck.pokemon[0]);
// // });


// dannyRef.on('child_added', function(snapshot){
// 	var buck = snapshot.key();
// 	console.log(buck);

// });

// // dannyRef.on('value', function(snapshot){
// // 	var buck = snapshot.key();
// // 	console.log(buck);

// // });


























// var characterRef = new Firebase("https://tbssessions.firebaseio.com/characters"),
// playersRef = new Firebase("https://tbssessions.firebaseio.com/players"),
// historyRef = new Firebase("https://tbssessions.firebaseio.com/match_histories"),
// baseStatsRef = new Firebase("https://tbssessions.firebaseio.com/charactersBaseStats/Bowsermon");

// baseStatsRef.on('child_added', function(snapshot){
// 	var displayImage = snapshot.val();
// 	$("#testing").append(displayImage.profilePicture);
// });

// characterRef.on('child_added', function(snapshot){
// 	var displayCharacter = snapshot.val();
// 	$("#testing").append(displayCharacter.pokeName);
// });

// playersRef.on('child_added', function(snapshot){
// 	var displayPlayers = snapshot.val();

// 	$("#testing").append(displayPlayers.assists);
// });


// historyRef.on('child_added', function(snapshot){
// 	var displayMatches = snapshot.val();
// 	console.log(displayMatches);
// 	$("#testing").append(displayMatches.match001);
// });




