function responses(statusCode, data, message, res) {
  res.status(statusCode).json({
    payload: {
      statusCode: statusCode,
      data: data,
    },
    message: message,
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  });
}

module.exports = responses;
