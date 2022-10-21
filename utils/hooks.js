import { useContext } from 'react'

export const useSession = () => {
  const {
    sessionToken: { token }
  } = useContext(Connect)

  return token
}
