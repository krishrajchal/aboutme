document.getElementById("button").onclick = function() {changeText()};
$("#allCode").hide();
$("#email").hide();
$.backstretch("codePic.png");

fetch("index.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("htmlCode").innerHTML = escapeHtml(data);
	})

fetch("mainJS.js")
	.then(response => response.text())
	.then(data => {
		document.getElementById("jsCode").innerHTML = data;
	})

fetch("mainCSS.css")
	.then(response => response.text())
	.then(data => {
		document.getElementById("cssCode").innerHTML = data;
	})

// light mode colors
const lightBgCol = "white";
const lightLinkCol = "blue";
const lighth2Col = "black";

// dark mode colors
const darkBgCol = "#202124";
const darkLinkCol = "#3075ff";
const darkh2Col = "white"

var isDark = true;

$(document).ready(function(){
	$("#showCode").click(function(){
		$("#allCode").fadeToggle("slow", "linear");
	});
	toDark();
});

var i = 0;
var o = 0;
var start = document.getElementById("text").innerHTML;
var code = false;
var id = null;

function t2b(str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

email = document.getElementById("info");

email.addEventListener("click", function (){
	if(email.innerHTML == "<strong>Contact</strong>"){
		email.innerHTML = "<strong>krishrajchal@gmail.com</strong>";
	}
	else{
		email.innerHTML = "<strong>Contact</strong>";
	}
})

function escapeHtml(text) {
	return text
		 .replace(/&/g, "&amp;")
		 .replace(/</g, "&lt;")
		 .replace(/>/g, "&gt;")
		 .replace(/"/g, "&quot;")
		 .replace(/'/g, "&#039;");
  }

function changeTheme(){
	if(isDark){
		toLight();
		isDark = false;
	}else{
		toDark();
		isDark = true;
	}
}

function toDark(){
	document.querySelector(':root').style.setProperty('--bg-col', darkBgCol);
	document.querySelector(':root').style.setProperty('--link-col', darkLinkCol);
	document.querySelector(':root').style.setProperty('--heading-col', darkh2Col);
}

function toLight(){
	document.querySelector(':root').style.setProperty('--bg-col', lightBgCol);
	document.querySelector(':root').style.setProperty('--link-col', lightLinkCol);
	document.querySelector(':root').style.setProperty('--heading-col', lighth2Col);
}

function reverse(str){
	return str.split("").reverse().join("");
}

function changeText(){
	switch(i){
		case 0:
			document.getElementById("text").innerHTML = t2b(start+'');
			document.getElementById("heading").innerHTML = t2b("A short description:") + "<br>";
			i++;
			break;
			
		case 1:
			document.getElementById("text").innerHTML = reverse(start.toString());
			document.getElementById("heading").innerHTML = reverse("A short description:") + "<br>";
			i++;
			break;
			
		case 2:
			if(o == 1){
				document.getElementById("text").innerHTML = "Reeeeally, you thought AGAIN that I would trick you.";
				document.getElementById("heading").innerHTML = "Don't do that again. That was predictable.<br>";
				i++;
				o++;
				break;
			}
			
			else if(o >= 1){
				document.getElementById("text").innerHTML = "I am disapointed in you (I mean that in a funny way).";
				document.getElementById("heading").innerHTML = "I am disapointed in you.<br>";
				i++;
				break;
			}
			document.getElementById("text").innerHTML = "Ha ha ha! I tricked you! You thought you would see: <br>" + start + "!!!";
			document.getElementById("heading").innerHTML = "Ha ha ha!!!<br>";
			i++;
			if(o == 0){
				o++
			}
			break;
			
		case 3:
			document.getElementById("text").innerHTML = start;
			document.getElementById("heading").innerHTML = "A short description:<br>";
			i = 0;
			break;
		
	}
}
