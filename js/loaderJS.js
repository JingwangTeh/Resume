window.addEventListener("load", function(){
	setTimeout(function(){
	
		// fadeout loading screen
		$('#loader').fadeOut(200);
		// bring back scrollbar (scrollbar hidden previously in css/loader.css)
		$(' html, body').css({'overflow': 'auto'});
		
	}, 1000);
});