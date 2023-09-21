import axios from "axios";

export default async function getStatus(req, res){
    await axios.get("http://shellymotionsensor-60a42399405c/status")
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


// http://shellymotionsensor-60a42399405c/status