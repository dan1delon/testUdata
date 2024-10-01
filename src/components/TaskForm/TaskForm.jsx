import css from './TaskForm.module.css';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addTask } from '../../redux/tasks/slice';
import { useDispatch } from 'react-redux';
import { notifySuccess } from '../../Helpers/toastNotification';

const TaskForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object({
    task: Yup.string().min(3).required('Please write a task'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
    mode: 'onSubmit',
    defaultValues: { task: '' },
  });

  const onSubmit = data => {
    const taskData = { name: data.task };
    dispatch(addTask(taskData));
    reset();
    notifySuccess('Task successfully added!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h2 className={css.title}>Add task</h2>
      <div className={css.formWrapper}>
        <label className={css.labelWrapper}>
          <input
            type="text"
            {...register('task')}
            placeholder="Add your task here"
            className={clsx(css.input, { [css.inputError]: errors.task })}
          />
          <p className={css.errorMessage}>{errors.task?.message}</p>
        </label>
        <button type="submit" className={css.btn}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
