type EnvironmentType = {
  API_HOST: string
  APP_URL: string
}

export const ENV: EnvironmentType = {
  API_HOST: import.meta.env.VITE_API_HOST,
  APP_URL: import.meta.env.VITE_APP_URL
}
