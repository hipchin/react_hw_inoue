import React from "react";
import { connectableObservableDescriptor } from "../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/ConnectableObservable";

export default function Item() {
  return (
    <li>
      <p className="task">ここに内容が入ります</p>
      <button className="complete">完了</button>
    </li>
  );
}
