import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters/:Id">
            <div>hello</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Id() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Home() {

  const [characters, setcharacters] = useState([]);
  async function Characters() {
    var response = await axios.get('https://breakingbadapi.com/api/characters')

    setcharacters(response.data)
  }
  useEffect(() => {
    Characters()
  }, [])
  return (
    < div >
      {
        characters.map((item) => {
          console.log(item)
          return <PersonList person={item}></PersonList>
        }
        )
      }
    </div >
  );
}
