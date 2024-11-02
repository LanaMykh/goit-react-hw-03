import { HiUser, HiPhone } from 'react-icons/hi';
import styles from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.box}>
      <div className={styles.data}>
        <p className={styles.text}>
          <HiUser />
          {name}
        </p>
        <p className={styles.text}>
          <HiPhone />
          {number}
        </p>
      </div>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
