// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import AppLayout from "./layouts/app-layout";
// import ProtectedRoute from "./components/protected-route";
// import { ThemeProvider } from "./components/theme-provider";

// import LandingPage from "./pages/landing";
// import Onboarding from "./pages/onboarding";
// import PostJob from "./pages/post-job";
// import JobListing from "./pages/jobListing";
// import MyJobs from "./pages/my-jobs";
// import SavedJobs from "./pages/saved-jobs";
// import JobPage from "./pages/job";


// import "./App.css";

 
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <LandingPage />,
//       },
//       {
//         path: "/onboarding",
//         element: (
//           <ProtectedRoute>
//             <Onboarding />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/jobs",
//         element: (
//           <ProtectedRoute>
//             <JobListing />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/post-job",
//         element: (
//           <ProtectedRoute>
//             <PostJob />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/my-jobs",
//         element: (
//           <ProtectedRoute>
//             <MyJobs />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/saved-jobs",
//         element: (
//           <ProtectedRoute>
//             <SavedJobs />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/job/:id",
//         element: (
//           <ProtectedRoute>
//             <JobPage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   );
// }

// export default App;
// import { useState, useEffect } from "react"
// import { RouterProvider, createBrowserRouter } from "react-router-dom"

// import AppLayout from "./layouts/app-layout"
// import ProtectedRoute from "./components/protected-route"
// import { ThemeProvider } from "./components/theme-provider"
// import Preloader from "./pages/preloader"   // 👈 splash screen

// import LandingPage from "./pages/landing"
// import Onboarding from "./pages/onboarding"
// import PostJob from "./pages/post-job"
// import JobListing from "./pages/jobListing"
// import MyJobs from "./pages/my-jobs"
// import SavedJobs from "./pages/saved-jobs"
// import JobPage from "./pages/job"

// import "./App.css"


// // ✅ router setup
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <LandingPage /> },
//       {
//         path: "/onboarding",
//         element: (
//           <ProtectedRoute>
//             <Onboarding />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/jobs",
//         element: (
//           <ProtectedRoute>
//             <JobListing />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/post-job",
//         element: (
//           <ProtectedRoute>
//             <PostJob />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/my-jobs",
//         element: (
//           <ProtectedRoute>
//             <MyJobs />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/saved-jobs",
//         element: (
//           <ProtectedRoute>
//             <SavedJobs />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/job/:id",
//         element: (
//           <ProtectedRoute>
//             <JobPage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ])


// function App() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // ⏳ simulate app init (auth check, theme load, etc.)
//     const timer = setTimeout(() => setLoading(false), 2500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       {loading ? (
//         // 🚀 Preloader runs first
//         <Preloader onFinish={() => setLoading(false)} />
//       ) : (
//         // ✅ Then app router takes over
//         <RouterProvider router={router} />
//       )}
//     </ThemeProvider>
//   )
// }

// export default App
import { useState, useEffect } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import AppLayout from "./layouts/app-layout"
import ProtectedRoute from "./components/protected-route"
import { ThemeProvider } from "./components/theme-provider"
import Preloader from "./pages/preloader"   // 👈 splash screen

import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
import PostJob from "./pages/post-job"
import JobListing from "./pages/jobListing"
import MyJobs from "./pages/my-jobs"
import SavedJobs from "./pages/saved-jobs"
import JobPage from "./pages/job"

import "./App.css"

// ✅ router setup
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ⏳ simulate app init (auth check, theme load, etc.)
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {loading ? (
        // 🚀 Preloader runs first (once)
        <Preloader />
      ) : (
        // ✅ Then app router takes over
        <RouterProvider router={router} />
      )}
    </ThemeProvider>
  )
}

export default App

