const options = { method: "GET" };

fetch(
  "https://testnets-api.opensea.io/api/v1/asset_contract/0x381748c76f2b8871afbbe4578781cd24df34ae0d",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
