import axios from "axios";

export default async function getMotionDark(req, res) {
    const url = "http://shellyplugus-c049ef88a8ac/rpc/Switch.Set?id=0%26on=true"
  await axios
    .get(
      `http://shelly${process.env.DEVICE}-${process.env.MAC}/settings/actions?index=0&name=motion_on&enabled=true&urls[]=${url}`
    )
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

/*

This endpoints configured motion detetion and triggers a url event.
Current - it hits an endpoint that communicates to a Shelly Smart Plug
to turn on a lamp. 

note: endpoint must be hit in order for action to be saved into motion detector.

Todo: Create a new action template that allows for more modularity


*/