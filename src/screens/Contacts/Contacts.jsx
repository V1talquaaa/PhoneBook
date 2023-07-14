import { Form } from "components/Form/Form"
import { Filter } from "components/Filter/Filter"
import { ContactList } from "components/ContactList/ContactList"

const Contacts = () => {
    return (
        <>
        <h2>Contacts</h2>
        <Form />
        <Filter />
        <ContactList/>
        </>
    )
}

export {Contacts}