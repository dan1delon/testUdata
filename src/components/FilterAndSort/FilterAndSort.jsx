import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  changeSort,
  clearFilter,
} from '../../redux/filters/slice';
import {
  selectFilteredAndSortedTasks,
  selectFilterStatus,
} from '../../redux/filters/selectors';
import css from './FilterAndSort.module.css';

const FilterAndSort = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterStatus);
  const tasks = useSelector(selectFilteredAndSortedTasks);

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  const handleSortChange = event => {
    dispatch(changeSort(event.target.value));
  };

  const handleResetFilter = () => {
    dispatch(clearFilter());
  };

  if (tasks.length <= 1) {
    return null;
  }

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Filter tasks:
        <select
          value={filter}
          onChange={handleFilterChange}
          className={css.filter}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>

      <label className={css.label}>
        Sort tasks by:
        <select onChange={handleSortChange} className={css.sort}>
          <option value="date">Creation Date</option>
          <option value="status">Completion Status</option>
        </select>
      </label>
      <button
        type="button"
        onClick={handleResetFilter}
        className={css.btnReset}
      >
        Reset filters
      </button>
    </div>
  );
};

export default FilterAndSort;
