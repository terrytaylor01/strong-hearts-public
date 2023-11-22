import { formatWithCursor } from "prettier";
import React from "react";

export default function ContactForm() {
  const [enquirySubject, setEnquirySubject] = React.useState("");

  var formAttributes = {
    action: "https://submit-form.com/ZZIGxBPEZ",
  };

  React.useEffect(() => {
    switch (enquirySubject.replace(/ .*/, "")) {
      case "Cat":
        formAttributes.action = "https://submit-form.com/5NYFb7QYM";
        break;
      case "Dog":
        formAttributes.action = "https://submit-form.com/7XnMcxJsT";
        break;
      case "Farmed":
        formAttributes.action = "https://submit-form.com/XI74OfTjW";

        break;
      case "Rabbit":
        formAttributes.action = "https://submit-form.com/zXAfwm163";

        break;
      case "General":
        formAttributes.action = "https://submit-form.com/ZZIGxBPEZ";

        break;
      default:
    }
    document.getElementById("contact-form").action = formAttributes.action;
  }, [enquirySubject]);

  return (
    <form
      id="contact-form"
      action={formAttributes.action}
      className="flex w-[100%] flex-col  gap-5 bg-inherit "
    >
      <input
        type="checkbox"
        name="_honeypot"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />
      <div className="flex flex-col gap-5 md:flex-row md:gap-2">
        <input
          className="rounded-full p-2 outline outline-1  outline-white"
          placeholder="First Name*"
          type="text"
          required={true}
          name="first_name"
        />

        <input
          className="rounded-full p-2 outline outline-1 outline-neutral-300"
          placeholder="Last Name"
          type="text"
          name="last_name"
        />
      </div>

      <input
        className="rounded-full p-2 outline outline-1 outline-neutral-300"
        placeholder="Email Address*"
        type="email"
        required={true}
        name="email"
      />
      <input
        className="rounded-full p-2 outline outline-1 outline-neutral-300"
        placeholder="Phone Number"
        type="tel"
        name="phone_number"
      />
      <select
        className="rounded-full bg-white p-2 text-neutral-400 outline outline-1 outline-neutral-300  [&>*]:text-sm [&>*]:text-black"
        required={true}
        name="Enquiry Subject"
        onChange={(e) => setEnquirySubject(e.target.value)}
      >
        <option value={""} defaultValue={"General"}>
          What is your enquiry about?*
        </option>
        <option value={"General - Donation"}>General - Donation</option>
        <option value={"General - Other"}>General - Other</option>
        <optgroup label="Cat / Kitten">
          <option value={"Cat - Adoption"}>Cat - Adoption</option>
          <option value={"Cat - Fostering"}>Cat - Fostering</option>
          <option value={"Cat - Other"}>Cat - Other</option>
        </optgroup>
        <optgroup label="Dog / Puppy">
          <option value={"Dog - Adoption"}>Dog - Adoption</option>
          <option value={"Dog - Fostering"}>Dog - Fostering</option>
          <option value={"Dog - Other"}>Dog - Other</option>
        </optgroup>
        <optgroup label="Rabbit">
          <option value={"Rabbit - Adoption"}>Rabbit - Adoption</option>
          <option value={"Rabbit - Fostering"}>Rabbit - Fostering</option>
          <option value={"Rabbit - Other"}>Rabbit - Other</option>
        </optgroup>
        <optgroup label="Farmed Animals">
          <option value={"Farmed - Adoption"}>Farmed - Adoption</option>
          <option value={"Farmed - Volunteering"}>Farmed - Volunteering</option>
          <option value={"Farmed - Other"}>Farmed - Other</option>
        </optgroup>
      </select>

      <textarea
        className="rounded-xl p-2 outline outline-1 outline-neutral-300"
        placeholder="Message*"
        rows={6}
        required={true}
        name="Message"
      ></textarea>

      <button
        type="submit"
        className="mt-10 rounded-full bg-skin-viewall p-4 text-2xl font-medium tracking-tighter text-skin-textsecondary"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
