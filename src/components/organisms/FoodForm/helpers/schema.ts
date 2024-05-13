import * as yup from 'yup'

const msg = '*Campo obrigatório'

export const schema = yup
  .object({
    typeMenu: yup.string<'diurno' | 'noturno'>().required(msg),
    category: yup.string().required(msg),
    name: yup.string().required(msg),
    description: yup.string().required(msg),
    price: yup.string().required(msg),
    image: yup
      .mixed<File | string>()
      .test('is-image-or-string', msg, (value) => {
        console.log(value)

        return (value && typeof value === 'string') || value instanceof File
      })
      .required(msg),
  })
  .required()
