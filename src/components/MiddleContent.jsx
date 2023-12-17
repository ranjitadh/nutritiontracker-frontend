import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { getNutrients, getCuisine } from "../request/api";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "./LoadingUi";

const MiddleContent = () => {
  const [foodInput, setFoodInput] = useState("");
  const [foodName, setFoodName] = useState("");
  const [hide, setHide] = useState(true);

  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["SearchFood", foodName],
    queryFn: () => getNutrients(foodName),
  });

  const recommandation = useQuery({
    queryKey: ["getFood"],
    queryFn: getCuisine,
  });

  useEffect(() => {
    recommandation.refetch();
  }, []);

  const handleSubmit = () => {
    setFoodName(foodInput);
    refetch().then(setHide(false));
  };

  const DataCard = ({ dataArray }) => {
    console.log(dataArray);
    const dataObject = Object.entries(dataArray[0]);

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className={hide && "hidden"}>
        <button className="float-right mx-2" onClick={() => setHide(!hide)}>
          Close
        </button>
        <table className="border w-[100%] table-auto border-spacing-0.5 border-collapse odd:bg-red-400 ">
          <tr className="bg-green-600">
            <th>Nutrients</th>
            <th>Amount</th>
          </tr>
          {dataObject.map((i, index) => {
            let [key, value] = i;
            return (
              <tr className="border text-ellipsis text-center">
                <td className="border capitalize">{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  };

  return (
    <div className="w-[100%] h-[82%] sticky">
      <div className="border rounded-full p-4 flex ">
        <input
          className="bg-transparent outline-none w-[92%] text-black"
          value={foodInput}
          placeholder="Apple"
          onChange={(e) => setFoodInput(e.target.value)}
        />
        <MagnifyingGlassIcon
          className="w-6 h-full cursor-pointer "
          onClick={handleSubmit}
        />
      </div>
      {/* display the content received from searched input */}
      <div name="container for searched data" className={hide && "hidden"}>
        <div className="h-full w-full text-black">
          {isFetching ? <Loader /> : <DataCard dataArray={data} />}
        </div>
      </div>

      {/* display the recommanded food items for today */}
      <div className="my-4 border rounded-md bg-orange-400">
        <h2 className="text-red-700 font-bold">Today's Special</h2>
        <div className="w-full flex flex-col h-full space-y-2">
          {recommandation.data?.meals.map((i) => {
            return (
              <div className="border rounded-lg space-x-4 w-full h-[80px] flex items-center bg-white">
                <img
                  src={i.strMealThumb}
                  alt={i.strMeal}
                  className="aspect-auto h-[80px] w-[80px]"
                />
                <p className=" text-black">{i.strMeal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
