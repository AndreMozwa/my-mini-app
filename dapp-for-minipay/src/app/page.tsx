export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-brown-100">
      <header className="w-full max-w-4xl p-4 mb-8 text-center border-b-2 border-brown-500">
        <h1 className="text-5xl font-bold text-brown-800">Crpto Wallet</h1>
      </header>

      <section className="w-full max-w-4xl mb-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brown-700">Balance</h3>
            <p className="mt-2 text-4xl font-bold text-brown-900">5 BTC</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brown-700">Recent Transactions</h3>
            <ul className="mt-2 text-sm text-brown-500">
              <li>0.1 BTC to 0x2GTF658esd10d</li>
              <li>0.05 BTC from 0x7G2NR567d23De</li>
              <li>0.2 BTC to 0x1e345f5GH456Kk</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-3xl font-semibold text-brown-800">Send funds</h2>
        <form className="flex flex-col">
          <label className="mb-2 text-sm text-brown-700" htmlFor="address">
            Acount Address
          </label>
          <input
            className="input-field mb-4"
            type="text"
            id="address"
            placeholder=""
          />
          <label className="mb-2 text-sm text-brown-700" htmlFor="amount">
            Amount (BTC)
          </label>
          <input
            className="input-field mb-4"
            type="number"
            id="amount"
            placeholder=""
          />
          <button
            type="submit"
            className="submit-button bg-brown-600 text-white hover:bg-brown-700"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
