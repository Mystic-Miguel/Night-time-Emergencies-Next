import React from 'react'

import PropTypes from 'prop-types'

const Question12 = (props) => {
  return (
    <>
      <div className="question12-container">
        <span className="question12-text heading3">{props.question}</span>
        <span className="bodySmall">{props.answer}</span>
      </div>
      <style jsx>
        {`
          .question12-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question12-text {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Question12.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Question12.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question12
