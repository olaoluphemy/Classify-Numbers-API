const { getFunFact, getNumberProperties } = require("../helpers");

exports.getNumber = async function (req, res) {
  const query = req.query.number;

  if (!Number.isFinite(+query) || !Number.isInteger(+query))
    return res.status(400).json({
      number: query || "",
      error: true,
    });

  const fun_fact = await getFunFact(query);
  const properties = getNumberProperties(query);

  res.status(200).json({
    number: +query,
    ...properties,
    fun_fact,
  });
};
