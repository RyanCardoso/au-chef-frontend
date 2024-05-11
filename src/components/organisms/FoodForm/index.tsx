'use client'

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Button, Dropzone, Input, Select, TextArea } from '@/components/atoms'
import { categoryOptions, menuOptions, schema } from './helpers'
import { yupResolver } from '@hookform/resolvers/yup'

interface FoodFormData {
  menu: string
  category: string
  name: string
  description: string
  price: string
  discount?: string
  image: FileList | string
}

export const FoodForm = () => {
  const methods = useForm<FoodFormData>({ resolver: yupResolver(schema) })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onsubmit = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors)

  return (
    <FormProvider {...methods}>
      <form className="rounded-lg bg-white p-8" onSubmit={onsubmit}>
        <div className="flex justify-between gap-x-20">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-12 sm:grid-cols-6">
              <Select
                label="Cardápio"
                options={menuOptions}
                {...register('menu')}
                error={errors.menu?.message}
              />

              <Select
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
                className="col-start-1 col-end-4"
                {...register('price')}
                error={errors.price?.message}
              />

              <Input
                label="Desconto"
                placeholder="Desconto"
                className="col-start-4 col-end-7"
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

          <div className="h-80 w-80">
            <Dropzone
              label="Imagem"
              {...register('image')}
              error={errors.image?.message}
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
