$(document).ready(function(){

	if (window.localStorage.getItem("images")){
		// Get the URLs from localStorage
		var savedImages = JSON.parse(window.localStorage.getItem("images"));
		// Loop through the stored image URLs and append each one to the page
		savedImages.forEach(function(imageUrl){
			var image = `<img src=${imageUrl}>`
			$(".image-container").append(image)
		})
	} else {
		window.localStorage.setItem("images", "[]");
	}


	$(".js-add-image-button").on("click", function(){
		var imageUrl = prompt("Enter an image URL");
		var myImage = `
			<img src=${imageUrl}>
		`;
		$(".image-container").append(myImage);
		// Get the array out of localStorage, and parse it as JSON
		var storedImages = JSON.parse(window.localStorage.getItem("images"));
		// Push the new image to that array
		storedImages.push(imageUrl);
		// Put the new array back in localStorage
		localStorage.setItem("images", JSON.stringify(storedImages));
	})
})