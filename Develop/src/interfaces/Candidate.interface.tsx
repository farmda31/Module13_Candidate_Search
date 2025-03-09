// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string; // Unique identifier for the candidate
    login: string; // GitHub username of the candidate
    avatar_url: string; // URL to the candidate's avatar image
    html_url: string; // URL to the candidate's GitHub profile
    name?: string; // Optional name of the candidate
    location?: string; // Optional location of the candidate
    email?: string; // Optional email of the candidate
    company?: string; // Optional company of the candidate
  }
