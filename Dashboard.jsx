import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import { setSearch } from "../store";

export default function Dashboard() {
  const categories = useSelector(state => state.dashboard.categories);
  const search = useSelector(state => state.dashboard.search);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        className="mb-4 p-2 border w-full"
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(category => (
          <Category key={category.id} category={category} search={search} />
        ))}
      </div>
    </div>
  );
}