'use client'

import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useState} from "react";

export default function BarcodeScanner() {
    const [ean, setEan] = useState<string>("Not set");
    const [torchEnabled, setTorchEnabled] = useState<boolean>(false);

    return <>
        <BarcodeScannerComponent
            width={800}
            height={800}
            torch={torchEnabled}
            onUpdate={(err, result) => {
                if (result) {
                    setEan(result.getText())
                }
            }}
        />
        <p>{ean}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            setTorchEnabled(!torchEnabled)
            console.log(`Toggling Torch ${torchEnabled}`)
        }}>Torch
        </button>
    </>;
}