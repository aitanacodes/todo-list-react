import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" placeholder="Add a task..." />
          <input type="number" placeholder="Deadline (in Days)..." />
        </div>
        <button>Let's add a new Task!</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default App;
