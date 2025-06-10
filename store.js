import { configureStore, createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    categories: [
      {
        id: "cat1",
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: "w1", title: "Server Status", content: "Server is up" },
          { id: "w2", title: "Security Alert", content: "No critical issues" }
        ]
      }
    ],
    search: ""
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      category.widgets.push({ ...widget, id: Date.now().toString() });
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      category.widgets = category.widgets.filter(w => w.id !== widgetId);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { addWidget, removeWidget, setSearch } = dashboardSlice.actions;

export const store = configureStore({ reducer: { dashboard: dashboardSlice.reducer } });