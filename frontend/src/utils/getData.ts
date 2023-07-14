export default async function getData(url: string) {
  const res = await fetch(url, {
    credentials: 'include',
  })
  if (!res.ok) {
    const error: any = new Error()
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}
