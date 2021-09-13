import { LightningElement, track } from "lwc";
import * as util from "c/util";

export default class ToDoList extends LightningElement {
  eventToAdd;

  @track
  todos = [];

  get renderList() {
    return this.todos.length === 0 ? false : true;
  }

  handleChange(e) {
    let input = e.target.value;

    if (input !== "") {
      this.eventToAdd = e.target.value;
    }
  }

  handleAdd() {
    if (this.eventToAdd !== "") {
      const noDuplicate = this.todos.every((todo) => {
        if (todo.toLowerCase() === this.eventToAdd.toLowerCase()) {
          util.showToast("Error", "This is a duplicate", "error", this);
          return false;
        } else {
          return true;
        }
      });
      if (noDuplicate) {
        this.todos.push(this.eventToAdd);
      }
      this.eventToAdd = "";
    }
  }

  handleDelete(e) {
    let index = e.currentTarget.dataset.id;
    let tasks = this.todos;
    if (this.todos.length === 1) {
      this.todos = [];
    } else {
      tasks.splice(index, 1);
      this.todos = tasks;
    }
  }
}
