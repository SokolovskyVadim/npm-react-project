import {FieldArray, Form, Formik} from "formik";
import fakeServerAPI from "api/fakeServerInstance";
import {userLoggedIn} from "store/actions/user";
import FormikInput from "Components/formikFields/FormikInput";
import React, {useState} from "react";
import styled from "styled-components";

const LoginCard = (props) => {
  const [openInputName, setOpenInputName] = useState(false);

  return (
    <React.Fragment>
      <FormikInput name="email"/>
      <FormikInput name="userName"/>
      <FormikInput name="password"/>
      <div>
        Hello
        {(openInputName === "changableName") ?
          <FormikInput name={"changableName"}/>
          :
          <span className={"nameSpan"} onClick={() => {setOpenInputName("changableName")}}>{props.values.changableName}</span>
        }
        , if it is not you click on you name to change it.
        Hello
        {(openInputName === "changableName2") ?
          <FormikInput name={"changableName2"}/>
          :
          <span className={"nameSpan"} onClick={() => {setOpenInputName("changableName2")}}>{props.values.changableName}</span>
        }
        , if it is not you click on you name to change it.
        Hello
        {(openInputName === "changableName3") ?
          <FormikInput name={"changableName3"}/>
          :
          <span className={"nameSpan"} onClick={() => {setOpenInputName("changableName3")}}>{props.values.changableName}</span>
        }
        , if it is not you click on you name to change it.
      </div>
      <FieldArray name={"sobachki"} render={arrayHelpers => (
        <React.Fragment>
          {props.values.sobachki.map((field, index) => {
            return(
              <React.Fragment>
                <FormikInput name={`sobachki.${index}`}/>
                <button onClick={() => {arrayHelpers.remove(index)}}>Net sobachki</button>
              </React.Fragment>
            )
          })}
          <button onClick={() => {arrayHelpers.push("")}}>Est eshe sobachki</button>
        </React.Fragment>
      )}/>
      <button>Form login submit</button>
    </React.Fragment>
  )
}

export default LoginCard