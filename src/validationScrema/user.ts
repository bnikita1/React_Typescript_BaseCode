import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Please enter valid email address.").required("Email is Required"),
  password: Yup.string().required("Password is required."),
  acceptTerms: Yup.boolean().oneOf([true], "Please accept term and condition.")
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required")
});
export { SignupSchema, LoginSchema, ForgotPasswordSchema };
