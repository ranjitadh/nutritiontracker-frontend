import Header from "../components/Header";
import MiddleContent from "../components/MiddleContent";
import Navigation from "../components/Navigation";

export default function Layout() {
  return (
    <div className="w-[100dvw] flex justify-center h-screen">
      <div className="min-w-[320px] bg-indigo-300	 flex flex-col items-center">
        <Header />
        <MiddleContent />
        <Navigation />
      </div>
    </div>
  );
}