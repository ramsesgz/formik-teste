import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateUsername(value) {
  let error;
  console.log(value);
  if (value === "admin") {
    error = "Nice try!";
  }
  return error;
}

export const FieldLevelValidationExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: "",
        email: "",
        form: ""
      }}
      onSubmit={values => {
        // same shape as initial values
        alert(JSON.stringify(values));
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="username" validate={validateUsername} />
          {errors.username && touched.username && <div>{errors.username}</div>}

          <button type="button" onClick={() => validateField("username")}>
            Check Username
          </button>
          <button
            type="button"
            onClick={() => validateForm().then(() => console.log("blah"))}
          >
            Validate All
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
ReactDOM.render(
  <FieldLevelValidationExample />,
  document.getElementById("root")
);
