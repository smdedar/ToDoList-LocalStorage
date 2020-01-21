function saveData() {
    var data = document.getElementById("task").value;
    document.getElementById("task").value = null;

    var task = [];
    var storageCheck = JSON.parse(localStorage.getItem("todoTask"));

    if (storageCheck != null) {
        task = JSON.parse(localStorage.getItem('todoTask'));
    }

    task.push(data);
    //alert(task);
    localStorage.setItem('todoTask', JSON.stringify(task));

    viewData();
}


function viewData() {
    var storageCheck = JSON.parse(localStorage.getItem("todoTask"));
    //console.log(storageCheck);
    var li = '';
    for (var i = 0; i < storageCheck.length; i++) {
        li += '<li class="list-group-item">' + storageCheck[i] + '<button id="deleteBtn" class="btn btn-primary" onclick="deleteData(' + i + ')"><i class="far fa-minus-square"></i></button></li>';
    }
    document.getElementById("viewTask").innerHTML = li;
}


function deleteData(index) {
    var task = JSON.parse(localStorage.getItem('todoTask'));
    task.splice(index, 1);
    //alert("Delete");
    localStorage.setItem('todoTask', JSON.stringify(task));

    viewData();
}

window.onload = function () {
    viewData();
};