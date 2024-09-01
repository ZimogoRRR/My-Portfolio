const items = document.querySelectorAll(".items");
const wrapper = document.querySelector(".awardsWrapper");

for (let i = 0; i < items.length; i++) {
  items[i].onclick = () => {
    imgResize(items[i]);
  };
}

function imgResize(item) {
  const itemCloser = document.createElement("div");
  const openedImg = document.createElement("img");

  itemCloser.classList.add("itemCloser");
  openedImg.classList.add("itemOpener");

  openedImg.setAttribute("src", item.getAttribute("src"));

  itemCloser.appendChild(openedImg);
  wrapper.appendChild(itemCloser);

  itemCloser.onclick = () => itemCloser.remove();
}