import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./style.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Request api here (data)
  };
  return (
    <div className="login-wrap container pb-5">
      <div className="border w-50 mx-auto p-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              {...register("username", {
                required: true,
              })}
            />
            {errors?.username?.type === "required" && (
              <p className="text-danger mt-2">Name is required</p>
            )}
          </Form.Group>
          {/* Pass */}
          <Form.Group className="mb-3" controlId="mainPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className=" text-danger mt-2">Password is required</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className=" text-danger mt-2">Password Require 6 character</p>
            )}
          </Form.Group>
          {/* Confirm pass */}
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("passwordtwo", {
                required: true,
              })}
            />
            {errors?.passwordtwo?.type === "required" && (
              <p className=" text-danger mt-2">This feild is required</p>
            )}
          </Form.Group>
          {/* Submit */}
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
