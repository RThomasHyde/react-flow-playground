import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    updateEdge,
    removeElements,
    Controls,
} from 'react-flow-renderer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dndFlow: {
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto',
    },
    reactFlowWrapper: {
        flex: '1 1 auto',
    }
}));

const initialElements = [
    {
        id: '1',
        type: 'input',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'input node' },
        position: { x: 250, y: 5 },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
    const classes = useStyles();
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);

    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));

    const onConnect = (params) => setElements((els) => addEdge(params, els));

    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));

    const onLoad = (_reactFlowInstance) =>
        setReactFlowInstance(_reactFlowInstance);

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event) => {
        event.preventDefault();
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            sourcePosition: 'right',
            targetPosition: 'left',
            data: { label: `${type} node` },
        };
        setElements((es) => es.concat(newNode));
    };

    return (
        <>
            <Nav />
            <div className={classes.dndFlow}>
                <ReactFlowProvider>
                    <div className={classes.reactFlowWrapper} ref={reactFlowWrapper}>
                        <ReactFlow
                            elements={elements}
                            onConnect={onConnect}
                            onElementsRemove={onElementsRemove}
                            onEdgeUpdate={onEdgeUpdate}
                            onLoad={onLoad}
                            onDrop={onDrop}
                            onDragOver={onDragOver}>
                            <Controls />
                        </ReactFlow>
                    </div>
                    <Sidebar />
                </ReactFlowProvider>
            </div>
        </>
    )
}

export default Flow;