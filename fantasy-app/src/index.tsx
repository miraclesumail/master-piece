import React from "react";
import ReactDOM from "react-dom";
import { $fetch } from './http'
// 解决module找不到 花了很久 。。。
// import '../index.d.ts'
import { BrowserRouter } from "react-router-dom";
import './assets/bootstrap.css'
import "./index.css";

import './rem'
import App from "./App";
import * as serviceWorker from "./serviceWorker";

interface IPrototype { prototype: any; }
interface Http {
  $fetch(url: string): any;
}

interface MyArray<T> extends Array<T>{
    remove(o: T): Array<T>;
}

class MyArray<T> extends Array<T> {
    remove(elem: T): Array<T> {
        return this.filter((e:any) => e !== elem);
    }
}

let myArr = new MyArray<any>('some', 2, 3, 4);
myArr.push(7);
console.log(myArr.remove("somej"));


export const $http: Http = {
    $fetch
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
