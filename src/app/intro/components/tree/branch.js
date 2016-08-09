import {branches, da, dl, ar, maxDepth} from './constants';
import {endPt} from './endPt';

export function branch (b) {
  let daR, newB;
  const end = endPt(b);

  branches.push(b);

  if (b.d === maxDepth) {
    return;
  }

  // Left Branch
  daR = ar * Math.random() - ar * 0.5;
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a - da + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);

  // Right branch
  daR = ar * Math.random() - ar * 0.5;
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a + da + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);
}
