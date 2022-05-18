import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacks.repositories";
import { FeedbackCreateData } from "../feedbacks.repositories";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  constructor() {}
  async create(feedback: FeedbackCreateData): Promise<any> {
      const {type, comment, screenshot} = feedback
      return await prisma.feedback.create({
        data: {
          comment,
          type,
          screenshot,
        },
      });
  }
}
