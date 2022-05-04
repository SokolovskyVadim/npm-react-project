import React from "react";
import {useField} from "formik";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  input {
    background-color: ${props => (props.error && props.touched) ? "red" : "aliceblue"};
  }
`

const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name);

  return <StyledInputWrapper error={meta.error} touched={meta.touched}>
    <input placeholder={props.name} name={props.name} onChange={(e) => {
      field.onChange(e);
      props.additionalOnChangeAction ? props.additionalOnChangeAction(e.target.value) : () => {};
    }} onBlur={field.onBlur} value={field.value} {...props}/>
    {(meta.error && meta.touched) && meta.error}
  </StyledInputWrapper>
}

export default FormikInput