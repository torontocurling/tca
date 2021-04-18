import React, { useMemo } from 'react'
import { ThumbnailRow } from '../components/thumbnail-row'

const parseContent = content => {
  const plainText = content.replace(/(<([^>]+)>)/gi, '')
  if (plainText.length > 150) {
    const shorter = plainText.substr(0, 150)
    if (/[^a-z0-9]/.test(shorter[shorter.length - 1])) {
      return `${shorter.trim()}...`
    }

    const parts = shorter.split(/\s/)
    parts.pop()
    return `${parts.join(' ')}...`
  }

  return plainText
}

const PostItem = ({ title, content, slug, featuredImage }) => {
  const textContent = useMemo(() => parseContent(content), [content])

  return (
    <ThumbnailRow
      title={title}
      description={textContent}
      link={`/${slug}`}
      imageUri={featuredImage?.node?.mediaItemUrl}
    />
  )
}

export const PostList = props => (
  <>
    {props.posts.map(({ node }) => (
      <PostItem key={node.slug} {...node} />
    ))}
  </>
)
