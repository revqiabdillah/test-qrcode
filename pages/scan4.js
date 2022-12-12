import React, { useEffect } from "react";
import Layout from "../src/Layout";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";

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
        if (typeof window !== 'undefined') {
            Html5Qrcode.getCameras()
                // eslint-disable-next-line no-unused-vars
                .then((devices) => {
                    /**
                     * devices would be an array of objects of type:
                     * { id: "id", label: "label" }
                     */
                    // if (devices && devices.length) {
                    //     const cameraId = devices[0].id;
                    // .. use this to start scanning.
                    const html5QrCode = new Html5Qrcode(/* element id */ 'reader', {
                        // verbose: true,
                        formatsToSupport: [
                            Html5QrcodeSupportedFormats.QR_CODE,
                            Html5QrcodeSupportedFormats.EAN_13,
                            Html5QrcodeSupportedFormats.CODE_39,
                            Html5QrcodeSupportedFormats.AZTEC,
                            Html5QrcodeSupportedFormats.CODABAR,
                            Html5QrcodeSupportedFormats.CODE_93,
                            Html5QrcodeSupportedFormats.CODE_128,
                            Html5QrcodeSupportedFormats.CODE_39,
                            Html5QrcodeSupportedFormats.DATA_MATRIX,
                            Html5QrcodeSupportedFormats.MAXICODE,
                            Html5QrcodeSupportedFormats.ITF,
                            Html5QrcodeSupportedFormats.EAN_13,
                            Html5QrcodeSupportedFormats.EAN_8,
                            Html5QrcodeSupportedFormats.PDF_417,
                            Html5QrcodeSupportedFormats.RSS_14,
                            Html5QrcodeSupportedFormats.RSS_EXPANDED,
                            Html5QrcodeSupportedFormats.UPC_A,
                            Html5QrcodeSupportedFormats.UPC_E,
                            Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
                        ],
                    });
                    html5camera.current = html5QrCode;
                    html5QrCode
                        .start(
                            { facingMode: { exact: "environment"} },
                            {
                                fps: 10, // Optional, frame per seconds for qr code scanning
                                qrbox: { width: 300, height: 250 }, // Optional, if you want bounded box UI
                            },
                            onScanSuccess,
                            onScanFailure,
                        )
                        .then(() => {})
                        .catch((err) => {
                            console.log('error', err);
                            // Start failed, handle it.
                            html5QrCode.stop();
                        });
                    // }
                })
                .catch((err) => {
                    console.log('err', err);
                    // handle err
                });
        }
    }
  }, []);
  return (
    <Layout>
      <p>Scan 4</p>
      <div id="reader" />
    </Layout>
  );
}
