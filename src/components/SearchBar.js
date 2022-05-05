// Поиск фильмов и видео по запросу
import React, {useState, useEffect, useRef} from 'react';
const SearchBar = ({ OnSearchSubmit }) => {
    const [term, setTerm] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
      }, [])
    const onFormSubmit = event => {
        event.preventDefault();

        OnSearchSubmit(term);
    };
    return(
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="ui fluid massive icon input">
                        <input
                        ref={inputRef} 
                        type="text" 
                        placeholder="Find videos..." 
                        onChange={e => setTerm({term: e.target.value })}>
                            
                        </input>
                        <i className="search icon" />
                    </div>
                </form>
            </div>
        );
};


export default SearchBar;