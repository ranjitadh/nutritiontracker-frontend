import axios from "axios";

const getNutrients = async (foodName) => {
  const res = await axios.request({
    method: "GET",
    url: `http://localhost:5000/nutrients/${foodName}`,
  });
  if (res.status != 200) {
    console.log(res);
  }
  return res.data;
};

const getCuisine = async() => {
  const res = await axios.request({
    method:"GET",
    url:"http://localhost:5000/cuisine"
  });
  if(res.status !=200){
    console.log(res);
  }
  return res.data;
}




export { getNutrients, getCuisine };
