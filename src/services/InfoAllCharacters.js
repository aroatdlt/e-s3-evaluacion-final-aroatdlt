const HARRYPOTTERINFO = 'http://hp-api.herokuapp.com/api/characters';

const fetchHarry = () => fetch(HARRYPOTTERINFO).then(response => response.json());

export {fetchHarry};