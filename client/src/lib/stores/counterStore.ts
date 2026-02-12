import { makeAutoObservable} from 'mobx'
export default class CounterStore{
title='Counter store';
count=42;
    event:string[]=[
        `Initial Count is ${this.count}`
    ]
    constructor ()
    {
      makeAutoObservable(this);
    } 
    Decrement=(amount=1)=>{
        this.count-=amount;
        this.event.push(`Incremented by ${amount} - count is now ${this.count}`)
    }
    Increment=(amount=1)=>{
        this.count+=amount;
        this.event.push(`Decremented by ${amount} - count is now ${this.count}`)
    }
    get evenCount()
    {
        return this.event.length;
    }
}