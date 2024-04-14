import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterAction } from "../Redux/Counter";

const Controller = () => {
  const value = useRef();

  const dispatch = useDispatch();
  function handleIncrent() {
    dispatch(counterAction.increment());
  }

  function handleDecrement() {
    dispatch(counterAction.decrement());
  }

  function add() {
    dispatch(counterAction.add(value.current.value))
    value.current.value=""
  }

  function sub() {
    dispatch(counterAction.subtract(value.current.value))
    value.current.value=""

  }

  return (
    <>
      <div>
        <button
          onClick={handleIncrent}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          -1
        </button>
      </div>
      <div>
        <input
          className="border rounded-lg border-black mr-5 p-1 w-28 "
          type={Number}
          placeholder="enter value"
          ref={value}
        />
        <button
          onClick={add}
          type="button"
          class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
        <button
          onClick={sub}
          type="button"
          class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controller;
