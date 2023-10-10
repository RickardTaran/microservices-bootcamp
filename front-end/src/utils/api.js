import axios from 'axios'

const makeAPICall = async ({ verb = 'GET', route, data = null }) => {

  const request_object = {
    method: verb,
    url: window.location.origin + route
  }

  if (data) {
    request_object.data = data
  }

  return await axios.request(request_object)
}

export { makeAPICall }