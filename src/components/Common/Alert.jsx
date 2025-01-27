import React from 'react';
import { useAlert } from '../../context/AlertContext';

const Alert = () => {
  const { alert } = useAlert();

  if (!alert.visible) return null;

  let alertClass = '';
  let alertIcon = '';

  switch (alert.type) {
    case 'success':
      alertClass = 'alert-success';
      alertIcon = '#check-circle-fill';
      break;
    case 'warning':
      alertClass = 'alert-warning';
      alertIcon = '#exclamation-triangle-fill';
      break;
    case 'danger':
      alertClass = 'alert-danger';
      alertIcon = '#exclamation-triangle-fill';
      break;
    default:
      alertClass = 'alert-primary';
      alertIcon = '#info-fill';
  }

  return (
    <div className={`alert ${alertClass} text-center d-flex align-items-center position-fixed top-0 start-50 translate-middle-x z-index-5`}
  role="alert"
  style={{
    minWidth: '50vw',  // Set minimum width to 50% of the screen width
    animation: 'slideInFromTop 0.5s ease-out',  // Apply custom animation for coming from top
  }}
>
  <div>{alert.message}</div>
</div>

  );
};

export default Alert;
