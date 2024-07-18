const items = [];
let index= -1;

function addItem()
{
    let item = document.getElementById("grocery").value;

    if(index <0)
    {
    items.push(item);
    }
    else
    {
        items[index]= item; 
    }
    index = -1;
    document.getElementById("grocery").value= "";
    displayItem();

}

function editItem(index1)
{
    index= index1;
    document.getElementById("grocery").value= items[index1];
}

function displayItem()
{
    let p = items.map(function(value,index){

        return `<div class="grocery-item">${value}
        <button class="edit-btn" onclick="editItem(${index})">edit</button>
        <button class="delete-btn" onclick="removeItem(${index})">delete</button>
        </div>`
    });

    document.getElementById("display").innerHTML =p.join(" ");

}

function removeItem(index)
{
    items.splice(index,1);
    displayItem();

}

function clearItems()
{
    items.splice(0);
    displayItem();
}