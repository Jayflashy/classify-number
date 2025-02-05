const { getNumberProperties, getFunFact } = require("../services/numberService");

const classifyNumber = async (req, res, next) => {

  const { number } = req.query;
  // Validate input
   if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({ number: "alphabet", error: true });
  }
  const num = parseInt(number);

	// get number properties
	const properties =  getNumberProperties(num);
	const funFact = await getFunFact(num);
  try {
    // success response
    return res.status(200).json({
			number: num,
			is_prime: properties.isPerfect,
			is_perfect: properties.isPerfect,
			properties: properties.classifications,
			digit_sum: properties.digitSum,  // sum of its digits
			fun_fact: funFact //fun fact
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
