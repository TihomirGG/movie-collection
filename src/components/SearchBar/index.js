import './SearchBar.scss';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function SearchBar(props) {
    const [keyword,setKeyword] = useState('');
    const history = useHistory();
    
    const onClickHandler = () => {
        history.replace(`/search/${keyword}`)
    } 

    const onChangeHandler = (e) => {
        setKeyword(e.target.value);        
    }

    return (
        <div className="search-bar">
            <input className="search-bar__input" placeholder="Search by movie title..." onChange={(e)=> onChangeHandler(e)} type="text"/>
            <button className="search-bar__button" onClick={() => onClickHandler()}>Search</button>
        </div>
    );
}

export default SearchBar;