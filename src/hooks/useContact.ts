import { ContactData } from '@/app/components/Contact/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { FocusEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schemaForm = z.object({
  fullName: z.string().nonempty('This field is required.'),
  email: z.string().email('Invalid email.').nonempty('This field is required.'),
  message: z.string().nonempty('This field is required.'),
})

const DEFAULT_IS_FOCUS = {
  fullName: false,
  email: false,
  message: false,
}

export const useContact = () => {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  })

  const [isFocus, setIsFocus] = useState<ContactData<boolean>>(DEFAULT_IS_FOCUS)

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
  const onSubmit = async (data: ContactData<string>) => {
    const timeoutPromise = new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise timed out.'))
      }, 20000)
    })

    await toast
      .promise(
        Promise.race([
          fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
          }),
          timeoutPromise,
        ]),
        {
          pending: 'Sending message...',
          success: 'The message has been sent successfully!',
          error: 'Could not send the message. Please try again.',
        },
      )
      .finally(() => setOpen(false))
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setIsFocus(DEFAULT_IS_FOCUS)
    }
  }, [isSubmitSuccessful, reset])

  const handleOpenChange = () => {
    setOpen((state) => !state)
    reset()
    setIsFocus(DEFAULT_IS_FOCUS)
  }

  return {
    open,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isFocus,
    handleBlur,
    handleFocus,
    onSubmit,
    handleOpenChange,
  }
}
