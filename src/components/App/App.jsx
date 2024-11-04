import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import contactsData from '../../contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('saveContacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;

    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem('saveContacts', JSON.stringify(contacts));
  }, [contacts]);

  // const updateFeedback = feedbackType => {
  //   setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  // };

  // console.log(contactsData);

  const deleteContact = contactId => {
    console.log(contactId);
    console.log(contacts);

    const updateContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updateContacts);
    console.log(updateContacts);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contactsData} onDelete={deleteContact} />
      </div>
    </>
  );
};

export default App;
