import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactApi';



const ContactList = () => {

  const {data: contacts, isLoading} = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.filter);

  const getContactBySearch = () => {
    const filteredContactList = contacts && contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContactList;
  };

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {contacts && getContactBySearch().map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactList}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => deleteContact(id)}
              id={id}
              className={css.deleteBtn}
            >
            Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
