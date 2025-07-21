
import axios from "axios";

axios
  .get("https://reqres.in/api/users?page=2")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
