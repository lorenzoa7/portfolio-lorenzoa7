'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { FaUser } from 'react-icons/fa'
import { z } from 'zod'

type ContactModalProps = {
  children: React.ReactNode
}

const schemaForm = z.object({
  fullName: z.string().nonempty('This field is required.'),
  email: z.string().email().nonempty('This field is required.'),
  message: z.string().nonempty('This field is required.'),
})

export default function ContactModal({ children }: ContactModalProps) {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  })

  const { errors } = formState

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
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-contentShow data-[state='closed']:animate-contentHide bg-white rounded-xl shadow-2xl mx-auto w-[960px] h-[540px]"
        >
          <main className="flex w-full h-full rounded-lg">
            <section className="h-full w-full bg-rose-500 rounded-tl-xl rounded-bl-xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full px-8 mx-auto mt-6 "
              >
                <div className="relative grid grid-cols-[7%_93%] mx-0 py-1.5 px-0 border-b-2 border-zinc-200 after:content-[''] after:w-0 after:absolute after:h-0.5  after:bg-rose-800 after:duration-300 after:-bottom-0.5 after:right-2/4 before:content-[''] before:w-0 before:absolute before:h-0.5  before:bg-rose-800 before:duration-300 before:-bottom-0.5 before:left-2/4 group focus-within:before:w-1/2 focus-within:after:w-1/2">
                  <div className="flex justify-center items-center duration-300 text-white group-focus-within:text-rose-800">
                    <FaUser size={14} />
                  </div>

                  <div className="relative h-12">
                    <input
                      type="text"
                      placeholder=""
                      {...register('fullName', { required: true })}
                      className="absolute w-full h-full text-xl text-white px-3 py-2 border-none outline-none left-0 top-0 bg-transparent autofill:transition autofill:duration-[600000s] autofill:delay-0 peer"
                    />
                    <span className="absolute -translate-y-2/4 text-white duration-300 left-2.5 z-10 pointer-events-none text-sm -top-1 group-[:not(:placeholder-shown):focus-within]:text-sm group-[:not(:placeholder-shown):focus-within]:-top-1 peer-placeholder-shown:top-2/4 peer-placeholder-shown:text-lg">
                      Full Name
                    </span>
                  </div>

                  {errors.fullName?.message && (
                    <span>{errors.fullName?.message}</span>
                  )}
                </div>

                <input type="text" {...register('email', { required: true })} />
                {errors.email?.message && <span>{errors.email?.message}</span>}
                <input
                  type="text"
                  {...register('message', { required: true })}
                />
                {errors.message?.message && (
                  <span>{errors.message?.message}</span>
                )}
              </form>
            </section>
            <section className="h-full w-full bg-white rounded-tr-xl rounded-br-xl"></section>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
