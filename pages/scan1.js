import Layout from "../src/Layout"
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function Scan1() {
    function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        alert(`Code matched = ${decodedText}`, decodedResult);
    }

    // eslint-disable-next-line no-unused-vars
    function onScanFailure(scanError) {
        alert(`Error: ${scanError}`)
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
