type EnvironmentType = {
  API_URL: string
  APP_URL: string
}

export const ENV: EnvironmentType = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_URL: import.meta.env.VITE_APP_URL
}
