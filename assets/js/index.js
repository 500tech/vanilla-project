document.querySelector('ul').addEventListener('click', e => {
    if (e.target.tagName === 'LI'){
        if (e.metaKey){
            e.target.remove();
        }
        else{
            e.target.style.textDecoration += ' line-through';
        }
    }
});

document.getElementById('mark').addEventListener('click', e =>{
    document.querySelectorAll('li').forEach(li => {
        li.style.textDecoration += ' line-through';
    })
})

document.getElementById('delete').addEventListener('click', e =>{
    document.querySelectorAll('li').forEach(li => {
        if (li.style.textDecoration === 'line-through' || li.style.textDecoration === 'underline line-through'){
            li.remove();
        }
    })
});

document.getElementById('inputText').addEventListener('input', e => {
    document.getElementById('add').disabled = 
        (e.target.value === "" || e.target.value === 'Write up your todo here')
});

document.getElementById('add').addEventListener('click', e => {
    e.preventDefault();
    const input = document.getElementById('inputText');
    const newItem  = document.createElement('li');
    const text = document.createTextNode(input.value);
    newItem.append(text);
    document.querySelector('ul').prepend(newItem);
    input.value = 'Write up your todo here';
    e.target.disabled = true;
    input.style.width = '';    
});

document.getElementById('inputText').addEventListener('focus',e => {
    e.target.style.width = '500px';
});

document.getElementById('inputText').addEventListener('blur',e =>{
    if (e.target.value === 'Write up your todo here' || e.target.value === '')
    e.target.style.width = '';
})

let lastfocused = null;

document.addEventListener('keydown', e=>{
    if (e.code === 'Tab'){
        e.preventDefault();
        const liList = document.querySelectorAll('li');
        for (let i = 0; i < liList.length; i++){
            if (liList[i].style.listStyleType === 'circle'){
                liList[(i+1)%liList.length].style.listStyleType = 'circle';
                liList[(i+1)%liList.length].style.textDecoration +=  ' underline'
                liList[i].style.listStyleType = 'disc';
                liList[i].style.textDecoration = 
                    liList[i].style.textDecoration === 'underline line-through' ? 'line-through' : '';
                return;
            }
        }
        const li = document.querySelector('li');
        if (li !== null){
            li.style.listStyleType = 'circle';
            li.style.textDecoration += ' underline';
        }
    }
})