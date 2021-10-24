export let fetcher = (url: string, init: RequestInit = {}) => (
  fetch(process.env.REACT_APP_API_URL + url, init).then(res => res.json())
)
