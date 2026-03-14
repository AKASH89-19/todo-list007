let index=0;
function aka()
{
    const todo=document.getElementById("todo")
     const element=todo.value
    if(element.trim()==="")
    {
        return;
    }
    todo.value="";
    const newdiv=document.createElement("div")
    newdiv.setAttribute("id","todo"+index)
    const todospan=document.createElement("span")
    todospan.innerHTML=element;
    newdiv.appendChild(todospan)
    const todobut=document.createElement("button")
    todobut.innerHTML="Delete Button"
    todobut.setAttribute("onclick","deletetodo("+index+")")
    newdiv.appendChild(todobut)
    const parentdiv=document.getElementById("aka")
    parentdiv.appendChild(newdiv)
    index=index+1;
}
function deletetodo(index)
{
const divelement=document.getElementById("todo"+index)
document.getElementById("aka").removeChild(divelement)
}
