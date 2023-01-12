import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="thumbnail">썸네일</div>
        <div className="contents">
          <div className="title">The Steack House</div>
          <div>
            <FontAwesomeIcon
              style={{ color: '#FFBA00' }}
              icon={solid('star')}
            />
          </div>
          <div className="tag-container">
            <div className="tag">
              <p>tag</p>
            </div>
            <div className="tag">
              <p>tag</p>
            </div>
            <div className="tag">
              <p>tag</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-foundation"></div>
    </div>
  );
}

export default Card;
