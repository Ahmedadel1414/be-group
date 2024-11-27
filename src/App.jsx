import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BeGroup from "./components/BeGroup";
import BeGroupAboutUs from "./components/BeGroupAboutUs";
import BeGroupServices from "./components/BeGroupServices";
import BeGroupOurWorks from "./components/BeGroupOurWorks";
import BeGroupContactUs from "./components/BeGroupContactUs";

const router = createBrowserRouter([
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
