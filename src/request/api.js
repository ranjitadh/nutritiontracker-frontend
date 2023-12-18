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

const getCuisine = async () => {
  const res = await axios.request({
    method: "GET",
    url: "http://localhost:5000/cuisine"
  });
  if (res.status != 200) {
    console.log(res);
  }
  return res.data;
}

const sendPhoto = async (imageFile) => {

  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await axios.request({
    method: "POST",
    url: 'http://localhost:5000/upload',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify({ image: imageFile }),
  })
    .then(res => console.log(res.data))
    .catch(error => console.error(error));
}


export { getNutrients, getCuisine, sendPhoto };
