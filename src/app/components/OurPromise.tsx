export default function OurPromise() {
  return (
    <div className="bg-fuchsia-200 mt-4 p-4">

      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8 px-4">

        <div className="text-center w-full sm:w-1/3">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Free Delivery</h3>
          <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center w-full sm:w-1/3">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">90 Days Return</h3>
          <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center w-full sm:w-1/3">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Secure Payment</h3>
          <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>

      </div>

    </div>
  );
}
