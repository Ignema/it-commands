const technologies = [
  { name: "Docker", color: "blue", description: "Lorem Ipsum" },
  { name: "Kubernetes", color: "blue", description: "Lorem Ipsum" },
  { name: "React", color: "blue", description: "Lorem Ipsum" },
  { name: "Angular", color: "red", description: "Lorem Ipsum" },
  { name: "Springboot", color: "green", description: "Lorem Ipsum" },
  { name: "Svelte", color: "orange", description: "Lorem Ipsum" },
];

const items = document.getElementById("items");
window.localStorage.removeItem("item")

const itemClicked = (event, item) => {
  window.localStorage.setItem("item", JSON.stringify(item))
  window.location.href = "./commands.html"
}

technologies
  .map((technology) => {
    const item = document.createElement("li");
    item.style.backgroundColor = technology.color;
    item.innerText = technology.name;
    item.className = "item"
    item.addEventListener("click", e => itemClicked(e, technology))
    return item;
  })
  .forEach((technology) => items.appendChild(technology));
