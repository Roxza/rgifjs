const axios = require("axios");
const types = ["woman", "man", "anime"];

class gifjs {
   static async getGif(type) {
      if (!type) return new Error("type is required");
      if (!types.includes(type)) return new Error("You entered a type that I do not recognize, please enter one of " + types.join(", "));
      return new Promise((resolve, reject) => {
         axios
            .get("https://api.roxza.me/v1/random?type=" + type)
            .then((getData) => {
               if (getData.data.status === true) {
                  resolve(getData.data);
               } else {
                  throw new Error("Something went wrong.");
               }
            })
            .catch((err) => {
               throw new Error("Unable to connect to website.");
            });
      });
   }
}

module.exports = gifjs;
