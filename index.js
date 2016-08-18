function alloc (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  }

  if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }

  var buffer = new Buffer(size)

  if (size === 0) {
    return buffer
  }

  if (fill === undefined) {
    buffer.fill(0)
    return buffer
  }

  if (typeof encoding !== 'string') {
    encoding = undefined
  }

  buffer.fill(fill, encoding)
  return buffer
}

module.exports = (Buffer.alloc || alloc)
