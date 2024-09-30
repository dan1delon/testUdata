import css from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';

const TasksList = () => {
  return (
    <div className={css.wrapper}>
      <TaskItem />
    </div>
  );
};

export default TasksList;
