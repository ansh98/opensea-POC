const options = { method: "GET", headers: { accept: "application/json" } };

fetch(
  "https://testnets-api.opensea.io/api/v1/collection/opensea-creature/stats",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
