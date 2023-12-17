import {
  QrCodeIcon,
  Squares2X2Icon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navToCamera = () => {
    navigate("/cameraScan");
  };

  return (
    <div className="relative w-[100%] h-[10%]">
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center space-x-4 bg-sky-400">
        <HomeIcon className="w-16 h-full px-4 hover:bg-sky-300" />
        <QrCodeIcon className="w-16 h-full px-4 hover:bg-sky-300" onClick={navToCamera} />
        <Squares2X2Icon className="w-16 h-full px-4 hover:bg-sky-300" />
      </div>
    </div>
  );
};

export default Navigation;
