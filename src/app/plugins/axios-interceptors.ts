// import axios from 'axios'

// import { AuthService } from '@/api/models/auth'

// const BAD_TOKEN_SERVER_TEXT_PATTERN = 'Access token is not valid'

// axios.interceptors.response.use(
//   ok => ok,
//   async error => {
//     // TODO: проверять не на строку текста ошибки, а на статус ответа (должен быть 401 при протухшем токене, сейчас 500 - отсюда проверка на текст)

//     if (
//       (error?.response?.data as string).includes(BAD_TOKEN_SERVER_TEXT_PATTERN)
//     ) {
//       AuthService.refreshToken()
//     }

//     throw error
//   }
// )
// eslint-disable-next-line unicorn/no-empty-file
