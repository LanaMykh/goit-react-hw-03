import { Formik, Field, Form } from 'formik';
import { useId } from 'react';
import styles from './ContactForm.module.css';

const initial_Values = {
  name: '',
  number: '',
};

const ContactForm = ({ onAddContact }) => {
  const frmNameId = useId();
  const frmNumberId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initial_Values} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor={frmNameId} className={styles.label}>
          Name
          <Field
            id={frmNameId}
            type="text"
            name="name"
            className={styles.input}
          />
        </label>
        <label htmlFor={frmNumberId} className={styles.label}>
          Number
          <Field
            id={frmNumberId}
            type="text"
            name="number"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
