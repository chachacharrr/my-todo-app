import { IncompleteState } from "../IncompleteState";
import { TodoItem } from "../TodoItem";

describe("IncompleteStates", () => {
  it("should toggle complete to true", () => {
    // テストコードを記述
    const newItem = new TodoItem("123", "test", false);
    const toggleTrue = new IncompleteState();
    toggleTrue.toggleState(newItem);
    expect(newItem.complete).toBe(false);
  });
});
