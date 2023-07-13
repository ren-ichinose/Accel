export default async function postData(url: string, data: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const error: any = new Error()
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}
