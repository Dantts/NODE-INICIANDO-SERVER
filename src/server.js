import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

//Inicializando express.
const app = express();

//Setando tipo de corpo que iremos receber nas requisições.
app.use(bodyParser.json());
app.use(cors());
//Criando primeiro endpoint.
app.get("/", (req, res) => {
  return res.send("Hello world.");
});

//Criando arquivo de rotas.
app.use("/api", router);

//Ligar o server, ele iniciará na porta configurada no primeiro parâmetro.
app.listen(9000, () => {
  console.log("Server starting on port 9000");
});
