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

document.getElementById("HTMLcode").innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="myCSS.css">
		<link href="https://fonts.googleapis.com/css?family=Corben:bold" rel="stylesheet" type="text/css">
		<link href="https://fonts.googleapis.com/css?family=Nobile" rel="stylesheet" type="text/css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.1.18/jquery.backstretch.min.js"></script>
	</head>
	<body>
		<div style="position: absolute; margin-left: 400px; width: 600px; height: 10000px; background: white; border: 0px">
			<heading1 id="heading">
			A short description: <br>
			</heading1>
			<paragraph id="text">
					Hi, my name is Krish. I like to code, write,  do math, reading, cooking, and biking. 
					I do college-level coding. My latest project in coding is a program that copies any files
					with the extension .cpp and .py. he program then, uploads those files to Github. I usually
					write in the morning on weekdays except for Friday. I sometimes read at night. I can cook
					the usual food like pizza, sandwiches, burritos and other yummy foods.I code in C++, C#, 
					Python, and JavaScript. I also have power to change this text!!!
			</paragraph>
			<br></br>
			<div>
				<button class="buttons" id="button">
					See, click me!!!
				</button>
			</div>
			<div>
				<button class="buttons" id="showCode">
					And click me too!!!
				</button>
			</div>
			
			<div id="allCode">
				<div id="JavaScript">
				<!-- src = https://websemantics.uk/articles/displaying-code-in-web-pages/ -->
					<figure>
						<cap> 
							This is my JavaScript code <br>
						</cap>
						<code id="javaScriptCode" class="code">
						</code>
					</figure>
				</div>
				
				<div id="HTML">
					<figure>
						<cap> 
							This is my HTML code <br>
						</cap>
						<code id="HTMLcode" class="code">
						</code>
					</figure>
				</div>
				
				<div id="CSS">
					<figure>
						<cap> 
							This is my CSS code <br>
						</cap>
						<code id="CSScode" class="code">
						</code>
					</figure>
				</div>
			</div>
		</div>
		<script src="myJavaScript.js"></script>
	</body>
</html>`;
document.getElementById("javaScriptCode").innerHTML = `document.getElementById("button").onclick = function() {changeText()};
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
				i++;
				o++;
				break;
			}
			
			else if(o >= 1){
				document.getElementById("text").innerHTML = "Same...";
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
}`;
document.getElementById("CSScode").innerHTML = `paragraph {
	color: #FF5733;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Nobile', Helvetica, Arial, sans-serif;
}

cap{
	color: #581845;
	font-size: 17;
	font-weight: bold;
	font-family: 'Courier New', monospace;
}

heading1 {
	color: #FFC300;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Corben', Georgia, Times, serif;
}

.buttons{
	border: none;
	color: #DAF7A6;
	background-color: #C70039;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.code{
	font-family: 'Courier New', monospace;
	text-align: center;
	font-weight: bold;
	color: #900C3F;
}

body{
	text-align: center;
	background: url("/img/cream_dust.png") repeat 100 100;
}`;

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
				document.getElementById("text").innerHTML = "Same...";
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