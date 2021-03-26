document.getElementById("button").onclick = function() {changeText()};
$("#allCode").hide();
$.backstretch("codePic.png");
$(document).ready(function(){
	$("#showCode").click(function(){
		$("#allCode").fadeToggle("slow", "linear");
	});
});

var i = 0;
var o = 0;
var start = document.getElementById("text").innerHTML;
var code = false;

function t2b(str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
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
				document.getElementById("mainDiv").style.marginLeft = "30%";
				i++;
				o++;
				break;
			}
			
			else if(o >= 1){
				document.getElementById("text").innerHTML = "I am disapointed in you.";
				document.getElementById("heading").innerHTML = "I am disapointed in you.<br>";
				document.getElementById("mainDiv").style.marginLeft = "40%";
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
			document.getElementById("mainDiv").style.marginLeft = "25%";
			i = 0;
			break;
		
	}
}