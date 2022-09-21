let inp=document.querySelector('input');
const outputContainer=document.querySelector('.OutputCon');
const butt=document.querySelector('.SubmitForm')
const checkBeforeEle=document.querySelectorAll('.OutputCon');

butt.addEventListener('click',()=>{
    const todoText=inp.value;
    inp.value='';
    const span=document.createElement('span');
    span.innerHTML=todoText;
    const MainDivELE=document.createElement('div');
    const removeButton=document.createElement('button');
    removeButton.addEventListener('click',(e)=>{
        MainDivELE.remove();
    })
    removeButton.innerHTML='X'
    const UpshiftButton=document.createElement('button');
    UpshiftButton.addEventListener('click',(e)=>{
        var wrapper = e.target.parentElement;

        if (wrapper.previousElementSibling)
            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
    })
    UpshiftButton.innerHTML="up";
    const downSihftButton=document.createElement('button');
    downSihftButton.addEventListener('click',(e)=>{
        var wrapper=e.target.parentElement;
        if(wrapper.nextElementSibling)
        {
            wrapper.parentNode.insertBefore( wrapper.nextElementSibling,wrapper);
        }
    })
    downSihftButton.innerHTML='Down';

    MainDivELE.append(removeButton,UpshiftButton,downSihftButton,span);

    outputContainer.appendChild(MainDivELE);
})
