import "./App.css";
import { usePDF, Margin } from "react-to-pdf";
import TestReport from "./components/TestReport";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div ref={targetRef}>
          <TestReport />
        </div>
        <button
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            toPDF({
              page: {
                // margin is in MM, default is Margin.NONE = 0
                margin: Margin.SMALL,
                // default is 'A4'
                format: "letter",
                // default is 'portrait'
                orientation: "landscape",
              },
            })
          }
        >
          Download
        </button>
      </div>
    </>
  );
}

export default App;
