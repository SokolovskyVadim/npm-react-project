import React, {useState} from "react";

export const UserContext = React.createContext(() => {console.log('you forgot to set value')});

const GlobalUserProvider = (props) => {
  const [userData, setUserData] = useState({loggedIn: true, role: "healer"});

  const setNewRole = (role) => {
    setUserData({...userData, role})
  }

  const modifyUser = (type, payload) => {
    switch (type) {
      case "newRole":
        setUserData({...userData, role: payload});
    }
  }

  const dispatch = (action) => {
    setUserData(modifyUser(userData, action));
  }

  return <React.Fragment>
    <UserContext.Provider value={{userData, modifyUser}}>
      {props.children}
    </UserContext.Provider>

  </React.Fragment>
}

export default GlobalUserProvider