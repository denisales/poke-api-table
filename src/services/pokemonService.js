import api from '@/services/api';


const getPokemons = ({ page, limit }) => {
  console.log(page, limit);
  return api.get(`pokemon/?offset=${page * limit}&limit=${limit}`);
};


export default {
  getPokemons,
};
