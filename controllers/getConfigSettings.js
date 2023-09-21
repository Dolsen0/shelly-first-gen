import axios from "axios";

export default async function getConfigSettings(req, res) {
  await axios.get(`http://192.168.33.1/settings`)
  .then((response) => {
    let hostname = response.data.device.hostname;
    // fs.appendFileSync('.env', `HOSTNAME=${hostname}\n`, 'utf8');
    res.send(response.data);
    })
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
      console.log(error);
    });
}
