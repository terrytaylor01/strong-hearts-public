import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);
  return (
    <main className="theme-home flex min-h-screen w-[100vw] flex-col items-center  font-inter ">
      <script src="https://unpkg.com/@botpoison/browser" async></script>
      <div className="flex w-[85%] flex-col items-center">
        <h1 className="mb-12 text-3xl text-center md:text-left md:text-5xl font-light tracking-tight text-skin-textprimary">
          Have some questions?
        </h1>
        <div className="mb-6 flex w-[100%] flex-col items-center  justify-center rounded-lg  bg-skin-bgsecondary p-5 pt-10 md:w-fit md:px-12 md:py-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
