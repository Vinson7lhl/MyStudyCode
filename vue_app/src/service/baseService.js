import fly from 'flyio'

fly.config.timeout = 5000
export default function baseHttpRequest (url, type, param) {
  switch (type) {
    case 'get':
      fly.get(url, param)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      break
    case 'post':
      fly.get(url, param)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      break
  }
}
