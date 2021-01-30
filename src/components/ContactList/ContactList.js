import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ContactList.css';

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <div>
      <TransitionGroup component="ul">
        {contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames="Contacts">
            <li>
              {' '}
              {contact.name}: {contact.number}
              <button type="button" onClick={() => onRemoveContact(contact.id)}>
                x
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
