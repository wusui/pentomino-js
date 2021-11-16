const tPoints = require('./tree_points');

const tRoot = () => [{point: {row: 0, col: 0}, branches: [1,2]},
  {point: {row: 1, col: 0}, parent: 0},
  {point: {row: 0, col: 1}, parent: 0}];

const addBranches = tree => (tnode, index) =>
  tnode.hasOwnProperty('branches') ?
  tnode : {...tnode, 'offspring': {points:
  checkAllPts(getParents(tree)(index)), index: index}};
// tPoints.getNextPoints(tnode.point), indx: index}};

const getParents = tree => indx => lukeIamYourFather(tree)
  (tree[indx]).flat(5).map(getParentPoint);

const lukeIamYourFather = tree => tnode => tnode.hasOwnProperty('parent') ?
  [tnode, lukeIamYourFather(tree)(tree[tnode.parent])] : [tnode];

const getParentPoint = tnode => tnode.point;

const checkAllPts = x => x.map(tPoints.getNextPoints).flat(5);

exports.tRoot = tRoot;
exports.addBranches = addBranches;
exports.getParents = getParents;