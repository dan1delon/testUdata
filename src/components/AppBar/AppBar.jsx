import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';

const AppBar = () => {
  const handleActiveLink = ({ isActive }) => {
    return clsx(css.link, { [css.active]: isActive });
  };

  return (
    <header className={css.wrapperMain}>
      <NavLink to="/" className={handleActiveLink}>
        Home
      </NavLink>
      <NavLink to="/tasks" className={handleActiveLink}>
        Tasks
      </NavLink>
    </header>
  );
};

export default AppBar;
