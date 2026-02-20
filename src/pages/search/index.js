import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
import { useSearchParams } from 'react-router-dom';
// Import useSearchParams

const SearchPage = () => {

  // Get searchParams object from useSearchParams
  const [searchParams] = useSearchParams();
  const petNameToFind = searchParams.get('name');  // Get query parameter using searchParams object
  /*`useSearchParams` returns an array with two items:

   1. A `URLSearchParams` object for reading the current query parameters in the URL.
   2. A function to update those parameters (not needed for your current step).

    For example, if the URL is `/search?name=fido`, then:
     ```js
     const [searchParams] = useSearchParams();
     ```
      - `searchParams.get('name')` will return `'fido'`.

    You use the `get` method to read the value of any query parameter from the URL. */

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets('', petNameToFind);

      setPets(petsData);
    }

    getPetsData();
  }, [petNameToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
