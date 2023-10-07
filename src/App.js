import * as React from "react";
import "./App.css";
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer";
import useWindowDimensions from "./Demention";

function App() {
  const { height } = useWindowDimensions();

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          documentPath="https://arxiv.org/pdf/1604.02480.pdf"
          style={{ height: height }}
          enableToolbar={true}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              FormFields,
              FormDesigner,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
export default App;
