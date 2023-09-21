import axios from "axios";

export default async function getStatus(req, res){
    await axios.get(`http://shelly${process.env.DEVICE}-${process.env.MAC}/status`)
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
