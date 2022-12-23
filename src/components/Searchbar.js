import React, { useState } from "react";


const Searchbar = () => {
    const { search, setSearch } = useState("dito");

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon: ", search)
    }


    return (
        <div className="searchbar-conteiner">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;