import React from 'react';
import './row.css'
function RowA(props) {
    return (
        <div>
            <div className="academy__colA">
        
        <p className="colA__para1">Why train with us?</p>
        <p className="colA__para2">
          <span>
            With over 10 Years experience in the industry you can be assured of
            the extent of our knowledge we want to share with you.
          </span>
          <span> With every course, you will receive:</span>
        </p>
        <ul className='colA__list'>
          <li>Certificate of attendance</li>
          <li>Certificate of completion</li>
          <li>In-depth theory, practical teaching and training manual</li>
          <li> Full kit</li>
          <li>Light refreshments</li>
          <li> On-going support</li>
          <li>Student discount</li>
        </ul>
      </div>
        </div>
    );
}

export default RowA;