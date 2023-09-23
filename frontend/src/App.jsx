import { useState } from "react";
import "./App.css";

// Import the AuthPage and ChatsPage components
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  // Initialize a state variable 'user' using the useState hook, initially set to 'undefined'
  const [user, setUser] = useState(undefined);

  // Conditional rendering based on the 'user' state
  if (!user) {
    // If 'user' is not defined, render the AuthPage component and pass a function 'onAuth' to set the 'user' state
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // If 'user' is defined, render the ChatsPage component and pass the 'user' object as a prop
    return <ChatsPage user={user} />;
  }
}

export default App;