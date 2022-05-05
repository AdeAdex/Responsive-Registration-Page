function confirmPasswordInp() {
	let inpObj1 = document.getElementById("pass");
	let inpObj2 = document.getElementById("confirmPass");
	let x = document.getElementById("font1");
	let y = document.getElementById("font2");
	if (inpObj1.value == inpObj2.value) {
		document.getElementById("matchMessage").innerHTML = "Matched";
		//x.style.visibility = "initial";
		x.style.display = "block"
		x.style.color = "green"
		y.style.display = "none"
		inpObj2.style.borderColor = "green"
	} else {
		document.getElementById("matchMessage").innerHTML = "Password Not Matching";
		inpObj2.style.borderColor = "red";
		y.style.display = "block"
		y.style.color = "red"
		x.style.display = "none"
	}

	/*if (x.style.visibility == "hidden") {
		x = "display";
	}else {
		x.style.visibility = "hidden";
	}*/
}