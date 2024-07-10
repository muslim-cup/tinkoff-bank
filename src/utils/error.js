const ERROR_CODE = {
  INVALID_LOGIN_CREDENTIALS:'Пользователь с таким email не найден',
  INVALID_PASSWORD_CREDENTIALS: 'Пароль не верный',
  auth: 'Пожалуйств войдите в систему',
  Permissiondenied: 'Ibrymi d t1e lac'
}

export function error (code) {
  return ERROR_CODE[code] ?  ERROR_CODE[code]:'Неизвестная ошибка' 
}