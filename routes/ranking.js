import express from "express";
import Survey from "../models/Survey.js";

const router = express.Router();

router.get("/rankings", async (req, res) => {
  const { wave, university } = req.query;
  try {
    let survey = [];
    if (wave & !university) {
      survey = await Survey.find({ wave: wave });
      
    } if (!wave & university){
      survey = await Survey.find({ university: university });
      
    } if (wave & university){
      survey = await Survey.find({ wave: wave, university: university });
      
    } 
    else {
      survey = await Survey.find();
    }
    if (survey.length != 0){
      let categoryRanking = [];
      let waveRanking = [];
      let totalGeneral = [];

      for (let j = 0; j < survey.length; j++) {
        for(let i = 0; i < survey[j].rows.length; i++) {
          const surveyRow = survey[j].rows[i];
          const studentRanking = {
            totalC1: surveyRow[0].question01 
                    + surveyRow[0].question02
                    + surveyRow[0].question03
                    + surveyRow[0].question04
                    + surveyRow[0].question05
                    + surveyRow[0].question06
                    + surveyRow[0].question07
                    + surveyRow[0].question08
                    + surveyRow[0].question09
                    + surveyRow[0].question10,
            totalC2: surveyRow[0].question11 * 2
                    + surveyRow[0].question12 * 2
                    + surveyRow[0].question13 * 2
                    + surveyRow[0].question14 * 2
                    + surveyRow[0].question15 * 2
                    + surveyRow[0].question16 * 2
                    + surveyRow[0].question17 * 2
                    + surveyRow[0].question18 * 2
                    + surveyRow[0].question19 * 2
                    + surveyRow[0].question20 * 2
                    + surveyRow[0].question21 * 2
                    + surveyRow[0].question22 * 2
                    + surveyRow[0].question23 * 2
                    + surveyRow[0].question24 * 2
                    + surveyRow[0].question25 * 2,
              totalC3: surveyRow[0].question26 * 3
                    + surveyRow[0].question27 * 3
                    + surveyRow[0].question28 * 3
          }
          categoryRanking.push(studentRanking)
                   
          totalGeneral = {
            fullName: surveyRow[0].fullName,
            wave: survey[j].wave,
            university: survey[j].university,
            categoryRanking: categoryRanking,
            total: studentRanking.totalC1 + studentRanking.totalC2 + studentRanking.totalC3
          }
          
          waveRanking.push(totalGeneral);
        }
      }
      res.status(200).json(waveRanking);
    }
    }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;