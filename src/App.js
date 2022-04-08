import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import Quote from './Quote';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <center>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/characters/">Character</Link>
              </li>
            </ul>
          </nav>
        </center>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters/:Id">
            <div>
              <Character></Character>
            </div>
          </Route>
          <Route exact path="/death-count/:Name">
            <div>
              <Death></Death>
            </div>
          </Route>
          <Route exact path="/quotes/:Name">
            <div>
              <Quotes></Quotes>
            </div>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}
function Character() {
  let { Id } = useParams();
  useEffect(() => {
    getCharacter()
  }, [])
  const [character, setcharacter] = useState([]);
  async function getCharacter() {
    var response = await axios.get('https://breakingbadapi.com/api/characters/' + Id)
    setcharacter(response.data)
  }
  return (
    <h3>
      Requested topic ID : {Id}
      {character.map((item) => {
        return <>
          <PersonList class='PersonList' person={item}></PersonList>
          <Death class='Death' Name={item.name} />
          <Quotes Name={item.name} />
        </>
      }
      )
      }
    </h3>
  )
}

function Death(props) {
  useEffect(() => {
    getdeath()
  }, [])
  const [death, setdeath] = useState([]);
  async function getdeath() {
    var response = await axios.get('https://breakingbadapi.com/api/death-count?name=' + props.Name)
    setdeath(response.data[0])
  }
  return (
    <h3 class='death'>
      Death for {death.name} : {death.deathCount}
    </h3>
  )
}

function Quotes(props) {
  useEffect(() => {
    getquotes()
  }, [])
  const [quotes, setquotes] = useState([]);
  async function getquotes() {
    var response = await axios.get('https://breakingbadapi.com/api/quote?author=' + props.Name)
    setquotes(response.data)
    console.log(quotes)
  }
  return (
    <h3>
      Quotes : {quotes.quote}
      {quotes.map((item) => {
        return <>
          <Quote person={item}></Quote>
        </>
      }
      )
      }
    </h3>
  )
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
          return <div>
            <PersonList person={item}></PersonList>
            < Link to={'/characters/' + item.char_id}>details</Link>
          </div>
        }
        )
      }
    </div >
  );
}
