import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

export default function Category({ category, search }) {
  const [showModal, setShowModal] = useState(false);

  const filteredWidgets = category.widgets.filter(widget =>
    widget.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <button onClick={() => setShowModal(true)} className="text-blue-500">+ Add Widget</button>
      </div>
      {filteredWidgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      {showModal && (
        <AddWidgetModal
          close={() => setShowModal(false)}
          categoryId={category.id}
        />
      )}
    </div>
  );
}