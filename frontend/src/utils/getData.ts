export default async function getData(url: string) {
  const res = await fetch(url, {
    credentials: 'include',
  })
  if (!res.ok) throw new Error()
  return res.json()
}
