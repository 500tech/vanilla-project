document
.querySelector("ul")
.addEventListener("click", e => {
    if (e.target.tagName === 'LI') {
        if (e.metaKey) {
            e.target.remove()
        } else {
            let textDecoration = e.target.style.textDecoration
            e.target.style.textDecoration = (textDecoration ==="") ? "line-through":"";
        }
    }
}, true);



document.getElementById("markAll").addEventListener("click", function(){
    for (let item of document.querySelectorAll('li')) {   
        item.style.textDecoration = "line-through";
    }
  });

document.getElementById("deleteDone").addEventListener("click", function(){
    for (let item of document.querySelectorAll('li')) { 
        if (item.style.textDecoration === "line-through") {
            item.remove()
        }   
    }
  });

  document.getElementById("textInput").addEventListener("input", e => {
      if (e.target.value !=="Write up your todo list" && e.target.value!=="") {
        document.getElementById("add").disabled = false;
      }
  })
  
document.querySelector("form").addEventListener("submit", e => { 
    e.preventDefault()
    const item = document.createElement('li');
    document.querySelector('ul').prepend(item);
    const text = document.createTextNode(document.getElementById("textInput").value)
    item.append(text);
    document.getElementById("textInput").value = "Write up your todo list";
    document.getElementById("textInput").style.width = "";
    document.getElementById("add").disabled = true;
})

document.getElementById("textInput").addEventListener("focus", e => {
    e.target.style.width = '500px'
})

document.getElementById("textInput").addEventListener("blur", e => {
    const textInput = document.getElementById("textInput").value;
    if (textInput === 'Write up your todo list' || textInput === '') {
        e.target.style.width = '';
    }    
})

let liTabSelected = null;

document.addEventListener('keydown', e=> {
    if (e.code === "Tab") {
        e.preventDefault();
        for (let item of document.querySelectorAll('li')) { 
            if (item.style.textDecoration.includes("underline")) {
                item.style.listStyleType = 'disc';
                item.style.textDecoration = 'none';
                if (item.nextElementSibling !== null) {
                    item.nextElementSibling.style.listStyleType = 'circle';
                    item.nextElementSibling.style.textDecoration += ' underline';
                    return
                } 
            }
        }
        if (document.querySelector('li') !== null ) {
            document.querySelector('li').style.listStyleType = 'circle';
            document.querySelector('li').style.textDecoration += ' underline';
            console.log(document.querySelector('li').style.textDecoration += ' underline')
        }
        
    }
})   

