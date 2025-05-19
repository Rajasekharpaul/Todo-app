let input = document.getElementById("input-feild");
let task_list = document.getElementById("task-list");
let empty_list=document.getElementById("empty");
var i=0;

function addtotasks() {
    if (input.value === '') {
        alert("please enter your task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        task_list.appendChild(li);
        i+=1;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        empty_list.style.opacity="0";
    }
    input.value = '';
}

task_list.addEventListener("click",(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        i-=1;
        if (i==0) {
            empty_list.style.opacity="25%";
        }
    }
},false);