const input = document.getElementById("input");
const submit = document.getElementById("submit");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if(input.value !== ""){
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteButton());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
})

function addDeleteButton(){
  const deleteButton = document.createElement("button");

  deleteButton.innerHTML = "x";

  deleteButton.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if(items.length === 0){
      empty.style.display = "block";
    }
  });

  return deleteButton;
}
