// @flow
import * as d3 from 'd3'

export type TrackId = 'TRAINING-DEVELOPMENT' | 'RECRUITMENT-SELECTION' | 'EMPLOYEE-MANAGEMENT-ALIGNMENT' | 'GUIDANCE-SUPPORT' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'TRAINING-DEVELOPMENT': Milestone,
  'RECRUITMENT-SELECTION': Milestone,
  'EMPLOYEE-MANAGEMENT-ALIGNMENT': Milestone,
  'GUIDANCE-SUPPORT': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'TRAINING-DEVELOPMENTG': Track,
  'RECRUITMENT-SELECTION': Track,
  'EMPLOYEE-MANAGEMENT-ALIGNMENT': Track,
  'GUIDANCE-SUPPORT': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "TRAINING-DEVELOPMENT": {
    "displayName": "Onboarding & Offboarding",
    "category": "A",
    "description": "the process of integrating new employees into the organization and its culture and then, separating them on their last day of employment",
    "milestones": [{
      "summary": "HR Onboarding & Offboarding best practices and procedures are understood correctly",
      "signals": [
        "Detail-oriented",
        "Desire to want to learn new things",
        "Curious and open-minded",
      ],
      "examples": [
        "Creates presentation slides that outline the company’s values, culture, benefits, and policies without any errors",
      ],
    }, {
      "summary": "HR Onboarding & Offboarding best practices and procedures are executives without errors",
      "signals": [
        "Strong communication link between employees and HR",
        "Approachable and caring of the employees’ needs and concerns",
        "Always willing to help and guide people in the right direction",
      ],
      "examples": [
        "Making sure proper onboarding and offboarding processes are in place.",
        "Is capable of presenting the company’s values, culture, benefits, and policies to new employees without any mistakes and is able to answer any questions that may arise",
        "Ensure a seamless employee experience (Setup of workstation & materials, access to all HR systems",
      ],
    }, {
      "summary": "Execution of HR practices & specific projects while having employee and team satisfaction in mind",
      "signals": [
        "Is the “Go to person” for general HR related questions for employees",
      ],
      "examples": [
        "Acting as support for the HR team in day to day practices; ",
        "helps to create diverse HR documentation/slides",
        "Updating employees on changes and policies & maintaining documentation ",
      ],
    }, {
      "summary": "Develops new HR onboarding/offboarding practices, or minor improvements to existing ones",
      "signals": [
        "Curious & Open-minded: researches new, competitive initiatives and ideas to enhance employee experience ",
      ],
      "examples": [
        "Implements new tools and tasks to maximize efficiency and effectiveness on the onboarding/offboarding processes",
        "Informs the HR team about recent best practices updates and what new initiatives will be put in place"
      ],
    }, {
      "summary": "Is a leading expert in the onboarding & offboarding experience and sets strategic HR directions for the team",
      "signals": [
        "Defines long-term goals and ensures active participation of employees are put in place",
      ],
      "examples": [
        "Designs and develops innovative, HR processes that are competitive and reflect the company's values & culture",
        "Invents new techniques to enhance employee experience, while implementing best practices",
      ],
    }],
  },

  "RECRUITMENT-SELECTION": {
    "displayName": "Recruitment & Selection",
    "category": "A",
    "description": "Attracts, shortlists, selects and hires suitable candidates for jobs (either permanent or temporary) within Dialogue.",
    "milestones": [{
      "summary": "Interacts with potential candidates and brings them into the pipeline while assessing their knowledge, skills, and abilities for the role based on their profile",
      "signals": [
        "Reviews existing network of candidates on a regular basis",
        "Shadows interviews to gain familiarity with recruitment process",
        "Reviews and adjusts current job postings regularly",
      ],
      "examples": [
        "Entered and tracked candidate information in Dialogue's internal recruitment tracking system.",
        "Drafted up and posted detailed job descriptions on Dialogue's website",
        "Used social and professional networking sites to identify and source candidates",
      ],
    }, {
      "summary": "Leads the screening interview process, while helping to make strategic hiring decisions",
      "signals": [
        "Follows the interview guidelines to provide feedback on candidates",
        "Respectful towards candidates, pays attention to detail and answers their questions clearly",
        "Encourages new approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Worked with HR and Hiring Managers to do recruitment needs analysis",
        "Responsible for scheduling phone and/or on-site interviews.",
        "Participate in job fairs and recruiting events that help to find new talent",
      ],
    }, {
      "summary": "Solidifies recruitment processes while finding strong candidates for various roles",
      "signals": [
        "Understands what knowledge, skills, and abilities are required for specific roles and can identify when a candidate has potential for the job",
        "Capable of teaching new recruiters how to effectively source and interview candidates",
        "Demonstrated superior communication skills and provides constructive feedback to new talent specialists",
      ],
      "examples": [
        "Implemented strategies for identifying and attracting passive and active candidates",
        "Integrated new techniques that help to improve the interview process such as new interview questions",
        "Attracts strong candidates into the pipeline with high conversion rates",
      ],
    }, {
      "summary": "Responsible for full cycle recruitment, selection process and applicant tracking in accordance with company procedures.",
      "signals": [
        "Ability to align the right candidates with the company’s values, mission, and culture",
        "Ability to leads hiring decisions and resolves conflicting reports",
      ],
      "examples": [
        "Effectively established Dialogue’s interview processes and the training required for each phase",
        "Organized and led Dialogue’s presentation at recruitment fairs and events",
      ],
    }, {
      "summary": "Establishes all recruitment strategies, invests in long-term relationships for critical roles, and drives the recruitment function",
      "signals": [
        "Forms policies and goals around creating diverse, top performing teams",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity and identifies talent opportunities future needs",
      ],
      "examples": [
        "Maintained contact with top performing candidates who have the potential to fill future roles at Dialogue",
        "Organized efforts and strategies to maintain and attract the best talent in all of Dialogue’s functions",
      ],
    }],
  },

  "EMPLOYEE-MANAGEMENT-ALIGNMENT": {
    "displayName": "EMPLOYEE-MANAGEMENT ALIGNMENT",
    "category": "A",
    "description": "provides full cycle Human Resources support to all functions of the company, critical in executing people initiatives, providing great internal customer support, and driving HR functional excellence and process improvement.",
    "milestones": [{
      "summary": "Ability to successfully monitor the "pulse" of the employees to ensure a high level of employee engagement",
      "signals": [
        "Excellent organizational and interpersonal skills",
        "Flexibility, fantastic communication skills and huge amounts of drive",
        "The ability to manage multiple priorities simultaneously - orientated on results",
      ],
      "examples": [
        "Contributed to the formalization of succession plans for key positions",
        "Ensured that all key employees have a formalized personal development plan in their annual objectives",
      ],
    }, {
      "summary": "Successfully creates and drives effective development, employee relations, retention and reward programs",
      "signals": [
        "Strong internal and external customer service focus",
        "Must be able to interface at all levels of the organization",
        "A strong solutions focused mindset",
      ],
      "examples": [
        "Worked with the business to ensure that each key employees have a formalized personal development plan in their annual objectives",
        "Advised employees on their training needs and offer: external training, organization of internal training with managers, contribute to employees skill development and employability.",
      ],
    }, {
      "summary": "Understand business goals and recommends new approaches, policies and procedures to effect continual improvements in business objectives, productivity and development of HR within the company",
      "signals": [
        "Comfortable working in an environment which demands strong deliverables ",
        "Ability to identify problems and drive appropriate solutions",
        "Leader in decision making processes",
      ],
      "examples": [
        "Developed and delivered an effective performance review process",
        "Established thorough training programs catered to each department for new hires",
        "Directed and coordinated the interpretation and application of policies, procedures and programs within the human resources function",
      ],
    }, {
      "summary": "Provides coaching and guidance to business leaders on their interpretation and execution of HR policies and programs",
      "signals": [
        "Bias for action, strong work ethic, and desire to achieve excellence",
        "Identified leadership training opportunities for senior leadership",
        "Acts as a role model, guides and advises the HR Coordinators and other HR Business Partners.",
      ],
      "examples": [
        "Advised managers in developing business plans for development and recruitment.",
        "Took charge of case management of sensitive complex issues ",
        "Demonstrated success in supporting senior Leaders with complicated Human Resources issues",
      ],
    }, {
      "summary": "IDesigns strategies with internal stakeholders soliciting support and information from HR team members to achieve resolutions which meets the objectives and goals of the business and HR.",
      "signals": [
        "Superior conflict resolution skills",
        "Defines the strategic vision for HR solutiond and process improvements",
        "Establishes industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Built a strategy to attract key talent, as well as retain and develop high potential colleagues, ensuring robust IDP’s are in place to support succession planning process.",
        "Drove the workforce forecasting and planning at the business unit level to capture the requirements of human resources to meet evolving business objectives ",
        "Delivered corporate training, new hire orientation and develop curriculum for employees and leaders",
      ],
    }],
  },

  "GUIDANCE-SUPPORT": {
    "displayName": "GUIDANCE-SUPPORT",
    "category": "A",
    "description": "Strives for company excellence, maximises employees’ potential and effectively resolves performance issues with compassion and care throughout various functions ",
    "milestones": [{
      "summary": "Provides support and guidance for employees while recommending solutions to problems",
      "signals": [
        "Recognizes when support is needed",
        "Helps to break down problems into feasible, tangible next steps",
        "Problem solver and active listener ",
      ],
      "examples": [
        "Scheduled time to meet with employees and helped them resolve conflicts among their teams",
        "Provided positive feedback for good work and recognizes employees’ achievements",
      ],
    }, {
      "summary": "Capable of skillfully resolving performance issues among employees while offering insightful action plans for them  to follow",
      "signals": [
        "Honest with employees",
        "Encourages participation in conflict resolution discussions",
        "Helps employees take action and ownership of their concerns",
      ],
      "examples": [
        "Led discussions with employees and provided honest, yet constructive feedback about performance ",
        "Guided an employee to help solve their problem directly, on their own ",
      ],
    }, {
      "summary": "Provides employee assistance with major performance issues",
      "signals": [
        "Strong desire to help employees perform and succeed at their highest potential",
        "Identifies characteristics related to poor performance and establishes a resolution plan",
        "Strong problem solving skills and communication skills",
      ],
      "examples": [
        "Developed performance plans tailored for a specific employee’s needs",
        "Organized weekly meetings to evaluate improvements in order to avoid PIPs",
      ],
    }, {
      "summary": "Deals with conflict resolution and provides mediation as appropriate",
      "signals": [
        "Ability to intervene and help resolve toxic conflicts",
        "Enforces open communication, transparency and openness to ideas/solutions",
        "Ability to empower teams to move forward in the right direction",
      ],
      "examples": [
        "Mediated disagreements between employees and employers",
        "Mediated disagreements between employees and other employees",
      ],
    }, {
      "summary": "Develops solutions and help to resolve higher-end and complex, organizational issues at the senior level of the company",
      "signals": [
        "Ability to manage chaotic situations in a peaceful yet constructive manner",
        "Strong negotiation skills, active listener, problem solver, able to manage dsiputes",
        "Ability to build harmony and come to an agreement between both parties",
      ],
      "examples": [
        "360 degree performance turn-around of the performance of a problematic team",
        "Abolished any serious tensions between various teams",
        "Rebuilt trust between senior EMT members",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Wrote the technical spec for featured post images",
        "Delivered stream item support for email digests",
        "Delivered payment history dashboard",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Delivered promo editor",
        "Delivered audio uploading for web client",
        "Executed the recommends to claps backfill",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of Hightower",
        "Managed infrastructure migration to VPC",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to SOA",
        "Lead technical delivery of 10/7",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updated The Watch before running a backfill",
        "Updated project status changes in Asana promptly",
        "Gave thoughtful check-in and check-out comments",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Created cross-team Slack channel for payments work",
        "Spoke to domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Gave a substantial Eng All Hands presentation on React",
        "Gave notice of upcoming related work in Eng Briefing",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Lead off-site workshop on interviewing",
        "Wrote Medium's growth framework and rationale",
        "Aligned the entire organization around claps",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Organized half year check-in company offsite",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on Hatch before it went live",
        "Landed non-trivial PR with no caretaker comments",
        "Wrote hermetic tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduced the number of zelda fitzgerald exceptions",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved PRB to run the same volume of tests faster",
        "Simplified hermetic test data modification",
        "Created fixture system for visual quality",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Coordinates Watch priorities and projects",
      ],
      "examples": [
        "Added code coverage reporting to iOS CI pipeline",
        "Iterated repeatedly to develop Medium's underlines solution",
        "Defined and oversaw plan for closing Heartbleed vulnerability",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It week with exec team",
        "Instituted and ensured success of a 20% time policy",
        "Started The Watch",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes Hatch posts about improvement opportunities",
        "Raises meaningful tensions in tactical meetings",
        "Asks leadership team probing questions at FAM",
      ],
      "examples": [
        "Wrote about problems with TTR on Hatch",
        "Wrote about content policy problems on Hatch",
        "Reported a site issue in Github",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on trust and safety tasks proactively when blocked elsewhere",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Implemented flow typing for promises",
        "Audited web client performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style arguments",
        "Proposed and implemented at-mentions prototype",
        "Implemented video for Android independently, unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing rubric and booklet",
        "Implemented and secured support for native login",
        "Migrated medium2 to mono repo and bazel",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the organization from Holacracy",
        "Built Medium Android prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to move to Medium Lite architecture",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Hosted a Floodgate Academy intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined Frankenmeeting structure for small team",
        "Improved Watch on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected mobile recruiting difficulties to focus on excellence",
        "Raised leadership level change discrepancies",
        "Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected tedious A|B testing project with overall company goals",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on transference and counter transference",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on diagnosing problems",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on decision making",
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
        "Wrote Hatch post on avoiding RDS backfill issues",
        "Wrote Medium-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Medium-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a Medium product launch post on Facebook",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Medium",
        "Joined public Slack group and represented Medium appropriately, and well",
        "Organizes positive small- or medium-sized events that bring people to Medium",
      ],
      "examples": [
        "Volunteered as a helper for CODE2040 writing workshop",
        "Organized a short tour of the office by college students",
        "Talked at a Women Who Code event hosted at Medium",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Medium that receive moderate traffic",
      ],
      "examples": [
        "Represented Medium on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Medium's organizational or technical innovations",
        "Leverages significant following to evangelise Medium",
      ],
      "examples": [
        "Published a paper on Medium technology in a peer-reviewed journal",
        "Authored joint-press release with EFF on DNT",
        "Published “Why Content Editable Is Terrible” on the Medium engineering blog",
      ],
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Medium positively",
        "Drives recognition and adoption of Medium in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Medium in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Started a monthly brunch for candidates to meet Medium employees",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our question quality criteria",
        "Brought candidates into our pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Medium's presence at a recruitment fair",
        "Started CODE2040 internship program",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Organized efforts around convincing acquired engineers to join and stay",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the web client guild",
        "Brought a small gift back from vacation for the team",
        "Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created onboarding bingo",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional Watch shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Lead Watch cycles with little support while still contributing to projects",
        "Started and drove the LGBTQIA ERG",
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on the Watch, serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Refactored hundreds of legacy Shepherd nodes",
        "Acted as sole maintainer of Boxen for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Medium's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized wine and olive tasting offsite to Napa for the whole engineering org",
        "Devised, delivered and acted on findings from an engineer happiness survey",
        "Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Junior HR-Talent Coordinator', minPoints: 0, maxPoints: 16},
  {label: 'Senior HR-Talent Coordinator', minPoints: 17, maxPoints: 35},
  {label: 'Junior HR Generalist', minPoints: 36, maxPoints: 57},
  {label: 'Senior HR Generalist', minPoints: 36, maxPoints: 57},
  {label: 'Junior HR Business Partner', minPoints: 58, maxPoints: 89},
  {label: 'Senior HR Business Partner', minPoints: 58, maxPoints: 89},
  {label: 'HR-Talent Manager', minPoints: 90},
  {label: 'Director HR-Talent', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
