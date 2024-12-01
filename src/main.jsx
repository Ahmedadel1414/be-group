import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BeGroup from "./components/Pages/BeGroup";
import BeGroupAboutUs from "./components/Pages/BeGroupAboutUs";
import BeGroupServices from "./components/Pages/BeGroupServices";
import BeGroupOurWorks from "./components/Pages/BeGroupOurWorks";
import BeGroupContactUs from "./components/Pages/BeGroupContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BeGroup />,
        errorElement: <h1>404 Not found</h1>,
      },
      {
        path: "/about-us",
        element: <BeGroupAboutUs />,
      },
      {
        path: "/our-services",
        element: <BeGroupServices />,
      },
      {
        path: "/our-works",
        element: <BeGroupOurWorks />,
      },
      {
        path: "/our-contacts",
        element: <BeGroupContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
