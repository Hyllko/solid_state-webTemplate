// simple banner animate logo, h1 and p

var logo = $(".logo").find("i"),
	title = $(".banner h1, .banner p");

logo.animate({ opacity: "1", easing: "swing" }, 1000, function () {
	title.animate({ opacity: "1", left: "0", easing: "swing" }, 400);
});

// overlay

var menu = $("nav").find("a"),
	overlay = $("#overlay");
overlay.hide();

overlay.on("click", function () {
	$(this).fadeOut("fast");
});

menu.on("click", function (event) {
	event.preventDefault();
	overlay.css({ opacity: "1" });
	overlay.fadeIn("fast");
});
