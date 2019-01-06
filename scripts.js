let notes = [];

let addBtn = document.querySelector("#newnote");
let board = document.querySelector("#board");

function createEachNote(text, posX, posY, index){
	let note = document.createElement("div");
	note.className = "note";

	note.style.left = posX + "px";
	note.style.top = posY + "px";

	let innerDiv = document.createElement("div");
	note.appendChild(innerDiv);
	innerDiv.textContent = text;
	let textArea = document.createElement("textarea");
	note.appendChild(textArea);

	function trackMouse(e){
		posX = e.pageX;
		posY = e.pageY;
		note.style.left = posX + "px";
		note.style.top = posY + "px";
	}

	note.onmousedown = function(e){	
		window.addEventListener("mousemove", trackMouse);
	}

	note.onmouseup = function(){
		notes[index].posX = posX;
		notes[index].posY = posY;
		window.removeEventListener("mousemove", trackMouse);
	}

	innerDiv.ondblclick = function(){
		innerDiv.style.display = "none";
		textArea.style.display = "block";
		textArea.value = innerDiv.textContent;
	}

	textArea.ondblclick = function(){
		innerDiv.style.display = "";
		textArea.style.display = "";
		innerDiv.textContent = textArea.value;
		notes[index].text = textArea.value;
	}

	board.appendChild(note);
}

addBtn.onclick = function(){
	let eachNote = {
		text: "Write a note",
		posX: 30,
		posY: 10
	};
	notes.push(eachNote);
	createHtml();

}

function createHtml() {
	board.innerHTML = "";
	for(let i = 0; i < notes.length; i++){
		createEachNote(notes[i].text, notes[i].posX, notes[i].posY, i);
	}
}














 