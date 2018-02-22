import React from 'react'
import PropTypes from 'prop-types'

const Block = ({
  style = 'h2',
  title = null,
  description,
}) => {
  return (
    <div>
      { style === 'h1' && <h1>{ title && title } </h1> }
      { style === 'h2' && <h2>{ title && title } </h2> }
      <p>{ description } </p>
    </div>
  )
}

Block.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Block;