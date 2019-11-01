import React from "react";

export default function Form() {
  return (
    <div className="form_wrap">
      <form>
        <label htmlFor="addDoing">作業内容</label>
        <input
          type="text"
          name="desc"
          className="input_box"
          id="addDoing"
        ></input>
        <button type="submit" className="add">
          追加
        </button>
      </form>
    </div>
  );
}
