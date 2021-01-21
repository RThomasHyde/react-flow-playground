import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    description: {
        marginBottom: '10px',
    },
    dndNode: {
        height: '20px',
        padding: '4px',
        border: '1px solid #1a192b',
        borderRadius: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'grab',
    },
    input: {
        borderColor: '#0041d0',
    },
    output: {
        borderColor: '#ff0072'
    }
}));

const Sidebar = () => {
    const classes = useStyles();

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className={classes.description}>You can drag these nodes to the pane on the left.</div>
            <div className={clsx(classes.dndNode, classes.input)} onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className={classes.dndNode} onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className={clsx(classes.dndNode, classes.output)} onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};

export default Sidebar;