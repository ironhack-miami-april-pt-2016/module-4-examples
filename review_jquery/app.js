$(document).ready(function(){
	$("#todo-list-form").on("submit", function(event){
		event.preventDefault();
		var $input = $(".js-single-todo");

		if ($input.val() === ""){
			return;
		}

		var todo = $input.val();
		var html = `
			<li>${todo}</li>
		`;
		$(".js-todo-list").append(html);
		$input.val("");
	})

	$(".food").on("click", function(event){
		var myLi = $(event.currentTarget)
		console.log(myLi.text())
	})

	$(".js-input").on("keyup", function(){
		var myText = $(".js-input").val();
		$(".js-my-text").text(myText);
	})


	// $("button").on("click", function(){
	// 	$("body").hide().fadeIn(3000).fadeOut(3000)
	// })
})