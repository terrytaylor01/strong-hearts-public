import React from "react";

export default function PolicyInformation({ policyTitle, policyBody }) {
  return (
    <article className="flex flex-col text-skin-textprimary">
      <h1 className="mb-2 text-2xl font-semibold">{policyTitle}</h1>

      <div className="md:pl-2 text-sm md:text-base">{policyBody}</div>
    </article>
  );
}
