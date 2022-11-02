import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.user_name.value);

    emailjs
      .sendForm(
        "service_cwccpw6",
        "template_0hfn8o9",
        form.current,
        "ym1zarsRcd-cpTvic"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent, We will get back to you shortly");
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent, please try again");
        }
      );
  };

  return (
    <div>
      <section className="bg-black h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h1 className=" text-center text-white  max-w-xl text-xl">
                Book your event
              </h1>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" for="name">
                    First Name
                  </label>
                  <input
                    required
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    name="user_name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                      Email
                    </label>
                    <input
                      required
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="email">
                      Date of event
                    </label>
                    <input
                      required
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Date of event"
                      type="date"
                      name="event_date"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      required
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label className="sr-only" for="phone">
                      Type of event
                    </label>
                    <input
                      required
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Type of event"
                      type="text"
                      name="event_type"
                    />
                  </div>
                </div>
                {/* 
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="sr-only"
                      id="option1"
                      type="radio"
                      tabindex="-1"
                    />
                    <label
                      for="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only"
                      id="option2"
                      type="radio"
                      tabindex="-1"
                    />
                    <label
                      for="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="sr-only"
                      id="option3"
                      type="radio"
                      tabindex="-1"
                    />
                    <label
                      for="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span className="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div> */}

                <div>
                  <label className="sr-only" for="message">
                    Message
                  </label>
                  <textarea
                    required
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                  >
                    <span className="font-medium"> Send Enquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
