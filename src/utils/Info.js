import Cookies from 'universal-cookie';
const cookies = new Cookies();

// I know, I know, should use a token

export const Name = () => cookies.get('name');
export const Premises = () => cookies.get('premises');
