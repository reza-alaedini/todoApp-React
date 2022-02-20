import React, { useContext, useEffect, useRef } from "react";
import TodoContext from "./../../context/todoContext";

const AddNewTask = () => {
  const context = useContext(TodoContext);

  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  });

  return (
    <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100">
          <input
            ref={focusInput}
            type="text"
            className="form-control rounded"
            placeholder="افزودن کار جدید"
            onChange={context.handleTodoInput}
            value={context.todo}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-plus-square text-light"
              onClick={context.handleCreateNewTodo}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
