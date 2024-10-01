import { useDispatch } from 'react-redux';
import { formattedDate } from '../../Helpers/dateFormatting';
import { deleteTask, toggleTaskCompletion } from '../../redux/tasks/slice';
import css from './TaskItem.module.css';
import { notifyDelete, notifySuccess } from '../../Helpers/toastNotification';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const date = formattedDate(task);

  const onDone = () => {
    dispatch(toggleTaskCompletion(task.id));
    notifySuccess('Task completed!');
  };

  const onDelete = () => {
    dispatch(deleteTask(task.id));
    notifyDelete('Task deleted!');
  };

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <p className={css.date}>{date}</p>
        <h3 className={css.title}>{task.name}</h3>
      </div>
      <div className={css.btnWrapper}>
        {!task.completed && (
          <button className={css.btnDone} type="button" onClick={onDone}>
            Mark as Completed <span className={css.done}>✓</span>
          </button>
        )}
        <button className={css.btnDelete} type="button" onClick={onDelete}>
          Delete <span className={css.delete}>⨉</span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
