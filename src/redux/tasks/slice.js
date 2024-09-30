import { INITIAL_STATE } from '../constants.js';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
  name: 'tasks',

  initialState: INITIAL_STATE.tasks,

  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: taskName => {
        return {
          payload: {
            id: nanoid(),
            name: taskName,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },

    toggleTaskCompletion: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
