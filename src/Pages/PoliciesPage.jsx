import React from "react";
import PolicyInformation from "../components/PolicyInformation";

export default function PoliciesPage() {
  const adoptionPolicy = React.useRef(null);
  const surrenderPolicy = React.useRef(null);
  const refundPolicy = React.useRef(null);
  const singlePolicy = React.useRef(null);
  const indoorsPolicy = React.useRef(null);

  function scrollToPolicy(ref) {
    // If window is at 1024 break point for nav menu to become sticky has a 15 percent margin otherwise just 10 px
    let margin = window.innerWidth < 1024 ? 0.15 * window.innerHeight : 15;

    let dims = ref.current.getBoundingClientRect();
    console.log(dims);
    document.body.scroll(0, dims.top - margin);
  }

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <main className="theme-home my-12 flex w-screen justify-center">
      <span className="flex w-[85%] flex-col gap-12 font-inter">
        <div className="opacity-75">
          <h2>Jump to:</h2>
          <ul className="ml-4 list-disc">
            <li>
              <button onClick={() => scrollToPolicy(adoptionPolicy)}>
                Adoption Terms & Conditions
              </button>
            </li>
            <li>
              <button onClick={() => scrollToPolicy(surrenderPolicy)}>
                Surrendering Policies
              </button>
            </li>
            <li>
              <button onClick={() => scrollToPolicy(refundPolicy)}>
                Refunds & Returns Policy
              </button>
            </li>
            <li>
              <button onClick={() => scrollToPolicy(singlePolicy)}>
                Cats - "No Single Kitten" Policy
              </button>
            </li>
            <li>
              <button onClick={() => scrollToPolicy(indoorsPolicy)}>
                Cats - Indoors Only Policy
              </button>
            </li>
          </ul>
        </div>
        <div ref={adoptionPolicy}>
          <PolicyInformation
            policyTitle={"Adoption Terms & Conditions"}
            policyBody={
              <p>
                Below are the terms and conditions that an adopter must agree to
                before adopting an animal from Strong Hearts. Adopters must
                agreeing to the following terms and conditions. Please ensure
                you read and understand them. <br /> <br /> I certify that I am
                at least 18 years of age.
                <br /> The information I have provided on this application is
                true.
                <br /> I recognise that any misrepresentation or omissions may
                result in the loss of privilege to adopt from Strong Hearts
                Sanctuary.
                <br /> I understand that Strong Hearts Sanctuary has the right
                to deny this application for any reason.
                <br /> I understand that Strong Hearts Sanctuary is not able to
                guarantee the health or temperament of any animal, as many
                animals come in with unknown histories. <br />
                There are traits that could change upon adoption, and I take
                responsibility to care for and address these issues if they do
                arise.
                <br /> I understand that anything could happen in life, and if I
                find that I am no longer able to care for my adopted animal, I
                agree to contact Strong Hearts Sanctuary to discuss return/or
                need for help of the adopted animal.
                <br /> I understand that I am to immediately contact Strong
                Hearts Sanctuary if my adopted animal is lost/missing.
                <br /> I attest that the animal I am adopting is for me, in my
                home, and NOT a gift for anyone.
                <br /> I understand that I am responsible for paying for all
                follow-up vaccines, wellness visits & medical procedures my pet
                will require in the future. <br />{" "}
                <small className="opacity-70">
                  Last updated: September 2023
                </small>
              </p>
            }
          />
        </div>
        <div ref={surrenderPolicy}>
          <PolicyInformation
            policyTitle={"Surrendering Policies"}
            policyBody={
              <p>
                Strong Hearts Sanctuary does not accept private surrenders. Our
                resources are primarily allocated to the animals already under
                our care, and we work diligently to ensure their wellbeing and
                happiness. As such, we are unable to accommodate requests for
                the surrender of animals from individuals of the public.
                <h2 className="pt-4 text-lg">Exceptions</h2>
                The only exception to this policy is when an animal was
                previously in our care and must be surrendered by the adopter.
                In such cases, we understand that circumstances can change, and
                we are committed to assisting in the best interests of the
                animal. If you adopted an animal from Strong Hearts Sanctuary
                and find yourself in a situation where you can no longer provide
                appropriate care, please contact us via the contact page for
                guidance and support.{" "}
                <h2 className="pt-4 text-lg">Alternative Resources</h2>
                We understand that there are situations where individuals may
                need to surrender an animal for various reasons. While we are
                unable to directly accept private surrenders, we encourage you
                to consider looking for a local animal shelter or rescue
                organisation that has a 'no kill' policy. These organisations
                are committed to providing care and finding loving homes for
                animals without euthanizing them due to space or time
                constraints. <br /> Strong Hearts Sanctuary remains dedicated to
                the welfare of animals and strives to make a lasting impact
                through our rescue efforts. We appreciate your understanding of
                our surrender policy and encourage you to reach out to us for
                any questions or concerns regarding animal welfare. ​Thank you
                for your support in our mission to provide loving care to
                animals in need.
                <br />
                <small className="opacity-70">
                  Last updated: September 2023
                </small>
              </p>
            }
          />
        </div>
        <div ref={refundPolicy}>
          <PolicyInformation
            policyTitle={"Refunds & Returns Policy"}
            policyBody={
              <p>
                The refunds and returns policy is set out as follows according
                to the requirements of Animal Welfare Victoria in the Code of
                Practice for the Management of Dogs and Cats in Shelters and
                Pounds (Revision 1). <br /> If an animal is not acceptable to a
                purchaser because of health, physical or other reasons
                (excluding accidents), which is supported by a statement from a
                veterinary practitioner, within seven days of purchase,
                proprietors (Strong Hearts Sanctuary) must accept the animal
                back and refund the full purchase price of the animal. <br /> If
                an animal is returned within three days for any other reason,
                the proprietor must refund 75% of the purchase price or offer a
                replacement animal with the same guarantee. If the animal dies
                or is euthanised as a result of a disease that is traceable to
                the point of sale, the proprietor must refund the purchase price
                or offer a replacement animal with the same guarantee. <br />
                <small className="opacity-70">
                  Last updated: September 2023
                </small>
              </p>
            }
          />
        </div>

        <div ref={singlePolicy}>
          <PolicyInformation
            policyTitle={'Cats - "No Single Kitten" Policy'}
            policyBody={
              <p>
                We believe in prioritising the wellbeing and social development
                of our kittens. This policy requires that kittens under 10
                months of age be adopted in pairs, with a littermate, or into a
                home that already includes a friendly resident cat. <br /> This
                policy is rooted in our understanding of "single kitten
                syndrome." Kittens raised without feline companionship are more
                likely to face behavioural and socialisation challenges as they
                grow.
                <h2 className="pt-4 text-lg">
                  Understanding "Single Kitten Syndrome"
                </h2>
                Kittens, particularly those under 10 months old, are highly
                social animals. They thrive when they have feline companions to
                interact with and learn from. When kittens are raised without
                feline companionship, they are more likely to develop
                behavioural issues, including excessive attachment to owners,
                demanding behaviour, and an increased risk of developing
                destructive habits due to a lack of social interaction with
                their own species.{" "}
                <h2 className="pt-4 text-lg">
                  The benefits of feline companionship
                </h2>{" "}
                When kittens have a feline friend to interact with, they
                naturally learn vital social and communication skills essential
                for their wellbeing, resulting in a better adjustment to
                adulthood, increased happiness, and the development of healthier
                and more harmonious relationships with their human families.{" "}
                <h2 className="pt-4 text-lg">
                  Our commitment to young kittens
                </h2>{" "}
                Our "No Single Kitten" policy aims to ensure that our kittens
                acquire essential social skills and build lasting feline
                friendships. By adopting kittens in pairs or introducing them to
                households with resident cats, we create an environment that
                promotes their overall happiness and balanced development.{" "}
                <h2 className="pt-4 text-lg">Join us in this endeavour</h2> We
                firmly believe that our "No Single Kitten" policy promotes the
                happiness and balanced growth of our kittens. We appreciate your
                understanding and support in adhering to this policy. Together,
                we can provide a nurturing and fulfilling environment for these
                adorable kittens. <br />
                <small className="opacity-70">
                  Last updated: September 2023
                </small>
              </p>
            }
          />
        </div>

        <div ref={indoorsPolicy}>
          <PolicyInformation
            policyTitle={"Cats - Indoors Only Policy"}
            policyBody={
              <div className="[&>*]:my-2">
                <p>
                  At Strong Hearts Sanctuary, the wellbeing and safety of our
                  cats are our top priorities. We look for adopters willing and
                  able to provide our cats with a safe and enriching
                  environment. Therefore, we maintain a strict indoor only
                  policy, with the exception of purpose-built outdoor cat
                  enclosures.
                </p>
                <p>
                  Why we are indoor only There are numerous reasons to keep your
                  cat indoors, and the list provided below highlights just a few
                  of the most common and significant ones.
                </p>
                <ul className="mx-6 list-disc">
                  <li>
                    Safety: Outdoor cats are exposed to dangers such as traffic
                    accidents, diseases from other animals, and attacks by other
                    larger predators.
                  </li>
                  <li>
                    Health: Outdoor cats are at a higher risk of injuries,
                    infections, and parasites. Things they would not be exposed
                    to if they did not go outside.
                  </li>
                  <li>
                    Fighting: Outdoor cats often get into territorial disputes
                    and fights with other cats, leading to injuries.
                  </li>
                  <li>
                    Lost and stolen: Cats can easily become lost or stolen when
                    outdoors.
                  </li>
                  <li>
                    Protection of Australia's native animals: Domesticated cats
                    still kill an estimated 546 million animals in Australia
                    every year. An estimated 71% of all pet cats in Australia
                    are able to roam – of this figure, 78% of roaming cats hunt.
                    Most animals – an estimated 85% – killed by pet cats are not
                    brought home.
                  </li>
                  <li>
                    Curfews: In Victoria, at least 38 local governments have
                    implemented either dusk-to-dawn or 24-hour cat containment
                    policies. So why let them outside at all?
                  </li>
                </ul>
                <p>
                  ​​Cats are incredibly adaptable creatures and can lead
                  fulfilling lives indoors when provided with the right
                  environment and stimulation. While it might seem like cats
                  need outdoor access, there is endless evidence to suggest that
                  keeping them indoors is essential for their health and safety.
                </p>
                <div className="[&>*]:my-2">
                  <h2 className="pt-4 text-lg">
                    "Supervising" your cat while its outside
                  </h2>
                  <p>
                    While some cat owners may attempt to supervise their cats
                    outdoors, it's important to acknowledge that cats are
                    incredibly agile and can easily outmanoeuvre even the most
                    attentive human supervisors. Here are some reasons why we
                    believe simply "supervising" a cat while it's outside is not
                    sufficient: - ​Cats are remarkably fast and can quickly dart
                    away from their owners, making it challenging to react in
                    time to prevent potential dangers. - Cats are natural
                    climbers and can scale trees, fences, and other structures
                    with ease, potentially putting themselves in high-risk
                    situations. - Cats have a strong instinct to explore their
                    surroundings, and their curiosity can lead them into
                    unexpected and potentially hazardous situations. -
                    Unforeseen events like loud noises, sudden movements, or the
                    presence of other animals can startle a cat, causing them to
                    react unpredictably and potentially run into danger. - Even
                    the most vigilant cat owners cannot control all the
                    variables and potential dangers in an outdoor environment,
                    such as traffic or encounters with aggressive wildlife.
                  </p>
                  <p>
                    Given these challenges, we insist that our adopters provide
                    indoor cats with a safe and enriched environment that
                    satisfies their need for mental and physical stimulation,
                    rather than attempting to supervise outdoor excursions
                    (unless it is on a harness or within a purpose-built cat
                    enclosure). This approach ensures the cat's safety while
                    also minimising the potential risks associated with outdoor
                    access.
                  </p>
                </div>
                <div className="[&>*]:my-2">
                  <h2 className="pt-4 text-lg">"I have very high fences"</h2>
                  <p>
                    Cats are known for their jumping abilities, and the height
                    of a fence needed to prevent a cat from jumping over it can
                    vary depending on the individual cat's athleticism and
                    motivation. <br /> A typical minimum height for a cat-proof
                    fence is at least 6 feet (approximately 1.8 meters). This
                    height should deter most (but certainly not all) cats from
                    attempting to jump over the fence. This assumes that there
                    are no nearby trees, structures, or objects that a cat could
                    use as a launching point to jump over the fence.
                  </p>
                </div>
                <div className="[&>*]:my-2">
                  <h2 className="pt-4 text-lg">
                    The benefits of an indoor lifestyle
                  </h2>
                  <ul className="mx-6 list-disc">
                    <li>
                      Outdoor cats face numerous dangers, including traffic
                      accidents, exposure to diseases from other animals, and
                      attacks by predators. By keeping our cats indoors, we
                      protect them from these risks, ensuring their safety.
                    </li>
                    <li>
                      Indoor cats are less likely to get into fights with other
                      cats or native wildlife or cause damage to neighbours'
                      property, fostering better community relations.
                    </li>
                    <li>
                      On average indoor only cats live on average 10 years
                      longer than free-range cats.
                    </li>
                  </ul>
                </div>
                <div className="[&>*]:my-2">
                  <h2 className="pt-4 text-lg">
                    Providing enrichment for indoor cats
                  </h2>
                  <p>
                    There are numerous ways to provide enrichment and
                    stimulation for indoor cats:
                  </p>
                  <ul className="mx-6 list-disc">
                    <li>
                      Scratching Posts: Scratching posts help cats satisfy their
                      natural instincts and keep their claws healthy.
                    </li>
                    <li>
                      Toys: Access to a variety of toys that keep them mentally
                      and physically engaged.
                    </li>
                    <li>
                      Playtime: Regular playtime to stimulate your cat's mind
                      and body. Interactive play sessions should be part of a
                      daily routine.
                    </li>
                    <li>
                      Window Perches: Cats love to observe the outside world.
                      Create a cozy window perch for your cats to enjoy watching
                      birds and other outdoor activities safely.
                    </li>
                    <li>
                      Bird Feeders: Placed bird feeders outside our windows to
                      provide your cat with a fascinating view of the natural
                      world.
                    </li>
                  </ul>
                </div>
                <p>
                  At Strong Hearts Sanctuary, we are committed to securing the
                  best possible life for our cats. Our indoor only policy
                  ensures that each cat enjoys a safe and enriched environment,
                  promoting their happiness and wellbeing.
                  <br />
                  <small className="opacity-70">
                    Last updated: September 2023
                  </small>
                </p>
              </div>
            }
          />
        </div>
      </span>
    </main>
  );
}
