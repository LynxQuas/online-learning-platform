import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitHandler = (data) => {
        console.log(data);
        return;
    };

    return (
        <div className="flex flex-col w-full items-center py-10">
            <h1 className="text-3xl text-center mt-4 font-bold ">Login</h1>
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
                        label="Password"
                        type="password"
                        {...register("password", {
                            required: "password is require",
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: 200, p: 1 }}
                    >
                        Login
                    </Button>
                </Stack>
            </form>

            <p className="text-center">
                Dont have an account?{" "}
                <Link to="/register" className="text-blue-600">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
