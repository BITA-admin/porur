import React from "react";
import FreeDemoClass from "./FreeDemoClass";
import AngularRC from "../RelatedCourses/AngularRc";
import { FaAngular } from "react-icons/fa";
import AdditionalCourses from "../AdditionalCourses/AdditionalCourses";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AngularJs = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Course/AngularJs</title>
          <link rel="icon" type="image/svg+xml" href="/vite.png" />
          <link rel="canonical" href="https://traininginporur.in/angularjs" />

          <meta
            name="description"
            content="Learn Angular 10 Course from basics to advanced concepts. Join AngularJS Training in Chennai  & get placement. 40 hours of hands on from expert for Course"
          />
          <meta name="keywords" content="Angular js course" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Header />
        <Navbar />
        <section className="bg-darkBlueColor m-auto p-[1.5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <FaAngular className="w-full h-72 md:pr-12 text-white pb-7 md:pb-0" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-m  md:text-2xl md:text-left font-semibold text-center">
                Angular js course
              </p>
              <h1 className="text-babyPinkColor sm:text-m md:text-2xl md:text-left font-semibold text-center">
                Angular Ascendance! Learn Angular, sculpt robust apps.
                <br />
                Embrace the future of dynamic interfaces.
              </h1>
            </div>
          </div>
        </section>
        <section className="p-[1.5rem]">
          <h1 className="text-3xl pb-2 font-semibold text-babyPinkColor">
            Angular js course
          </h1>
          <hr className="w-[100%]" />
          <div className="flex-row md:flex gap-3 space-y-7 justify-center pt-5">
            <div className="flex flex-col space-y-5 text-left">
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Welcome to our Angular js course
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Are you seeking the most suitable location to acquire
                  knowledge on developing exceptional web applications? <br />{" "}
                  Enroll in the
                  <a
                    target="__Blank"
                    className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                    href="https://bitaacademy.com/course/angularjs-training-in-chennai/"
                  >
                    {" "}
                    Angular JS{" "}
                  </a>
                  Course that
                  <a
                    target="__Blank"
                    className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                    href="https://bitaacademy.com/"
                  >
                    {" "}
                    BITA{" "}
                  </a>
                  Academy is offering to gain the skills and knowledge needed to
                  create front-end web applications under the guidance of
                  professionals. Our module is constructed upon Angular 10 and
                  current trends in the IT market. Our mentor will assist you in
                  honing your skills in developing mobile and web applications.
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Describe Angular JS
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Angular JS is a popular open-source web development framework.
                  It was introduced in 2010 using JavaScript. Google updated
                  this framework using TypeScript, a JavaScript superset.
                  Remember that AngularJS was not designed for mobile devices.
                </p>
                <p className="p-2 text-sm text-textColor1">
                  Angular, a JavaScript framework, lets you build client-side
                  apps with CSS, HTML, and JavaScript. It adds if statements,
                  loops, and local variables to HTML. Angular's complete data
                  binding architecture lets us efficiently display fields from
                  our data model, monitor changes, and handle user updates.
                </p>
              </div>

              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Angular Js Curriculum
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-4 space-y-2">
                    <li className="list-disc">
                      Syllabus of
                      <a
                        target="__Blank"
                        className="text-blueColor hover:text-babyPinkColor underline decoration-babyPinkColor underline-offset-4 hover:no-underline"
                        href="https://bitaacademy.com/course/angularjs-training-in-chennai/#course-syllabus"
                      >
                        {" "}
                        Angular Js
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  How do I start learning the Angular JS course?
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  <ul className="p-6 space-y-2">
                    <li className="list-disc">
                      Please ensure you have a strong understanding of HTML,
                      CSS, and JavaScript. Angular uses TypeScript, a superset
                      of JavaScript; therefore, familiarity is advised.
                    </li>
                    <li className="list-disc">
                      Learn the basics of Angular and its essential ideas. Learn
                      modules, components, templates, data binding, and
                      injection.
                    </li>
                    <li className="list-disc">
                      Create Your Development Environment:
                    </li>
                    <li className="list-disc">
                      For package management, install Node.js and npm. Start a
                      new Angular project with Angular CLI, which sets up a
                      basic project structure.
                    </li>
                    <li className="list-disc">
                      Angular is developed with TypeScript, so familiarize
                      yourself with it. Learn interfaces, classes, and
                      decorators.
                    </li>
                    <li className="list-disc">
                      Parts and Templates: Discover components and templates.
                      Create and use features and templates to render dynamic
                      content.
                    </li>
                    <li className="list-disc">
                      Learn about data binding in Angular, including one-way,
                      two-way, and event binding.
                    </li>
                    <li className="list-disc">
                      Learn about Angular directives such as ngIf, ngFor, and
                      ngSwitch. Learn how they manipulate the DOM to improve
                      template functionality.
                    </li>
                    <li className="list-disc">
                      Discover the concept of services and dependency injection.
                      Learn to inject services into components to share data and
                      functionality.
                    </li>
                    <li className="list-disc">
                      Explore Angular routing to build single-page applications
                      (SPAs). Learn how to switch application views.
                    </li>
                    <li className="list-disc">
                      Learn how to use forms in Angular. Understand reactive and
                      template-driven conditions.
                    </li>
                    <li className="list-disc">
                      Learn how to make HTTP requests in Angular using the
                      HttpClient module. Learn backend server communication and
                      response handling.
                    </li>
                    <li className="list-disc">
                      Observables with RxJS: Learn about observables and the
                      RxJS library—angular asynchronous data tutorial.
                    </li>
                    <li className="list-disc">
                      Learn to test Angular using tools like Jasmine and Karma.
                      Learn to write component and service unit tests.
                    </li>
                    <li className="list-disc">
                      Build Real initiatives: Apply knowledge to real-world
                      initiatives. This hands-on experience is essential for
                      learning and confidence.
                    </li>
                    <li className="list-disc">
                      Angular evolves, so remain current with releases, best
                      practices, and community conversations: forums, Angular
                      communities, and blogs.
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Angular JS Certification Training
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  Candidates with high Angular JS Course Certification outcomes
                  have a solid grasp of Front-end Web App Development. This
                  certification verifies that the individual can create
                  AngularJS and contains real-world project experience. This
                  certificate with your CV benefits highlights your profile
                  throughout the application process and opens doors to many
                  employment chances. Enroll in the Angular JS Course.
                </p>
              </div>
              <div>
                <h2 className="text-l text-blueColor font-semibold">
                  Career Opportunity in Angular JS
                </h2>
                <p className="p-2 text-sm text-textColor1">
                  AngularJS's many features and plugins aid web developers,
                  making it in great demand. Because it takes fewer lines of
                  code than other computer languages, AngularJS makes app
                  development more accessible. This programming language
                  simplifies web developer testing. These are the main reasons
                  AngularJS has gained popularity among developers, increasing
                  demand for AngularJS developers. Annual Angular Developer
                  salaries in India range from 1.9 lakhs to 9.0 lakhs, averaging
                  4.5 lakhs. Register Angular JS Course.
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
            <AngularRC />
          </div>
          <div>
            <AdditionalCourses />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AngularJs;
