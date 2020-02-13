const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // console.log(typeof body);
      // console.log("res", response.body);

      if (error) {
        // console.log("error:", error);
        callback(error, null);
        return;
      }
      console.log(response.statusCode);
      const data = JSON.parse(body);
      if (data[0]) {
        // console.log("Request body is not found.");
        callback(null, data[0].description.trim());
      } else {
        callback(null, "No breed exists");
      }
    }
  );
};

module.exports = { fetchBreedDescription };
