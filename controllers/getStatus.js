import axios from "axios";

export default async function getStatus(req, res){
    await axios.get("http://192.168.33.1/status")
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
