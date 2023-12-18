import {
  QrCodeIcon,
  Squares2X2Icon,
  HomeIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navToCamera = () => {
    navigate("/cameraScan");
  };

  const navToProfile = () => {
    navigate("/profile");
  }

  const navToHome = () => {
    navigate("/");
  }

  const navToDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div className="sticky bottom-0 left-0 right-0 w-[100%] h-[10%]">
      <div className="flex justify-between items-center space-x-4 h-full bg-sky-400">
        <HomeIcon className="w-16 h-full px-4 hover:bg-sky-300" onClick={navToHome} />
        <QrCodeIcon className="w-16 h-full px-4 hover:bg-sky-300" onClick={navToCamera} />
        <QueueListIcon className="w-16 h-full px-4 hover:bg-sky-300" onClick={navToDashboard} />
        <Squares2X2Icon className="w-16 h-full px-4 hover:bg-sky-300" onClick={navToProfile} />
      </div>
    </div>
  );
};

export default Navigation;
