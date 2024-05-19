const BeMindful = require('../models/BeMindful');

exports.getAllBeMindful = async (req, res) => {
  try {
    const beMindfuls = await BeMindful.find();
    res.json(beMindfuls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBeMindful = async (req, res) => {
  const beMindful = new BeMindful({
    title: req.body.title,
    description: req.body.description,
    guide: req.body.guide,
  });

  try {
    const newBeMindful = await beMindful.save();
    res.status(201).json(newBeMindful);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
