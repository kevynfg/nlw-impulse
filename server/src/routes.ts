import express from 'express'
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks.repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";



export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
   try {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)
    const feedback = await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })
    
    res.status(201).json({ data: feedback });
   } catch (error) {
       console.error(error)
       return res.status(500).send()
   }
  });