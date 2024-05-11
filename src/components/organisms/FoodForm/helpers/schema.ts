import * as yup from 'yup'

const msg = '*Campo obrigatório'

export const schema = yup
  .object({
    menu: yup.string().required(msg),
    category: yup.string().required(msg),
    name: yup.string().required(msg),
    description: yup.string().required(msg),
    price: yup.string().required(msg),
    image: yup
      .mixed<FileList | string>()
      .test('is-image-or-string', msg, (value) => {
        return (
          typeof value === 'string' ||
          (value instanceof FileList && value.length > 0)
        )
      })
      .required(msg),
  })
  .required()
