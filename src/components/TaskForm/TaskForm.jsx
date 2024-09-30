import css from './TaskForm.module.css';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addTask } from '../../redux/tasks/slice';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
  const dispatch = useDispatch();

  const notify = () =>
    toast.success('Task added successfully', {
      style: {
        border: '1px solid #38cd3e',
        color: '#121417',
        textAlign: 'center',
        position: 'top-right',
      },
      iconTheme: {
        primary: '#38cd3e',
        secondary: '#FFFAEE',
      },
    });

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
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = data => {
    dispatch(addTask(data));
    reset();
    notify();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h2 className={css.title}>Your tasks</h2>
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
