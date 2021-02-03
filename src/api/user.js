import service from '@/utils/request'

export function login(data) {
  console.log(data)
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return service({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return service({
    url: '/user/logout',
    method: 'post'
  })
}
