import { ITodoItem, ITodoList } from "@/types/interface/todo";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

describe("TodoList", () => {
  it("should add item to the TodoList", () => {
    // addTodo_TEST
    const testList: ITodoList = new TodoList([]);
    const targetItem: ITodoItem = new TodoItem("123", "test", false);
    testList.addItem(targetItem);
    expect(testList).toEqual({
      item: [{ complete: false, id: "123", text: "test" }],
    });
  });
  it("should delete item from the TodoList", () => {
    // deleteTodo_TEST
    const testList: ITodoList = new TodoList([
      new TodoItem("0", "Not Delete", false),
      new TodoItem("123", "test", false),
    ]);
    const targetItem: ITodoItem = new TodoItem("123", "test", false);
    testList.deleteItem(targetItem.id);
    expect(testList).toEqual({
      item: [{ complete: false, id: "0", text: "Not Delete" }],
    });
  });

  it("should update item to the TodoList", () => {
    // updateTodo_TEST
    const testList: ITodoList = new TodoList([
      new TodoItem("0", "Not Delete", false),
      new TodoItem("123", "test", false),
    ]);
    const targetItem: ITodoItem = new TodoItem("123", "UP date!!", false);
    testList.updateItem(targetItem);
    expect(testList).toEqual({
      item: [
        { complete: false, id: "0", text: "Not Delete" },
        { complete: false, id: "123", text: "UP date!!" },
      ],
    });
  });
});
