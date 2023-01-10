import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item} id={contact.id}>
          {contact.name}: {contact.number}
          <button className={css.btnDelete} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
