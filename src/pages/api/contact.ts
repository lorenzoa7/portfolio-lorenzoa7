import { ContactData } from '@/app/components/Contact/types'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function ContactAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { fullName, email, message } = (await JSON.parse(
    req.body,
  )) as ContactData<string>

  const user = process.env.EMAIL_USER

  const data = {
    fullName,
    email,
    message,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'lorenzo.acetii@gmail.com',
      replyTo: email,
      subject: `Contact form submission from ${fullName}`,
      html: `
      <p>Name: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    })

    return res.status(200).json({ message: 'success' })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Could not send the email. Please try again.' })
  }
}
