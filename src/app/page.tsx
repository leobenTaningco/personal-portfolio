import Image from "next/image";
import { Link2, Mail, Phone } from "lucide-react";
import SectionNav from "./section-nav";

const leadStory = {
  section: "Breaking / degree watch",
  title: "FOUR YEARS OF QUESTIONABLE DECISIONS LED TO A DEGREE?",
  summary:
    "After years of questionable decisions, ever-changing sleep schedules, and a very alarming amount of caffeine, Leoben T. Taningco has officially graduated with a degree in Computer Science. But what baffles the authorities more is that he even managed to make it into the Dean’s List?",
  image: "/portfolio/mugshotFiltered.jpg",
  alt: "Leoben T. Taningco",
};

const secondaryStories = [
  {
    section: "Project file 01 / UniTraffic",
    title: "WHEN THEY SAID “FULL STACK”, THEY MEANT THE WHOLE DUCKING STACK!!!",
    summary: "An Agile university project delivering a full-stack traffic management system across web, mobile, and backend platforms.",
    meta: "TypeScript · Express · DDD · Clean Architecture · Prisma · PostgreSQL · React Native · Expo · TanStack Query · React",
    link: "https://github.com/uni-traffic",
    documentationLink: "https://docs.google.com/document/d/1L1pQtjLVtevyAYOUwsqq7kmGQfN_LCbJ/edit#heading=h.dfq0zetm1hxm",
  },
  {
    section: "Project file 02 / Freedom Wall",
    title: "FREEDOM WALL: BUILT IN PHP, HELD HOSTAGE BY HOSTING FEES.",
    summary: "A Laravel and MVC personal project for posting, judging, and commenting, proudly operational on localhost.",
    meta: "PHP · Laravel · MVC · MariaDB",
    link: "https://github.com/leobenTaningco/php-message-app/blob/main/README.md",
  },
  {
    section: "Project file 03 / React build",
    title: "DEVELOPER REMEMBERS WINDOWS 7 INCORRECTLY, ATTEMPTS TO BUILD IT USING REACT ANYWAYS",
    summary: "An interactive desktop environment where windows can be opened, moved around, minimized, and dragged within the screen.",
    meta: "React · Components · Application state",
    link: "https://github.com/leobenTaningco/webOS",
    deploymentLink: "https://web-os-eta-silk.vercel.app/",
  },
  {
    section: "Project file 04 / Internship report",
    title: "PRETENDING TO BE A FUNCTIONING MEMBER OF SOCIETY UNDER THE GUISE OF A 3 MONTH INTERNSHIP",
    summary: "For three months, moodLearning Inc. took in the intern and guided him into the world of web development, arming him with PHP, CSS, MariaDB, and the most important thing above all, hopes and prayers. The work involved building and improving web pages, working with databases, fixing bugs, and conducting quality assurance testing.",
    meta: "PHP · CSS · MariaDB · QA testing",
    link: "#internship",
  },
];

const bodyCopy =
  "After years of questionable decisions, ever-changing sleep schedules, and a very alarming amount of caffeine, Leoben T. Taningco has officially graduated with a degree in Computer Science. But what baffles the authorities more is that he even managed to make it into the Dean’s List?";

const services = [
  "React, TypeScript, Java, Python, PHP, NextJS, ExpressJS, Laravel, Bootstrap, Tailwind, and CSS",
  "Vercel, serverless functions, CRON jobs, and RESTful API",
  "MariaDB, PostgreSQL, Prisma, and SQL",
  "Figma, Linux, Windows, and Windows AD",
  "Metasploit, Burp Suite, and network/security tooling",
  "Agile development, QA, and questionable code pushes",
];

function StoryLabel({ children }: { children: React.ReactNode }) {
  return <p className="story-label">{children}</p>;
}

export default function Home() {
  return (
    <main className="paper-shell">
      <header className="masthead">
        <div className="masthead-meta">
          <span>Vol. 01 · No. 01</span>
          <span>Laguna PH · New Era University QC</span>
          <span>Aspiring Full Stack Developer · Computer Science Graduate</span>
        </div>
        <div className="masthead-rule" />
        <div className="masthead-row">
          <span className="edition-mark" aria-hidden="true">Est. 2026</span>
             <p className="brand">Big Ben Times</p>
          <span className="edition-stamp">Portfolio edition</span>
        </div>
      </header>
      <SectionNav />

      <section className="front-page" id="front-page" aria-labelledby="lead-title">
        <div className="edition-line">
          <span>All the news that is fit to build</span>
          <span>Special graduation issue</span>
        </div>
        <div className="lead-grid">
          <article className="lead-story">
            <StoryLabel>{leadStory.section}</StoryLabel>
            <h1 id="lead-title">{leadStory.title}</h1>
            <p className="dek">{leadStory.summary}</p>
            <div className="hero-image-wrap">
              <Image
                src={leadStory.image}
                alt={leadStory.alt}
                fill
                sizes="(min-width: 900px) 65vw, 100vw"
                className="hero-image"
                priority
              />
            </div>
          <p className="image-caption">Leoben T. Taningco, Computer Science graduate and person of interest.</p>
          <div className="weather-note">
            <span>Current status</span>
            <strong>Unemployed</strong>
            <span>Available for good work, questionable jokes, and one more feature.</span>
          </div>
          </article>

          <aside className="briefs" aria-label="More stories">
            <div className="briefs-heading">Also in this edition</div>
            {secondaryStories.filter((story) => !story.section.includes("Internship")).map((story) => (
              <article className="brief" key={story.title}>
                <StoryLabel>{story.section}</StoryLabel>
                <h2>{story.title}</h2>
                <p>{story.summary}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="article-section work-section" id="work" aria-labelledby="article-title">
        <div className="section-heading">
          <StoryLabel>Work desk</StoryLabel>
          <span>Selected investigations · 2024—26</span>
        </div>
        <h2 id="article-title">The work, according to the authorities.</h2>
        <div className="project-grid">
          {secondaryStories.map((story, index) => (
            <article className="project-card" key={story.title}>
              <span className="project-number">0{index + 1}</span>
              <StoryLabel>{story.section}</StoryLabel>
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
              <div className="project-meta">{story.meta}</div>
              <div className="project-actions">
                <a className="text-link" href={story.link} target={story.link.startsWith("#") ? undefined : "_blank"} rel={story.link.startsWith("#") ? undefined : "noreferrer"}>VIEW THE GITHUB REPO <span aria-hidden="true">→</span></a>
                {story.documentationLink && <a className="button-link" href={story.documentationLink} target="_blank" rel="noreferrer">Documentation <span aria-hidden="true">↗</span></a>}
                {story.deploymentLink && <a className="button-link" href={story.deploymentLink} target="_blank" rel="noreferrer">Vercel Deployment <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
          <article className="project-card dog-project-card">
            <span className="project-number">05</span>
            <StoryLabel>Project file 05 / GitHub automation</StoryLabel>
            <h3>GITHUB PROFILE CHANGES ON ITS OWN, AUTHORITIES BLAME THE DOGS</h3>
            <p>It started with a simple idea: put a random dog on a GitHub profile. Naturally, manually changing the picture was considered unacceptable. Instead, a small automation system was built to handle the job. A Vercel-hosted serverless API fetches random dog information, processes the response, and uses a hardcoded dog breed for each endpoint. A scheduled cron job then periodically triggers the process, keeping the profile fresh without requiring manual intervention.</p>
            <div className="dog-feed" aria-label="Random dog images">
              <figure>
                <Image src="https://random-dog-vercel.vercel.app/api/random-borzoi?v=1790042011" alt="Random Borzoi" width={320} height={220} />
                <figcaption>Borzoi</figcaption>
              </figure>
              <figure>
                <Image src="https://random-dog-vercel.vercel.app/api/random-labrador?v=1790042011" alt="Random Labrador" width={320} height={220} />
                <figcaption>Labrador</figcaption>
              </figure>
            </div>
            <p className="dog-update">This updates, eventually. Check the GitHub link to see the timestamps.</p>
            <div className="project-meta">Vercel · serverless API · cron · GitHub Actions</div>
            <a className="text-link" href="https://github.com/leobenTaningco/leobenTaningco" target="_blank" rel="noreferrer">VIEW THE GITHUB REPO <span aria-hidden="true">→</span></a>
          </article>
          <article className="project-card posture-card">
            <span className="project-number">06</span>
            <StoryLabel>Project file 06 / Posture detection</StoryLabel>
            <div className="posture-layout">
              <h3>“SHOCKING! COMPUTER CAN NOW JUDGE YOUR SITTING POSTURE?!”</h3>
              <figure className="posture-figure">
                <Image src="/portfolio/thesisresults.png" alt="Thesis results table comparing posture detection models" width={620} height={420} />
              </figure>
              <div className="posture-copy">
                <p>How bad can your sitting posture really get? This project is a machine learning pipeline that classifies sitting posture as Good or Bad using side-view images and real-time webcam input. Using MediaPipe Pose, the system detects the ear, shoulder, and hip, then converts their positions into geometric angles, distances, ratios, and alignment features.</p>
                <p>The model evaluation compared several classifiers, and the results were clear: the Random Forest remained strong and balanced, the MLP achieved the highest recall and ROC-AUC, and the stacking ensemble delivered the best overall balance across all metrics. In the end, the ensemble was recommended for deployment because it combined complementary signal strengths while generalising well to new posture data.</p>
                <div className="project-meta">Python · MediaPipe · OpenCV · NumPy · Pandas · scikit-learn · Flask · Vercel</div>
                <div className="project-actions">
                  <a className="text-link" href="https://github.com/leobenTaningco/posture-detection-pipeline" target="_blank" rel="noreferrer">VIEW THE GITHUB REPO <span aria-hidden="true">→</span></a>
                  <a className="button-link" href="https://posture-detection-web-three.vercel.app/" target="_blank" rel="noreferrer">Vercel Deployment <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
          </article>
          <article className="project-card webscraper-card">
            <span className="project-number">07</span>
            <StoryLabel>Project file 07 / Automation & comics</StoryLabel>
            <div className="webscraper-layout">
              <figure className="webscraper-figure">
                <Image src="/portfolio/comic.jpg" alt="Comic strip by MarieBiskwit" width={220} height={300} />
                <figcaption>by MarieBiskwit</figcaption>
              </figure>
              <div className="webscraper-copy">
                <h3>STUDENT INVENTS SOLUTION TO PROBLEM HE COULD HAVE SOLVED WITH ONE CLICK</h3>
                <p>It all started with one simple problem: checking whether a manga had a new chapter. For most people, the obvious solution would be to open the website and check. For this developer, apparently that was too much work. Instead, a web scraper was built using Node.js, Puppeteer, Axios, and Cheerio. The program opens the manga website, searches for the requested title, presents the results, and fetches the latest chapters and their release dates.</p>
                <p>There was only one problem: the developer could not afford to host the thing. So instead of receiving automatic notifications from a fancy server running somewhere on the internet, the scraper had to be manually launched whenever an update was suspected. Technically, the automation worked. The process was only “automated” in the loosest possible sense.</p>
                <div className="project-meta">Node.js · Puppeteer · Axios · Cheerio · web scraping</div>
                <div className="project-actions">
                  <a className="text-link" href="https://github.com/leobenTaningco/web-scraping/blob/main/index.js" target="_blank" rel="noreferrer">VIEW THE GITHUB REPO <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="article-section profile-section" id="profile" aria-labelledby="profile-title">
        <div className="section-heading">
          <StoryLabel>Profile</StoryLabel>
          <span>About the desk</span>
        </div>
        <div className="profile-grid">
          <div>
            <h2 id="profile-title">A developer with a newspaper’s worth of side quests.</h2>
            <div className="article-meta">Aspiring Full Stack Developer · Computer Science Graduate</div>
            <div className="profile-facts">
              <div><span>Full name</span><strong>Leoben Tiongson Taningco</strong></div>
              <div><span>School</span><strong>New Era University Quezon City</strong></div>
              <div><span>Graduated</span><strong>June 2026</strong></div>
            </div>
            <div className="profile-work-experience">
              <StoryLabel>Work experience</StoryLabel>
              <div className="profile-facts">
                <div><span>Position</span><strong>Web Dev intern</strong></div>
                <div><span>Duration</span><strong>Oct 2025 to Dec 2025</strong></div>
                <div><span>Company</span><strong><a href="https://www.moodlearning.com/" target="_blank" rel="noreferrer">moodLearning Inc.</a></strong></div>
                <div><span>Location</span><strong>NEC Building, UP Diliman Campus, Quezon City</strong></div>
              </div>
            </div>
            <div className="profile-preferences">
              <StoryLabel>Work preferences</StoryLabel>
              <dl>
                <div><dt>Setup</dt><dd>Onsite · Hybrid · WFH</dd></div>
                <div><dt>Location</dt><dd>NCR · Laguna · Cavite</dd></div>
                <div><dt>Relocate?</dt><dd>Yes</dd></div>
              </dl>
            </div>
            <div className="technical-desk">
              <StoryLabel>Technical desk / current equipment</StoryLabel>
              <ul className="service-list">
                {services.map((service, index) => <li key={service}><span>0{index + 1}</span>{service}</li>)}
              </ul>
            </div>
          </div>
          <div className="profile-copy">
            <p>{bodyCopy}</p>
            <p className="pull-quote">&quot;It is what it is&quot;</p>
          </div>
        </div>
      </section>

      <section className="article-section notes-section" id="extras" aria-labelledby="extras-title">
        <div className="section-heading">
          <StoryLabel>Extras</StoryLabel>
          <span>Additional reporting</span>
        </div>
        <article className="extra-story" id="internship">
          <div className="extra-story-copy">
            <StoryLabel>Internship report</StoryLabel>
            <h2 id="extras-title">PRETENDING TO BE A FUNCTIONING MEMBER OF SOCIETY UNDER THE GUISE OF A 3 MONTH INTERNSHIP</h2>
          </div>
          <figure className="extra-story-image">
            <Image src="/portfolio/internship.jpg" alt="Internship project image" fill sizes="(min-width: 900px) 35vw, 100vw" />
            <figcaption>Internship report · moodLearning Inc.</figcaption>
          </figure>
          <div className="article-columns extra-story-body">
            <p>For three months, moodLearning Inc. took in the intern and guided him into the world of web development, arming him with PHP, CSS, MariaDB, and the most important of thing above all, hopes and prayers. The job involved building and improving web pages, working with databases, fixing bugs, and conducting quality assurance testing. What started as a simple internship quickly became a daily battle against “Gumagana naman sa PC ko ah”. After three months of hard work, countless QA reports, and several questionable code pushes, the intern finally completed serving his time. The intern survived.</p>
          </div>
        </article>
        <div className="certification-desk">
          <div className="section-heading">
            <StoryLabel>Certifications</StoryLabel>
            <span>Learning records · 2026</span>
          </div>
          <div className="certification-grid">
            <article className="certification-card">
              <div className="provider-mark provider-mark-oracle" aria-label="Oracle">Oracle</div>
              <div>
                <StoryLabel>Oracle</StoryLabel>
                <h3>Oracle Cloud Infrastructure Foundations</h3>
                <p>After learning that other people&apos;s computers could apparently be called “the cloud,” Leoben completed Oracle&apos;s Cloud Infrastructure Foundations certification and learned the basics of OCI, including compute, storage, networking, security, and cloud architecture.</p>
                <a className="button-link" href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=528772AFDCF117F8EDE231622FF0A38669768B62897AEED20A481C0BEC014C72" target="_blank" rel="noreferrer">View certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article className="certification-card">
              <div className="provider-mark provider-mark-cognitive" aria-label="CognitiveClass.AI">CognitiveClass.AI</div>
              <div>
                <StoryLabel>CognitiveClass.AI</StoryLabel>
                <h3>SQL and Relational Databases 101</h3>
                <p>Leoben learned that data did not sort itself, so he took “SQL and Relational Databases 101” from CognitiveClass.AI.</p>
                <a className="button-link" href="https://courses.cognitiveclass.ai/certificates/8f2a463b297a4da3bab3d0a5dd352cca" target="_blank" rel="noreferrer">View certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article className="certification-card">
              <div className="provider-mark provider-mark-oracle" aria-label="Oracle">Oracle</div>
              <div>
                <StoryLabel>Oracle</StoryLabel>
                <h3>Oracle Cloud Data Management</h3>
                <p>He learned SQL. Then he learned cloud data management. The databases are now in danger.</p>
                <a className="button-link" href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1AC993D365583F58B90CBB4DE3D3D5C216473F5A497D9BC88732AD68ECF52D14" target="_blank" rel="noreferrer">View certificate <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article className="certification-card certification-card-cowola">
              <div className="cowola-image-wrap">
                <Image src="/portfolio/cowola.jpg" alt="Cowola advertisement image" fill sizes="(min-width: 900px) 20vw, 100vw" />
              </div>
              <div className="cowola-copy">
                <StoryLabel>Classified ad</StoryLabel>
                <h3>DRIVER AVAILABLE FOR HIRE: ONE DRIVER. RELIC OF THE PAST INCLUDED.</h3>
                <p>Call: 09273144440</p>
                <p>Experience: questionable</p>
              </div>
            </article>
          </div>
        </div>
        <article className="security-extra">
          <div className="section-heading">
            <StoryLabel>Security desk</StoryLabel>
            <span>TryHackMe profile · Ongoing investigation</span>
          </div>
          <h2>HE INSTALLED KALI, BOUGHT A THM SUBSCRIPTION, AND NOW CONSIDERS HIMSELF A HACKER, MASTER OF ALL HACKERS.</h2>
          <div className="security-extra-grid">
            <div className="security-extra-copy">
              <p>He installed Kali, bought a THM subscription, and now considers himself a hacker, master of all hackers.</p>
              <p>He wanted to try this as a hobby, then, when he learned more, wanted to turn it into a job. But after realizing the certificates were expensive, he stuck to red teaming as a hobby.</p>
              <a className="button-link" href="https://tryhackme.com/p/leotaningco" target="_blank" rel="noreferrer">View TryHackMe profile <span aria-hidden="true">↗</span></a>
            </div>
            <dl className="security-facts">
              <div><dt>Preference</dt><dd>Linux</dd></div>
              <div><dt>Can hack into</dt><dd>Easy to Medium CTF Linux machines</dd></div>
              <div><dt>Ranking</dt><dd>Top 7%</dd></div>
              <div><dt>Focus</dt><dd>Red Teaming</dd></div>
              <div><dt>Unexpectedly learned</dt><dd>Networking · Windows AD</dd></div>
              <div><dt>Learned</dt><dd>Metasploit · Burpsuite · NMAP · John · Gobuster · and other tools</dd></div>
            </dl>
          </div>
        </article>
          <article className="about-site" id="about-site" aria-labelledby="about-site-title">
            <div className="section-heading">
              <StoryLabel>About this website</StoryLabel>
              <span>Making-of report · 2026</span>
            </div>
            <div className="about-site-grid">
              <div className="about-site-intro">
                <h2 id="about-site-title">A portfolio built with intent, then checked against reality.</h2>
                <p>This website exists to document the work, ideas, and questionable side quests behind the portfolio. It is also an experiment in learning how to work with agentic coding while moving toward a more deliberate development practice.</p>
              </div>
              <div className="about-site-facts">
                <div>
                  <span>Technology used</span>
                  <strong>Next.js · React · TypeScript · Tailwind CSS · lucide-react</strong>
                </div>
                <div>
                  <span>Model used</span>
                  <strong>GitHub Copilot, used as an agentic coding tool</strong>
                </div>
                <div>
                  <span>Checks performed</span>
                  <strong>Production build · TypeScript validation · ESLint · Desktop and mobile review</strong>
                </div>
              </div>
            </div>
            <div className="about-site-philosophy">
              <StoryLabel>Development philosophy</StoryLabel>
              <p>The design, content, project selection, project descriptions, and overall creative direction came from me. I decided what information belonged here, how the site should feel, and which ideas were worth turning into projects.</p>
              <p>AI was used as a development tool, not as an independent art director. I used the agent to help implement, refine, debug, optimize, and explore the codebase while keeping the direction orchestrated by me. This was not intended to be a purely vibe-coded website where the agent independently decided what to build.</p>
              <p>Typography was one area where I gave the agent more freedom to make implementation and design decisions. The rest of the site remained guided by my choices about its structure, voice, and purpose.</p>
            </div>
          </article>
      </section>

      <section className="article-section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-heading">
          <StoryLabel>Contact desk</StoryLabel>
          <span>Classifieds · Open to opportunities</span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title">PLS PLS PLS HIRE ME, or if you have a questionable idea and somehow want me to be involved, contact me.</h2>
          <p>Send a dispatch to Leoben T. Taningco.</p>
        </div>
        <div className="contact-directory">
          <a href="tel:+639273144440"><Phone aria-hidden="true" /><span><small>Phone</small>09273144440</span></a>
          <a href="mailto:taningcoleobent@gmail.com"><Mail aria-hidden="true" /><span><small>Email</small>taningcoleobent@gmail.com</span></a>
          <a href="https://www.linkedin.com/in/leoben-taningco/" target="_blank" rel="noreferrer"><Link2 aria-hidden="true" /><span><small>LinkedIn</small>linkedin.com/in/leoben-taningco</span></a>
          <a href="https://github.com/leobenTaningco" target="_blank" rel="noreferrer"><Link2 aria-hidden="true" /><span><small>GitHub</small>github.com/leobenTaningco</span></a>
        </div>
      </section>

        <footer className="paper-footer">
        <p className="brand brand-small">Big Ben Times</p>
        <div>
          <StoryLabel>End of edition</StoryLabel>
          <p>© 2026 Leoben T. Taningco · Laguna, Philippines</p>
        </div>
        <p>Printed for the curious and the employable.</p>
      </footer>
    </main>
  );
}
