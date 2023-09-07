import React from "react";
import { ITask } from "../interfaces";
import "../App.css";
import TrashTaskIcon from "../icons/TrashTaskIcon";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        className="trash-icon"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <TrashTaskIcon />
      </button>
    </div>
  );
};

export default TodoTask;
