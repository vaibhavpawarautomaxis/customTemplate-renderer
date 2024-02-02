import ReactDOM from "react-dom";
import { InvoiceDocument } from "../src/templates/invoice_template";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Default document", document: InvoiceDocument },
      {
        name: "Red document",
        document: {
          ...InvoiceDocument,
          foo: "bar",
          $template: {
            ...InvoiceDocument,
            name: "red"
          }
        }
      }
    ]}
  />,
  document.getElementById("root")
);
