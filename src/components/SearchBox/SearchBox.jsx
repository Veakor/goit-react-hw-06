import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css'; 


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
        value={nameFilter} 
        onChange={handleSearchChange} 
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
  
  