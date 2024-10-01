import clsx from 'clsx';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import css from './TasksList.module.css';
import { selectFilteredAndSortedTasks } from '../../redux/filters/selectors';

const TasksList = () => {
  const tasks = useSelector(selectFilteredAndSortedTasks);

  return (
    <ul className={css.wrapper}>
      {tasks.length === 0 && (
        <li className={css.listItemMessage}>
          <p className={css.message}>Sorry, there are no tasks here yet :(</p>
        </li>
      )}
      {tasks.map(task => (
        <li
          key={task.id}
          className={clsx(css.listItem, {
            [css.completed]: task.completed,
          })}
        >
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
