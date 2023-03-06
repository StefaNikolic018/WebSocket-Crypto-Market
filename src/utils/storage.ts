export function storageInsert(name: string, value: string) {
  localStorage.setItem(name, value)
}

export function storageSelect(name: string) {
  return localStorage.getItem(name)
}
