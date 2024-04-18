import React from 'react'

import PropTypes from 'prop-types'

const Question14 = (props) => {
  return (
    <>
      <div className="question14-container">
        <span className="question14-text heading3">{props.question}</span>
        <span className="bodySmall">{props.answer}</span>
      </div>
      <style jsx>
        {`
          .question14-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question14-text {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Question14.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question14.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question14
