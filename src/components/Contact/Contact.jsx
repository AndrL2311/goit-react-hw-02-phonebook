import s from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <>
      <li className="item" key={id}>
        <span className={s.label}>{name}</span>
        <span className={s.value}>{number}</span>
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default Contact;
