import { Form, Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
export default function CreateUserForm({
  handleUserCreation,
  userData,
  onCancel,
}) {
  let initialValues = {
    name: "",
    email: "",
    phone: "",
    title: "",
    company: "",
  };
  if (userData) {
    initialValues = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      title: userData.title,
      company: userData.company,
    };
  }
  const validationScheme = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.string().max(10).required("Phone is required"),
    title: Yup.string().required("Title is required"),
    company: Yup.string().required("Company is needed"),
  });
  const submitHandler = (values, { resetForm }) => {
    handleUserCreation(values);
    if (!userData) {
      resetForm({
        name: "",
        email: "",
        phone: "",
        title: "",
        company: "",
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        enableReinitialize={true}
        onSubmit={submitHandler}
      >
        <Form className="w-full max-w-full mx-auto p-8">
          <h2 className="text-2xl font-semibold text-center">
            Add/Edit/Delete a User
          </h2>
          <p className="text-xl font-semibold text-center">
            Fill out the below form{" "}
          </p>
          <p className="mb-5 pb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <Field
              name="name"
              type="text"
              id="name"
              className="rounded-lg bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage className="text-red-50" name="name" />
          </p>
          <p className="mb-5 pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <Field
              name="email"
              type="text"
              id="email"
              className="rounded-lg bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage className="text-red-50" name="email" />
          </p>

          <p className="mb-5 pb-2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Phone
            </label>
            <Field
              name="phone"
              type="text"
              id="phone"
              className="rounded-lg bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage className="text-red-50" name="phone" />
          </p>
          <p className="mb-5 pb-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Title
            </label>
            <Field
              name="title"
              type="text"
              id="title"
              className="rounded-lg bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage className="text-red-50" name="title" />
          </p>
          <p className="mb-5 pb-2">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Company
            </label>
            <Field
              name="company"
              type="text"
              id="company"
              className="rounded-lg bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage className="text-red-50" name="company" />
          </p>

          <p className="mb-5 pb-4">
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Submit
            </button>
            <button type="button" onClick={() => onCancel()}>
              Cancel
            </button>
          </p>
        </Form>
      </Formik>
    </>
  );
}
