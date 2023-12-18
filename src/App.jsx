import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/LoadingUi";
const Dashboard = lazy(() => import("./pages/Dashboard"));
import Home from "./pages/Home";
const Profile = lazy(() => import("./pages/Profile"));
const Scan = lazy(() => import("./pages/Scan"));

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense falback={<Loader />} >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cameraScan" element={<Scan />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}