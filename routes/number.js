const { getFunFact, getNumberProperties } = require("../helpers");

exports.getNumber = async function (req, res) {
  const queryParam = req.query.number;

  if (
    !queryParam ||
    !Number.isFinite(+queryParam) ||
    !Number.isInteger(+queryParam)
  )
    return res.status(400).json({
      number: queryParam || "",
      error: true,
    });

  const fun_fact = await getFunFact(queryParam);
  const properties = getNumberProperties(queryParam);

  res.status(200).json({
    number: +queryParam,
    ...properties,
    fun_fact,
  });
};
