var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");






var signUpArray = [];
if (localStorage.getItem("user") == null) {
	signUpArray = [];
} else {
	signUpArray = JSON.parse(localStorage.getItem("user"));
}

// check if inputs of signup is empty or not
function checkSignUp() {
	if (
		signUpName.value == "" ||
		signUpEmail.value == "" ||
		signUpPassword.value == ""
	) {
		return false;
	} else {
		return true;
	}
}

// check for if email is exist or not
function emailExist() {
	for (var i = 0; i < signUpArray.length; i++) {
		if (signUpArray[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
			return false;
		}
	}
}

function signUp() {
	if (checkSignUp() == false) {
		document.getElementById("exist").innerHTML =
			'<span class="text-danger m-3">All inputs is required</span>';
		return false;
	}

	var signUp = {
		name: signUpName.value,
		email: signUpEmail.value,
		password: signUpPassword.value,
	};
	if (signUpArray == 0) {
		signUpArray.push(signUp);
		localStorage.setItem("user", JSON.stringify(signUpArray));
		document.getElementById("exist").innerHTML = "success";
		return true;
	}
	if (emailExist() == false) {
		document.getElementById("exist").innerHTML =
			'<span class="text-danger m-3">Email already exists</span>';
	} else {
		signUpArray.push(signUp);
		localStorage.setItem("user", JSON.stringify(signUpArray));
		document.getElementById("exist").innerHTML ='<span class="text-success m-3">Success</span>';
	}
}

//   for login

function checkLogin() {
	if (loginEmail.value == "" || loginPassword.value == "") {
		return false;
	} else {
		return true;
	}
}


function login() {
	if (checkLogin() == false) {
		document.getElementById("incorrect").innerHTML ='<span class="text-danger m-3">All inputs is required</span>';
		return false;
    }
    var email = loginEmail.value;
    var password = loginPassword.value;
    for (var i = 0; i < signUpArray.length; i++){
		if (
			signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
			signUpArray[i].password.toLowerCase() == password.toLowerCase()
		) {
			localStorage.setItem("userNameLogin", signUpArray[i].name)
			window.location.assign("index3.html")
		} else {
			document.getElementById("incorrect").innerHTML =
				'<span class="p-2 text-danger">incorrect email or password</span>';
		}
    }
}

function logOut() {
	localStorage.removeItem("userNameLogin");

}

var userNameLogin = localStorage.getItem("userNameLogin");
if (userNameLogin) {
	document.getElementById("username").innerHTML = " Welcome " + userNameLogin;
}


