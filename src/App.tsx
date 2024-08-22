function App() {
  return (
    <div>
      <model-viewer
        src="kitchen.glb"
        camera-controls
        style={{ width: "100%", height: "100vh" }}
      ></model-viewer>
    </div>
  );
}

export default App;
