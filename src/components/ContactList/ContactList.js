import React from 'react'

export default function ContactList({contacts, onRemoveContact}) {
    
    return (
        <div>
            <ul>
                
                {contacts.map(contact => (
                    <li key={contact.id}> {contact.name}: {contact.number}
                        <button
                            type='button'
                            onClick={() => onRemoveContact(contact.id)}>x</button>
                    </li>               
                ))}
            </ul>
            
        </div>
    )
}
