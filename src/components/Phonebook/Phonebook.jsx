import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.phonebook__form}>
          <label>
            <span className={css.phonebook__label}>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span className={css.phonebook__label}>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="XXX-XX-XX"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={css.phonebook__btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Phonebook.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Phonebook;
