import { formatDistanceToNow, setDefaultOptions } from 'date-fns'
import { pt } from 'date-fns/locale'
setDefaultOptions({ locale: pt })

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const dateToNow = (date: string) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })
