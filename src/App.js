import axios from "axios";

function App() {
  async function returnUser(userID) {
    let userData = await axios(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );

    let userPost = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );

    console.log(userData.data, userPost.data);
  }
  returnUser(1);
  return <div>Odev1</div>;
}

export default App;
