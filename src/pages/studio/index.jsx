import React, { useEffect, useState } from 'react';
import Workspace from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { getImageSize } from 'polotno/utils/image';
import { SectionTab } from 'polotno/side-panel';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import {
    TextSection,
    ElementsSection,
    UploadSection,
    BackgroundSection,
    SizeSection,
} from 'polotno/side-panel';
import { observer } from 'mobx-react-lite';
import { InputGroup } from '@blueprintjs/core';
import { allImages } from '../../assets';

import '@blueprintjs/core/lib/css/blueprint.css';

const store = createStore({
    key: 'nFA5H9elEytDyPyvKL7T',
    showCredit: true,
});

store.addPage();

export const PhotosPanel = observer(({ store }) => {
    const [images, setImages] = useState([]);

    async function loadImages() {
        setImages([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setImages(allImages.map((imgUrl) => (
            { url: imgUrl }
        )));
    };

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <InputGroup
                leftIcon="search"
                placeholder="Search..."
                onChange={(e) => {
                    loadImages();
                }}
                style={{
                    marginBottom: '20px',
                }}
            />
            <ImagesGrid
                images={images}
                getPreview={(image) => image.url}
                onSelect={async (image, pos) => {
                    const { width, height } = await getImageSize(image.url);
                    store.activePage.addElement({
                        type: 'image',
                        src: image.url,
                        width,
                        height,
                        x: pos ? pos.x : store.width / 2 - width / 2,
                        y: pos ? pos.y : store.height / 2 - height / 2,
                    });
                }}
                rowsNumber={2}
                isLoading={!images.length}
                loadMore={false}
            />
        </div>
    );
});

const CustomPhotos = {
    name: 'photos',
    Tab: (props) => (
        <SectionTab name="Photos" {...props}>
            <MdPhotoLibrary />
        </SectionTab>
    ),
    Panel: PhotosPanel,
};

const sections = [
    TextSection,
    CustomPhotos,
    ElementsSection,
    UploadSection,
    BackgroundSection,
    SizeSection,
];

export default function Studio() {
    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} sections={sections} defaultSection="photos" />
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} />
                <Workspace store={store} />
                <ZoomButtons store={store} />
            </WorkspaceWrap>
        </PolotnoContainer>
    );
};