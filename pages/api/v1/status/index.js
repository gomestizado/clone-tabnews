import Server from "next/dist/server/base-server";

function status(request, response) {
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
