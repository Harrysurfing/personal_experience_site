import { LightningElement } from "lwc";

export default class Dragndrop extends LightningElement {
  draggedItem = null;
  handleDragStart(e) {
    e.stopPropagation();
    // console.log(e.target);
    // this.draggedItem = e.target;
    e.dataTransfer.setData("id", e.target.id);
    // setTimeout(() => {
    //   e.target.classList.add("dragging");
    //   console.log(e.target);
    // }, 0);
  }

  handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over");
  }

  handleDrop(e) {
    e.preventDefault();
    // console.log(e.currentTarget);
    // let draggable = e.dataTransfer.getData("draggable");
    // e.currentTarget.append(draggable);
    // this.draggedItem = null;
    console.log("dropped");

    var divId = e.dataTransfer.getData("id");
    var draggedElement = this.template.querySelector("#" + divId);
    draggedElement.classList.remove("dragging");
    e.currentTarget.appendChild(draggedElement);
  }
}
