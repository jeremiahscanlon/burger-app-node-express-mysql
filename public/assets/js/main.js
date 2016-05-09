
// when page finishes loading ...
$(document).ready (function(){

	console.log('main.js connected;');

	// function to be used later to send the info captured to the api and show the modal pop-up with the response
	function create(name){

		// build the url created in the express routing for the api
		var url = '/api/create/'+name;
		// jquery post request
		$.post(url, '', function(data){
			console.log('response from sql:');
			console.log(data);
		});
	};

	// function to be used later to send the info captured to the api and show the modal pop-up with the response
	function devour(id){
		// build the url created in the express routing for the api
		var url = '/api/devour/'+id;
		// jquery post request
		$.post(url, '', function(data){
			console.log('response from sql:');
			console.log(data);
		});
	};

	// upon click of the create button
	$('#create').click(function(){

		// capture the values from the name and imageURL fields.
		var name = $( '#name' ).val().trim();

		// make sure the name has a value
		if(name){
			// if the name exists then send it to the api create function
			create(name);
			
		} else {
			// if no name then alert reminder to enter it
			alert('Please enter your name.');
		};
	});

	// // upon click of the create button
	// $('.devoured').click(function(){

	// 	// capture the values from the name and imageURL fields.
	// 	var id = $(this).val().trim();

	// 	// make sure the name has a value
	// 	if(id){
	// 		// if the name exists then send it to the api create function
	// 		devour(id);
			
	// 	} else {
	// 		// if no name then alert reminder to enter it
	// 		alert('Please enter your name.');
	// 	};
	// });

});