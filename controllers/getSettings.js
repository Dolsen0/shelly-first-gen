import axios from "axios";

export default async function getSettings(req, res) {
  await axios.get("http://192.168.33.1/settings")
    .then((response) => {
      res.send(response.data);
    })
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
      console.log(error);
    });
}
