import React from "react";
import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");

  return (
    <div className="my-8 px-4">
      <h1 className="font-bold text-2xl text-center">
        Some concepts you need to know
      </h1>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There are several ways to manage a state in React application.{" "}
          <code>useState()</code> hook is used to manage local state in the
          application. Like, local state would be needed to show or hide a modal
          component or to track values for a form component, such as form
          submission, when the form is disabled and the values of a form's
          inputs. Again, <code>useState()</code> has a limitation, so another
          hook <code>useContext()</code> can be used to solve this problem. When
          we need global setting for a state, so that we can manage state
          anywhere in the document. There are several pieces of state that must
          be managed every time you fetch or update data from an external
          server, including loading and error state. Fortunately there are tools
          such as Tanstack Query that make managing server state much easier.
        </p>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          How does prototypical inheritance work?
        </h2>
        <p>
          Prototypal inheritance uses the concept of prototype chaining. Let's
          explore that concept. Every object created contains{" "}
          <code>[[Prototype]]</code>, which points either to another object or
          null. Envision an object C with a <code>[[Prototype]]</code> property
          that points to object B. Object B's
          <code>[[Prototype]]</code> property points to prototype object A. This
          continues onward, forming a kind of chain called the prototype chain.
          This concept is used when searching our code. When we need to find a
          property in an object, it is first searched for in the object, and if
          not found, it is searched for on that object's prototype, and so on.
          Thus, the entire prototype chain is traversed until the property is
          found or null is reached.
        </p>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. Unit testing is an important step in the development
          process, because if done correctly, it can help detect early flaws in
          code which may be more difficult to find in later testing stages
        </p>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          React vs. Angular vs. Vue?
        </h2>
        <p>
          React is considered a UI library. They define themselves as: “A
          JavaScript library for building user interfaces”. Facebook developers
          are behind the development and maintenance of this library. And, in
          this case, most of Facebook's products are made with React.
        </p>
        <p>
          Angular is a front-end framework with lots of components, services,
          and tools. On Angular's site, you can see that they define Angular as:
          “The modern web developer's platform” It is developed and maintained
          by Google developers, but curiously it is not used to implement any of
          their most common products such as Search or YouTube.
        </p>
        
        <p>
          Last but not least, Vue.js is, according to its site: “A progressive
          JavaScript framework”. Vue.js is developed and led by Evan You, but
          also it counts on a huge open-source community.
        </p>
        <p>
          These three frameworks have several things in common, such as each
          follows a component-based architecture and allows creating UI features
          quickly. React and Vue.js are mainly declarative, and while Angular
          could also be declarative, it's really more imperative. Nevertheless,
          they present some more differences according to their structure,
          architecture and way of working, so let's dive into all these
          characteristics.
        </p>
      </div>
    </div>
  );
};

export default Blog;
