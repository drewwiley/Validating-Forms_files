$(document).ready(function(){
//Add a listener for the form submission....

$('.sign-up-form').submit(function(){
	event.preventDefault();
	// console.log("Submitted!");
	// 1. password must be 6 characters
	var password= $('.password').val();
	if(password.length < 6) {
		$('.password').focus();
		$('.pass-error').html('Your password must be atleast 6 characters')
	}
	console.log(password);

	// 2. Field must be non-empty


  });
$('.input').blur(function(){
    if( !$(this).val() ) {
          alert("Please complete");
    }
	});
});

	// 3. agree to terms checkbox must be checked

	// 4. valid email

	// 5. make sure number is a number

	// 6. make sure password is equal
