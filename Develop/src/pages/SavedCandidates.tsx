import React, { useState, useEffect } from "react";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState([]);

//Load the saved candidates from local storage when the component mounts
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved)); //Parse the JSON string and set the saved candidates
    }
  }, []);

  const handleRemoveCandidate = (id) => {
    const updatedCandidates = SavedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); //This updates local storage with the new list of saved candidates
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ?(
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <h2>{candidate.login}</h2>
              <button onClick={() => handleRemoveCandidate(candidate.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SavedCandidates;
