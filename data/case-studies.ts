import type { CaseStudy } from "@/types/case-study"

export const caseStudies: CaseStudy[] = [
  {
    id: "medical-departures",
    title: "Medical Departures",
    shortDescription: "UX design for a healthcare booking system",
    coverImage: "/images/md.png",
    objective:
      "Enhance the online booking process for dental tourism patients, improving user experience and increasing conversion rates.",
    duration: "Dec 2022 - Feb 2023",
    role: "Independent UX Design Contractor",
    challenges: [
      "Complex booking flow with multiple steps",
      "Diverse user base across different regions",
      "Integration with existing systems",
      "Balancing user needs with business requirements",
    ],
    process: [
      {
        title: "Research & Analysis",
        description: [
          "I began by conducting a comprehensive analysis of user behavior using Google Analytics and HotJar to identify key pain points in the booking process. This quantitative data revealed several critical drop-off points where users were abandoning their bookings, particularly during the payment confirmation and doctor selection stages.",
          "To complement the analytics data, I conducted remote user interviews with a diverse sample of patients from different regions who had either completed or abandoned the booking process. These interviews provided valuable qualitative insights into user motivations, concerns, and expectations when booking medical procedures abroad.",
          "I also performed a competitive analysis of other medical tourism platforms to identify industry best practices and potential areas for differentiation. This research phase was crucial in establishing a solid foundation of user needs and business requirements before moving into the design phase.",
        ],
      },
      {
        title: "Design System Setup",
        description: [
          "Based on the research findings, I developed a comprehensive design system to ensure consistency across the platform. I started by creating a visual inventory of existing UI elements to identify inconsistencies and opportunities for standardization.",
          "Using Figma, I established a component library with a modular approach, creating reusable elements such as buttons, form fields, cards, and navigation components. Each component was designed with accessibility in mind, ensuring adequate color contrast, touch target sizes, and keyboard navigability.",
          "I implemented a clear typographic hierarchy and color system that aligned with the brand identity while improving readability and visual hierarchy. The design system documentation included usage guidelines and interaction states to ensure consistent implementation by the development team.",
        ],
      },
      {
        title: "Regional Optimization",
        description: [
          "One of the most challenging aspects of this project was adapting the booking experience for users from different regions. Through user research, I identified significant variations in user preferences and behaviors across key markets including Turkey, Thailand, USA, and Latin America.",
          "For the Turkish market, I incorporated trust indicators and detailed credential information about doctors, as research showed Turkish patients valued professional credentials highly. For Thailand, I enhanced the visual presentation of facilities and emphasized patient testimonials, which resonated strongly with this audience.",
          "In the US market, I focused on streamlining the insurance and payment options, while for Latin American users, I improved the translation quality and incorporated more detailed information about travel logistics and accommodation. Each regional variation was tested with users from the target market to validate the approach.",
        ],
      },
      {
        title: "Wireframing & Prototyping",
        description: [
          "I created low-fidelity wireframes using Figma to explore different approaches to the booking flow. These wireframes focused on information architecture and user flow rather than visual design, allowing for rapid iteration and feedback from stakeholders.",
          "After several rounds of refinement, I developed mid-fidelity wireframes that incorporated the design system elements and began to address the visual hierarchy and layout in more detail. These wireframes were reviewed with the product team to ensure technical feasibility and alignment with business goals.",
          "The final stage involved creating high-fidelity interactive prototypes that simulated the complete booking experience. These prototypes included micro-interactions, form validation, and conditional logic to create a realistic representation of the final product. The prototypes were built with a responsive design approach to ensure a seamless experience across desktop, tablet, and mobile devices.",
        ],
      },
      {
        title: "Testing & Iteration",
        description: [
          "I conducted multiple rounds of usability testing with real users from different target markets. The testing sessions were structured around specific tasks such as finding a doctor, comparing options, and completing a booking, with participants thinking aloud as they navigated the prototype.",
          "The feedback from these sessions was systematically documented and prioritized based on severity and frequency. Key issues identified included confusion around pricing transparency, difficulty in comparing multiple doctors, and uncertainty during the payment process.",
          "I iteratively refined the designs based on this feedback, implementing solutions such as a simplified pricing display, an enhanced comparison tool, and a redesigned checkout process with clearer progress indicators. Each major iteration was validated through additional testing to ensure the changes effectively addressed the identified issues.",
          "Throughout the testing process, I maintained a close collaboration with the development team, providing detailed specifications and participating in implementation reviews to ensure the design intent was accurately translated into the final product.",
        ],
      },
    ],
    results: [
      {
        stat: "+25%",
        description: "Increase in booking completion rate",
      },
      {
        stat: "-30%",
        description: "Reduction in booking abandonment",
      },
      {
        stat: "+15%",
        description: "Improvement in user satisfaction scores",
      },
    ],
    websiteUrl: "https://medicaldepartures.com",
  },
  {
    id: "graduin",
    title: "Graduin.com",
    shortDescription: "UX & Development for multi-university application system",
    coverImage: "/images/grad.png",
    objective:
      "Design and develop a streamlined application system for students applying to multiple universities simultaneously.",
    duration: "Mar 2021 - Nov 2021",
    role: "UX Designer & Front-End Developer",
    challenges: [
      "Complex application requirements varying by university",
      "Managing large amounts of user data securely",
      "Creating an intuitive interface for a complex process",
      "Ensuring accessibility for all users",
    ],
    process: [
      {
        title: "User Research",
        description: [
          "I began the project with extensive user research to understand the pain points in the university application process. This involved conducting in-depth interviews with 15 prospective students from diverse backgrounds, including international applicants, first-generation college students, and transfer students. These interviews revealed common frustrations such as repetitive form filling, difficulty tracking application status, and confusion about varying requirements across institutions.",
          "To complement the qualitative data, I distributed an online survey to a broader audience of recent applicants, gathering quantitative insights from over 200 respondents. The survey data highlighted specific stages of the application process that caused the most friction, with document submission and requirement tracking emerging as particularly problematic areas.",
          "I also conducted stakeholder interviews with university admissions staff to understand their perspective and technical constraints. These conversations were crucial in identifying backend integration requirements and compliance considerations that would influence the design.",
        ],
      },
      {
        title: "Information Architecture",
        description: [
          "Given the complexity of the application process, developing a clear and intuitive information architecture was critical. I employed card sorting exercises with potential users to understand their mental models of the application process. In these sessions, participants organized application components into logical groupings, which informed the overall structure of the platform.",
          "The card sorting results revealed that users preferred a task-based organization rather than a document-based one, leading me to structure the application around key milestones rather than required paperwork. This insight fundamentally shaped the navigation and workflow of the platform.",
          "I created a comprehensive site map and user flow diagrams to visualize the complete application journey, identifying opportunities to simplify complex processes and eliminate redundancies. The information architecture was validated through tree testing, where users were asked to locate specific information or complete tasks within the proposed structure, allowing me to refine the navigation before moving to visual design.",
        ],
      },
      {
        title: "Wireframing & Prototyping",
        description: [
          "Based on the established information architecture, I developed wireframes of key screens using Figma. I started with low-fidelity sketches to explore multiple approaches to complex interfaces such as the application dashboard, document upload system, and university comparison tools. These sketches were reviewed internally to gather early feedback before investing in higher fidelity designs.",
          "After selecting the most promising directions, I created medium-fidelity wireframes that defined the layout, content hierarchy, and core functionality of each screen. These wireframes focused on solving the specific user problems identified in the research phase, such as providing clear progress indicators and contextual help throughout the application process.",
          "I then developed high-fidelity interactive prototypes that incorporated visual design elements and simulated key interactions. The prototypes included conditional logic to demonstrate how the interface would adapt to different user scenarios, such as applying to universities with varying requirements or returning to complete an in-progress application. These prototypes served as both testing tools and reference documentation for development.",
        ],
      },
      {
        title: "Usability Testing",
        description: [
          "I conducted multiple rounds of usability testing with the target audience to validate and refine the design. The first round used the interactive prototypes and focused on the overall flow and concept, with participants attempting to complete core tasks such as starting an application, uploading documents, and tracking application status.",
          "Based on the initial testing, I identified several usability issues, particularly around the document management system and status notifications. I iteratively refined the designs to address these issues, simplifying complex interactions and adding clearer feedback mechanisms throughout the process.",
          "A second round of testing with the revised prototypes showed significant improvements in task completion rates and user satisfaction. Participants particularly appreciated the unified dashboard that allowed them to track multiple applications simultaneously and the contextual guidance provided throughout the process.",
          "Throughout the testing process, I paid special attention to accessibility considerations, ensuring the interface worked well with screen readers and keyboard navigation, and maintained sufficient color contrast for users with visual impairments.",
        ],
      },
      {
        title: "Development",
        description: [
          "As the project moved into development, I worked closely with the engineering team to implement the front-end using React. I created a detailed component library based on the design system, ensuring consistency across the platform while maintaining flexibility for future expansion.",
          "I implemented responsive layouts that adapted seamlessly to different screen sizes, ensuring the application was fully functional on mobile devices—a key requirement identified in the research phase, as many students worked on applications across multiple devices.",
          "Throughout the development process, I conducted regular code reviews and implementation testing to ensure the final product maintained the usability and accessibility standards established in the design phase. I also created comprehensive documentation for the component library to facilitate ongoing maintenance and future enhancements.",
          "The final implementation included performance optimizations to handle large file uploads and complex form validation, ensuring a smooth experience even for users with slower internet connections or less powerful devices.",
        ],
      },
    ],
    results: [
      {
        stat: "85%",
        description: "Of users completed applications on first attempt",
      },
      {
        stat: "40%",
        description: "Reduction in application processing time",
      },
      {
        stat: "20K+",
        description: "Applications processed in first year",
      },
    ],
    websiteUrl: "https://graduin.com/course-finder/",
  },
  {
    id: "momentum-metropolitan",
    title: "Momentum Metropolitan",
    shortDescription: "UX for investment/insurance portal",
    coverImage: "/images/momo.png",
    objective:
      "Redesign the internal client management system for investments and insurance to improve efficiency and user satisfaction.",
    duration: "Jan 2022 - Jun 2022",
    role: "UX Designer",
    challenges: [
      "Complex financial data visualization",
      "Integration with legacy systems",
      "Strict compliance and security requirements",
      "Diverse user base with varying technical skills",
    ],
    process: [
      {
        title: "Stakeholder Interviews",
        description: [
          "I initiated the project by conducting comprehensive stakeholder interviews across different departments within Momentum Metropolitan. These sessions included conversations with financial advisors, customer service representatives, IT managers, compliance officers, and executive leadership to understand the diverse perspectives and requirements for the system.",
          "Through these interviews, I identified several critical business objectives, including reducing the time required to access client information, improving data accuracy, enhancing compliance documentation, and creating a more intuitive interface for staff with varying levels of technical proficiency. I also uncovered significant pain points with the existing system, such as redundant data entry, complex navigation, and inconsistent information display across different modules.",
          "I synthesized these insights into a set of prioritized business requirements and user needs, which served as the foundation for the redesign strategy. This alignment phase was crucial in ensuring the final solution would address both operational efficiency and user experience goals while meeting strict financial industry regulations.",
        ],
      },
      {
        title: "System Analysis",
        description: [
          "Following the stakeholder interviews, I conducted a thorough analysis of the existing system to understand its architecture, data flows, and technical constraints. This involved shadowing users as they performed their daily tasks, documenting the current workflows, and identifying inefficiencies and bottlenecks in the process.",
          "I created detailed task flows and user journey maps to visualize how different user roles interacted with the system. This analysis revealed several critical issues, including excessive click paths to access frequently used information, inconsistent terminology across different sections, and poor integration between the investment and insurance modules that often required users to manually transfer data between screens.",
          "I also performed a heuristic evaluation of the interface against established usability principles, documenting specific usability issues such as inadequate feedback, confusing navigation hierarchies, and ineffective search functionality. This systematic approach allowed me to identify opportunities for improvement while understanding the technical and regulatory constraints that would influence the redesign.",
        ],
      },
      {
        title: "Design & Prototyping",
        description: [
          "Based on the research findings, I developed a comprehensive design strategy that focused on creating a unified, intuitive interface while maintaining compliance with financial regulations. I began with conceptual sketches and low-fidelity wireframes to explore different approaches to key screens, particularly the client dashboard, portfolio management tools, and policy administration interfaces.",
          "After establishing the core layout and information architecture, I created a detailed design system in Figma that defined typography, color palettes, spacing, and component styles. This system was carefully crafted to align with Momentum Metropolitan's brand guidelines while improving readability and visual hierarchy for complex financial information.",
          "I developed high-fidelity interactive prototypes for the primary user flows, incorporating data visualization components for investment portfolios, policy management tools, and client communication features. These prototypes included conditional logic to demonstrate how the interface would adapt to different scenarios and user permissions, ensuring the design could accommodate the complex requirements of various departments.",
          "Throughout the design process, I maintained close collaboration with the IT team to ensure technical feasibility, particularly regarding integration with legacy systems and compliance with security protocols. This collaborative approach helped identify potential implementation challenges early and develop practical solutions that balanced user experience with technical constraints.",
        ],
      },
      {
        title: "User Testing",
        description: [
          "I conducted multiple rounds of usability testing with internal users representing different roles and departments. The testing sessions were structured around realistic scenarios and tasks, such as onboarding new clients, managing investment portfolios, processing policy changes, and generating compliance reports.",
          "The initial testing revealed several usability issues, particularly around the complexity of data entry forms and the clarity of financial visualizations. I iteratively refined the designs based on this feedback, simplifying complex workflows, improving form validation, and enhancing the data visualization components to make financial information more accessible.",
          "For the second round of testing, I focused on validating the revised designs and measuring improvements in task completion rates and user satisfaction. The results showed significant improvements, with users particularly appreciating the unified client view, streamlined navigation, and contextual help features.",
          "Throughout the testing process, I paid special attention to the needs of users with varying levels of technical proficiency, ensuring the interface was intuitive for new employees while providing advanced features and shortcuts for experienced users. This balanced approach was crucial in developing a solution that could be effectively adopted across the organization.",
        ],
      },
    ],
    results: [
      {
        stat: "35%",
        description: "Increase in user productivity",
      },
      {
        stat: "60%",
        description: "Reduction in training time for new employees",
      },
      {
        stat: "90%",
        description: "User satisfaction rating",
      },
    ],
    websiteNote: "Internal project - not publicly accessible",
  },
  {
    id: "bravexis",
    title: "BRAVEXIS",
    shortDescription: "AI automation SaaS platform",
    coverImage: "/images/br.png",
    objective: "Design and develop a SaaS platform for AI-powered business process automation.",
    duration: "Sep 2022 - Present",
    role: "AI Solutions Architect & Product Designer",
    challenges: [
      "Creating intuitive interfaces for complex AI concepts",
      "Balancing automation capabilities with user control",
      "Ensuring scalability and performance",
      "Designing for users with varying AI knowledge",
    ],
    process: [
      {
        title: "Market Research",
        description: [
          "I began the BRAVEXIS project with extensive market research to understand the current landscape of AI automation platforms and identify opportunities for differentiation. This involved analyzing competing products such as Make.com (formerly Integromat), Zapier, and Microsoft Power Automate to understand their strengths, limitations, and user feedback.",
          "I conducted interviews with potential users across different industries, including marketing professionals, operations managers, and IT specialists, to understand their automation needs, pain points with existing solutions, and attitudes toward AI-powered tools. These conversations revealed a significant gap in the market for AI automation tools that balanced powerful capabilities with accessibility for non-technical users.",
          "I also researched emerging AI technologies and use cases, particularly in natural language processing, document processing, and predictive analytics, to identify high-value automation opportunities that could be incorporated into the platform. This research phase was crucial in defining the product vision and identifying the core features that would deliver the most value to users.",
        ],
      },
      {
        title: "Conceptual Design",
        description: [
          "Based on the market research, I developed a conceptual framework for the platform that focused on making AI automation accessible to users with varying levels of technical expertise. I created conceptual models and diagrams to visualize how different AI capabilities could be presented as intuitive building blocks that users could combine to create powerful automation workflows.",
          "I explored different metaphors and interaction paradigms for representing AI concepts, testing these ideas with potential users to gauge their intuitiveness and learnability. Through this process, I developed a visual language for representing AI operations such as text analysis, image recognition, and predictive modeling in a way that non-technical users could understand and configure.",
          "I also defined the core principles that would guide the design, including progressive disclosure of complexity, contextual guidance, and transparent AI operations. These principles ensured that the platform would be approachable for beginners while providing the depth and flexibility needed by advanced users.",
        ],
      },
      {
        title: "Prototype Development",
        description: [
          "With the conceptual framework established, I created a series of interactive prototypes in Figma to test key user flows and interface concepts. I started with low-fidelity wireframes to explore different approaches to the workflow builder, AI configuration panels, and dashboard interfaces.",
          "After refining the core interaction model, I developed higher-fidelity prototypes that incorporated visual design elements and simulated key interactions such as creating workflows, configuring AI components, and monitoring automated processes. These prototypes included conditional logic to demonstrate how the interface would adapt to different user scenarios and AI operations.",
          "I paid particular attention to the workflow builder interface, experimenting with different visualization techniques and interaction patterns to make complex process design intuitive. The final approach used a node-based visual programming paradigm with specialized nodes for different AI operations, combined with intelligent suggestions and templates to help users get started quickly.",
          "Throughout the prototyping process, I maintained a focus on scalability, ensuring the interface could accommodate complex workflows with multiple AI operations while remaining manageable and understandable for users.",
        ],
      },
      {
        title: "Iterative Development",
        description: [
          "For the BRAVEXIS platform, I implemented an agile development process with regular user testing and feedback cycles. Working closely with the development team, I established a component-based architecture that allowed for rapid iteration and feature development while maintaining consistency across the platform.",
          "I created a comprehensive design system in Figma that defined the visual language, component behaviors, and interaction patterns for the platform. This system included specialized components for AI operations, data visualization, and workflow management, with detailed specifications for states, variants, and responsive behavior.",
          "As development progressed, I conducted regular usability testing with beta users, focusing on specific features and workflows to identify usability issues and opportunities for improvement. This feedback was prioritized and incorporated into subsequent development sprints, ensuring the platform evolved based on real user needs and behaviors.",
          "I also worked closely with the AI engineering team to refine the user experience around AI configuration and monitoring, developing intuitive interfaces for complex tasks such as training custom models, defining processing rules, and troubleshooting automation issues. This collaboration was essential in creating a platform that made powerful AI capabilities accessible without oversimplifying or obscuring important technical details.",
        ],
      },
    ],
    results: [
      {
        stat: "In Progress",
        description: "Platform currently in beta testing",
      },
      {
        stat: "12",
        description: "Early adopter businesses using the platform",
      },
      {
        stat: "85%",
        description: "Positive feedback from beta testers",
      },
    ],
    websiteUrl: "https://bravexis.com",
  },
  {
    id: "grant-thornton",
    title: "Grant Thornton",
    shortDescription: "Internal admin portal redesign",
    coverImage: "/images/gtc.png",
    objective:
      "Redesign the internal admin portal for Grant Thornton Financial Services to improve usability and efficiency.",
    duration: "Mar 2022 - Jul 2022",
    role: "UX Designer",
    challenges: [
      "Complex administrative workflows",
      "Integration with multiple internal systems",
      "Strict security and compliance requirements",
      "Diverse user base with varying technical skills",
    ],
    process: [
      {
        title: "User Research",
        description: [
          "I began the Grant Thornton project with comprehensive user research to understand the needs and pain points of the administrative staff who used the portal daily. This involved conducting one-on-one interviews with 12 admin users across different departments, including finance, HR, client services, and IT support. These interviews revealed significant frustrations with the existing system, particularly around navigation complexity, inconsistent terminology, and inefficient data entry processes.",
          "To complement the qualitative data, I distributed a detailed survey to a broader group of admin staff, gathering quantitative insights on feature usage, task frequency, and satisfaction levels. The survey results highlighted specific areas of the portal that caused the most friction, with document management, user permission controls, and reporting functions emerging as particularly problematic.",
          "I also conducted contextual inquiry sessions, observing admin staff as they performed their daily tasks in their natural work environment. These observations provided valuable insights into workarounds and unofficial processes that had developed to compensate for limitations in the existing system, revealing opportunities for significant efficiency improvements.",
        ],
      },
      {
        title: "Workflow Analysis",
        description: [
          "Following the initial research, I conducted a detailed analysis of the administrative workflows to identify inefficiencies and opportunities for improvement. I created process maps for key administrative tasks such as user management, client onboarding, report generation, and compliance documentation, documenting the current state with all its pain points and bottlenecks.",
          "This analysis revealed several critical issues, including redundant data entry across different systems, excessive approval steps that added little value, and poor integration between related functions that forced users to manually transfer information between screens. I also identified several compliance-related processes that were unnecessarily complex due to interface limitations rather than regulatory requirements.",
          "Working with stakeholders from different departments, I developed optimized future-state workflow diagrams that streamlined processes while maintaining necessary controls and compliance requirements. These optimized workflows formed the foundation for the redesigned interface, ensuring that the new portal would support more efficient administrative processes rather than simply providing a visual refresh of the existing system.",
        ],
      },
      {
        title: "Design & Prototyping",
        description: [
          "Based on the research findings and workflow analysis, I developed a comprehensive design strategy for the new admin portal. I began with information architecture work, creating a revised navigation structure that organized functions according to user mental models rather than system architecture, making it easier for admin staff to locate the tools they needed.",
          "I created wireframes in Figma to explore different approaches to key interfaces, particularly the dashboard, user management console, and reporting tools. These wireframes focused on simplifying complex tasks, reducing cognitive load, and providing clear feedback throughout administrative processes.",
          "After establishing the core layout and interaction patterns, I developed a cohesive design system that aligned with Grant Thornton's brand guidelines while improving usability through consistent patterns, clear typography, and thoughtful use of color for status indicators and actions. This system included specialized components for data tables, form controls, and administrative functions, with detailed specifications for states and behaviors.",
          "I then created high-fidelity interactive prototypes for the primary administrative workflows, incorporating realistic data and conditional logic to simulate how the interface would respond to different scenarios and user inputs. These prototypes served as both testing tools and reference documentation for the development team.",
        ],
      },
      {
        title: "Usability Testing",
        description: [
          "I conducted multiple rounds of usability testing with admin staff to validate and refine the design. The testing sessions were structured around realistic administrative scenarios, with participants attempting to complete common tasks such as adding new users, generating compliance reports, and managing client information.",
          "The initial testing revealed several usability issues, particularly around the complexity of permission management and the clarity of system feedback for multi-step processes. I iteratively refined the designs based on this feedback, simplifying complex interfaces, improving error handling, and adding clearer confirmation mechanisms for critical actions.",
          "For the second round of testing, I focused on validating the revised designs and measuring improvements in task completion rates and user satisfaction. The results showed significant improvements, with admin users particularly appreciating the streamlined navigation, consistent interface patterns, and contextual help features.",
          "Throughout the testing process, I paid special attention to accessibility considerations, ensuring the portal worked well with screen readers and keyboard navigation, and maintained sufficient color contrast for users with visual impairments. This was particularly important given the diverse user base and the organization's commitment to inclusive design.",
        ],
      },
    ],
    results: [
      {
        stat: "40%",
        description: "Reduction in time spent on common tasks",
      },
      {
        stat: "65%",
        description: "Decrease in support tickets related to the portal",
      },
      {
        stat: "92%",
        description: "User satisfaction rating",
      },
    ],
    websiteUrl: "https://www.grantthornton.co.za/services/financial-services/",
  },
  {
    id: "rac-digital",
    title: "RAC Digital",
    shortDescription: "IT Consulting web profile with animations",
    coverImage: "/images/rac.png",
    objective: "Design and develop a modern, animated website for RAC Digital's IT consulting services.",
    duration: "Aug 2020 - Oct 2020",
    role: "Web Designer & Developer",
    challenges: [
      "Creating engaging animations without sacrificing performance",
      "Communicating complex IT services in an accessible way",
      "Ensuring responsive design across all devices",
      "Balancing visual appeal with clear information architecture",
    ],
    process: [
      {
        title: "Brand Analysis",
        description: [
          "I began the RAC Digital project with a thorough brand analysis to understand their positioning in the IT consulting market and establish a solid foundation for the website design. This involved reviewing their existing brand materials, conducting interviews with key stakeholders, and analyzing their competitive landscape to identify opportunities for differentiation.",
          "Through these discussions, I identified RAC Digital's core brand attributes: technical expertise, innovation, reliability, and client-focused service. I also uncovered their desire to be perceived as a modern, forward-thinking consultancy that brings enterprise-level IT solutions to mid-sized businesses—a positioning that would significantly influence the visual language and content strategy of the website.",
          "I created mood boards and style explorations to visualize different directions for the brand expression on the web, presenting these options to stakeholders to gather feedback and align on a visual approach that balanced professionalism with innovation. This collaborative process resulted in a clear visual direction that emphasized clean, modern aesthetics with strategic use of animation to convey technical sophistication.",
        ],
      },
      {
        title: "Content Strategy",
        description: [
          "With the brand direction established, I developed a comprehensive content strategy to effectively communicate RAC Digital's IT consulting services to their target audience. This began with audience research to understand the needs, pain points, and decision-making factors of potential clients, primarily IT directors and business owners at mid-sized companies.",
          "Based on this research, I created a content framework that translated complex technical services into clear value propositions focused on business outcomes rather than technical specifications. I worked closely with RAC Digital's subject matter experts to develop content that struck the right balance between technical credibility and accessibility for non-technical decision-makers.",
          "I developed a site map and content outline that organized information according to user priorities, with a clear hierarchy that guided visitors from high-level service categories to specific offerings and case studies. The content strategy also included plans for ongoing content development, with templates and guidelines for case studies, blog posts, and service descriptions to ensure consistency as the site evolved.",
        ],
      },
      {
        title: "Design & Animation",
        description: [
          "With the brand direction and content strategy as my foundation, I created wireframes and visual designs for the website using Figma. I developed a clean, modern layout that emphasized white space, typography, and strategic use of color to create a professional yet distinctive visual identity. The design system included flexible components that could accommodate different content types while maintaining visual consistency across the site.",
          "For the animation strategy, I focused on purposeful motion that enhanced the user experience without creating distractions or performance issues. I designed subtle micro-interactions for navigation elements and buttons to improve usability, while developing more elaborate animations for key sections such as the service showcase and client testimonials to increase engagement with important content.",
          "I created detailed animation specifications and prototypes using Figma and After Effects, documenting timing, easing, and trigger conditions for each animated element. These specifications included performance considerations, with plans for optimization techniques such as lazy loading and CSS-based animations where possible to ensure smooth performance across devices.",
        ],
      },
      {
        title: "Development & Testing",
        description: [
          "I implemented the design using modern web technologies, building a responsive front-end with HTML5, CSS3 (with SCSS for organization), and JavaScript. For the more complex animations, I utilized the GreenSock Animation Platform (GSAP) to achieve smooth, performant motion effects that worked consistently across browsers.",
          "I developed the site with a mobile-first approach, ensuring that all content and functionality were fully accessible on smaller screens, with enhanced animations progressively added for larger devices with more processing power. This approach ensured that the core experience was solid for all users, regardless of their device capabilities.",
          "Throughout development, I conducted regular performance testing using tools like Lighthouse and WebPageTest to identify and address potential issues with load times or animation performance. I implemented various optimization techniques, including code splitting, image optimization, and selective animation triggering based on device capabilities and user preferences.",
          "I also conducted cross-browser and cross-device testing to ensure consistent functionality and appearance across different environments, making adjustments as needed to accommodate browser-specific limitations while maintaining the core design intent. The final implementation successfully balanced visual sophistication with technical performance, delivering an engaging experience without compromising usability or load times.",
        ],
      },
    ],
    results: [
      {
        stat: "+120%",
        description: "Increase in time spent on site",
      },
      {
        stat: "+45%",
        description: "Increase in lead generation",
      },
      {
        stat: "3s",
        description: "Average page load time despite animations",
      },
    ],
    websiteUrl: "https://racdigital.co.za",
  },
]

