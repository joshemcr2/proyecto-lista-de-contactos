import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard.js";


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUserContacts()
    }, []);

    const userContacts = store.contacts || [];
    console.log(userContacts)

    return (
        <div className="text-center mt-5 m-auto">
            {userContacts?.map((contact) => <li key={contact.id} className="list-unstyled"><ContactCard id={contact.id} name={contact.full_name} phone={contact.phone} email={contact.email} address={contact.address} /></li>)}
        </div>
    )
}; 