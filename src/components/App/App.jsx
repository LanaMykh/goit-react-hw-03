import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import contactsData from '../../contacts.json';

const App = () => {
  // const [feedbacks, setFeedbacks] = useState(() => {
  //   const saveFeedbacks = localStorage.getItem('saveFeedbacks');

  //   return saveFeedbacks === null
  //     ? {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0,
  //       }
  //     : JSON.parse(saveFeedbacks);
  // });

  // useEffect(() => {
  //   localStorage.setItem('saveFeedbacks', JSON.stringify(feedbacks));
  // }, [feedbacks]);

  // const updateFeedback = feedbackType => {
  //   setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  // };

  // console.log(contactsData);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contactsData} />
      </div>
    </>
  );
};

export default App;
