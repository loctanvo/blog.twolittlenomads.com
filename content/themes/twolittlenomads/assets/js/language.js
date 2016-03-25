function initLanguage() {
	setCurrentLanguage();

	$('.language-english')
		.on('click', function (event) {
			event.preventDefault();
			choose('english');
		});

	$('.language-german')
		.on('click', function (event) {
			event.preventDefault();
			choose('german');
		});

	$('.language-norwegian')
		.on('click', function (event) {
			event.preventDefault();
			choose('norwegian');
		});

	function choose(language) {
		history.replaceState(null, document.title, "#" + language);
		chooseWithoutModifyingState(language);
	}
	
	function chooseWithoutModifyingState(language){
		display("." + language);
		setActive('.language-' + language);
		setCookie("language", language)
	}

	function display(selector) {
		$('.language').hide();
		$(selector).fadeIn();
	}

	function setActive(selector) {
		$('a.active').removeClass('active');
		$(selector).addClass('active');
	}
	
	function setCurrentLanguage() {
		var hash = window.location.hash.substr(1).toLowerCase();
		var cookieLanguage = getLanguageCookie();
	
		var action = choose;
		if(hash === "overview"){
			action = chooseWithoutModifyingState;			
		}
		
		if (hash === "german" || cookieLanguage === "german") {
			action('german');
			return;
		}
		else if (hash === "norwegian" || cookieLanguage === "norwegian") {
			action('norwegian'); 
			return;
		}

		action('english');
	}

	function setLanguageCookie(value) {
		setCookie("language", value);
	}

	function getLanguageCookie() {
		return getCookie("language");
	}

	function setCookie(cname, cvalue) {
		var now = new Date();
		var expiry = new Date(now.getFullYear() + 1, 0, 1);
		var expires = "expires=" + expiry.toUTCString();
		document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
} 