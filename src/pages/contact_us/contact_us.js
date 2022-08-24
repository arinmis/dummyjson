import React from "react";
import Input from "../../components/input";

const ContactUs = () => {
  return (
    <div className="w-full flex  align-center justify-center main-padding">
      <form className="card text-left card-w-resp grid grid-cols-2 gap-1">
        <p className="title col-span-2">Say something</p>
        <Input label={"name"} type={"text"} />
        <Input label={"title"} type={"text"} />
        <div className="col-span-2">
          <Input label={"email"} type={"email"} />
        </div>
        <label className="col-span-2 h-full">
          <span className="text-xs">Message:</span>
          <textarea className="w-full input-style h-24" />
        </label>
        <div className="col-span-2 flex justify-end">
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("We received your message.");
            }}
            className="btn-primary mt-3"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
