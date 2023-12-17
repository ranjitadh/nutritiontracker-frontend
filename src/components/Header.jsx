import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="w-[100%] h-[8%] relative">
      <div className="fixed top-0 left-0 right-0 h-[8%] z-10">
        <div className="h-[100%] bg-sky-400 flex flex-row justify-between items-center px-3">
          <Bars3Icon className="h-6 w-6 " />
          <h1 className="text-2xl font-bold">Decipher.</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
