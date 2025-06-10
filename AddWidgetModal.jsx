import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store";

export default function AddWidgetModal({ close, categoryId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title && content) {
      dispatch(addWidget({ categoryId, widget: { title, content } }));
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded w-80">
        <h3 className="text-lg font-semibold mb-2">Add Widget</h3>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Widget Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Widget Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button onClick={close} className="text-gray-500">Cancel</button>
          <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>
    </div>
  );
}