// sets STA mode with dhcp

import axios from "axios";

export default async function getSTA(req, res) {
  await axios.get(`http://${process.env.MOTION}/settings/sta?enabled=1&ssid=${process.env.SSID}&key=${process.env.KEY}&ipv4_method=dhcp`)
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
This endpoint connects your first generation shelly device to a
wifi hotspot. Requires an SSID and password. Must be connected to 
Shelly Device directly - AP mode and not connected to your home wifi.
*/