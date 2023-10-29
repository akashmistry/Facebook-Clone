exports.home = (req, res) => {
  res.status(200).json({
    message: "Welcome from Home ",
    error: "No error",
  });
};
