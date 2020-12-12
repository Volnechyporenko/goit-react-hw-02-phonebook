import Section from "./Section/Section";
import { Component } from "react";
import Form from "./Form/Form";
import Search from "./Search/Search";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmit = (newContact) => {
    const existedContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );
    if (existedContact) {
      alert(`${existedContact.name} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: prevState.contacts.concat([newContact]),
    }));
  };

  onSearch = (filter) => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  };

  onDelete = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Search onChange={this.onSearch} filter={filter} />
              {filteredContacts.length > 0 ? (
                <ContactList
                  contacts={filteredContacts}
                  onDelete={this.onDelete}
                />
              ) : (
                "Contacts is not found"
              )}
            </>
          ) : (
            "No contacts yet. Add contacts"
          )}
        </Section>
      </div>
    );
  }
}

export default App;
