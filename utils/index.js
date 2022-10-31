export const truncate = (str, max, sep) => {
  str = typeof str !== 'undefined' && str !== null ? str : ''
  max = max || 6

  var len = str.length
  if (len > max) {
    sep = sep || '...'
    var seplen = sep.length
    if (seplen > max) {
      return str.substr(len - max)
    }
    var n = -0.5 * (max - len - seplen)
    var center = len / 2

    var front = str.substr(0, center - n)
    var back = str.substr(len - center + n)
    return front + sep + back
  }

  return str
}
