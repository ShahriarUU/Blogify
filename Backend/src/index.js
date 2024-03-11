import app from "./app.js";
import dotenv from "dotenv";

//configure dotenv
dotenv.config({ path: "./.env" });

//listen server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server is runing port ${port}`);
});
