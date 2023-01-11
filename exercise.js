var messageItem1 = document.getElementById('overlay-item-1');
var messageItem2 = document.getElementById('overlay-item-2');
var messageItem3 = document.getElementById('overlay-item-3');

//When item title is clicked
document.getElementById("title-item-1").addEventListener("click", showMessage1);
document.getElementById("title-item-2").addEventListener("click", showMessage2);
document.getElementById("title-item-3").addEventListener("click", showMessage3);

//When exit button in overlay is clicked
document.getElementById("button-item-1").addEventListener("click", closeMessage1);
document.getElementById("button-item-2").addEventListener("click", closeMessage2);
document.getElementById("button-item-3").addEventListener("click", closeMessage3);

//When add button in Minor Wishlist Section is cicked
document.getElementById("addWish").addEventListener("submit", addToList); 

//Removes items
var minorWishList = document.getElementById('wishes');
minorWishList.addEventListener("click", removeWish);

//Shows the overlay when wish is "granted"
function showMessage1 (e) {
    messageItem1.style.display="flex";  
}

function showMessage2 (e) {
    messageItem2.style.display="flex";  
}

function showMessage3 (e) {
    messageItem3.style.display="flex";  
}

//Closes the overlay when exit is clicked
function closeMessage1 (e){
   if(confirm("Are you sure that this wish has not yet been granted?")){
    messageItem1.style.display="none";
   }
}

function closeMessage2 (e){
    if(confirm("Are you sure that this wish has not yet been granted?")){
     messageItem2.style.display="none";
    }
 }

 function closeMessage3 (e){
    if(confirm("Are you sure that this wish has not yet been granted?")){
     messageItem3.style.display="none";
    }
 }

 //Adds items to minor wishlist
function addToList(e){
    // get input value
    var newWish = document.getElementById("wish").value;
    e.preventDefault();
    
    if (newWish != "")
    {

    // create new li element
    var li = document.createElement("li");
    
    // add class
    li.className = "minor-wish";

    // add text node with input value
    li.appendChild(document.createTextNode(newWish));

    // create delete button element
    var deleteBtn = document.createElement("button");

    // add classes to delete button
    deleteBtn.className = "button-delete";

    // append text node
    deleteBtn.appendChild(document.createTextNode("-"));

    var div = document.createElement("div");
    div.className = "minor-wish-pair";
    
    // append li to div; allows styling of the pair in a flexbox
    div.appendChild(li);

    // append li to div; allows styling of the pair in a flexbox
    div.appendChild(deleteBtn);
    
    minorWishList.appendChild(div);

    document.getElementById("wish").value=""; //Clears textbox after submitting 
}
}

//Removes items from minor wishlist
function removeWish(e){
    if(e.target.classList.contains('button-delete')) {
    if(confirm('Are you sure you want to remove this from the wishlist?')){
        var li = e.target.parentElement;
        minorWishList.removeChild(li);
    }
}
}
