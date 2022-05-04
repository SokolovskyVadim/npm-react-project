import React, {useContext, useState} from "react";

import styled from 'styled-components';
import fakeServerAPI from "api/fakeServerInstance";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "store/actions/user";

import {Formik, Form, Field, FieldArray} from "formik";
import FormikInput from "Components/formikFields/FormikInput";
import LoginCard from "./Components/LoginForm";
import RegisterCard from "./Components/RegisterForm";
import {useLocation} from "react-router-dom";

const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loginCard{
    width: 400px;
    height: 300px;
    background-color: ${props => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;

    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ${props => props.theme.accentBackgroundColor};
      font-size: 25px;
      line-height: 30px;
      color: ${props => props.theme.accentTextColor};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .cardBody {
      padding: 10px 20px;
      box-sizing: border-box;
      color: ${props => props.theme.appBaseFontColor};
      
      .nameSpan{
        cursor: pointer;
      }
    }

    .cardFooter {
      padding: 10px 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  const toggleCardMode = () => {
    setIsLogin(!isLogin);
  }

  const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const setUserName = (values, setFieldValue) => (emailText) => {
    setFieldValue("userName", emailText.split("@")[0])
  }

  const loginUser = () => {
    fakeServerAPI.post("/login", {
      "email": formValues.email,
      "password": formValues.password
    }).then((response) => {
      dispatch(userLoggedIn({
        userName:"email",
        userRoles:["regularUser"],
        isLoggedIn: response.data.accessToken
      }))
    })
    .catch((error) => {
      setError(error.response.statusText);
      console.log("api call catch", error.response.statusText);
    })
  }

  return (
    <React.Fragment>
      <StyledLoginHolder>
        <div className={"loginCard"}>
          <div className={'cardHeader'}>
            Login
          </div>
          <div className={'cardBody'}>
            <Formik initialValues={{
              email: "olivier@mail.com",
              password:"bestPassw0rd",
              userName:"",
              sobachki: [],
              onlyForRegister: "",
              changableName: "Pavel"
            }}
                    enableReinitialize
                    validate={(formValues) => {
                      console.log('form values', formValues);
                      const errorObj = {};
                      let isValid = true;

                      if (!validateEmail(formValues.email)) {
                        isValid = false;
                        errorObj.email = "This is not email";
                      }

                      if (!isValid) return errorObj
                    }}
                    onSubmit={
                      ({ email, password }) => {
                      dispatch(
                        () => { {email, password}}
                      ).then(() => {
                        console.log("another action");
                      });
                    }}
                    render={({values, setFieldValue}) => {
                      return (
                        <Form>
                          {isLogin
                            ?
                            <LoginCard toggleCardMode={toggleCardMode} values={values}/>
                            :
                            <RegisterCard toggleCardMode={toggleCardMode}/>
                          }
                        </Form>
                      )}}/>
          </div>
          <div className={'cardFooter'}>
            <button onClick={toggleCardMode}>
              Register
            </button>
          </div>
        </div>
      </StyledLoginHolder>
    </React.Fragment>
  )
}

export default Login