$('.single-item').slick({
    dots: true,
    infinite: true,
    // autoplay:true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  (function($, document) {
    
    let height = -1;

  $('.tab__content').each(function() {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
       $(this).css('position', 'absolute');
  });
  $('[data-tabs]').css('min-height', height + 40 + 'px');
 
}(jQuery, document));

$(window).on("scroll", function() {
  if($(window).scrollTop() > 510) {
      $("#top__header").addClass("active");
  } else {
     $("#top__header").removeClass("active");
  }
});
// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  
// Defining error variables with a default value
  var nameErr = emailErr = true;
  
  // Validate name
  if(name == "") {
      printError("nameErr", "Please enter your name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }
  
  // Validate email address
  if(email == "") {
      printError("emailErr", "Please enter your email address");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email address");
      } else{
          printError("emailErr", "");
          emailErr = false;
      }
  }
  
  // Prevent the form from being submitted if there are any errors
  if((nameErr || emailErr) == true) {
     return false;
  } else {
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
                        "Full Name: " + name + "\n" +
                        "Email Address: " + email + "\n" ;
          
      // Display input data in a dialog box before submitting the form
      alert(dataPreview);
  }
};



// Defining a function to validate form 
function validateEmail() {
  // Retrieving the values of form elements 
  var email = document.emailRequest.email.value;
  
// Defining error variables with a default value
  var emailErr = true;
  
  // Validate email address
  if(email == "") {
      printError("emailErrr", "Please enter your email address");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErrr", "Please enter a valid email address");
      } else{
          printError("emailErrr", "");
          emailErr = false;
      }
  }
  
  // Prevent the form from being submitted if there are any errors
  if(( emailErr) == true) {
     return false;
  } else {
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
                        "Email Address: " + email + "\n" ;
          
      // Display input data in a dialog box before submitting the form
      alert(dataPreview);
  }
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




$(document).ready(function(){
  $(".three__line").click(function(){
    $(".menue").toggle('slow');
  });
});