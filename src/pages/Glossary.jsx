import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 700, y: 50 }, data: { label: 'Система Типов' } },
  { id: '2', position: { x: 700, y: 110 }, data: { label: 'Тип данных' } },
  { id: '3', position: { x: 700, y: 170 }, data: { label: 'Лексический анализ' } },
  { id: '4', position: { x: 900, y: 230 }, data: { label: 'Лексема' } },
  { id: '5', position: { x: 700, y: 230 }, data: { label: 'Синтаксический анализ' } },
  { id: '6', position: { x: 700, y: 290 }, data: { label: 'Семантический анализ' } },
  { id: '7', position: { x: 700, y: 350 }, data: { label: 'Привязка' } },
  { id: '8', position: { x: 700, y: 410 }, data: { label: 'Вывод типов' } },
  { id: '9', position: { x: 700, y: 470 }, data: { label: 'Типизация' } },
  { id: '10', position: { x: 200, y: 570 }, data: { label: 'Статическая типизация' } },
  { id: '11', position: { x: 400, y: 570 }, data: { label: 'Сильная типизация' } },
  { id: '12', position: { x: 600, y: 570 }, data: { label: 'Явная типизация' } },
  { id: '13', position: { x: 800, y: 570 }, data: { label: 'Динамическая типизация' } },
  { id: '14', position: { x: 1000, y: 570 }, data: { label: 'Слабая типизация' } },
  { id: '15', position: { x: 1200, y: 570 }, data: { label: 'Неявная типизация' } },
  { id: '16', position: { x: 500, y: 640 }, data: { label: 'TypeScript' } },
  { id: '17', position: { x: 900, y: 640 }, data: { label: 'JavaScript' } },
];

const initialEdges = [
{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e2-3', source: '2', target: '3' },
{ id: 'e3-4', source: '3', target: '4' },
{ id: 'e3-5', source: '3', target: '5' },
{ id: 'e5-6', source: '5', target: '6' },
{ id: 'e6-7', source: '6', target: '7' },
{ id: 'e7-8', source: '7', target: '8' },
{ id: 'e8-9', source: '8', target: '9' },
{ id: 'e9-10', source: '9', target: '10' },
{ id: 'e9-11', source: '9', target: '11' },
{ id: 'e9-12', source: '9', target: '12' },
{ id: 'e9-13', source: '9', target: '13' },
{ id: 'e9-14', source: '9', target: '14' },
{ id: 'e9-15', source: '9', target: '15' },
{ id: 'e10-16', source: '10', target: '16' },
{ id: 'e11-16', source: '11', target: '16' },
{ id: 'e12-16', source: '12', target: '16' },
{ id: 'e13-17', source: '13', target: '17' },
{ id: 'e14-17', source: '14', target: '17' },
{ id: 'e15-17', source: '15', target: '17' },
];

export default function Glossary() {
  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 

  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
