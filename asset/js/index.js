function onLoad(){
	var ul = document.getElementById("navMenuBar");
	var navMenuList = ['menu1', 'menu2', 'menu3', 'menu4'];
	var list = "";
	for(var i=0; i < navMenuList.length; i++){
		list += "<li>";
		list += navMenuList[i];
		list += "</li>";
	}
	ul.innerHTML = list;
}

function asideMenu(count){
  var menu = document.getElementsByName("myDropdown");
  for(var i=1; i <= menu.length; i++){
	 if(i == count){
		 menu[i-1].style.display = "block";
	 }else{
		 
		 menu[i-1].style.display = "none";
	 }
	}
}

function dragStart(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragOver(ev){
	ev.preventDefault();
}

var divBoxAttr = "";
function drop(ev){
	ev.preventDefault();
	var divBox = document.getElementById("dropZone");
	divBoxAttr += "<div id='mydiv' style='width:100px; height:100px; resize: both; overflow:auto; border:1px dashed black; ' draggable='true' ondrop='drop(ev)' ondragover='dragOver(event)'>";
	divBoxAttr += "박스를 생성했습니다.";
	divBoxAttr += "</div>";
	
	divBox.innerHTML = divBoxAttr;
	
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}