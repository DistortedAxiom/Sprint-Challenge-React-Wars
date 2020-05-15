import React from "react";
import '../App.css';

export default function Search(props) {

    const { updateSearchTerm } = props

    const changeHandler = e => {
      updateSearchTerm(e.target.value)
    }

    return (
        <form className="search-form">
            <input
            type="text"
            placeholder="Search"
            onChange={changeHandler}
            />
        </form>
    )

}
