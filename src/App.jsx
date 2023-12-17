import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./pages/Layout";
import Scan from "./pages/Scan";
import Setting from "./pages/Setting";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/LoadingUi";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense falback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route path="/cameraScan" element={<Scan />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}
