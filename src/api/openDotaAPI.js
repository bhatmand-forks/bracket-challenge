import axios from 'axios';

export const fetchAllTeams = async () => await axios.get('https://api.opendota.com/api/teams')
export const fetchAllPlayers = async (teamId) => await axios.get(`https://api.opendota.com/api/teams/${teamId}/players`)