import { action, computed, makeObservable, observable, runInAction, when } from "mobx";

const serverRequest = () => fetch("http://localhost:4999/api").then(response => response.json());

class Counter {
  count = 12
  
  constructor(){
    makeObservable(this, {
      count: observable,
      double: computed,
      incrementCount: action,
      decrementCount: action,
      someAsync: action
    })

    when(
      () => this.count === 15,
      () => this.someAsync()
    )
  }
  
  get double(){
    return this.count * 2;
  }

  incrementCount(){
    this.count++;
  }

  decrementCount(){
    this.count--;
  }

  async someAsync(){
    try {
      const is_ok = await serverRequest()
      console.log(is_ok)
      runInAction(() => {
        this.incrementCount();
      })
    } catch (e) {
      console.log(e);
    }
  }
}

class CounterMultiple extends Counter {

  constructor(){
    super();
    makeObservable(this, {
      multiple_2: action
    })
    when(
      () => this.count === 32,
      () => this.someAsync()
    )
  }

  multiple_2(){
    this.count *= 2
  }
}

const counter = new Counter();
const multipleCounter = new CounterMultiple();

export { counter, multipleCounter };