"use client";
import React from "react";
import { useFormState } from "react-dom";
import { increment } from "../actions";

function StatefulForm() {
  const [state, formAction] = useFormState<number>(increment, 0);
  return (
    <form>
      {state}
      <button className="bg-blue-500 p-6 text-white" formAction={formAction}>
        Increment
      </button>
    </form>
  );
}

export default StatefulForm;
