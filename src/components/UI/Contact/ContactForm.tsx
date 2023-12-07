const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
      <div>
        <div className="card bg-[#2a323c] text-neutral-content z-10">
          <div className="card-body text-gray-400">
            <h1 className="text-3xl font-bold">Write to us here</h1>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="bg-[#2a323c] input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-[#2a323c]"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full  bg-[#2a323c]"
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Phone number</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full bg-[#2a323c]"
                  />
                </label>
              </div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full bg-[#2a323c]"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Message</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24 bg-[#2a323c]"
                  placeholder="Type here"
                ></textarea>
              </label>
              <button className="btn btn-black w-full text-white mt-8">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-[#2a323c] text-neutral-content z-10">
          <div className="card-body items-center text-center text-gray-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358252.810993038!2d-73.467936!3d45.452677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90f4cedf5578d%3A0xee78bdfdd9774769!2s7900%20Taschereau%20Blvd%2C%20Saint-Jean-sur-Richelieu%2C%20QC%20J4X%201C2%2C%20Canada!5e0!3m2!1sen!2sus!4v1701671236748!5m2!1sen!2sus"
              height="510"
              loading="lazy"
              className="rounded-lg w-full lg:w-[600px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
