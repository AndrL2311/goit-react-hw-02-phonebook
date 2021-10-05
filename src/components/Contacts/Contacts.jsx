import s from './Contacts.module.css';

function Contacts({ contacts }) {
  return (
    <>
      <ul className={s.statistics}>
        {contacts.map(contact => (
          <li className="item" key={contact.id}>
            <span className={s.label}>{contact.name}</span>
            <span className={s.value}>{contact.number}</span>
            <button
              className={s.button}
              type="button"
              //   onClick={onLeaveFeedback}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;

//   contacts.length > 0 && contacts.map(contact => console.log(contact.id));}
// (<li className="item">
//         <span className={s.label}>Name</span>
//             <span className={s.value}>Number</span>
//             <button
//           className={s.button}
//           type="button"
//         //   onClick={onLeaveFeedback}
//         >Delete</button>
//         </li>
