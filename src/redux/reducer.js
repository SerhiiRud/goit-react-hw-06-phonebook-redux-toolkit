import { addContact, removeContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// let contactsInitialState;
// const savedContacts = localStorage.getItem('contacts');
// const parsedContacts = JSON.parse(savedContacts);

// if (parsedContacts) {
//   contactsInitialState = parsedContacts;
// } else {
//   contactsInitialState = contactsArray;
// }

export const contactsReducer = createReducer(contactsArray, {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => action.payload,
});
