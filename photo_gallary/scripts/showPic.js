function prepareGallery(){
	if(!document.getElementsByTagname) return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for( var i=0; i<links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
		}
	}


function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !='function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}


function showPic(whichpic){
    if(!document.getELementById("placeholder")) return false;
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getELementById("description")){
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    }
    return true;
}


/* 
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    console.log(document.getElementsByName("body"))
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}
window.onload = countBodyChildren;
*/
