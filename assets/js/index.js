
document
    .querySelector("ul")
    .addEventListener("click", e =>{
        if(e.target.tagName === 'LI'){
            if(e.metaKey){
                e.target.remove();
            }
            else{
                e.target.style = 'text-decoration : line-through';
            }
        }
    });

for(let butt of document.querySelectorAll("button")){
    butt.addEventListener("click", e =>{
        for(let item of document.querySelectorAll("li")){
            if(e.target.name === "mark_all"){
                item.style = 'text-decoration : line-through';
            }
            else if(e.target.name === "delete_all"  && item.style.textDecoration === 'line-through'){
                item.remove();
            }
        }
    });
}


document.getElementById("write_item")
    .addEventListener("input", e =>{
        if(e.target.value !== "" && e.target.value !== "Write up your todo here"){
            document.getElementById("add").disabled = false;
        }
        else{
            document.getElementById("add").disabled = true;
        }
});

document.getElementById("add")
    .addEventListener("click", e =>{
        e.preventDefault();
        const item = document.createElement("li");
        const node = document.createTextNode(document.getElementById("write_item").value);
        item.append(node);
        document.querySelector("ul").prepend(item);
        document.getElementById("write_item").value = "Write up your todo here";
        document.getElementById("write_item").style.width = '';
        document.getElementById("add").disabled = true;
});

document.getElementById("write_item")
    .addEventListener("focus", e =>{
        e.target.style.width = '500px';
});

document.getElementById("write_item")
    .addEventListener("blur", e =>{
        if(e.target.value === "" || e.target.value === "Write up your todo here"){
            e.target.style.width = '';
        }
    });

document
    .addEventListener("keydown", e =>{
        let list_li = document.querySelectorAll("li");
        if(e.keyCode === 9 && list_li.length > 0){ //tab
            e.preventDefault();
            let index = -1;
            for(let i = 0; i < list_li.length; i++){
                if(document.activeElement === list_li[i]){
                    index = i;
                }
            }
            if(index === -1 || index === list_li.length-1){
                list_li[0].focus();
            }
            else{
                list_li[index+1].focus();
            }
            console.log(index);
        }
    });

document
    .querySelector("ul")
    .addEventListener("focus", e =>{
        if(e.target.tagName === 'LI'){
            if(e.target.textDecoration === 'line-through'){
                e.target.textDecoration = 'underline line-through';
            }
            else{
                e.target.textDecoration = 'underline';
            }
            e.target.style.listStyleType = 'circle';
        }
    });

document
    .querySelector("ul")
    .addEventListener("blur", e =>{
        if(e.target.tagName === 'LI'){
            if(e.target.textDecoration === 'underline line-through'){
                e.target.textDecoration = 'line-through';
            }
            else{
                e.target.textDecoration = '';
            }
            e.target.style.listStyleType = 'disc';
        }
    });