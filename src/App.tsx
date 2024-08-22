import React, { useRef } from 'react';

function App() {
  const modelViewerRef = useRef<HTMLElement>(null);

  const handleColorChange = (colorString: string) => {
    const modelViewerColor = modelViewerRef.current as any;
    if (modelViewerColor?.model?.materials?.length > 0) {
      const [material] = modelViewerColor.model.materials;
      material.pbrMetallicRoughness.setBaseColorFactor(colorString);
    }
  };


  return (
    <div>
      <model-viewer
        ref={modelViewerRef}
        id="color"
        camera-controls
        touch-action="pan-y"
        interaction-prompt="none"
        src="kitchen.glb"
      
        alt="A 3D model of an astronaut"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="controls" id="color-controls">
          <button onClick={() => handleColorChange('#ff0000')} data-color="#ff0000">Red</button>
          <button onClick={() => handleColorChange('#00ff00')} data-color="#00ff00">Green</button>
          <button onClick={() => handleColorChange('#0000ff')} data-color="#0000ff">Blue</button>
        </div>
      </model-viewer>
    </div>
  );
}

export default App;
