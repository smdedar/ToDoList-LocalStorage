function saveData(){
    var data = document.getElementById("task").value;
    document.getElementById("task").value = null;

    var task = [];
    var storageCheck = JSON.parse(localStorage.getItem("todoTask"));

    if(storageCheck != null){
        task = JSON.parse(localStorage.getItem('todoTask'));
    }
    
    task.push(data);
    alert(task);
    localStorage.setItem('todoTask',JSON.stringify(task));

    viewData();
}


function viewData(){
    var storageCheck = JSON.parse(localStorage.getItem("todoTask"));
    //console.log(storageCheck);
   var  li = '';
    for(var i=0; i<storageCheck.length; i++){
        li += '<li>'+storageCheck[i]+'<button onclick="deleteData('+i+')">X</button></li>';
    }
    document.getElementById("viewTask").innerHTML = li;
}


function deleteData(index){
    var task = JSON.parse(localStorage.getItem('todoTask'));
    task.splice(index,1);
    alert("Delete");
    localStorage.setItem('todoTask', JSON.stringify(task));

    viewData();
}

window.onload = function() {
    viewData();
  };