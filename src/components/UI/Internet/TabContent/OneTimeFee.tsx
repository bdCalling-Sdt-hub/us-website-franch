const OneTimeFees = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center tab-content bg-base-100 border-base-300 rounded-box p-6 py-16">
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">DEPARTURE FEES</h1>
        <p>
          A start-up fee ranging from $45 to $100+taxes is required for any new
          installation/activation (including address changes).
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">
          CHANGE PACKAGE OR SPEED
        </h1>
        <p>
          The cost to change the Internet speed or to change from one plan to
          another is $35 + taxes.
        </p>
      </div>
      <div className="mx-auto">
        <h1 className="text-2xl font-medium text-white mb-4">SHIPPING</h1>
        <p>
          Shipping costs between 0 and $15 + taxes depending on your location,
          our promotions and the quantity of equipment sent.
        </p>
      </div>
    </div>
  );
};

export default OneTimeFees;
