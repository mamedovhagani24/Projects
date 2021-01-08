function enableDragSort() {
  const sortableLists = document.querySelectorAll(".services__items-wrapper");
  sortableLists.forEach((list) => {
    enableDragList(list);
  });
}

function enableDragList(list) {
  list.querySelectorAll(".services__item").forEach((item) => {
    enableDragItem(item);
  });
}

function enableDragItem(item) {
  item.setAttribute("draggable", true);
  item.addEventListener('dragend', handleDrop);
}

function handleDrop(item) {
  const selectedItem = item.target;
  const list = selectedItem.parentNode;

  let swapItem =
    document.elementFromPoint(item.clientX, item.clientY) === null
      ? selectedItem
      : document.elementFromPoint(item.clientX, item.clientY);

  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

enableDragSort();
