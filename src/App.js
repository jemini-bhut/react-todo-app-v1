import { useEffect } from 'react';
import { messaging } from './components/firebase';
import { getToken, getMessaging } from "firebase/messaging";
import './App.css';
import TodoList from './components/TodoList';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === "granted"){
      //alert("You'll now receive all the important notifications.")
      
      // Generate unique token
      //const token = await getToken(messaging, { vapidkey: "BE9Y0kqaInke_prFxlQQ7N8pi8iuyDifaWd4Fe0lpWFqk7pQsg0ZVeFL-PNwpJLoeDB4CuTmsVOs5NL2gZxUmD4"})
      getToken(messaging, { vapidkey: "BE9Y0kqaInke_prFxlQQ7N8pi8iuyDifaWd4Fe0lpWFqk7pQsg0ZVeFL-PNwpJLoeDB4CuTmsVOs5NL2gZxUmD4"})
      .then((currentToken) => {
        if (currentToken) {
          console.log("Current token:", currentToken)
          // Send the token to your server and update the UI if necessary
          
          // Call an API for sending notifications 
          // Parameter to API: token

          // Add the API sent notification in toast

          // const registrationTokens = [
          //   currentToken
          // ];
          
          // // Subscribe the devices corresponding to the registration tokens to the
          // // topic.
          // getMessaging().subscribeToTopic(registrationTokens)
          //   .then((response) => {
          //     // See the MessagingTopicManagementResponse reference documentation
          //     // for the contents of response.
          //     console.log('Successfully subscribed to topic:', response);
          //   })
          //   .catch((error) => {
          //     console.log('Error subscribing to topic:', error);
          //   });
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
      //console.log("Token Generated", token);
    } else if (permission === "denied") {
      alert("You denied for the notification.")
    }
  }

  useEffect(() => {
    // Ask for the user permission for notifications
    requestPermission();
  }, [])

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
