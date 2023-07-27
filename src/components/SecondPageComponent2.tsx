import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Department {
  id: number;
  name: string;
  subDepartments?: Department[];
}

const departmentData: Department[] = [
  {
    id: 1,
    name: 'Department 1',
    subDepartments: [
      { id: 11, name: 'Sub-Department 1.1' },
      { id: 12, name: 'Sub-Department 1.2' },
    ],
  },
  {
    id: 2,
    name: 'Department 2',
    subDepartments: [
      { id: 21, name: 'Sub-Department 2.1' },
      { id: 22, name: 'Sub-Department 2.2' },
    ],
  },
  // Add more departments and sub-departments based on your data
];

const renderTree = (nodes: Department) => (
  <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
    {Array.isArray(nodes.subDepartments)
      ? nodes.subDepartments.map((node) => renderTree(node))
      : null}
  </TreeItem>
);

const SecondPageComponent2: React.FC = () => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {/* Render the tree structure */}
      {departmentData.map((node) => renderTree(node))}
    </TreeView>
  );
};

export default SecondPageComponent2;
