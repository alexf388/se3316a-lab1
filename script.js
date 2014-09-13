var fruitslist = new Array("Apples", "Pears", "Bananas", "Oranges");

//uploads original fruit list 
function uploadFruitList() {
	//alert("Fruitlist is triggered");
	var list = document.getElementById('fruits');
    
    //fruitslist.sort();
	var firstname;
	var i;
    for (i = 0; i < fruitslist.length; i++) { //for loop lists the fruits 
        firstname = fruitslist[i];
	////alert(fruitslist[i]);

        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    }

}

function uploadUpdatedFruitList(index) { //uploads the updated fruitlist of the shelf once a fruit has been confirmed
	//alert("UpdatedFruitlist is triggered");
	var lis = document.getElementById('fruits'); 
	//alert(document.getElementById('fruits')); 
	
	
	var entry = lis.getElementsByTagName('li')[index].innerHTML; 
	//alert("entry to be removed:" + entry); 
	//alert("index number: " + index); 
	
	//removes the desired node from the list on HTML 
	lis.removeChild(lis.childNodes[index+1]); 
	
	
}

//function to remove a fruit from the fruit shelf 
function removeFruit(){
	
	var list = document.getElementById('fruits');
		
	//alert("removeFruit() has been triggered");  
	var firstname = document.getElementById('firstname').value;    
	//alert("firstname is " + firstname); 
	//check if the fruit exists 
	for (var i = 0 ; i < fruitslist.length ; i++) {
		var removedFruit = false; 
		if (firstname == fruitslist[i]){ 
			//alert("Fruit has been found!"); 
			if( addFruit(firstname)){
					//alert("TRUE!"); 
					//remove fruit from fruit shelf
					var index = fruitslist.indexOf(firstname); 
					if (index > -1){ //making sure index is not out of bounds
						//alert("Splicing") ; 
						fruitslist.splice(index,1); 
						uploadUpdatedFruitList(index);
						removedFruit = true; 
					}
						
			}
				
				
				break; 
		}
		
			
	}
	//if fruit does not exist, js should //alert user that fruit does not exist
	if (removedFruit == false){
		alert("Fruit not found!"); 
	}
}

//function to add fruit to the fruit basket 
function addFruit(firstname){
	//add shelf to fruit shelf
	//alert("addFruit() has been triggered"); 
	
	var list2 = document.getElementById('basket');
	var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list2.appendChild(entry);
	
	//returns true, letting the program know that the fruit has been added successfully 
	return true; 
	
}