exports.getUserDetails = function (_req, res) {
  const data = {
    email: "bidesim8@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/olaoluphemy/Information-API",
  };

  res.status(200).json(data);
};
