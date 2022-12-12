import Layout from "../src/Layout";
import { Html5Qrcode } from "html5-qrcode";

export default function Scan2() {
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
          { facingMode: "environment" },
          {
            fps: 10, // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
          },
          (decodedText, decodedResult) => {
            // do something when code is read
            alert(`Result: ${decodedText} - ${decodedResult}`)
          },
          (errorMessage) => {
            html5QrCode.stop();
            alert(`err: ${errorMessage}`)
            // parse error, ignore it.
          }
        )
        .catch((err) => {
            html5QrCode.stop();
            alert(`err: ${err}`)
          // Start failed, handle it.
        });
    }
  }, []);
  return (
    <Layout>
      <p>Scan 2</p>
      <div id="reader" />
    </Layout>
  );
}
