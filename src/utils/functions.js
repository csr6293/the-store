const filterKeys = {
  'low': 1,
  'high': 2,
  'latest': 3,
  'trending': 4
}

export function filterByTag(data, tag) {

  if (tag === 'high') {
    return data.sort((a, b) => {
      return a.price - b.price
    })
  }

  if (tag === 'low') {
    return data.sort((a, b) => b.price - a.price)
  }
}
