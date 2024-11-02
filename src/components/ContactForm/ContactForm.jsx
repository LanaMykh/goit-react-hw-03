import { Formik, Field, Form } from 'formik';
import styles from './ContactForm.module.css';

const initial_Values = {
  name: '',
  number: '',
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ initial_Values }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Name:
          <Field type="text" name="name" className={styles.input} />
        </label>
        <label className={styles.label}>
          Number:
          <Field className={styles.input} type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
