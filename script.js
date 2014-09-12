

function uploadFruitList() {
	//alert("triggered");
	var list = document.getElementById('fruits');
    var fruitslist = new Array("Apples", "Pears", "Bananas", "Oranges");
    //fruitslist.sort();
	var firstname;
	var i;
    for (i = 0; i < fruitslist.length; i++) {
        firstname = fruitslist[i];
	alert(fruitslist[i]);

        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    }

}