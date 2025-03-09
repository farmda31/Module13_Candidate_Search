import { Link }  from 'react-router-dom'; // Import Link from react-router-do for navigation

const ErrorPage = () => {
  return (
    <section style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404: Page Not Found</h1>
      <h2>¯\_(ツ)_/¯</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Go to Home
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
