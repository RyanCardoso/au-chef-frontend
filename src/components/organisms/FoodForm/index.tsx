'use client'

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { maskPrice } from '@/utils'
import { Button, Dropzone, Input, Select, TextArea } from '@/components/atoms'

import { categoryOptions, menuOptions, schema } from './helpers'

interface FoodFormData {
  menu: string
  category: string
  name: string
  description: string
  price: string
  discount?: string
  image: File | string
}

export const FoodForm = () => {
  const methods = useForm<FoodFormData>({ resolver: yupResolver(schema) })

  const {
    watch,
    setValue,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = methods

  const imageUrl = watch('image')

  const formatMask = (
    ev: React.ChangeEvent<HTMLInputElement>,
    mask: (ev: string) => string,
  ) => {
    const { value } = ev.target
    ev.target.value = mask(value)
  }

  const handleChangeDropzone = (ev: File | null) => {
    setValue('image', ev || '')
    clearErrors('image')
  }

  const onsubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form className="rounded-lg bg-white p-8" onSubmit={onsubmit}>
        <div className="flex flex-col justify-between gap-x-20 pb-8 md:flex-row md:pb-0">
          <div className="flex-1">
            <div className="flex flex-col flex-wrap justify-between gap-x-6 gap-y-8 pb-8 md:flex-row md:pb-12">
              <Select
                className="md:w-[45%]"
                label="Cardápio"
                options={menuOptions}
                {...register('menu')}
                error={errors.menu?.message}
              />

              <Select
                className="md:w-[45%]"
                label="Categória"
                options={categoryOptions}
                {...register('category')}
                error={errors.category?.message}
              />

              <Input
                label="Nome"
                placeholder="Nome do seu prato"
                {...register('name')}
                error={errors.name?.message}
              />

              <Input
                label="Preço"
                placeholder="Preço do seu prato"
                className="md:w-[45%]"
                {...register('price', {
                  onChange: (ev) => formatMask(ev, maskPrice),
                })}
                error={errors.price?.message}
              />

              <Input
                label="Desconto"
                placeholder="Desconto"
                className="md:w-[45%]"
                {...register('discount')}
              />

              <TextArea
                label="Descricão"
                placeholder="Descreva o seu prato"
                {...register('description')}
                error={errors.description?.message}
              />
            </div>
          </div>

          <div className="w-80">
            <Dropzone
              label="Imagem"
              onChange={handleChangeDropzone}
              error={errors.image?.message}
              value={imageUrl}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
          <Button label="Cancelar" variant="secondary" type="button" />
          <Button label="Salvar" type="submit" />
        </div>
      </form>
    </FormProvider>
  )
}
