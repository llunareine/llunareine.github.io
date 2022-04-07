// Поиск фильмов и видео по запросу

const SearchBar = ({ OnSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();

        OnSearchSubmit(term);
    };
    return(
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="ui fluid massive icon input">
                        <input 
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