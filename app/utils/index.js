import React from "react";
import Contacts from "react-native-contacts";

defaultContactList = [];

async function fetchAllContacts() {
    contactObject = {};
    Contacts.getAll((err, contacts) => {
        if (err) {
            throw err;
        }
        contacts.forEach(contact => {
            contactObject["name"] =
                contact.familyName + " " + contact.givenName + " " + contact.middleName;
            contact.emailAddresses.forEach(async email => {
                contactObject["email"] = email.email;
                defaultContactList.push(contactObject);
                contactObject = {};
                contactObject["name"] =
                    contact.familyName +
                    " " +
                    contact.givenName +
                    " " +
                    contact.middleName;
            });
            contactObject = {};
        });
        return defaultContactList;
    });
}
fetchAllContacts();

module.exports = {
    defaultContactList
};