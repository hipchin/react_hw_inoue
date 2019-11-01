import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "完了しました！" };
  }

}

export default function Item() {
  return (
    <li>
      <p>ここに内容が入ります</p>
      <button onClick={() => { console.log = ("完了しました！") }} className="complete">完了</button>
    </li >
  );
}
