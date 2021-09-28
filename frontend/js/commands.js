
const item = JSON.parse(localStorage.getItem("item"))

if(!item){
    alert("No item found!")
}

const body = document.getElementById("commands")

const title = document.createElement("h3")
title.innerText = `Technology: ${item.name}`

const description = document.createElement("p")
description.innerText = item.description

body.appendChild(title)
body.appendChild(description)