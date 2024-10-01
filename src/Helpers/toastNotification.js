import toast from 'react-hot-toast';

export const notifySuccess = message =>
  toast.success(message, {
    style: {
      border: '1px solid #38cd3e',
      color: '#121417',
      textAlign: 'center',
      position: 'top-right',
    },
    iconTheme: {
      primary: '#38cd3e',
      secondary: '#FFFAEE',
    },
  });

export const notifyDelete = message =>
  toast.error(message, {
    style: {
      border: '1px solid #dc3545',
      color: '#121417',
      textAlign: 'center',
      position: 'top-right',
    },
    iconTheme: {
      primary: '#dc3545',
      secondary: '#FFFAEE',
    },
  });
