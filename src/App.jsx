import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { index: true, element: <h1>Home</h1> },
                { path: "/courses", element: <h1>Courses</h1> },
                { path: "/blogs", element: <h1>Blogs</h1> },
                { path: "/aboutus", element: <h1>About us</h1> },
                { path: "/register", element: <RegisterPage /> },
                { path: "/login", element: <h1>login</h1> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
