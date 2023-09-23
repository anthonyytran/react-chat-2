// Import the PrettyChatWindow component from the 'react-chat-engine-pretty' library
import { PrettyChatWindow } from "react-chat-engine-pretty";

// Define a functional component called ChatsPage, which takes props as an argument
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* Render a chat window using the PrettyChatWindow component */}
      <PrettyChatWindow
        projectId='85df2d4b-26ae-4a07-974f-d3659261cee6' // Specify the project ID for chat
        username={props.user.username} // Pass the username from props (e.g., 'adam')
        secret={props.user.secret} // Pass the secret or password from props (e.g., 'pass1234')
        style={{ height: "100%" }} // Apply a specific style to the chat window for full height
      />
    </div>
  );
};

export default ChatsPage;