const Therapy = require('../models/Therapy');

exports.getAllTherapies = async (req, res) => {
  try {
    const therapies = await Therapy.find();
    res.json(therapies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTherapy = async (req, res) => {
  const therapy = new Therapy({
    title: req.body.title,
    description: req.body.description,
    therapist: req.body.therapist,
  });

  try {
    const newTherapy = await therapy.save();
    res.status(201).json(newTherapy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
