import css from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/tasks/selectors';

const TasksList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.wrapper}>
      {tasks.length === 0 && (
        <li className={css.listItemMessage}>
          <p className={css.message}>Sorry, there are no tasks here yet :(</p>
        </li>
      )}
      {tasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
