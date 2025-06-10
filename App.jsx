import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Dynamic Dashboard</h1>
      <Dashboard />
    </div>
  );
}