import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitHandler = (data) => {
        if (data.password !== data.confirmation) return;
    };

    return (
        <div className="flex flex-col w-full items-center py-10">
            <h1 className="text-3xl text-center mt-4 font-bold ">Register</h1>
            <form
                noValidate
                method="post"
                className="m-5 md:w-[30rem] w-[90%]"
                onSubmit={handleSubmit(submitHandler)}
            >
                <Stack spacing={2}>
                    <TextField
                        {...register("username", {
                            required: "Username is required",
                        })}
                        label="Username"
                        type="text"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        {...register("email", {
                            required: "email is required",
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register("password", {
                            required: "password is require",
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        {...register("confirmation", {
                            required: "confirm your password",
                        })}
                        error={!!errors.confirmation}
                        helperText={errors.confirmation?.message}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: 200, p: 1 }}
                    >
                        register
                    </Button>
                </Stack>
            </form>

            <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
