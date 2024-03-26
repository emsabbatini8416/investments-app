import type { AuthProviderState } from 'typings/contexts'
import { storage, StorageKey } from 'utils'

const getInitialState = () => {
  const token = storage.get(StorageKey.TOKEN)

  const state: AuthProviderState = {
    token
  }

  return state
}

export { getInitialState }
