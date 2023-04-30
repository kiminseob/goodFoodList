import { toast } from 'react-toastify';

const success = (text: string) => toast.success(text);
const error = (text: string) => toast.error(text);
const info = (text: string) => toast.info(text);

export { success, error, info };
