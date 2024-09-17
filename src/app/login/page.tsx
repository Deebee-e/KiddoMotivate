"use client";
import { Button, Checkbox, Label } from "flowbite-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  // Formik initial values and validation schema using Yup
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white mt-[100px] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">

              <div>
                <Label htmlFor="email" className="mb-1 text-sm font-medium">
                  Email Address
                </Label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="mb-1 text-sm font-medium">
                  Password
                </Label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>


              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 mt-6"
              >
                {isSubmitting ? "Sign in..." : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>

      </div>
    </main>
  );
}


