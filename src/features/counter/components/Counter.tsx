import { observe } from "impact-app";
import { useCounter } from "../services/CounterService";

export function Counter() {
  using _ = observe()

  const counter = useCounter();

  return (
    <button onClick={() => counter.increaseCount()}>
      count is {counter.count}
    </button>
  );
}
