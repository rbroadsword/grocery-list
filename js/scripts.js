$(Document).ready(function(){
  $("#groceries").submit(function(event){
    event.preventDefault();
    let item = $("input#groceriesLists").val(); 
    console.log("presplit " + item);
    let itemList = item.split(",").sort();
    console.log(itemList);

    itemList.forEach(function(item) {
      $("#groceryList").append("<li>" + item.toUpperCase() + "</li>");
    });
    
  });
});