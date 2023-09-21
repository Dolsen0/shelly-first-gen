import axios from "axios";

export default async function getSettingsSta(req, res) {
  await axios.get(`http://shelly${process.env.DEVICE}-${process.env.MAC}/settings/sta`)
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
