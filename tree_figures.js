const evalNumb2 = sumv => rowv => [0, 0, 2, 6, 12][sumv] + rowv -
  [0, 0, -1, -2, -3][sumv]

const evalNumb = point => evalNumb2(Math.abs(point.row) +
  Math.abs(point.col))(point.row);

const getFigValue = tree => tnode => tnode.hasOwnProperty('parent') ?
  2 ** evalNumb(tnode.point) + getFigValue(tree)(tree[tnode.parent]) : 0;

const setFigValue = tree => tnode => ({...tnode,
  'figure': getFigValue(tree)(tnode)});

const getFigs = tnew => tree => tnew.map(setFigValue(tree));

exports.getFigs = getFigs;