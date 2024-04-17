import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import clsx from "clsx";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.name);

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <h2 className={clsx(css.titleFilter)}>Find contacts by name</h2>
      <input
        className={clsx(css.inputFilter)}
        type="text"
        value={selectNameFilter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;




























{/*import styles from './SearchBox.module.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from './redux/filtersSlice';

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
    return (
        <div className={styles.searchBoxContainer}>
      <input
        className={styles.searchBoxInput}
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
    );
  };
  
export default SearchBox;*/}
  
  