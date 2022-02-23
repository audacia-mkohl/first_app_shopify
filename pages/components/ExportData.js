import React, { useState, useCallback } from 'react';
import { Popover, Button, ActionList } from "@shopify/polaris";

export default function ActionListWithMediaExample() {
    const [active, setActive] = useState(true);
  
    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const handleExportedAction = useCallback(
        () => console.log('Exported action'),
        [],
      );

    const activator = (
      <Button onClick={toggleActive} disclosure>
        More actions
      </Button>
    );
  
    return (
      <div style={{height: '200px'}}>
        <Popover
          active={active}
          activator={activator}
          autofocusTarget="first-node"
          onClose={toggleActive}
        >
          <ActionList
            actionRole="menuitem"
            items={[
                {
                 content: 'Export file',
                 onAction: handleExportedAction,
                },
            ]}
          />
        </Popover>
      </div>
    );
  }