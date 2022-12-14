import React, { useEffect } from "react";
import Layout from "../src/Layout"
import { Html5QrcodeScanner } from 'html5-qrcode';
import { consoleApps } from "../src/helpers/console-apps";

export default function Scan1() {
    function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        consoleApps('success', `Code matched = ${decodedText}`, decodedResult);
    }

    // eslint-disable-next-line no-unused-vars
    function onScanFailure(scanError) {
        consoleApps('failed1', scanError)
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            let html5QrcodeScanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: {width: 250, height: 250} },
                /* verbose= */ false);
              html5QrcodeScanner.render(onScanSuccess, onScanFailure);
        }

    }, []);
  return (
    <Layout>
        <p>Scan 1</p>
        <div id="reader" />
    </Layout>
  )
}
