import axios from "axios";
import fs from "fs";

export default async function getSettings(req, res) {
  await axios
    .get(`http://${process.env.MOTION}/settings`)
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
