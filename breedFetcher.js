const argv = process.argv[2]; //real input

const request = require("request");

let url = `https://api.thecatapi.com/v1/breeds/search?q=${argv}`;

request(url, (error, response, body) => {
  // console.log(typeof body);
  // console.log("res", response.body);

  if (error) {
    console.log("error:", error);
  }

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined) {
    console.log("Request body is not found.");
  } else {
    console.log(data[0]);
  }
});
