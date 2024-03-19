import React from "react";
import FreeDemoClass from "./FreeDemoClass";
import UiUxRc from "../RelatedCourses/UiUxRc";
import { TbUxCircle } from "react-icons/tb";
import AdditionalCourses from "../AdditionalCourses/AdditionalCourses";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const UiUx = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Course/UiUx</title>
          <link rel="icon" type="image/svg+xml" href="/vite.png" />
          <link rel="canonical" href="https://traininginporur.in/uiux" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Learn UI UX Course in Chennai at an affordable price to Master UI UX Design from experts in 3 months. Get a job by attending UI UX Design training in Chennai."
          />
          <meta name="keywords" content="ui ux course in chennai" />
        </Helmet>
        <Header />
        <Navbar />
        <section className="bg-darkBlueColor m-auto p-[1.5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <TbUxCircle className="w-full h-60 md:pr-12 text-white pb-7 md:pb-0" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-m  md:text-2xl md:text-left font-semibold text-center">
                ui ux course in chennai
              </p>
              <h1 className="text-babyPinkColor sm:text-m md:text-2xl md:text-left font-semibold text-center">
                Design Brilliance Awaits! Craft seamless user experiences.
                Enroll now, <br />
                spark creativity, and shape the future of digital interaction.
              </h1>
            </div>
          </div>
        </section>
        <section className="p-[1.5rem]">
          <h1 className="text-3xl pb-2 font-semibold text-babyPinkColor">
            ui ux course in chennai
          </h1>
          <hr className="w-[100%]" />
          <div className="flex-row md:flex gap-3 space-y-7 justify-center pt-5">
            <div className="flex flex-col space-y-5 text-left">
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Welcome to our ui ux course
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Are you interested in obtaining a
                  <a
                    target="__Blank"
                    className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                    href="https://bitaacademy.com/course/ui-ux-design-training"
                  >
                    {" "}
                    UI UX course in Chennai
                  </a>{" "}
                  taught by experts?
                  <a
                    target="__Blank"
                    className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                    href="https://bitaacademy.com/"
                  >
                    {" "}
                    BITA
                  </a>{" "}
                  offers the preeminent Ui Ux Course in Chennai, which equips
                  students with the knowledge and skills necessary to complete
                  projects centred around user interface and user research using
                  state-of-the-art tools. Our mentor provides assistance in the
                  construction of a Behance portfolio that is predicated on the
                  concepts of your projects.
                </p>
                <p className="p-2 text-sm text-textColor1">
                  You will gain knowledge on how to design user personas,
                  empathy maps, storyboards, user flows, site maps, wireframes,
                  and prototypes, among other things, during the UX Session. You
                  will gain an understanding of various UI design technologies,
                  such as Figma, Miro, Photoshop, and Illustrator.
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  What is UX?
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  User experience (UX) design is a strategy that development
                  review employs to make sure that products offer users
                  meaningful and valuable experiences. UX design encompasses
                  functional, aesthetic, and usability elements incorporated
                  into the development's acquisition and integration.
                </p>
                <h2 className="text-l text-blueColor font-semibold">
                  What is UI?
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  The user interface is the point of interaction and
                  communication between humans and computers within a given
                  device. This may include pointing devices such as mice,
                  keyboards, desktop displays, and keyboards. Furthermore, user
                  engagement with a website or application is a subset.
                </p>
              </div>

              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Ui Ux Curriculum
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-4 space-y-2">
                    <li className="list-disc">
                      Syllabus of
                      <a
                        target="__Blank"
                        className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                        href="https://bitaacademy.com/course/ui-ux-design-training/#course-syllabus"
                      >
                        {" "}
                        Ui Ux
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  How do I start learning UI UX?
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-6 space-y-2">
                    <li className="list-disc">
                      Start by learning UI and UX design basics. Discover the
                      principles, vocabulary, and differences between UI and UX.
                    </li>
                    <li className="list-disc">
                      Design Tool Practice: Learn Adobe XD, Figma, and Sketch.
                      Practice making simple designs and learning the software.
                    </li>
                    <li className="list-disc">
                      Create a Portfolio: Your portfolio should display your
                      projects and design talents. If you're new, incorporate
                      personal projects or redesigns to show your understanding.
                    </li>
                    <li className="list-disc">
                      Enter Design Communities: Use Behance, Dribble, or
                      designer forums to interact with designers. Discuss, get
                      input, and learn from professional designers.
                    </li>
                    <li className="list-disc">
                      Follow Design Trends: Follow influential designers on
                      social media and subscribe to design blogs to stay
                      current. Modern and relevant designs can be made by
                      understanding trends.
                    </li>
                    <li className="list-disc">
                      Genuine tasks: Use your abilities on simple tasks.
                      Volunteer for projects, support open-source projects or
                      work with friends on design projects.
                    </li>
                    <li className="list-disc">
                      Feedback: Actively seek work feedback. Critical feedback
                      can help you improve your design skills.
                    </li>
                    <li className="list-disc">
                      Attend UI/UX groups, conferences, and workshops locally or
                      online. Networking with industry experts might yield
                      insights and opportunities.
                    </li>
                    <li className="list-disc">
                      Be Curious and Empathetic: Explore new ideas and thoughts.
                      Effective UI/UX design requires empathy for user needs and
                      preferences.
                    </li>
                    {/* <li className="list-disc">
                 
                 </li> */}
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  UI UX Certification Training
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Undoubtedly, the UX UI Design Certificate is a valuable
                  investment. Online BITA enrollment from the convenience of
                  your residence will prepare you for an entry-level UX design
                  position. In addition, UI UX Certification will aid in
                  developing the skills necessary to utilize renowned design
                  applications such as Figma and Adobe. Therefore, if you are
                  interested in pursuing a career as a UX designer, UI designer,
                  web developer, or graphic designer, this certification is an
                  excellent starting point. Join today in the Ui Ux Course in
                  Chennai.
                </p>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-3 space-y-2">
                    <li className="list-disc">UI UX Certification</li>
                    <li className="list-disc">
                      Google UX Researcher Certification
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Career Opportunities in UI UX
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Today, UI UX design, as well as the jobs that come under that
                  category, is one of the most in-demand creative professions.
                  Many organizations recognize the advantages of employing UI/UX
                  specialists to enhance their products and accomplish user
                  experience goals. Opportunity exists in the corporate, public,
                  and agency sectors, as well as in startups. UI design is a
                  promising career path that provides competitive compensation.
                  There are numerous benefits to working as a user interface
                  designer. The mean yearly remuneration of UI/UX designers in
                  India is 5.2 lakhs, with salaries varying from 2.5 lakhs to
                  15.0 lakhs. Enroll in the Ui Ux Course in Chennai. Job
                  position in ui ux are
                </p>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-3 space-y-2">
                    <li className="list-disc">User Experience Designer</li>
                    <li className="list-disc">
                      UX Researcher Product Designer
                    </li>
                    <li className="list-disc">Graphic Designer</li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Why Should You Attend Our Training?
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-6 space-y-2">
                    <li className="list-disc">
                      <span className="font-semibold">Industry Experts:</span>{" "}
                      BITA's highly experienced and industry-leading professors
                      bring their knowledge to the classroom. Our teachers love
                      their subjects and work hard to give students the latest
                      and most valuable information.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">Curriculum:</span> We
                      offer a comprehensive curriculum on in-demand
                      technologies, programming languages, and software
                      development tools. We keep our training current with
                      business trends.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">Hands-on Practice:</span>{" "}
                      BITA promotes active learning. Our courses emphasize
                      experiential learning through simulations, projects, and
                      activities. It gives students the practical skills they
                      need for IT success.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">
                        Customized Career Coaching:
                      </span>{" "}
                      We help our students begin IT careers with career coaching
                      and placement support. Top Chennai firms and industry
                      relationships may lead to exciting work opportunities.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">Infrastructure:</span>{" "}
                      BITA offers sophisticated training facilities for the Ui
                      Ux Course in Chennai with the latest hardware and
                      software. Our modern classrooms, well-stocked labs, and
                      comfortable study spaces make studying effortless.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">Flexible Learning:</span>{" "}
                      We know every client has a different schedule. Because of
                      this, we offer weekday, weekend, and online classes.
                      Students can choose a plan that meets their needs with
                      this flexibility.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <FreeDemoClass />
            </div>
          </div>

          <div>
            <UiUxRc />
          </div>
          <div>
            <AdditionalCourses />
          </div>
        </section>{" "}
        <Footer />
      </div>
    </>
  );
};

export default UiUx;
