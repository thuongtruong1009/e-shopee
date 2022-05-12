import { toast } from '~/stores/toast'

export const handleError = (error: any) => {
  const useToast = toast()
  useToast.updateToast('error', 'Somethings fail was happened! Please try again', true)
  return (`Error message: ${error.message}`)
}
