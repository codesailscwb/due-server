import express from "express";
import XLSLines from "../models/XLSLines.js";

const router = express.Router();

router.get("/xlslines", async (req, res) => {
  const { wave } = req.query;

  try {
    if (wave) {
      const xlslines = await XLSLines.find({ wave: wave });
      res.status(200).json(xlslines);
    } else {
      const xlslines = await XLSLines.find();
      res.status(200).json(xlslines);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/xlslines", async (req, res) => {
  const xlslines = new XLSLines(req.body);
  try {
    const savedXLSlines = await xlslines.save();
    res.status(201).json(savedXLSlines);
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