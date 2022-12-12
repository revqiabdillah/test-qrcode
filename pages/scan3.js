import React, { useEffect } from "react";
import Layout from "../src/Layout";
import { Html5Qrcode } from "html5-qrcode";
import { consoleApps } from "../src/helpers/console-apps";

export default function Scan3() {
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    alert(`Code matched = ${decodedText}`, decodedResult);
  }

  // eslint-disable-next-line no-unused-vars
  function onScanFailure(scanError) {
    alert(`Error: ${scanError}`);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html5QrCode = new Html5Qrcode(/* element id */ "reader");
      html5QrCode
        .start(
          { facingMode: { exact: "environment"} },
          {
            fps: 10, // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
          },
          (decodedText, decodedResult) => {
            // do something when code is read
            consoleApps('success', `Code matched = ${decodedText}`, decodedResult);
          },
          (errorMessage) => {
            consoleApps('failed', errorMessage)
            html5QrCode.stop();
            // parse error, ignore it.
          }
        )
        .catch((err) => {
            html5QrCode.stop();
            consoleApps('failed', err)
          // Start failed, handle it.
        });
    }
  }, []);
  return (
    <Layout>
      <p>Scan 3</p>
      <div id="reader" />
    </Layout>
  );
}
