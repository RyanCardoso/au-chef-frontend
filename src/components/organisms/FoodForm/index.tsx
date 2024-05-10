import React from 'react'
import { Button, Input, Select, TextArea } from '@/components/atoms'

export const FoodForm = () => {
  return (
    <form className="mx-auto my-8 max-w-7xl rounded-lg bg-white p-8">
      <div className="flex justify-between gap-x-20">
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-12 sm:grid-cols-6">
            <Select
              label="Categória"
              options={[
                { value: '1', label: 'Espaguete' },
                { value: '2', label: 'Feijoada' },
                { value: '3', label: 'Churrasco' },
                { value: '4', label: 'Salada' },
              ]}
            />

            <Input
              label="Nome"
              placeholder="Nome do seu prato"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
            />

            <Input
              label="Preço"
              placeholder="Preço do seu prato"
              className="col-start-1 col-end-4"
            />

            <Input
              label="Desconto"
              placeholder="Desconto"
              className="col-start-4 col-end-7"
            />

            <TextArea label="Descricão" placeholder="Descreva o seu prato" />
          </div>
        </div>

        <div className="w-80">
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Imagem
            </label>
            <div className="mt-2 flex items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                {/* <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  /> */}
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Selecione</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">ou arraste e solte aqui</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG até 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
        <Button label="Cancelar" variant="secondary" type="button" />
        <Button label="Salvar" type="submit" />
      </div>
    </form>
  )
}
