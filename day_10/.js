window.onload = function(){
    //buttons
var quickAddBtn = document.getElementById("QuickAdd");
var AddBtn = document.getElementById("Add");
var cancelBtn = documment.getElementById("cancel")
var quickAddFormDiv = document.querySelection('.quickForm'); 
}
// document.getElementByClassName('quickAddForm')

// formFields
var fullname = document.getElementById("fullname");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var city = document.getElementById("city");
var email = document.getElementById("email");

// address book display
var addBookDiv = document.querySelector(".addBook");

//create storage array
var addressBook = [];

//Event listeners
quickAddBtn.addEventListener("click",function(){
    quickAddFormDiv.style.display = "block";
});

cancelBtn.addEventListener("click",function(){
    quickAddFormDiv.style.display = "none";
});

AddBtn.addEventListener("click",addToBook);
function addToBook(){
    var isNull = fullName.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!=''
    console.log(isNull)
}