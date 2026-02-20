import React, { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

// Import createSearchParams
// Import useNavigate

const Search = () => {

  // get navigate function
  const navigate = useNavigate(); /*The value returned by useNavigate is a function.
This function is called navigate. It does not store any data itself. Type:
It is a function, not a value or object.You use this function to change the current route (URL) in your app.*/

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    // use createSearchParams....You are correct—query is not a plain object, but a URLSearchParams object. If you use it in a template string, it will automatically convert to a string in the key=value format. 
    const query = createSearchParams(searchQuery); // createSearchParams takes an object and turns it into a URL query string format. For example, if searchQuery is { name: 'fido' }, then createSearchParams(searchQuery) will create something like name=fido. In this case the value is the users input in the search bar
    // imperatively redirect with useNavigate() returned function
    navigate({
    pathname: '/search',
    search: `?${query}`,
   });
    /* When using navigate, you can send either a string or an object.
     If you send a string, like navigate('/search?name=fido'), React Router updates the URL directly to that string. If you send an object, like:
           navigate({
           pathname: '/search',
            search: `?${query}`,
                   });
     React Router builds the URL using the pathname and search properties.
     Both update the URL, but the object form is clearer and helps avoid mistakes with query strings.*/
    
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
