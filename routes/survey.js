import express from "express";
import Survey from "../models/Survey.js";

const router = express.Router();

router.get("/surveys", async (req, res) => {
  const { wave, university } = req.query;

  try {
    if (wave & !university) {
      const survey = await Survey.find({ wave: wave });
      res.status(200).json(survey);
    } if (!wave & university){
      const survey = await Survey.find({ university: university });
      res.status(200).json(survey);
    } else {
      const survey = await Survey.find();      
      res.status(200).json(survey);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/surveys", async (req, res) => {
  const survey = new Survey(req.body);
  try {
    const savedSurvey = await survey.save();
    res.status(201).json(savedSurvey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.delete("/surveys/:wave", async (req, res) => {
//   const { wave } = req.params;
//   try {
//     const deletedSurvey = await Survey.deleteMany({ wave: wave });
//     if (!deletedSurvey) {
//       return res.status(404).json({ message: 'No surveys with the specified wave found' });
//     }
//     res.status(200).json({ message: `Deleted ${deletedSurveys.deletedCount} surveys with the specified wave` });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default router;