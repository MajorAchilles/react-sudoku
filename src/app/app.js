import React from "react";
import Content from "../components/Content";
import style from "../index.scss"

const App = () => {
  return (
    <div className={style["main-div"]}>
      <Content />
    </div>
  );
};

export default App;