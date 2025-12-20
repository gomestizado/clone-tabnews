import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);

  const timestamp = Date.now();
  const dataAtual = new Date(timestamp).toLocaleString("pt-BR");
  const uptime = process.uptime();

  response.status(200).json({
    status: "ok",
    message: "API is running smoothly",
    timestamp: dataAtual,
    uptime: uptime,
  });
}

export default status;
