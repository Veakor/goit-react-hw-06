import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;












{/*import Contact from '../Contact/Contact';


  const ContactList = ({ contacts, onDelete }) => {
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    );
};
export default ContactList;
*/}