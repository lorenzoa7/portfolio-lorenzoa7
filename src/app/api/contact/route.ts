import { ContactData } from '@/app/[lang]/components/Contact/types'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { fullName, email, message } = (await req.json()) as ContactData<string>

  const user = process.env.EMAIL_USER

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
    await transporter.sendMail({
      from: user,
      to: 'lorenzo.acetii@gmail.com',
      replyTo: email,
      subject: `Contact form submission from "${fullName}"`,
      html: `
        <p><strong>NAME:</strong> ${fullName}</p>
        <p><strong>EMAIL:</strong> ${email}</p>
        <p><strong>MESSAGE:</strong> ${message}</p>
      `,
    })

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({
        message: 'Could not send the email. Please try again.',
      }),
      { status: 500 },
    )
  }
}
