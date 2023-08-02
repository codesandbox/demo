import { Service, Disposable, Signal, useService } from "impact-app";

@Service()
export class CounterService extends Disposable {
  @Signal()
  private _count = 0;

  get count() {
    return this._count;
  }

  increaseCount() {
    this._count++;
  }
}

export const useCounter = () => useService(CounterService);
