import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import TaskList from "Scenes/TaskList/TaskList";
import Login from "Scenes/Login/Login";
import ExpandedCard from "Scenes/ExpandedCard";
import {useSelector} from "react-redux";
import TaskTable from "Scenes/TaskTable";

const TASKS_TABLE = [
  {name:"Header", dataKey:"name", width:30},
  {name:"Text", dataKey:"text", width:70}
]

const RootRouter = () => {
  const user = useSelector(state => state.user);

  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
      return <Navigate to={"/taskList"}/>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <Routes>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/taskList"} element={renderForLoggedInUser(<TaskList/>)}>
        <Route path={"taskList"} element={<div>children is here</div>}/>
      </Route>
      <Route path={"/taskList/:taskID"} element={renderForLoggedInUser(<ExpandedCard/>)}/>
      <Route path={"/"} element={getUserStartPage()}/>
    </Routes>
    )
};

export default RootRouter