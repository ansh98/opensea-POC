const options = { method: "GET", headers: { accept: "application/json" } };

fetch(
  "https://testnets-api.opensea.io/api/v1/events?only_opensea=false&limit=20",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
