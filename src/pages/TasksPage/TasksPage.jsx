import TaskForm from '../../components/TaskForm/TaskForm';
import TasksList from '../../components/TasksList/TasksList';
import css from './TasksPage.module.css';

const TasksPage = () => {
  return (
    <div className={css.wrapperMain}>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TasksPage;
