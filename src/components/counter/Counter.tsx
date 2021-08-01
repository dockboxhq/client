import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "hooks/hooks";

import styles from "./Counter.module.css";

import { selectCount } from "store/counter/counter.reducer";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({ type: "counter/decrement", payload: incrementValue })}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({ type: "counter/increment", payload: incrementValue })}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch({ type: "INCREMENT_ASYNC" })}>
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: "counter/increment_odd", payload: incrementValue })}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
