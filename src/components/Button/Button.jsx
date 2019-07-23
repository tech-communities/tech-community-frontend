import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { error, text, loading, onClick, tick, style } = this.props;

    return (
      <React.Fragment>
        {
          <button
            className={
              error
                ? 'reactive-button reactive-button-error'
                : 'reactive-button'
            }
            style={style}
            onClick={onClick}
          >
            <svg
              className="spinner"
              width="18px"
              height="18px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: !loading && 'none' }}
            >
              <circle
                className="path"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              />
            </svg>

            <span className="loading" style={{ display: !loading && 'none' }}>
              {loading}
            </span>

            <span style={{ display: loading && 'none' }}>
              {error || text} {tick && <span className="tick">✓</span>}
            </span>
          </button>
        }
      </React.Fragment>
    );
  }
}

export default Button;
