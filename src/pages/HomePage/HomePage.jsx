import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Task Manager</h1>
      <ul className={css.list}>
        <li className={css.listItem}>
          Stay organized and boost productivity with our simple Task Manager.
        </li>
        <li className={css.listItem}>
          Add, track, and manage your tasks effortlessly.
        </li>
        <li className={css.listItem}>
          Mark tasks as completed, delete them, and keep an eye on when they
          were created.
        </li>
        <li className={css.listItem}>
          With filters for completed and pending tasks and some sorting options.
        </li>
        <li className={css.listItem}>
          Managing your to-do list has never been easier.
        </li>
      </ul>
      <p className={css.paragraph}></p>
      <NavLink to="/tasks" className={css.link}>
        Try now
      </NavLink>
    </div>
  );
};

export default HomePage;
