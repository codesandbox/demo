import { ServiceProvider } from "impact-app";
import { CounterService } from "./services/CounterService";
import { Counter } from "./components/Counter";

export function CounterFeature() {
  return (
    <ServiceProvider services={[CounterService]}>
      <Counter />
    </ServiceProvider>
  );
}
