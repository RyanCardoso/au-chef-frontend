'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { CategoryActions } from '@/firebase'
import { Button, Dropzone, Input, Select } from '@/components/atoms'

import { menuOptions, schema } from './helpers'
import { NewCategoryDTO } from '@/model'

interface FoodFormData {
  typeMenu: 'diurno' | 'noturno'
  name: string
  image: File | string
}

export const CategoryForm = () => {
  const categoryActions = new CategoryActions()
  const methods = useForm<FoodFormData>({ resolver: yupResolver(schema) })
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const {
    watch,
    setValue,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = methods

  const imageUrl = watch('image')

  const handleChangeDropzone = (ev: File | null) => {
    setValue('image', ev || '')
    clearErrors('image')
  }

  const onsubmit = handleSubmit(async (payload) => {
    setLoading(true)
    const formData = new FormData()

    formData.append('file', payload.image as File)
    formData.append('upload_preset', 'z9arlc6i')

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BUCKET_API as string,
      formData,
    )

    const imageUrl = response.data.secure_url

    const formattedPayload = {
      ...payload,
      image: imageUrl,
    } as NewCategoryDTO

    await categoryActions.create(formattedPayload)

    setLoading(false)
    router.push('/')
  })

  return (
    <FormProvider {...methods}>
      <form className="rounded-lg bg-white p-8" onSubmit={onsubmit}>
        <div className="flex flex-col justify-between gap-y-8 pb-8">
          <Select
            className="md:w-[45%]"
            label="Cardápio"
            options={menuOptions}
            {...register('typeMenu')}
            error={errors.typeMenu?.message}
          />

          <Input
            label="Nome"
            placeholder="Nome do seu prato"
            {...register('name')}
            error={errors.name?.message}
          />

          <Dropzone
            label="Imagem"
            onChange={handleChangeDropzone}
            error={errors.image?.message}
            value={imageUrl}
          />
        </div>

        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
          <Button
            label="Cancelar"
            variant="secondary"
            type="button"
            disabled={loading}
          />

          <Button label="Salvar" type="submit" loading={loading} />
        </div>
      </form>
    </FormProvider>
  )
}
