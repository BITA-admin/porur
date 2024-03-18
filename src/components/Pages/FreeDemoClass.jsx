import React, { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { message } from "antd";

const FreeDemoClass = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_course: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID_2,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        message.success("Email sent successfully", res);
        clearFormFields();
        setTimeout(() => {
          message.destroy();
        }, 3000);
      })
      .catch((err) => {
        message.error("Try again...!!!", err);
        setTimeout(() => {
          message.destroy();
        }, 3000);
      });
  };

  const clearFormFields = () => {
    setFormData({
      user_name: "",
      user_phone: "",
      user_course: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col space-y-5 items-center ">
        <div className="p-5 w-80 rounded-md text-gray-600 shadow-md">
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="flex flex-col space-y-4 justify-center items-center"
          >
            <div>
              <h1 className="text-babyPinkColor font-semibold">
                Free Demo Class
              </h1>
            </div>
            <hr className="w-[90%]" />
            <div className="">
              <label
                htmlFor="user_name"
                className="text-darkBlueColor font-semibold text-sm "
              >
                Name <span className="text-babyPinkColor">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleInputChange}
                className="ring-1 w-full ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
              />
            </div>

            <div>
              <label
                htmlFor="user_phone"
                className="text-darkBlueColor font-semibold text-sm "
              >
                Mobile <span className="text-babyPinkColor">*</span>
              </label>
              <input
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Phone"
                name="user_phone"
                value={formData.user_phone}
                title="Please enter a valid phone number"
                onChange={handleInputChange}
                required
                className="ring-1 w-full ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
              />
            </div>

            <div>
              <label
                htmlFor="user_course"
                className="text-darkBlueColor font-semibold text-sm "
              >
                Course<span className="text-babyPinkColor">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Course"
                name="user_course"
                value={formData.user_course}
                onChange={handleInputChange}
                className="ring-1 w-full ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-darkBlueColor font-semibold text-sm "
              >
                How can we help
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
              />
              <p className="text-[11px] text-textColor2">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  target="__Blank"
                  className="text-blueColor"
                  href="https://policies.google.com/privacy"
                >
                  {" "}
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  target="__Blank"
                  className="text-blueColor"
                  href="https://policies.google.com/terms"
                >
                  {" "}
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
            <button
              type="submit"
              className="inline-block self-center bg-babyPinkColor text-textColor font-semibold rounded-full px-6 py-2 uppercase text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FreeDemoClass;
