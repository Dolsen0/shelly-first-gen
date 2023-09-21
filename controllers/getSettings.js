import axios from "axios";
import fs from "fs";

export default async function getSettings(req, res) {
  await axios
    .get(`http://shelly${process.env.DEVICE}-${process.env.MAC}/settings`)
    .then((response) => {
      let hostname = response.data.device.hostname;
      // fs.appendFileSync('.env', `HOSTNAME=${hostname}\n`, 'utf8');
      res.send(response.data);
      console.log(hostname);
    })
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.log(error);
    });
}
