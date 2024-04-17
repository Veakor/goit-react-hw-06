

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters'),
    number: Yup.string()
      .required('Number is required')
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number cannot exceed 50 characters')
  });

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: generateId() }));
    resetForm();
  };

  return (
    <div className={styles.contactFormContainer}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.contactForm}>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <Field type="text" id="number" name="number" />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

















  {/*import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'; 



const ContactForm = ({ addContact }) => {
    const initialValues = {
      name: '',
      number: ''
    };
  
    const validationSchema = Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name cannot exceed 50 characters'),
      number: Yup.string()
        .required('Number is required')
        .min(3, 'Number must be at least 3 characters')
        .max(50, 'Number cannot exceed 50 characters')
    });
  
    const handleSubmit = (values, { resetForm }) => {
      addContact({ ...values, id: generateId() });
      resetForm();
    };
  
    const generateId = () => {
   
      return Math.random().toString(36).substr(2, 9);
    };
  
    return (
      <div className={styles.contactFormContainer}>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.contactForm}>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage 
              name="name" 
              component="div" 
              className={styles.error} />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <Field type="text" id="number" name="number" />
              <ErrorMessage 
              name="number" 
              component="div" 
              className={styles.error} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
    );
  };
  
export default ContactForm;*/}