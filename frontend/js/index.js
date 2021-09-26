import technologies from "./technologies";

const items = document.getElementById("items");

technologies
  .map((technology) => {
    const item = document.createElement("li");
    item.style.backgroundColor = technology.color;
    item.innerText = technology.name;
    return item;
  })
  .forEach((technology) => items.appendChild(technology));
