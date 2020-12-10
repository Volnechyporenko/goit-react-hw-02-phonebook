import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Search.module.css";

class Search extends Component {
  state = { filter: "" };

  handleOnChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ filter: value });
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
          value={this.state.filter}
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
