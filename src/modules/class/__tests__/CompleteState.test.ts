import { CompleteState } from "../CompleteState";
import { TodoItem } from "../TodoItem";

describe("CompleteStates", () => {
  it("should toggle complete to true", () => {
    // テストコードを記述
    const newItem = new TodoItem("123", "test", false);
    const toggleTrue = new CompleteState();
    toggleTrue.toggleState(newItem);
    expect(newItem.complete).toBe(true);
  });
});
