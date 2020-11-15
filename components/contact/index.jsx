// import { SMTPClient } from "emailjs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  //   const client = new SMTPClient({
  //     user: "user",
  //     password: "password",
  //     host: "smtp.gmail.com",
  //     ssl: true,
  //   });

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // client.send(
            //   {
            //     text: values.message,
            //     from: `${values.name} <${values.email}>`,
            //     to: "salah <ab.salah012@gmail.com>",
            //     subject: "testing emailjs",
            //   },
            //   (err, message) => {
            //     console.log(err || message);
            //   }
            // );
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field
              id="email"
              className={styles.inputField}
              aria-label="email"
              component="input"
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage component={Error} name="email" />
            <Field
              type="text"
              className={styles.inputField}
              name="name"
              component="input"
              aria-label="name"
              placeholder="Full name*"
            />
            <ErrorMessage component={Error} name="name" />
            <Field
              className={styles.inputField}
              component="textarea"
              aria-label="message"
              id="message"
              rows="8"
              type="text"
              name="message"
              placeholder="Message*"
            />
            <ErrorMessage component={Error} name="message" />
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.btn}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
