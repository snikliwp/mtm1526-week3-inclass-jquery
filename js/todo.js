// JavaScript Document

// api.jQuery.com is source for all documentation



$(document).ready(function(e) {
	// All jQuery code goes inside the document ready event
	
	/*
	Everything we do in jQuery gos thriugh the $() function:
	1. We select an element using a css selector
	2. we do something to that element
	We can write any css selector that you think of
	$("#thing") -> Get by ID
	$(".thing") -> Get by class
	$("div p") -> Get by Tags:  all the <p> elements inside <div> elements
	$("div p:first-child") -> The first <p> element inside <div> elements
	*/
	$("a").on("click", function(ev) {
	/*
	".prevent Default()" will stop HTML elements from doing what they normally do
	- for links it will stop them from going to another page
	- for forms it will stop them from submitting
	*/
		ev.preventDefault();
//		console.log("Hello");
		/*
		"$(this)" gives us a reference to the element this event listener is attached to
		".attr()" lets us get and set element attributes 
		*/
//		console.log($(this).attr("href"));
		/*
		with ".css()" we can get and set CSS properties
		The CSS property name (1st Argument) is identical to how you would write it in CSS
		*/
		$(this).css("background-color", "#f33");
		
	});
	$("form").on("submit", function (ev) {
		ev.preventDefault();
		
		var newLi = $(document.createElement("li"));
		
		if ($("#item").val() != "") {
			newLi.html($("#item").val());
			$("ol").append(newLi);
			$("li").attr("id", $("#item").val());
			$("#item").val("");
		}
		
	});
	
	$("ol").on("click", "li", function (ev) {
//		console.log($(this));
//		console.log($(this).val());
//		console.log($(this).attr("id"));
//		newLi.html($("#item").val());
		$("ul").append($(this));
		$(this).removeClass("highlight");
//		$("#item").val("");

//		$(this).toggleClass("done");
	});
	
		$("ul").on("click", "li", function (ev) {
//		console.log($(this));
//		console.log($(this).val());
//		console.log($(this).attr("id"));
//		newLi.html($("#item").val());
		$("ol").append($(this));
		$(this).removeClass("highlight");
//		$("#item").val("");

//		$(this).toggleClass("done");
	});

	
});

$("ol").on('mouseenter', 'li', function(ev) {
//	console.log($(this));
	$(this).addClass("highlight");
});

$("ol").on('mouseleave', 'li', function(ev) { 
	$(this).removeClass("highlight");
});

$("ul").on('mouseenter', 'li', function(ev) {
//	console.log($(this));
	$(this).addClass("highlight");
});

$("ul").on('mouseleave', 'li', function(ev) { 
	$(this).removeClass("highlight");
});









//var data = document.getElementById("item"); // variable containing the information about the to-do text box
//
//var isitempty = function(ev) {
//	// check to see if the text field has something in it
//	if (data.value == "") { // if empty let the user know, in no uncertain terms
//		data.className = "textInvalid";
//		alert ("you must put something in the New To-Do Item field")
//		data.className = "";
//	} else {
//		createlist(); // something is entered, add it to the active list
//	} // end else
//} // end function isitempty
//
//
//var createlist = function(ev) { // this installs the to do items from the text box to the active Items list
//	var newitem = document.getElementById("active").appendChild(document.createElement("li")); // create the new <li> element in the active field 
//	newitem.setAttribute("id", data.value);	// give it an id tag of the same value as the data being entered
//	newitem.innerHTML = data.value; // add the information from the to-do field into the <li> element
//
//	data.value = ""; // clean out the text box
//} // end function createlist
//
//
//// Get the element, add a click listener to the parent <ol> element
//var activeClicked = document.getElementById("active").addEventListener("click",function(ev) {
//	 // this function moves the item from the active to the complete boxes
//	var tmp = document.getElementById("active")
//	// copy the clicked on data to the closed list
//	var newitem = document.getElementById("complete").appendChild(tmp); // document.createElement("li"));  
// create the new <li> element in the complete field 
//	newitem.setAttribute("id", ev.target.id); // set the id tag to the same value as the data being moved
//	newitem.innerHTML = ev.target.id; // put the info into the <li> element
//	// remove the data from the active items list
//	ev.target.parentNode.removeChild(ev.target); 
//},false); // end of function activeClicked
//
//
//$(li).hover(mouseOn(ev) {
//	$(this).addClass("highlight");
//	}, mouseout(ev) {
//	$(this).removeClass("highlight");
//		
//	});


	


//var mouseOn = document.getElementById("active").addEventListener("mouseover",function(ev) { 
//console.log($(this));
//		$(this).addClass("done");
//
//},false);
//
//var mouseOff = document.getElementById("active").addEventListener("mouseout",function(ev) { 
//		$(this).removeClass("done");
//
//},false);


//var completeClicked = document.getElementById("complete").addEventListener("click",function(ev) {
//	 // this function moves the item from the complete to the active boxes
//	var newitem = document.getElementById("active").appendChild(document.createElement("li"));  // create the new <li> element in the active field 
//	newitem.setAttribute("id", ev.target.id); // set the id tag to the same value as the data being moved
//	newitem.innerHTML = ev.target.id;  // put the info into the <li> element
//	// remove the data from the complete items list
//	ev.target.parentNode.removeChild(ev.target);
//},false); // end of function completeClicked
//
//document.documentElement.addEventListener("keydown", function(ev) {
//	// look for the return key to enter data
//	switch(ev.keyCode) {
//		case 13 : isitempty();
//		break;
//		default: console.log(ev.keyCode);
//		break;
//		}
//}, false);
//
//// when someone clicks on the submit button move the data in the to-do field to the active box through isitempty
//document.getElementById("submit").addEventListener("click", isitempty, false);
