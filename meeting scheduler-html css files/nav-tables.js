$(document).ready(function () {
							var xmlhttp = new XMLHttpRequest();
							var url ='http://jsonplaceholder.typicode.com/users';
							xmlhttp.onreadystatechange=function() {
								if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
									myFunction(xmlhttp.responseText);
								}
							}
							xmlhttp.open("GET", url, true);
							xmlhttp.send();

							function myFunction(response) {
								var arr = JSON.parse(response);
								var i;
								var out = "";

								for(i = 0; i < arr.length; i++) {
									out += "<tr class='contact'><td class='contact'>" + 
									arr[i].username +
									"</td><td class='contact'>" +
									arr[i].email +
									"</td><td class='contact'>" +
									
									"</td></tr>";
								}
								/*out += "</table>";*/
								document.getElementById("contactTable").innerHTML = out;
							}
			$("#contactTable").on( 'click', 'tr', function () {
			$(this).toggleClass('selected');});				
    } );
			