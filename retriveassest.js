const options = { method: "GET" };

fetch(
  "https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&include_orders=false",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
