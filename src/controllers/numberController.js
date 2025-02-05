const classifyNumber = async (req, res, next) => {
  const { number } = req.query;
  const num = parseInt(number);

  // Validate input
  if (isNaN(num)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid number provided",
    });
  }


  try {
    
    // success response
    return res.status(200).json({
      status: "success",
      message: "Number classified successfully",
    });
  } catch (error) {
    console.error("Error in classifyNumber:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

module.exports = {
  classifyNumber,
};
