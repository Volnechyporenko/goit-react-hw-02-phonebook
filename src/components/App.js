import Section from "./Section/Section";
import { Component } from "react";
import Form from "./Form/Form";
import Search from "./Search/Search";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  onSubmit = (newContact) => {
    const isContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );
    if (isContact) {
      alert(`${isContact.name} is already in contacts`);
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
    return this.state.contacts.filter((contact) => {
      return contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });
  };

  onDelete = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          <Search onChange={this.onSearch} />
          {filteredContacts.length > 0 && (
            <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
