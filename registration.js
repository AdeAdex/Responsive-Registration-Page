function confirmPasswordInp() {
	let inpObj1 = document.getElementById("pass");
	let inpObj2 = document.getElementById("confirmPass");
	let r = document.getElementById("font1");
	let s = document.getElementById("font2");
	if (inpObj2.validity.valueMissing) {
    	document.getElementById("tooltiptext").innerHTML = "This field can not be empty";
    	inpObj2.style.borderColor = "red";
			inpObj2.style.borderWidth = "3px";
			s.style.display = "block";
			s.style.color = "red";
			r.style.display = "none";
			s.style.marginTop = "0px";
			document.getElementById("tooltiptext").style.color = "red";
  } else if (inpObj1.value == inpObj2.value) {
			document.getElementById("tooltiptext").innerHTML = "Password matched";
			r.style.display = "block";
			r.style.color = "green";
			s.style.display = "none";
			inpObj2.style.borderColor = "green";
			inpObj2.style.borderWidth = "3px";
			r.style.marginTop = "0px";
			document.getElementById("tooltiptext").style.color = "green";
  }	else if (!inpObj2.checkValidity()) {
			document.getElementById("tooltiptext").innerHTML = inpObj2.validationMessage //+ "Password in the range but doesnt matched";
			inpObj2.style.borderColor = "red";
			inpObj2.style.borderWidth = "3px";
			s.style.display = "block";
			s.style.color = "red";
			r.style.display = "none";
			s.style.marginTop = "0px";
			document.getElementById("tooltiptext").style.color = "red";
	} else {
			document.getElementById("tooltiptext").innerHTML = "Password in the range but doesnt matched";
			inpObj2.style.borderColor = "red";
			inpObj2.style.borderWidth = "3px";
			s.style.display = "block";
			s.style.color = "red";
			r.style.display = "none";
			s.style.marginTop = "0px";
			document.getElementById("tooltiptext").style.color = "red";
	}
};

	function confirmMatch() {
		if (document.getElementById("confirmPass").value != document.getElementById("pass").value) {
			alert("Please check your entered password and makesure both password are the same before proceeding");
			return false;
		} else {
			document.getElementById("tooltiptext").innerHTML = "";
		}
		
	};


function checkValid() {
  let inpObj = document.getElementById("pass");
  	let x = document.getElementById("font1");
	let y = document.getElementById("font2");
    if (inpObj.validity.patternMismatch) {
    	document.getElementById("tooltiptext1").style.display = "block";
    	document.getElementById("tooltiptext1").innerHTML = inpObj.validationMessage + "\n Must contain at least one number and one uppercase and lowercase letter, and at least 8 and not morethan 10 characters";
    	document.getElementById("tooltiptext1").style.opacity= "1";
    	document.getElementById("tooltiptext1").style.transitionDuration= "3s";
    	inpObj.style.borderColor = "red";
			inpObj.style.borderWidth = "3px";
    	y.style.display = "block";
			y.style.color = "red";
			y.style.marginTop = "-60px";
			x.style.display = "none";
  } else if (inpObj.validity.valueMissing) {
    	document.getElementById("tooltiptext1").innerHTML = "This field can not be empty";
    	inpObj.style.borderColor = "red";
			inpObj.style.borderWidth = "3px";
  } else {
    //document.getElementById("tooltiptext1").innerHTML = ;
    	inpObj.style.borderColor = "green";
			inpObj.style.borderWidth = "3px";
    	x.style.display = "block";
			x.style.color = "green";
			x.style.marginTop = "-60px";
		//inpObj2.style.borderColor = "green"
			y.style.display = "none";
			document.getElementById("tooltiptext1").style.display = "none";
			document.getElementById("tooltiptext1").innerHTML = inpObj.validationMessage + "Password very Ok"
  }
};


function showPassword() {
	let inpObj1 = document.getElementById("pass");
	let inpObj2 = document.getElementById("confirmPass");
		if (inpObj1.type === "password" || inpObj2.type === "password") {
			inpObj1.type = "text";
			inpObj2.type = "text";
		} else {
			inpObj1.type = "password";
			inpObj2.type = "password";
		}
	};