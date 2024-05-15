import { CategoryDTO } from '@/model'

type FormatOptionsResponse = {
  label: string
  value: string
}

export const menuOptions = [
  { value: 'noturno', label: 'Noturno' },
  { value: 'diurno', label: 'Diurno' },
]

export const formatMask = (
  ev: React.ChangeEvent<HTMLInputElement>,
  mask: (ev: string) => string,
) => {
  const { value } = ev.target
  ev.target.value = mask(value)
}

export const formatOptions = (
  options: CategoryDTO[] | null,
  value: string,
): FormatOptionsResponse[] => {
  const findOptions = options?.find((category) => category.typeMenu === value)

  console.log({ findOptions, value, options })

  if (!findOptions) return []

  return findOptions.items.map((item) => ({
    value: item.name,
    label: item.name,
  }))
}
