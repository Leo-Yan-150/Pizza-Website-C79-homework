var menu_list_array = ["Pepperoni Pizza","Cheese Pizza","Vegan Pizza","Pineapple Pizza"];
function getmenu(){
var htmldata;
htmldata = "<ol class = 'menulist'>";
menu_list_array.sort();
for(var i = 0; i<menu_list_array.length; i++){
htmldata = htmldata+'<li>'+menu_list_array[i]+'</li>';
}
htmldata = htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var j=0; j<menu_list_array.length; j++){
htmldata=htmldata+"<div class='card'>"+"<img src='images/pizza.png'>" + menu_list_array[j] + "</div>";
}
htmldata=htmldata+"</section>";
document.getElementById("display_addmenu").innerhtml = htmldata;
document.getElementById("add_item").value = "";
}