import axios from "axios";

export default async function getSettingsSta(req, res) {
  await axios.get(`http://${process.env.MOTION}/settings/sta`)
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
