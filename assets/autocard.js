//. javascript autocard handler
//. written by charles mceachern with help from taylor reece
//. written fall 2013, revised summer 2015

//. to use this script: 

//. (1) at the top of the page, add the following <div> element:
//.   <div style="position:absolute; z-index:999;" id="cardPopup"></div>
//. (2) load this script on your page:
//.   <script type="text/javascript" src="http://.../autocard.js"></script>
//. (3) to make a card name into an autocard, wrap it in an <a> tag as follows:
//.   <a class="card">Grizzly Bears</a>

//. this script works by changing the contents of the <div id="cardPopup"> element. it starts out
//. invisible, but whenever the user hovers over a card name, the <div>'s inner html is modified
//. to include an image (the path to which is gleaned from the card name). the <div>'s position is
//. also changed to match that of the cursor. when the cursor stops hovering over the card name,
//. the <div> returns to invisibility.

function initCards(){
  var a = document.getElementsByTagName('a');
  for(var i=0;i<a.length;i++){
    //. iterate over all card links
    if(a[i].className == 'card'){
      //. tell each card link what to do when the cursor hovers over it
      a[i].onmouseover = showCardHandler( a[i].innerHTML );
      //. tell each card link what to do when the cursor stops hovering
      a[i].onmouseout = hideCardHandler();
      //. make card names link to card info on magiccards.info
      a[i].setAttribute( 'href', searchLink( a[i].innerHTML ) );
}}}

//. this is the "closure inside a loop" issue. ideally, we would call showCard(a[i].innerHTML)
//. directly. however, when the onmouseover event triggers, the variable i is no longer defined.
function showCardHandler(cardName){return function(){showCard(cardName);}}

function showCard(cardName){
  document.onmousemove = function(e){
    if(window.event){e = window.event;}
    //. judge the position of the cursor
    parentPos = getPos(getElt("cardPopup").parentElement);
    var l = 5+e.clientX+self.pageXOffset-parentPos.left
    var t = 5+e.clientY+self.pageYOffset-parentPos.top
    //. move the card popup to there
    getElt("cardPopup").style.left = l+"px";
    getElt("cardPopup").style.top = t+"px";
  }
  //. create an image of the card inside the div
  getElt("cardPopup").innerHTML = '<img id="cardPopupCard" src="' + imageLink(cardName) + '">';
  //. the image's size and shape will be set by the parent div, so we can round the corners.
  getElt("cardPopupCard").style.height = '100%';
  getElt("cardPopupCard").style.width = '100%';
  //. grab the natural size of the card image
  var nh = getElt("cardPopupCard").naturalHeight, nw = getElt("cardPopupCard").naturalWidth;
  //. fix the height, then set the width based on the image's natural proportions
  var h = 280
  if(nh*nw > 0){var w = Math.round(h*nw/nh);}else{var w = 200;}
  //. based on the image size, figure out how much to round the corners
  var b = Math.round(Math.min(w,h)/15)
  getElt("cardPopup").style.height = h+'px';
  getElt("cardPopup").style.width = w+'px';
  getElt("cardPopup").style.borderRadius = b+'px';
  getElt("cardPopup").style.overflow = 'hidden';
}

function hideCardHandler() {return function(){hideCard();}}

function hideCard(){
  getElt("cardPopup").style.height = '0px';
  getElt("cardPopup").style.width = '0px';
  getElt("cardPopup").innerHTML = '';
}

//. some shorthand for a long call that gets used a lot
function getElt(id){return document.getElementById(id);}

//. this function adds up the top and left displacements of all parent elements to let us map
//. between the (absolute) position of the cursor and the (relative) position of the popup div.
function getPos(elt) {
  var l = 0, t = 0;
  //. as long as there is a parent element, grab this element's offset compared to the parent.
  while (elt.offsetParent) {
    l += elt.offsetLeft;
    t += elt.offsetTop;
    elt = elt.offsetParent;
  }
  return {left:l, top:t};
}

//. given a card name, this function returns a link to search for info on that card
function searchLink(cardName){
  var linkStart = 'http://magiccards.info/query?q=', linkEnd = '&v=card&s=cname';
  return linkStart + cardName.replace('&amp;','').replace('//','') + linkEnd;
}

//. given a card name, this function returns a link to that card image on gatherer.
function imageLink(cardName){
  var linkStart = 'http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=';
  return linkStart + cardName.replace('&amp;','//');
}

window.onload = initCards;