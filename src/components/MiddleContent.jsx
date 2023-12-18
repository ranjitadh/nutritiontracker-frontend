import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { getNutrients, getCuisine } from "../request/api";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "./LoadingUi";

const MiddleContent = () => {
  const [foodInput, setFoodInput] = useState();
  const [foodName, setFoodName] = useState();
  const [hide, setHide] = useState(true);
  const [searchData, setSearchData] = useState(null);


  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["SearchFood", foodName],
    queryFn: () => getNutrients(foodName),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    enabled: !hide,
  });

  const recommandation = useQuery({
    queryKey: ["getFood"],
    queryFn: getCuisine,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const handleSubmit = async () => {
    setHide(false);
    setFoodName(foodInput);
    setSearchData(data);
    refetch();
  };

  const DataCard = ({ searchData }) => {
    const dataObject = Object.entries(searchData[0] || []);

    if (isLoading) {
      return <Loader />;
    };

    if (isFetching) {
      return <Loader />
    }

    if (dataObject == undefined) {
      return (<p>Data is unavialable</p>)
    };

    return (
      <div className={hide && "hidden"}>
        <button className="float-right mx-2" onClick={() => setHide(!hide)}>
          Close
        </button>
        <table className="border w-[100%] table-auto border-spacing-0.5 border-collapse odd:bg-red-400 ">
          <tbody>
            <tr className="bg-green-600">
              <th>Nutrients</th>
              <th>Amount</th>
            </tr>
            {dataObject.map((i, index) => {
              let [key, value] = i;
              return (
                <tr key={index} className="border text-ellipsis text-center">
                  <td className="border capitalize">{key}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="pt-1 w-[100%] h-[80%] overflow-y-auto">

      <div className="w-full flex items-center outline-1 outline rounded-full ">
        <input
          className="w-[90%] outline-none bg-transparent text-base border-transparent p-2 text- text-black"
          value={foodInput}
          placeholder="Foods Names"
          onChange={(e) => setFoodInput(e.target.value)}
        />
        <MagnifyingGlassIcon
          className="w-6 h-full cursor-pointer"
          onClick={() => { handleSubmit() }}
        />
      </div>

      {/* display the contet received from searched input */}
      <div name="container for searched data" className={hide ? "hidden" : ""}>
        <div className="h-full w-full text-black">
          {isFetching ? <Loader /> : (searchData ? <DataCard searchData={searchData} /> : <p>Not find</p>)}
        </div>
      </div>

      {/* display the recommanded food items for today */}
      <div className="my-4 border rounded-md bg-orange-400">
        <h2 className="text-red-700 font-bold">Today's Special</h2>
        <div className="w-full flex flex-col h-full space-y-2">
          {recommandation.data?.meals.map((i, index) => {
            return (
              <div className="border rounded-lg space-x-4 w-full h-[80px] flex items-center bg-white" key={index}>
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
