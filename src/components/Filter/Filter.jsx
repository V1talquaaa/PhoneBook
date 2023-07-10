import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContact } from 'redux/store';

const Filter = () => {
  const dispatch = useDispatch();

  const handleNameInput = ({ target }) => {
    onChange(target.value);
  };
  const onChange = query => {
    dispatch(filterContact(query));
  };

  return (
    <input
      type="text"
      name="filter"
      onChange={handleNameInput}
      placeholder="Search by name"
      className={css.filterContact}
    />
  );
};

export { Filter };
