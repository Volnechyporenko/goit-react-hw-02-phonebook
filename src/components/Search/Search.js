import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Search.module.css";

class Search extends Component {
  handleOnChange = (event) => {
    const value = event.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.handleOnChange}
        ></input>
      </label>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
