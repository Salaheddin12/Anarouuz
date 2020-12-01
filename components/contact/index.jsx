import React, { useReducer } from "react";
import emailjs from "emailjs-com";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./form.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

const schema = {
  name: Joi.string().required().label("Username"),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .alphanum()
    .required()
    .label("Email"),
  subject: Joi.string().required().label("Subject"),
  body: Joi.string().required().label("body"),
};

const validate = () => {
  const options = { abortEarly: false };
  const { error } = Joi.validate(INITIAL_STATE, schema, options);
  if (!error) return null;
  const errors = {};
  error.details.map((error_) => (errors[error_.path[0]] = error_.message));
  return errors;
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    case "updateStatus":
      return { ...state, status: action.status };

    case "reset":
    default:
      return INITIAL_STATE;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setStatus = (status) => dispatch({ type: "updateStatus", status });

  const updateFieldValue = (field) => ({target}) => {
    const errors = { ...errors };
    const errorMessage = validateProperty(target);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    this.setState({ data, errors });
    dispatch({
      type: "updateFieldValue",
      field,
      value: target.value,
    });
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (errors) {
      toast.error("", errors);
    } else {
      emailjs
        .sendForm(
          "service_sqr25l7",
          "template_zlr9qts",
          event.target,
          "user_nqEALJFymPhzlFvwKQjBV"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thank you for contacting us");
          },
          (error) => {
            console.log(error.text);
            toast.error("something went wrong");
          }
        );
    }
  };

  if (state.status === "SUCCESS") {
    return (
      <p className={styles.success}>
        Message sent!
        <button
          type="reset"
          onClick={() => dispatch({ type: "reset" })}
          className={`${styles.button} ${styles.centered}`}
        >
          Reset
        </button>
      </p>
    );
  }

  return (
    <>
      <ToastContainer />
      {state.status === "ERROR" && (
        <p className={styles.error}>Something went wrong. Please try again.</p>
      )}
      <form
        className={`${styles.form} ${
          state.status === "PENDING" && styles.pending
        }`}
        onSubmit={handleSubmit}
      >
        <div className={styles.fields}>
          <label>
            name
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={updateFieldValue("name")}
            />
          </label>
          <label>
            email
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={updateFieldValue("email")}
            />
          </label>
          <label>
            subject
            <input
              type="text"
              name="subject"
              value={state.subject}
              onChange={updateFieldValue("subject")}
            />
          </label>
          <label>
            message
            <textarea
              name="body"
              value={state.body}
              onChange={updateFieldValue("body")}
            />
          </label>
        </div>
        <button
          type="submit"
          defaultValue="Send Message"
          className={styles.button}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
