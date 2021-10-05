import s from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.item}>
      <span className={s.name}>{name}</span>
      <span className={s.number}>{number}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
