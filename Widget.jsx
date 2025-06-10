import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store";

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-3 rounded mb-2 relative">
      <h4 className="font-bold">{widget.title}</h4>
      <p>{widget.content}</p>
      <button
        className="absolute top-1 right-2 text-red-500"
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
      >
        ✖
      </button>
    </div>
  );
}