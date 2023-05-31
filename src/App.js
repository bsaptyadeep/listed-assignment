import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import { useState, createContext, useEffect } from "react";
import axios from 'axios';
import AlertContext from './utils/AlertContext';
import Alert from './components/Alert/Alert';

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [alert, setAlert] = useState({
    isShow: false,
    message: null,
  });


  useEffect(
    () => {
      if (user.length !== 0) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  return (
    <div className="App">
      <UserContext.Provider value={{ user: user, setUser: setUser, profile: profile, setProfile: setProfile }}>
        <AlertContext.Provider value={{ alert: alert, setAlert: setAlert }}>
          <Alert />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Router>
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
