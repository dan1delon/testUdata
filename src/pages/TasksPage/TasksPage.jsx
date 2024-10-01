import { useDispatch } from 'react-redux';
import FilterAndSort from '../../components/FilterAndSort/FilterAndSort';
import TaskForm from '../../components/TaskForm/TaskForm';
import TasksList from '../../components/TasksList/TasksList';
import css from './TasksPage.module.css';
import { clearFilter } from '../../redux/filters/slice';
import { useEffect } from 'react';

const TasksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilter());
  }, [dispatch]);

  return (
    <div className={css.wrapperMain}>
      <TaskForm />
      <FilterAndSort />
      <TasksList />
    </div>
  );
};

export default TasksPage;
