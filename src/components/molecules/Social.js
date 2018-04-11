import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Email, Blog, Twitter, GitHub, Dribbble } from '../atoms/Icons'
import './Social.scss'

const SocialIcon = ({ title }) => {
  switch (title) {
    case 'Email':
      return <Email />
    case 'Blog':
      return <Blog />
    case 'Twitter':
      return <Twitter />
    case 'GitHub':
      return <GitHub />
    case 'Dribbble':
      return <Dribbble />
    default:
      return null
  }
}

const Social = ({ meta, minimal }) => {
  const social = meta.social
  const classes = minimal ? 'social social--minimal' : 'social'

  return (
    <aside className={classes}>
      {Object.keys(social).map((key, i) => (
        <OutboundLink
          className="social__link"
          href={social[key]}
          key={i}
          title={key}
        >
          <SocialIcon title={key} />
        </OutboundLink>
      ))}
    </aside>
  )
}

Social.propTypes = {
  meta: PropTypes.object,
  minimal: PropTypes.bool,
}

export default Social
