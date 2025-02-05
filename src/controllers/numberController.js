
const classifyNumber = async (req, res, next) => {

  const { number } = req.query;
  const num = parseInt(number);
	
  //check that number if provided
	if (!number) {
    return res.status(400).json({
      number: "missing number",
      error: true
    });
  }
  // Validate input
  if (isNaN(num) || !Number.isInteger(num)) {
    return res.status(400).json({
      error: true,
      number: "Invalid number",
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
      error: true,
      number: "Internal server error",
    });
  }
};

module.exports = {
  classifyNumber,
};
