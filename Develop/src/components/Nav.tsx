import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
<nav>
      <ul>
        <li>
          <Link to="/CandidateSearch">Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates">Saved Candidates</Link>
        </li>
        <li>
          <Link to="/ErrorPage">Error Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
