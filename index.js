const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const superagent = require("superagent");
const {
  getPerfectState,
  sumDigits,
  getPrimeState,
  getProperties,
} = require("./helpers");

dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

app.use(morgan("dev"));

async function getFunFact(query) {
  const res = await superagent
    .get(`http://numbersapi.com/${query}/math`)
    .type("text/plain");
  console.log(res.text);

  return res.text;
}

function getNumberProperties(num) {
  const is_prime = getPrimeState(+num);
  const is_perfect = getPerfectState(+num);
  const digit_sum = sumDigits(num);

  return { is_prime, is_perfect, digit_sum };
}

app.route("/api/classify-number").get(async (req, res) => {
  const query = req.query.number;

  if (!Number.isFinite(+query) || !Number.isInteger(+query))
    return res.status(400).json({
      number: "alphabet",
      error: true,
    });

  const fun_fact = await getFunFact(query);
  const properties = getNumberProperties(query);
  const prop = getProperties(query);

  res.status(200).json({
    number: +query,
    ...properties,
    properties: prop,
    fun_fact,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
