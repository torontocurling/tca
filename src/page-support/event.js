const getEventMenuLinks = ({ baseUri, eventSections }) =>
  eventSections
    .filter(
      ({ header }) => /[<>]/.test(header) === false && header.trim().length > 0
    )
    .map(({ id, header }, index) => ({
      path: index === 0 ? baseUri : `${baseUri}/${id}`,
      label: header,
    }))

const urlifyHeader = header =>
  header.replace(/\s+/, '-').replace(/[^a-z0-9-]/gi, '')

const hasValidH1 = content => {
  const lowerIndex = content.indexOf('<h1')
  const upperIndex = content.indexOf('<H1')

  return (
    (lowerIndex > 0 && lowerIndex < 50) || (upperIndex > 0 && upperIndex < 50)
  )
}

const parseEventContent = pageContent => {
  if (!pageContent) return false

  if (hasValidH1(pageContent) === false) {
    return false
  }

  const parts = pageContent.split(/<h1>/gi)

  return parts
    .map(part => {
      const header = part.split(/<\/h1>/i).shift()
      const id = urlifyHeader(header)
      const startTag = `<h1 id="${id}">`
      const body = `${startTag}${part}`
      return { header, body, id }
    })
    .filter(
      ({ header }) => /[<>]/.test(header) === false && header.trim().length > 0
    )
}

module.exports = { getEventMenuLinks, parseEventContent }
