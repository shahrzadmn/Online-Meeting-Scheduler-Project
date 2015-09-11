var xmlhttp;
var root = 'http://jsonplaceholder.typicode.com';
    function init() {
       // put more code here in case you are concerned about browsers that do not provide XMLHttpRequest object directly
       
	   xmlhttp = new XMLHttpRequest();
    }
    function getdetails() {
        var userId = document.getElementById("userId");
        var url = root + '/' + userId.value;
        xmlhttp.open('GET',url,true);
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = function() {

               var username =  document.getElementById("username");
               var email =  document.getElementById("email");
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                       var det = eval( "(" +  xmlhttp.responseText + ")");
                   
                          username.value = det.username;
                          email.value = det.email;
                       
                 }
                 else
                       alert("Error ->" + xmlhttp.responseText);
              }
        };
    }