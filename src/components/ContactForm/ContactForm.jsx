import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import clsx from "clsx";
import css from "./ContactForm.module.css";

const FORM_INITIAL_VALUES = { name: "", number: "" };

const mailBoxSchema = Yup.object().shape({
  name: Yup.string()
    .required("Email address is required!")
    .min(3, "Your contact name must be more than 3 characters!")
    .max(50, `Your contact name must be less than 50 characters!`),
  number: Yup.string()
    .required("Contact number is required!")
    .min(3, "Your contact number must be more than 3 characters!")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      `Invalid phone number format! Use "-", for example 123-45-67`
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (values, actions) => {
    const finalContact = {
      ...values,
      id: nanoid(),
    };

    dispatch(addContact(finalContact));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={mailBoxSchema}
      onSubmit={onAddContact}
    >
      <Form className={clsx(css.boxForm)}>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Name</span>
          <Field
            className={clsx(css.labelInput)}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Number</span>
          <Field
            className={clsx(css.labelInput)}
            type="tel"
            name="number"
            placeholder="123-45-67"
          />
          <ErrorMessage component="p" name="number" />
        </label>
        <button className={clsx(css.formButton)} type="submit">
          Add new contact
        </button>
      </Form>
    </Formik>
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