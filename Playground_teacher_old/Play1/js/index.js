console.log("Hello World");
      
let div = document.querySelector("#coloredBox");
div.innerText = "Yet another colored box";



div.addEventListener('click', ()=>
{
  let cl = div.classList[0];
  if (cl === "greenBox")
  {
    div.classList.remove("greenBox");
    div.classList.add("blueBox");
  }
  else
  {
    div.classList.remove("blueBox");
    div.classList.add("greenBox");
  }
} )
