const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const twitterApiBaseUrl =
  "https://api.twitter.com/1.1/search/tweets.json";
const twitterApiToken = process.env.TWITTER_API_TOKEN;

const app = express();
app.use(cors());

app.get("/api/*", async (req, res) => {
  const url = twitterApiBaseUrl;
  const options = {
    params: req.query,
    headers: {
      Authorization: `Bearer ${twitterApiToken}`,
    },
  };
  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (ex) {
    res.send({ "error": "see server logs" });
  }
});

app.use(express.static("build"));

// Catch-all route
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
