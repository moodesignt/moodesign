import Workspace from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';

import '@blueprintjs/core/lib/css/blueprint.css';

const store = createStore();

store.addPage();

export default function Studio() {
    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} />
                <Workspace store={store} />
                <ZoomButtons store={store} />
            </WorkspaceWrap>
        </PolotnoContainer>
    );
}