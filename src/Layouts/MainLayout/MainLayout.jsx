import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {ThemeContext} from "HOC/GlobalThemeProvider";
import RootRouter from "Route/RootRouter";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


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
    font-family: "supermercado";
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

const MainLayout = (props) => {
  const setGreen = useContext(ThemeContext);
  const apiError = useSelector(state => state.appState.APIerror);//old text
  const dispatch = useDispatch();

  return (
    <StyledMainLayout>
      <button onClick={() => {dispatch({type: "Reducer1type1"})}}>Reducer1type1</button>
      <button onClick={() => {dispatch({type: "Reducer2type1"})}}>Reducer2type1</button>
      <div className={"header"}>
        {apiError && <div>apiError</div>}
        Header
        <button onClick={setGreen}>Switch theme</button>
        <Link to={"/taskList"}>TaskList</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <div className={"content"}>
          <RootRouter/>
      </div>
      <div className={"footer"}>
        Footer
      </div>
    </StyledMainLayout>
  )
}

export default MainLayout