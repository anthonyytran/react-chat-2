// Import the Axios library for making HTTP requests
import axios from 'axios';

// Define a functional component called AuthPage, which takes props as an argument
const AuthPage = (props) => {
  // Define a function called onSubmit, which handles the form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const { value } = e.target[0]; // Extract the value entered in the input field

    // Send a POST request to the 'http://localhost:3001/authenticate' endpoint
    axios.post('http://localhost:3001/authenticate', { username: value })
      .then(r => props.onAuth({ ...r.data, secret: value })) // Handle a successful response by calling the 'onAuth' function from props and passing data with a secret
      .catch(e => console.log('error', e)); // Handle errors by logging them to the console
  }; 

  // Return JSX for rendering the authentication form
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to React Chat! 👋</div>

        <div className="form-subtitle">Type in a username to get started!</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the AuthPage component as the default export
export default AuthPage;