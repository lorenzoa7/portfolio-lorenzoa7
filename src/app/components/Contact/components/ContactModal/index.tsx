'use client'

import { useContact } from '@/hooks/useContact'
import * as Dialog from '@radix-ui/react-dialog'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import InputBox from '../InputBox'

type ContactModalProps = {
  children: React.ReactNode
}

export default function ContactModal({ children }: ContactModalProps) {
  const {
    errors,
    handleBlur,
    handleFocus,
    handleOpenChange,
    handleSubmit,
    isFocus,
    isSubmitting,
    onSubmit,
    open,
    register,
  } = useContact()

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-overlayShow data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-contentShow data-[state='closed']:animate-contentHide bg-white rounded-xl shadow-2xl mx-auto w-[960px] lg:w-[calc(100vw-40px)] lg:max-h-[calc(100vh-40px)] xl:-translate-y-[calc(45%)]"
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
                    disabled={isSubmitting}
                    {...register('fullName', { required: true })}
                    className="w-full h-full text-xl text-white px-3 py-2 border-none outline-none left-0 top-0 bg-transparent autofill:transition autofill:duration-[600000s] autofill:delay-0"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>
                {errors.fullName && (
                  <p className="text-rose-900 font-medium">
                    {errors.fullName.message}
                  </p>
                )}

                <InputBox
                  icon={MdEmail}
                  placeholder="Email"
                  isFocus={isFocus.email}
                >
                  <input
                    type="text"
                    disabled={isSubmitting}
                    {...register('email', { required: true })}
                    className="absolute w-full h-full text-xl text-white px-3 py-2 border-none outline-none left-0 top-0 bg-transparent autofill:transition autofill:duration-[600000s] autofill:delay-0"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>
                {errors.email && (
                  <p className="text-rose-900 font-medium">
                    {errors.email.message}
                  </p>
                )}

                <div className="relative h-56 mt-5">
                  <textarea
                    data-focus={isFocus.message}
                    placeholder="Type your message..."
                    disabled={isSubmitting}
                    {...register('message', { required: true })}
                    className="absolute w-full h-full text-lg text-white px-3 py-2 border-white border-2 rounded outline-none left-0 top-0 autofill:transition autofill:duration-[600000s] autofill:delay-0 resize-none bg-transparent placeholder:text-white/60 data-[focus=true]:border-amaranth-800 duration-300"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </div>
                {errors.message && (
                  <p className="text-rose-900 font-medium">
                    {errors.message.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative text-white text-lg py-3 w-fit border-2 border-white rounded-lg self-center px-16 z-10 duration-300 active:text-white active:border-amaranth-800 hover:text-amaranth-800 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:origin-left before:ease-in-out before:invisible before:scale-x-0 before:hover:scale-x-100 before:active:shadow-2xl before:active:bg-amaranth-800 before:hover:visible disabled:before:visible disabled:before:scale-x-100 disabled:before:bg-amaranth-800 disabled:text-white disabled:border-amaranth-800"
                >
                  {isSubmitting && 'Submitting...'}
                  {!isSubmitting && 'Send Message'}
                </button>
              </form>
            </section>

            <section className="relative flex flex-col justify-between h-11/12 w-full  rounded-tr-xl rounded-br-xl p-7 text-amaranth-800">
              <span className="absolute -left-5 top-1/2 -translate-y-1/2 rotate-90 text-amaranth-500 lg:top-[calc(50%-35px)]">
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
              <div className="flex flex-col lg:gap-1">
                <h1 className="font-medium text-6xl lg:text-5xl">
                  {"Let's have a talk!"}
                </h1>
                <h2 className="text-xl">
                  {"I'm open to get your feedback or just to have a chat."}
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
