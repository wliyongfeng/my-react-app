import { LedgerGeneric } from "@polkadot/hw-ledger";

async function testLedger() {
  try {
    const app = new LedgerGeneric('webusb', "polkadot", 0x80000162);
    const version = await app.getVersion();
    console.log('version', version);
  } catch (e) {
    console.error(e);
  }
}

export default function PolkadotLedger() {
  return (
    <button
      onClick={() => {
        console.log('hello');
        testLedger().then(() => console.log("---------------------------------"));
      }}
    >polkadot ledger</button>
  );
}
