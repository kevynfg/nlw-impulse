import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

export class NodemailerMailAdapter implements MailAdapter {
    private readonly transport: ReturnType<typeof nodemailer.createTransport>
    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "bcc1851ca79ad7",
              pass: "5ae071306e14c7",
            },
          });
    }
  async sendMail({body, subject}: SendMailData) {
    await this.transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "teste@testao.com",
      subject,
      html: body
    });
  }
}
