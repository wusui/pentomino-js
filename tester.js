const pUtils = require('./pent_utils');
const tPoints = require('./tree_points');
const treeNode = require('./tree_nodes');
const tFixDupPts = require('./tree_fix_pt_dups');
const tTreeMakeTier = require('./tree_make_tier');
const tCleanTier = require('./tree_clean_old_tier');
const tTreeFigures =  require('./tree_figures');

b = treeNode.tRoot();

a = b.map(treeNode.addBranches(b));

console.log(a);
console.log(a[1].offspring);
console.log(a[2].offspring);
console.log("========================");

g = tFixDupPts.removeDupPoints(a);

console.log(g);
console.log(g[1].offspring);
console.log(g[2].offspring);
console.log("-----------------------");

//x = g.map(tCleanTier.reformatTier);

//console.log(x);
//console.log("*****************************");

p = tTreeMakeTier.genNextTier(g);

console.log(p);

p = tTreeFigures.getFigs(p)(g);

console.log(p);
console.log("*******************===========================");

zz = pUtils.findDupLinks(p.map(x => x.figure));

console.log(zz);
console.log("::::::::::::::::::::::::::::::::::::::::");

const orderPvals = arr => [...(arr.reduce((acc, e) => acc.set(e, (acc.get(e)
  || 0) + 1), new Map())).entries()];

const getFrom = nTree => orderPvals(nTree.map(x => x.parent)).sort(
  x => x[1]).reverse().map(x => x[0]);

frum = getFrom(p);
console.log(frum);
console.log("::::::::::::::::::::::::::::::::::::::::");

const allThePLinks = nodes => value =>
  nodes.filter(x => x.figure === value).map(x => x.parent);

hwhere = allThePLinks(p)(3);
console.log(hwhere);

console.log(frum.find(e => hwhere.includes(e)));

// xx = zz.map(x => frum.find(e => allThePLinks(p)(x).includes(e)));

const getRmInfo = nTree => pUtils.zip(
  nTree.map(x => frum.find(e => allThePLinks(p)(x).includes(e))),
  nTree);

console.log(getRmInfo(zz));
// console.log(pUtils.zip(xx, zz));

//const getNewPLists = x =>  x.map(retParentVal);

//const retParentVal = x => x.parent;

//console.log(getNewPLists(p));
//console.log("+++++++++++++++++++++");

//const saveData = node => index => nplist => size => [size, nplist, index];

//const getBranches = (nplist, size) => (node, index) =>
//  nplist.indexOf(index) != -1 ?
//  {...node, branches: saveData(node)(index)(nplist)(size)} : node;

//x = x.map(getBranches(getNewPLists(p), x.length));

//console.log(x);