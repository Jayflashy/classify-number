
const classifyNumber = async(req, res, next) => {

    
    try {
        res.status(200).json({ status:'error', message: 'Internal server error' });
        
    } catch (error) {
      console.error('Error in classifyNumber:', error);
      res.status(500).json({ status:'error', message: 'Internal server error' });
    }
  }
  
  module.exports = {
    classifyNumber
  };