import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./style.css";
import Select from "react-select";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Request api here (data)
  };
  const framwork = [
    {
      value: 1,
      label: "React",
    },
    {
      value: 2,
      label: "Angular",
    },
    {
      value: 3,
      label: "Vue",
    },
  ];

  return (
    <div className="container">
      <div className="border w-50 mx-auto p-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-danger mt-2">Name is required</p>
            )}
          </Form.Group>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("mail", {
                required: true,
              })}
            />
            {errors?.mail?.type === "required" && (
              <p className="text-danger mt-2">Email is required</p>
            )}
          </Form.Group>
          {/* Pass */}
          <Form.Group className="mb-3" controlId="لاasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("pass", {
                required: true,
                minLength: 6,
                value: "",
              })}
            />
            {errors?.pass?.type === "required" && (
              <p className=" text-danger mt-2">Password is required</p>
            )}
            {errors?.pass?.type === "minLength" && (
              <p className=" text-danger mt-2">Password Require 6 character</p>
            )}
          </Form.Group>
          {/* Confirm pass */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("passtwo", {
                required: true,
              })}
            />
            {errors?.passtwo?.type === "required" && (
              <p className=" text-danger mt-2">This feild is required</p>
            )}
          </Form.Group>
          {/* Select */}
          <Controller
            name="select"
            control={control}
            render={({ field }) => <Select {...field} options={framwork} />}
            {...register("select", {
              required: true,
            })}
          />
          {errors?.select?.type === "required" && (
            <p className=" text-danger mt-2">This feild is required</p>
          )}
          <Form.Group className="my-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to tirms and conditions"
            />
          </Form.Group>
          {/* Submit */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default SigninForm;
