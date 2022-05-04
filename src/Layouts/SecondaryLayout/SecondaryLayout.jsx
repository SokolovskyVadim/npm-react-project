import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "HOC/GlobalThemeProvider";
import RootRouter from "Route/RootRouter";
import {Link} from "react-router-dom";
import TaskList from "../../Scenes/TaskList/TaskList";


const StyledMainLayout = styled.div`
  width: 100%;
  height: 100%;
  
  .header {
    background-color: ${props => props.theme.navbarBackgroundColor};
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 25px;
    color: ${props => props.theme.accentTextColor};
  }

  .content {
    width: 100%;
    height: calc(100vh - 100px);
    overflow: auto;
  }

  .footer {
    background-color: ${props => props.theme.navbarBackgroundColor};
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.appBaseFontColor};
  }
`

const SecondaryLayout = (props) => {
  const setGreen = useContext(ThemeContext);

  return (
    <StyledMainLayout>
      <div className={"header"}>
        <Link to={"/tasks/taskList"}>TaskList</Link>
        <TaskList/>
      </div>
      <div className={"content"}>
        {props.children}
      </div>
    </StyledMainLayout>
  )
}

export default SecondaryLayout