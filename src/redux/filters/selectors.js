export const selectFilterStatus = state => state.filters.status;
export const selectFilteredAndSortedTasks = state => {
  const tasks = state.tasks.items.slice();
  const filter = state.filters.status;
  const sortBy = state.filters.sortBy;

  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'incomplete') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  if (sortBy === 'date') {
    return filteredTasks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (sortBy === 'status') {
    return filteredTasks.sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }

  return filteredTasks;
};
