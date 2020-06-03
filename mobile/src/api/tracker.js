import axios from 'axios';
import { API } from '../constants/network.js';

export default axios.create({
  baseURL: API
})