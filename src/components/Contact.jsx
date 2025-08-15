import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
   const [state, handleSubmit] = useForm("xanbvnqv"); 
  const [showForm, setShowForm] = useState(true);

  if (state.succeeded && !showForm) {
    return (
      <div className="text-center p-10">
        <p className="text-green-600 text-lg font-semibold mb-6">
          ✅ Thanks for contacting us! We’ll get back to you soon.
        </p>
        <button onClick={() => { setShowForm(true); window.location.reload(); }}  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-200">
          Back to Contact Form
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-6 py-20 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Real Stories, From Those Who <br /> Found Home With Us
      </p>

      <form className="max-w-2xl mx-auto text-grey-600 pt-8" onSubmit={(e) => { handleSubmit(e);  setShowForm(false);}} >
          <div className='flex flex-cols-2 items-center gap-6'>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-2xs text-left">
                Your Name
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="name" placeholder="Your Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
            </div>

            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-2xs text-left">
                Your Email
                <input  className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="email" placeholder="Your Email" required/>
                <ValidationError  prefix="Email"  field="email" errors={state.errors}/>
              </div>
            </div>
          </div>

        <div className="my-6 text-left">
          Message
          <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"  name="message"  placeholder="Message" required></textarea>
          <ValidationError  prefix="Message"  field="message"  errors={state.errors}   />
        </div>

        <button  type="submit" disabled={state.submitting}  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 mb-10 rounded transition duration-200" >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact