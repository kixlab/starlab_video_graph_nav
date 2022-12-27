import ReactFlow, { Controls, Background, useZoomPanHelper, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

function SceneGraph(
  id,
) {
  const proOptions = { hideAttribution: true };

  // Egg: 6CJryveLzvI
  const edges_video1 = [
    //1
    [{ id: '1-2', source: '1', target: '2', label: 'fill up', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //2
    [{ id: '2-3', source: '2', target: '3', label: 'on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '1-2', source: '1', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //3
    [{ id: '4-5', source: '4', target: '5', label: 'take out', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '5-10', source: '5', target: '10', label: 'on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '4-10', source: '4', target: '10', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //4
    [{ id: '4-3', source: '4', target: '3', label: 'turn on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '5-1', source: '5', target: '1', label: 'put in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //5
    [],
    //6
    [{ id: '6-7', source: '6', target: '7', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //7
    [{ id: '4-5', source: '4', target: '5', label: 'take out', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '5-2', source: '5', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //8
    [{ id: '5-9', source: '5', target: '9', label: 'set on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //9
    [],
    //10
    [{ id: '4-5', source: '4', target: '5', label: 'crack, hold, spoon out', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '4-10', source: '4', target: '10', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    //11
    [{ id: '11-5', source: '11', target: '5', label: 'add', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '12-5', source: '12', target: '5', label: 'add', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '5-9', source: '5', target: '9', label: 'on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
    [{ id: '13-5', source: '13', target: '5', label: 'add', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '5-9', source: '5', target: '9', label: 'on', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  ];

  const nodes_video1 = [
    // 1
    [{
      id: '1',
      position: { x: 50, y: 20 },
      data: { label: 'Water' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 50, y: 120 },
      data: { label: 'Pot' },
      type: 'output',
    }],
    //2
    [{
      id: '3',
      position: { x: 50, y: 170 },
      data: { label: 'Stove' },
      type: 'output',
    },
    {
      id: '2',
      position: { x: 0, y: 90 },
      data: { label: 'Pot' },
    },
    {
      id: '1',
      position: { x: 150, y: 20 },
      data: { label: 'Water' },
      type: 'input',
    }],
    // 3
    [{
      id: '4',
      position: { x: 100, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
    {
      id: '5',
      position: { x: 0, y: 120 },
      data: { label: 'Egg' },
    },
    {
      id: '10',
      position: { x: 200, y: 120 },
      data: { label: 'Spoon' },
      type: 'output',
    },],
    // 4
    [{
      id: '4',
      position: { x: 0, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
    {
      id: '3',
      position: { x: 0, y: 120 },
      data: { label: 'Stove' },
      type: 'output',
    },
    {
      id: '5',
      position: { x: 180, y: 20 },
      data: { label: 'Egg' },
      type: 'input',
    },
    {
      id: '1',
      position: { x: 180, y: 120 },
      data: { label: 'Water' },
      type: 'output',
    }],
    //5
    [{
      id: '4',
      position: { x: 0, y: 20 },
      data: { label: 'Person' },
      type: 'output',
    },],
    //6
    [{
      id: '6',
      position: { x: 0, y: 20 },
      data: { label: 'Bread' },
      type: 'input',
    },
    {
      id: '7',
      position: { x: 0, y: 120 },
      data: { label: 'Toaster' },
      type: 'output',
    },
    {
      id: '8',
      position: { x: 180, y: 60 },
      data: { label: 'Ghee' },
      type: 'output',
    },],
    //7
    [{
      id: '4',
      position: { x: 0, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
    {
      id: '5',
      position: { x: 80, y: 90 },
      data: { label: 'Egg' },
    },
    {
      id: '2',
      position: { x: 180, y: 160 },
      data: { label: 'Pot' },
      type: 'output',
    }],
    //8
    [{
      id: '5',
      position: { x: 50, y: 20 },
      data: { label: 'Egg' },
      type: 'input'
    },
    {
      id: '9',
      position: { x: 50, y: 120 },
      data: { label: 'Plate' },
      type: 'output',
    }],
    //9
    [],
    //10
    [{
      id: '4',
      position: { x: 0, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
    {
      id: '5',
      position: { x: 80, y: 90 },
      data: { label: 'Egg' },
    },
    {
      id: '10',
      position: { x: 80, y: 160 },
      data: { label: 'Spoon' },
      type: 'output'
    },],
    //11
    [{
      id: '5',
      position: { x: 100, y: 90 },
      data: { label: 'Egg' },
    },
    {
      id: '9',
      position: { x: 100, y: 160 },
      data: { label: 'Plate' },
    },
    {
      id: '11',
      position: { x: 0, y: 20 },
      data: { label: 'Lemon Pepper' },
    },
    {
      id: '12',
      position: { x: 200, y: 20 },
      data: { label: 'Salt' },
    },],
    [{
      id: '5',
      position: { x: 0, y: 90 },
      data: { label: 'Egg' },
    },
    {
      id: '9',
      position: { x: 0, y: 160 },
      data: { label: 'Plate' },
    },
    {
      id: '13',
      position: { x: 0, y: 20 },
      data: { label: 'Pepper' },
    },]

  ];

// Slime: Rcsy2HRuiyA
const edges_video2 = [
  //1
  [{ id: '1-2', source: '1', target: '2', label: 'put', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //2
  [{ id: '1-2', source: '1', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '3-1', source: '3', target: '1', label: 'stir', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //3
  [{ id: '1-2', source: '1', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '4-1', source: '4', target: '1', label: 'put in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '3-2', source: '3', target: '1', label: 'stir', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //4
  [{ id: '5-2', source: '5', target: '2', label: 'put in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //5
  [{ id: '6-7', source: '6', target: '7', label: 'open', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //6
  [{ id: '5-2', source: '5', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}, { id: '7-5', source: '7', target: '5', label: 'soak in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},],
  //7
  [{ id: '6-8', source: '6', target: '8', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '8-7', source: '8', target: '7', label: 'cut', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //8
  [{ id: '6-8', source: '6', target: '8', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '8-7', source: '8', target: '7', label: 'cut', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //9
  [{ id: '6-7', source: '6', target: '7', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '7-2', source: '7', target: '2', label: 'pump', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //10
  [{ id: '6-9', source: '6', target: '9', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '9-2', source: '9', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //11
  [{ id: '6-9', source: '6', target: '9', label: 'hold', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '9-2', source: '9', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //12
    [{ id: '6-10', source: '6', target: '10', label: 'hold, put in, mix', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
    { id: '9-2', source: '9', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},   { id: '10-2', source: '10', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //13
  [{ id: '6-10', source: '6', target: '10', label: 'mix', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '6-9', source: '6', target: '9', label: 'mix', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '9-2', source: '9', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},
  { id: '10-2', source: '10', target: '2', label: 'in', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}}],
  //14
  [{ id: '6-10', source: '6', target: '10', label: 'knead', markerEnd: {type: MarkerType.Arrow, width: 30, height: 30}},],
];

const nodes_video2 = [
  //1
  [{
    id: '1',
    position: { x: 150, y: 20 },
    data: { label: 'Glue' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 150, y: 100 },
    data: { label: 'Bowl' },
    type: 'output',
  },],
  //2
  [{
    id: '1',
    position: { x: 150, y: 100 },
    data: { label: 'Glue' },
  },
  {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '3',
    position: { x: 150, y: 20 },
    data: { label: 'Spatula' },
    type: 'input',
  },],
  //3
  [{
    id: '1',
    position: { x: 150, y: 100 },
    data: { label: 'Glue' },
  },
  {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '3',
    position: { x: 230, y: 20 },
    data: { label: 'Spatula' },
    type: 'input',
  },
  {
    id: '4',
    position: { x: 30, y: 20 },
    data: { label: 'Activator' },
    type: 'input',
  },],
  //4
  [{
    id: '2',
    position: { x: 150, y: 150 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '5',
    position: { x: 150, y: 20 },
    data: { label: 'Water' },
    type: 'input',
  },],
  //5
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
  {
    id: '7',
    position: { x: 150, y: 150 },
    data: { label: 'Diaper' },
    type: 'output',
  },],
  //6
  [{
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '5',
    position: { x: 150, y: 100 },
    data: { label: 'Water' },
  },
  {
    id: '7',
    position: { x: 150, y: 20 },
    data: { label: 'Diaper' },
    type: 'input',
  },],
  //7
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '8',
    position: { x: 150, y: 100 },
    data: { label: 'Scissors' },
  },
  {
    id: '7',
    position: { x: 150, y: 180 },
    data: { label: 'Diaper' },
    type: 'output',
  },],
  //8
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '8',
    position: { x: 150, y: 100 },
    data: { label: 'Scissors' },
  },
  {
    id: '7',
    position: { x: 150, y: 180 },
    data: { label: 'Diaper' },
    type: 'output',
  },],
  //9
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '7',
    position: { x: 150, y: 100 },
    data: { label: 'Diaper' },
  },,],
  //10
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '9',
    position: { x: 150, y: 100 },
    data: { label: 'Snow' },
  },],
  //11
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '9',
    position: { x: 150, y: 100 },
    data: { label: 'Snow' },
  },],
  //12
  [{
    id: '6',
    position: { x: 150, y: 20 },
    data: { label: 'Person' },
    type: 'input',
  },
    {
    id: '2',
    position: { x: 150, y: 180 },
    data: { label: 'Bowl' },
    type: 'output',
  },
  {
    id: '9',
    position: { x: 30, y: 100 },
    data: { label: 'Snow' },
    type: 'input',
  },
  {
    id: '10',
    position: { x: 230, y: 100 },
    data: { label: 'Slime' },
  },],
    //13
    [{
      id: '6',
      position: { x: 150, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
      {
      id: '2',
      position: { x: 150, y: 180 },
      data: { label: 'Bowl' },
      type: 'output',
    },
    {
      id: '9',
      position: { x: 30, y: 100 },
      data: { label: 'Snow' },
    },
    {
      id: '10',
      position: { x: 230, y: 100 },
      data: { label: 'Slime' },
    },],
    //14
    [{
      id: '6',
      position: { x: 150, y: 20 },
      data: { label: 'Person' },
      type: 'input',
    },
    {
      id: '10',
      position: { x: 150, y: 100 },
      data: { label: 'Slime' },
      type: 'output',
    },],
  ]; 



  return (
    <div style={{ height: '100%' }}>
      <ReactFlow 
        nodes={nodes_video2[id.id-1]}
        edges={edges_video2[id.id-1]} 
        proOptions={proOptions} 
        preventScrolling={false}
        nodesConnectable={false}
        nodesDraggable={false}
        panOnScroll={false}
        paneMoveable={false}
        fitView={true}>
      </ReactFlow>
    </div>
  );
};

export default SceneGraph;
