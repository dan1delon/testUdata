import { useDispatch } from 'react-redux';
import { formattedDate } from '../../Helpers/dateFormatting';
import { deleteTask, toggleTaskCompletion } from '../../redux/tasks/slice';
import css from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const date = formattedDate(task);

  const onDone = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const onDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>{task.name}</h3>
      <p className={css.date}>{date}</p>
      <button className={css.btnDone} type="button" onClick={onDone}>
        Mark as Completed <span className={css.done}>✓</span>
      </button>
      <button className={css.btnDelete} type="button" onClick={onDelete}>
        Delete <span className={css.delete}>⨉</span>
      </button>
    </div>
  );
};

export default TaskItem;
