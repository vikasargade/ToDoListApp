const inputBox=document.getElementById('input-box')
const listcotainer=document.getElementById('list-container')

function addTask(){
    if(inputBox.value ===""){
        alert( " you must write something!")
    }

    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listcotainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML ="\u00d7"
        li.appendChild(span)

    }
    inputBox.value="";
    saveData()
}

listcotainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }

    else if(e.target.tagName ==="SPAN"){    
        e.target.parentElement.remove();
        saveData()
    }
    
},false);


function saveData(){
    localStorage.setItem("data",listcotainer.innerHTML)
}


function showTask(){
listcotainer.innerHTML = localStorage.getItem("data")
}

showTask()