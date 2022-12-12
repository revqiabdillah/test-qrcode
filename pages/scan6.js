import React from "react";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// const BarcodeScannerComponent = dynamic(() => import("react-qr-barcode-scanner"), {
//   ssr: false,
//   suspense:  true
// })

const Scan6 = () => {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      {/* {
        typeof window !== 'undefined' && (
          <Suspense fallback={`Loading...`}>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
                }}
            />
            </Suspense>
        )
      } */}
      <p>{data}</p>
    </>
  );
}

export default Scan6;