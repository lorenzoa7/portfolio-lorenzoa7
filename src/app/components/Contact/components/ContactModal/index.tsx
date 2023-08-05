'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { FocusEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import { z } from 'zod'
import { Focus } from '../../types'
import InputBox from '../InputBox'

type ContactModalProps = {
  children: React.ReactNode
}

const schemaForm = z.object({
  fullName: z.string().nonempty('This field is required.'),
  email: z.string().email().nonempty('This field is required.'),
  message: z.string().nonempty('This field is required.'),
})

export default function ContactModal({ children }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  })

  const [isFocus, setIsFocus] = useState<Focus>({
    fullName: false,
    email: false,
    message: false,
  })

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    if (e.target.value === '') {
      setIsFocus((state) => ({
        ...state,
        [e.target.name]: false,
      }))
    }
  }

  const handleFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    if (e.target.value === '') {
      setIsFocus((state) => ({
        ...state,
        [e.target.name]: true,
      }))
    }
  }
  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-overlayShow data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-contentShow data-[state='closed']:animate-contentHide bg-white rounded-xl shadow-2xl mx-auto w-[960px]"
        >
          <main className="flex w-full h-full rounded-lg">
            <section className="h-full w-full bg-amaranth-500 rounded-tl-xl rounded-bl-xl py-7">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full px-8 mx-auto"
              >
                <InputBox
                  icon={FaUser}
                  placeholder="Full Name"
                  isFocus={isFocus.fullName}
                >
                  <input
                    type="text"
                    {...register('fullName', { required: true })}
                    className="w-full h-full text-xl text-white px-3 py-2 border-none outline-none left-0 top-0 bg-transparent autofill:transition autofill:duration-[600000s] autofill:delay-0"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>

                <InputBox
                  icon={MdEmail}
                  placeholder="Email"
                  isFocus={isFocus.email}
                >
                  <input
                    type="text"
                    {...register('email', { required: true })}
                    className="absolute w-full h-full text-xl text-white px-3 py-2 border-none outline-none left-0 top-0 bg-transparent autofill:transition autofill:duration-[600000s] autofill:delay-0"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>

                <div className="relative h-56 mt-5">
                  <textarea
                    data-focus={isFocus.message}
                    placeholder="Type your message..."
                    {...register('message', { required: true })}
                    className="absolute w-full h-full text-lg text-white px-3 py-2 border-white border-2 rounded outline-none left-0 top-0 autofill:transition autofill:duration-[600000s] autofill:delay-0 resize-none bg-transparent placeholder:text-white/60 data-[focus=true]:border-amaranth-800 duration-300"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </div>

                <button
                  type="submit"
                  className="relative text-white text-lg py-3 w-fit border-2 border-white rounded-lg self-center px-16 z-10 duration-300 active:text-white active:border-amaranth-800 hover:text-amaranth-800 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:origin-left before:ease-in-out before:invisible before:scale-x-0 before:hover:scale-x-100 before:active:shadow-2xl before:active:bg-amaranth-800 before:hover:visible"
                >
                  Send Message
                </button>
              </form>
            </section>
            <section className="relative flex flex-col justify-between h-11/12 w-full  rounded-tr-xl rounded-br-xl p-7 text-amaranth-800">
              <span className="absolute -left-5 top-1/2 -translate-y-1/2 rotate-90 text-amaranth-500">
                <BsFillTriangleFill size={42} />
              </span>
              <div className="self-end font-light invisible">
                <div>
                  <span>lorenzo.acetii@gmail.com</span>
                </div>
                <div>
                  <span>+55 21 96540-0438</span>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-6xl">Lets have a talk!</h1>
                <h2 className="text-xl">
                  Im open to get your feedback or just to have a chat.
                </h2>
              </div>
              <div className="self-end flex flex-col gap-1 text-lg">
                <div className="flex gap-3 items-center justify-between">
                  <span>lorenzo.acetii@gmail.com</span>
                  <MdEmail size={18} />
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <span>+55 21 96540-0438</span>
                  <MdPhone size={18} />
                </div>
              </div>
            </section>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
