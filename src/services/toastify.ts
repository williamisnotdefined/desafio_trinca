import { toast } from 'react-toastify';

export const error = (
  message = 'An error occurred, try again',
  autoClose = 2000,
): void => {
  toast.error(message, { autoClose });
};

export const success = (message: string, autoClose = 1000): void => {
  toast.success(message, { autoClose });
};

export const info = (message: string, autoClose = 2000): void => {
  toast.info(message, { autoClose });
};

export const clear = (): void => {
  toast.dismiss();
};
