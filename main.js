alert("hello");

$(".jumbotron").on("click", "p", function() {
$(this).toggleClass("upperCase");
});