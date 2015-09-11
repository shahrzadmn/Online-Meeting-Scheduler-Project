
var response = '{"users":['+
    '{
    "user_id":"1",
    "user_name":"Shahrzad",
	"pass":"123",
	"email":"shahrzadmasoumnia@gmail.com"
    },'+ 
    '{
    "user_id":"2",
    "user_name":"Sarah",
	"pass":"123",
	"email":"smasoumn@ucalgary.ca"
    },'+
    '{
    "user_id":"3",
    "user_name":"John",
	"pass":"123",
	"email":"shahrzad_masoumnia@yahoo.com"
    },'+
	'{
	"user_id":"4",
    "user_name":"David",
	"pass":"123",
	"email":"shahrzad_masoumnia@hotmail.com"
	},'+
	'{
	"user_id":"5",
    "user_name":"Sam",
	"pass":"123",
	"email":"shahrzadmn@adobe.com"	
	},'+
	'{
	"user_id":"6",
    "user_name":"Julia",
	"pass":"123",
	"email":"sh.mn@telus.net"}]}';
	
	objUser = JSON.parse(response);
	
	function getUsers(){
		document.getElementById("demo").innerHTML =
		objUser.users[0]["user_name"] + " " + objUser.users[0]["email"];
	};












