import { Form } from "components/Form/Form"
import { Filter } from "components/Filter/Filter"
import { ContactList } from "components/ContactList/ContactList"

const Phonebook = () => {
    return (
        <>
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
        </>
    )
}

export {Phonebook}