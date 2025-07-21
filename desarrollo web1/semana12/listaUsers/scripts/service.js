import axios from "axios";

axios
  .get("")
  .then((response) => console.log(response.json))
  .catch((error) => console.log(error));
