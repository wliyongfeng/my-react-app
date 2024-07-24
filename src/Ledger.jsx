import TransportWebHID from '@ledgerhq/hw-transport-webhid';
import { SubstrateApp, supportedApps } from '@zondax/ledger-substrate';
import { useEffect } from "react";

async function newPolkadotApp(transport) {
  try {
    const app = new SubstrateApp(
      transport,
      supportedApps[0].cla,
      supportedApps[0].slip0044,
    );

    console.log("app", app);

    // const app = await newSubstrateApp(transport, "polkadot");
    // const bip42Path = `m/44'/354'/${0}'/${0}'/${0}'`;
    // const address = await app.getAddress(bip42Path, 0, false);
    // console.log("addr", address);
    const version = await app.getVersion();
    console.log("app", app, "version", version);
  } catch (e) {
    console.error("returnCode:", e.returnCode, "errorMessage:", e.errorMessage);
  }
}

async function testLedger() {
  try {
    // const supported = await TransportWebHID.isSupported();
    // console.log("supported", supported);
    // const [device] = await TransportWebHID.list();
    // if (!device) {
    //   // const transport = await TransportWebHID.request();
    //   // console.log("transport after request", transport);
    //   // console.log("no device")
    //   // return;
    // } else {
    //   await device.close();
    // }

    // console.log( "device", device);
    // if (device.opened) {
    //   await device.close();
    // }

    const transport = await TransportWebHID.create();
    console.log("transport", transport);
    await newPolkadotApp(transport);
    await transport.close();
    console.log("closed")
  } catch (e) {
    console.error(e);
  }
}

export default function Ledger() {

  useEffect(() => {

  }, []);

  return (
    <button
      onClick={() => {
        testLedger().then(() => console.log("---------------------------------"));
      }}
    >ledger</button>
  );
}
