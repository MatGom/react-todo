import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import shortid from 'shortid';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, id: shortid() }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>Title:</label>
      <input type='text' value={title} onChange={e => setTitle(e.target.value)}></input>
      <label>Description:</label>
      <input type='text' value={description} onChange={e => setDescription(e.target.value)}></input>
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
