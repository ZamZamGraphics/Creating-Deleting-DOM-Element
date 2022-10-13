let item = document.querySelector("#item")
let ul = document.querySelector("#itemList")

item.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        let itemValue = event.target.value
        createLi(ul, itemValue)
        event.target.value = ""
    }
})

function createLi(ul, name){
    let li = document.createElement("li")
    li.className = "list-group-item d-flex"
    li.innerHTML = name

    let closeIcon = document.createElement("span")
    closeIcon.className = "btn btn-sm btn-danger ms-auto"
    closeIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'

    closeIcon.addEventListener('click', function(){
        ul.removeChild(li)
    })
    li.appendChild(closeIcon)

    ul.appendChild(li)
}

