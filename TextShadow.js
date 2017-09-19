<button onclick="changeColor()">Change Background</button>
<h1 id="coffee">
COFFEE
</h1>

-----------------------------------------------------------


function changeColor() {

document.body.style.background =
	'url("https://assets.pcmag.com/media/images/396774-the-10-best-ultraportables.jpg")';
	document.body.style.backgroundSize = 'cover';
  document.getElementById('coffee').style.textShadow = "10px 20px 10px #ff0000";

}
