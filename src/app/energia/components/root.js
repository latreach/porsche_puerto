import data from '../datos/latreach.csv';
import {stratify, pack} from '.,/constants';

export const root = stratify(data)  
  .sum(function(d){return d.value;})
  .sort(function(a,b){return b.value-a.value;});

pack(root)

