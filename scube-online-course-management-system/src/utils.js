export const generateAPICall = (baseURL, params) => {
  let requestURL = baseURL;

  for (const key in params) {
    requestURL += `${key}=${params[key]}&`;
  }
  requestURL = requestURL.substring(0, requestURL.length - 1);

  return (requestURL)
}

export const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return (!!pattern.test(str));
}