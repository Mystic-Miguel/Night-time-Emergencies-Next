import React from 'react'

import PropTypes from 'prop-types'

const Question13 = (props) => {
  return (
    <>
      <div className="question13-container">
        <span className="question13-text heading3">{props.question}</span>
        <span className="bodySmall">{props.answer}</span>
      </div>
      <style jsx>
        {`
          .question13-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question13-text {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Question13.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question13.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question13
