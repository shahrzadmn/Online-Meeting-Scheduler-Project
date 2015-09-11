 var baseURL = "http:\127.0.0.1:8080\MeetingScheduler";
 $(document).ready(function(){
	 $("#login-button").click(function(event){
		event.preventDefault();
		var xmlhttp = new XMLHttpRequest();
		var url: baseURL + "/sessions";
		$('.form').fadeOut(500);
		$('.wrapper').addClass('form-success');
	});

 });