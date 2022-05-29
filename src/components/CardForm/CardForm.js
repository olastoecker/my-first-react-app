import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(props);
        props.action({ title: title }, props.columnId);
        console.log(title);
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default CardForm;