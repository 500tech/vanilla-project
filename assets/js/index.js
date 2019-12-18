



document
.querySelector("ul")
.addEventListener("click" , e => {
    if(e.target.tagName === "LI"){
        if(e.metaKey){
            e.target.remove();
        }
        else{
            e.target.style = 'text-decoration: line-through';
        }
        
    }
}
);


for(let but of document.querySelectorAll("button")){
    but.addEventListener("click", e =>{
        for(let item of document.querySelectorAll("li")){
            if(e.target.name === "mark_all"){
                item.style = 'text-decoration: line-through';
            }
            else if(e.target.name === "delete_all"){
                if(item.style.textDecoration === 'line-through'){
                    item.remove(); 
                }
            }
        }
   
    });
}




document.getElementById('txt')
.addEventListener("input", e=> {
    if (e.target.value !== '' && e.target.value !== "Write up your todo here") {
        document.getElementById('add').disabled = false;
    }
    else {
        document.getElementById('add').disabled = true;
    }
});


document.getElementById('add')
.addEventListener("click", e=> {
    e.preventDefault();
    const item = document.createElement('li');
    item.append(document.createTextNode(document.getElementById('txt').value));
    document.querySelector('ul').prepend(item);
    document.getElementById('txt').value = "Write up your todo here";
    document.getElementById('txt').style.width = '';
    document.getElementById('add').disabled = true;
});


document.getElementById('txt')
.addEventListener("focus", e=>{
    e.target.style.width = '500px';
});

document.getElementById('txt')
.addEventListener("blur", e=>{
    if(e.target.value === '' || e.target.value === "Write up your todo here"){
        e.target.style.width = '';
    }
});


document.addEventListener("keydown", e=>{
    let arr = document.querySelectorAll("ul");
    if(e.keyCode === 9 && arr.length !==0){
        e.preventDefault();
        let index = -1;
        for(let i =0; i< arr.length; i++){
            if(document.activeElement === arr[i]){
                index = i;
            }
        }
        console.log(index);
        if(index === -1 || index === arr.length -1){
            arr[0].focus();
        }
        else{
            arr[index +1].focus();
        }
    }
});

document
.querySelector("ul")
.addEventListener("focus" , e => {
    if(e.target.tagName === "LI"){
        if(e.target.textDecoration === "line-through"){
            e.target.textDecoration = "underline line-through";
        }
        else{
            e.target.textDecoration = "underline";
        }
    e.target.style.listStyleType = 'circle';
    }
});

document
.querySelector("ul")
.addEventListener("blur" , e => {
    if(e.target.tagName === "LI"){
        if(e.target.textDecoration === "underline line-through"){
            e.target.textDecoration = "line-through";
        }
        else{
            e.target.textDecoration = "";
        }
    e.target.style.listStyleType = 'disc';
    }
});




