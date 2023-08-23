'use client'

import { Dictionary } from '@/get-dictionary'
import { useContact } from '@/hooks/useContact'
import * as Dialog from '@radix-ui/react-dialog'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { MdEmail, MdPhone } from 'react-icons/md'
import InputBox from '../InputBox'

type ContactModalProps = {
  children: React.ReactNode
  contactSection: Dictionary['contactSection']
}

export default function ContactModal({
  children,
  contactSection,
}: ContactModalProps) {
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
        <Dialog.Overlay className="fixed inset-0 animate-overlayShow bg-black/50 backdrop-blur-sm data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 z-50 mx-auto w-[960px] -translate-x-1/2 translate-y-[calc(calc(45%)*-1)] animate-contentShow rounded-xl bg-white shadow-2xl data-[state='closed']:animate-contentHide lg:max-h-[calc(100vh-40px)] lg:w-[calc(100vw-40px)]"
        >
          <main className="relative flex h-full w-full rounded-lg">
            <Dialog.Close asChild>
              <div className="absolute right-3 top-3 z-20 cursor-pointer text-amaranth-500 duration-300 hover:scale-125 sm:text-white">
                <GrFormClose size={30} />
              </div>
            </Dialog.Close>

            <section className="h-full w-full rounded-l-xl bg-amaranth-500 py-7 sm:rounded-xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex w-full flex-col gap-3 px-8"
              >
                <InputBox
                  icon={FaUser}
                  placeholder={contactSection.form.fullName}
                  isFocus={isFocus.fullName}
                >
                  <input
                    type="text"
                    disabled={isSubmitting}
                    {...register('fullName', { required: true })}
                    className="left-0 top-0 h-full w-full border-none bg-transparent px-3 py-2 text-xl text-white outline-none autofill:transition autofill:delay-0 autofill:duration-[600000s]"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>
                {errors.fullName && (
                  <p className="font-medium text-rose-900">
                    {errors.fullName.message}
                  </p>
                )}

                <InputBox
                  icon={MdEmail}
                  placeholder={contactSection.form.email}
                  isFocus={isFocus.email}
                >
                  <input
                    type="text"
                    disabled={isSubmitting}
                    {...register('email', { required: true })}
                    className="absolute left-0 top-0 h-full w-full border-none bg-transparent px-3 py-2 text-xl text-white outline-none autofill:transition autofill:delay-0 autofill:duration-[600000s]"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </InputBox>
                {errors.email && (
                  <p className="font-medium text-rose-900">
                    {errors.email.message}
                  </p>
                )}

                <div className="relative mt-5 h-56">
                  <textarea
                    data-focus={isFocus.message}
                    placeholder={contactSection.form.message}
                    disabled={isSubmitting}
                    {...register('message', { required: true })}
                    className="absolute left-0 top-0 h-full w-full resize-none rounded border-2 border-white bg-transparent px-3 py-2 text-lg text-white outline-none duration-300 placeholder:text-white/60 autofill:transition autofill:delay-0 autofill:duration-[600000s] data-[focus=true]:border-amaranth-800"
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                  />
                </div>
                {errors.message && (
                  <p className="font-medium text-rose-900">
                    {errors.message.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative z-10 w-fit self-center rounded-lg border-2 border-white px-16 py-3 text-lg text-white duration-300 before:invisible before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out hover:text-amaranth-800 before:hover:visible before:hover:scale-x-100 active:border-amaranth-800 active:text-white before:active:bg-amaranth-800 before:active:shadow-2xl disabled:border-amaranth-800 disabled:text-white disabled:before:visible disabled:before:scale-x-100 disabled:before:bg-amaranth-800"
                >
                  {isSubmitting && contactSection.form.submitting}
                  {!isSubmitting && contactSection.form.submit}
                </button>
              </form>
            </section>

            <section className="relative flex w-full flex-col justify-between  rounded-r-xl p-7 text-amaranth-800 sm:hidden">
              <span className="absolute -left-5 top-1/2 -translate-y-1/2 rotate-90 text-amaranth-500 lg:top-[calc(50%-35px)]">
                <BsFillTriangleFill size={42} />
              </span>
              <div className="invisible self-end font-light">
                <div>
                  <span>lorenzo.acetii@gmail.com</span>
                </div>
                <div>
                  <span>+55 21 96540-0438</span>
                </div>
              </div>
              <div className="flex flex-col lg:gap-1">
                <h1 className="text-6xl font-medium lg:text-5xl">
                  {contactSection.letsTalk}!
                </h1>
                <h2 className="text-xl">{contactSection.description}</h2>
              </div>
              <div className="flex flex-col gap-1 self-end text-lg">
                <div className="flex items-center justify-between gap-3">
                  <span>lorenzo.acetii@gmail.com</span>
                  <MdEmail size={18} />
                </div>
                <div className="flex items-center justify-between gap-3">
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
