import React, { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from './interfaces/Candidate.interface';

const CandidateSearch = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState('');

const handleSearch = async () => {
  console.log('searching for candidates'); // Added debugging log
    try {
      const results = await searchGithub(); // Call the API function to fetch candidates
      console.log('Results:', results); // Added debugging log
      setCandidates(results); // Update the candidates state with the results
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching candidates:', error); // Added debugging log
      setError('Error returning candidates. Please try again later.'); // Error handling
    }
  };
  
  // const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value); // Updates the searchTerm state with the value of the input field
  // };

  return (
    <div>
      <h1>Candidate Search</h1>
      <button onClick={handleSearch}>Search Candidates</button>
      {error && <p>{error}</p>}
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <h2>{candidate.login}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CandidateSearch;
