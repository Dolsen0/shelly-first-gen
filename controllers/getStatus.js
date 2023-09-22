import axios from "axios";

export default async function getStatus(req, res){
    await axios.get(`http://shelly${process.env.DEVICE}-${process.env.MAC}/status`)
    .then((response) => {
      const sensor = response.data.sensor;
      res.send(response.data);
      console.log(JSON.stringify(sensor, null, 2));
    })
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
      console.log(error);
    });
}
