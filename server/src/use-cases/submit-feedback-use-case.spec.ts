import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeeddback = new SubmitFeedbackUseCase(
    {
      create: createFeedbackSpy,
    },
    { sendMail: sendMailSpy }
  );

describe("Submit-feedback Use Case", () => {
  it("should be able to submit a feedback", async () => {
    
    await expect(submitFeeddback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data;image/png;base64://test.jpg'
    })).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    
    await expect(submitFeeddback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data;image/png;base64://test.jpg'
    })).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    
    await expect(submitFeeddback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data;image/png;base64://test.jpg'
    })).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    
    await expect(submitFeeddback.execute({
        type: 'BUG',
        comment: 'Tudo bugado',
        screenshot: 'test.jpg'
    })).rejects.toThrow();
  });
});
