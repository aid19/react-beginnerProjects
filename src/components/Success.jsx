import React from 'react';
import success from '../assets/success.png'

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Success!</h3>
      <p>All {count} users have been sent an invitation</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Return</button>
    </div>
  );
};