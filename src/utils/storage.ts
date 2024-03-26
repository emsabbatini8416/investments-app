const storage = {
  get(key: string) {
    return localStorage.getItem(key)
  },
  set<T>(key: string, value: T) {
    const item = typeof value === 'string' ? value : JSON.stringify(value)

    localStorage.setItem(key, item)
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}

export default storage
  