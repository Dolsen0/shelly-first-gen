import axios from "axios";

export default async function getStatus(req, res){
    // await axios.get(`http://${process.env.MOTION}/status`)
    await axios.get(`http://192.168.33.1/status`)
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



// IP for new devices
// http://192.168.33.1 