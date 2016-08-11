import data from './latreach.csv';
import {stratify, pack} from '../helpers';

export const root = stratify(data)
  .sum((d) => d.value)
  .sort((a, b) => b.value - a.value);
pack(root);

export const focus = root;
export const nodes = root.descendants();
