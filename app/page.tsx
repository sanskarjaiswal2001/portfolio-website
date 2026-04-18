import { ContactForm } from "@/components/contact-form"
import { BlogFeed } from "@/components/blog-feed"
import { HeroRotatingText, HeroRoleText, HeroHoldUpText } from "@/components/hero-rotating-text"

export default function Home() {
  return (
    <main>
      {/* ===================== HERO ===================== */}
      <header className="pg-hero">
        <div className="pg-container">
          <h1>
            <HeroRoleText />
            Ships things that <HeroHoldUpText /> under <HeroRotatingText />
          </h1>

          <div className="pitch">
            <p className="lead">
              I build Python backends, AI pipelines, and infrastructure designed to stay
              invisible. The things I ship tend to stay up. When they don&apos;t,
              there&apos;s already a runbook for it.
            </p>
            <div className="meta">
              <div className="row"><span>Currently</span><b>Software Engineer @ Betsol</b></div>
              <div className="row"><span>Stack</span><b>Python · FastAPI · Postgres · Docker</b></div>
              <div className="row"><span>Time in the field</span><b>2.6 years</b></div>
              <div className="row"><span>Location</span><b>Bangalore, open to remote</b></div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="pg-marquee pg-marquee--hero">
          <div className="track">
            <span className="item"><b>3M+</b> records in production RAG</span>
            <span className="item star">✦</span>
            <span className="item"><b>$1M+/yr</b> saved on RPA licenses</span>
            <span className="item star">✦</span>
            <span className="item"><b>40%</b> fewer support escalations</span>
            <span className="item star">✦</span>
            <span className="item"><b>80%</b> less unplanned downtime</span>
            <span className="item star">✦</span>
            <span className="item"><b>100+</b> client sites monitored</span>
            <span className="item star">✦</span>
            <span className="item"><b>10M+</b> records reconciled</span>
            <span className="item star">✦</span>
            {/* duplicated for seamless loop */}
            <span className="item"><b>3M+</b> records in production RAG</span>
            <span className="item star">✦</span>
            <span className="item"><b>$1M+/yr</b> saved on RPA licenses</span>
            <span className="item star">✦</span>
            <span className="item"><b>40%</b> fewer support escalations</span>
            <span className="item star">✦</span>
            <span className="item"><b>80%</b> less unplanned downtime</span>
            <span className="item star">✦</span>
            <span className="item"><b>100+</b> client sites monitored</span>
            <span className="item star">✦</span>
            <span className="item"><b>10M+</b> records reconciled</span>
            <span className="item star">✦</span>
          </div>
        </div>
      </header>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">01 / About</div>
              <h2>The <em>short</em> version.</h2>
            </div>
            <div className="right">/ who, where, what</div>
          </div>

          <div className="pg-about-grid">
            <p className="lede reveal">
              Backend engineer at <em>Betsol.</em> I replaced a six-figure RPA
              vendor contract with Python, built a RAG system that ships to
              production, and run a homelab that doubles as a <em>staging environment.</em>
            </p>

            <div className="side reveal">
              <div className="pg-nowbox">
                <div className="title">/ Right now /</div>
                <ul>
                  <li>
                    <span className="k">building</span>
                    <span>Claude Code skills framework, 5 plugins in flight</span>
                  </li>
                  <li>
                    <span className="k">reading</span>
                    <span>Designing Data-Intensive Applications (second pass)</span>
                  </li>
                  <li>
                    <span className="k">into</span>
                    <span>local LLMs, monorepo tooling, mechanical keyboards</span>
                  </li>
                  <li>
                    <span className="k">based in</span>
                    <span>Bangalore, open to remote</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="work" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">02 / Work</div>
              <h2>Where the <em>numbers</em> come from.</h2>
            </div>
            <div className="right">/ 2.6 yrs · Betsol · 2 roles</div>
          </div>

          <div className="pg-exp">
            <article className="pg-job reveal">
              <div className="when">Jan 2025 → Now</div>
              <div>
                <h3 className="role">
                  Software Engineer
                  <span className="role-sub">, Backend &amp; AI</span>
                </h3>
                <div className="where">Betsol · Bangalore</div>
                <ul>
                  <li>
                    Designed a <b>RAG pipeline</b> over <span className="num">3M+ records</span> using
                    FastAPI, Azure OpenAI and FastMCP. Support escalations dropped
                    <span className="num"> 40%</span>; average ticket time went from 48h to 29h.
                  </li>
                  <li>
                    Built uptime monitoring across <span className="num">100+ client sites</span> with
                    Docker, Podman and Prometheus. Result: <span className="num">80% less downtime,
                    $40K/mo</span> back from SLA penalties.
                  </li>
                  <li>
                    Shipped Grafana dashboards surfacing <span className="num">11 real-time metrics</span>{" "}
                    across global infrastructure. Killed the weekly status-report ritual.
                  </li>
                  <li>
                    Wrote and maintains the <b>Claude Code Skills Framework</b>: 2 plugins in
                    production, GitLab CI/CD, 5 more in review.
                  </li>
                  <li>
                    Built <b>AIgis</b> on weekends, demoed it internally on a Tuesday, and found
                    it in production by Thursday.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pg-job reveal">
              <div className="when">Jul 2023 → Jan 2025</div>
              <div>
                <h3 className="role">
                  Associate Software Engineer
                  <span className="role-sub">, Python</span>
                </h3>
                <div className="where">Betsol · Bangalore</div>
                <ul>
                  <li>
                    Replaced a <b>BluePrism</b> RPA stack with custom Python microservices
                    (FastAPI, Django). Killed the vendor contract, saved{" "}
                    <span className="num">$1M+/year.</span>
                  </li>
                  <li>
                    Wrote <span className="num">50+ automation workflows</span> for finance
                    operations: <span className="num">90% less manual work,</span> roughly{" "}
                    <span className="num">600 engineer-hours/year</span> freed up.
                  </li>
                  <li>
                    Automated audit reconciliation over <span className="num">10M+ financial records.</span>{" "}
                    Review cycle: 5 days → 1.
                  </li>
                  <li>
                    Rebuilt flaky REST integrations with retry and fallback logic. Nightly
                    batch success rate: <span className="num">72% → 97%.</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="pg-job reveal">
              <div className="when">Aug 2019 → May 2023</div>
              <div>
                <h3 className="role">B.E. Information Science &amp; Engineering</h3>
                <div className="where">RNS Institute of Technology · CGPA 8.9 / 10</div>
                <ul>
                  <li>
                    Wrote my first production-adjacent code, broke several things,
                    and learned exactly why staging environments exist.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">03 / Projects</div>
              <h2>Things I built <em>for fun.</em></h2>
            </div>
            <div className="right">/ side quests</div>
          </div>

          <div className="pg-projects">
            <a
              className="pg-project reveal"
              href="https://github.com/sanskarjaiswal2001/guardian-modified"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/01</div>
              <div>
                <div className="name">Guardian <em>Modified</em></div>
                <div className="desc">
                  Token-based access control for GTA V peer-to-peer sessions. Firebase auth,
                  GCP-deployable, 1K+ active users. None of whom read the docs.
                </div>
              </div>
              <div className="stack">
                <span>Python</span><span>Firebase</span><span>GCP</span>
              </div>
              <div className="arrow">↗</div>
            </a>

            <a
              className="pg-project reveal"
              href="https://github.com/sanskarjaiswal2001/aigis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/02</div>
              <div>
                <div className="name"><em>AIgis</em></div>
                <div className="desc">
                  Homelab monitoring with 11 metric collectors, a cascading-severity rules
                  engine, Claude analysis at ~$0.01/scan, and 13 approval-gated remediation
                  scripts. Weekend project. Now in production.
                </div>
              </div>
              <div className="stack">
                <span>FastAPI</span><span>React</span><span>Claude</span>
              </div>
              <div className="arrow">↗</div>
            </a>

            <a
              className="pg-project reveal"
              href="https://github.com/sanskarjaiswal2001/Ethgram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/03</div>
              <div>
                <div className="name">Eth<em>gram</em></div>
                <div className="desc">
                  Decentralised photo sharing on Ethereum. Images live on IPFS, ownership
                  verified on-chain. Built this when I thought gas fees were a reasonable UX tradeoff.
                </div>
              </div>
              <div className="stack">
                <span>Solidity</span><span>JavaScript</span><span>IPFS</span>
              </div>
              <div className="arrow">↗</div>
            </a>

            <a
              className="pg-project reveal"
              href="https://github.com/sanskarjaiswal2001/DAO-Voting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/04</div>
              <div>
                <div className="name">DAO <em>Voting</em></div>
                <div className="desc">
                  On-chain governance with proposal creation, delegation, and time-locked
                  execution. Solidity + Truffle, deployed to Ethereum testnet. Peak 2021 energy.
                </div>
              </div>
              <div className="stack">
                <span>Solidity</span><span>JavaScript</span><span>Truffle</span>
              </div>
              <div className="arrow">↗</div>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">04 / Stack</div>
              <h2>Tools I reach for <em>first.</em></h2>
            </div>
            <div className="right">/ updated apr 2026</div>
          </div>

          <div className="pg-skills">
            <div className="skill-row reveal">
              <div className="skill-cat">Languages</div>
              <div className="skill-tags">
                <span>Python</span><span>TypeScript</span><span>JavaScript</span>
                <span>Java</span><span>Dart</span><span>Bash</span><span>Solidity</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">Frameworks</div>
              <div className="skill-tags">
                <span>FastAPI</span><span>Django</span><span>React</span>
                <span>Next.js</span><span>Flutter</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">AI &amp; Data</div>
              <div className="skill-tags">
                <span>Azure OpenAI</span><span>Anthropic</span><span>LangChain</span>
                <span>LangGraph</span><span>LlamaIndex</span><span>FastMCP</span>
                <span>Whisper</span><span>HuggingFace</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">Storage</div>
              <div className="skill-tags">
                <span>PostgreSQL</span><span>MSSQL</span><span>MongoDB</span><span>Redis</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">Infra</div>
              <div className="skill-tags">
                <span>Docker</span><span>Podman</span><span>Kubernetes</span>
                <span>Nginx</span><span>Caddy</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">Observability</div>
              <div className="skill-tags">
                <span>Prometheus</span><span>Grafana</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">CI / CD</div>
              <div className="skill-tags">
                <span>GitHub Actions</span><span>GitLab CI</span>
              </div>
            </div>
            <div className="skill-row reveal">
              <div className="skill-cat">Daily drivers</div>
              <div className="skill-tags">
                <span>Zed</span><span>Vim</span><span>Git</span><span>Fish</span><span>JIRA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BLOG ===================== */}
      <section id="writing" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">05 / Writing</div>
              <h2>Notes from the <em>terminal.</em></h2>
            </div>
            <div className="right">
              <a
                href="https://blog.sanskarjaiswal.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="all-posts-link"
              >
                all posts ↗
              </a>
            </div>
          </div>

          <BlogFeed />
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="pg-section">
        <div className="pg-container">
          <div className="pg-section-head reveal">
            <div>
              <div className="label">06 / Contact</div>
              <h2>Say <em>hi.</em></h2>
            </div>
            <div className="right">/ replies within 24h, usually</div>
          </div>

          <div className="pg-contact-wrap">
            <div className="reveal">
              <h3>
                Got something <em>weird</em>
                <br />
                to build?
              </h3>
              <p>
                Backend systems, AI pipelines, automation that pays for itself. Or a side
                project that needs someone who won&apos;t just nod along. Pitch me.
              </p>
              <ContactForm />
            </div>

            <div className="reveal">
              <div className="pg-links">
                <a href="mailto:sanskar.jaiswal.work@gmail.com">
                  <span>
                    <span className="pg-link-tag">EMAIL</span>
                    sanskar.jaiswal.work@gmail.com
                  </span>
                  <span className="arrow">↗</span>
                </a>
                <a href="https://linkedin.com/in/sanskarjaiswal" target="_blank" rel="noopener noreferrer">
                  <span>
                    <span className="pg-link-tag">LINKEDIN</span>
                    /in/sanskarjaiswal
                  </span>
                  <span className="arrow">↗</span>
                </a>
                <a href="https://github.com/sanskarjaiswal2001" target="_blank" rel="noopener noreferrer">
                  <span>
                    <span className="pg-link-tag">GITHUB</span>
                    @sanskarjaiswal2001
                  </span>
                  <span className="arrow">↗</span>
                </a>
                <a href="https://blog.sanskarjaiswal.dev" target="_blank" rel="noopener noreferrer">
                  <span>
                    <span className="pg-link-tag">BLOG</span>
                    blog.sanskarjaiswal.dev
                  </span>
                  <span className="arrow">↗</span>
                </a>
                <a href="#">
                  <span>
                    <span className="pg-link-tag">RESUME</span>
                    download .pdf
                  </span>
                  <span className="arrow">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="pg-footer">
        <div className="pg-container">
          <div className="row">
            <div>© 2026 Sanskar Jaiswal · made with too much coffee</div>
            <div>v3 · last shipped apr 2026</div>
          </div>
          <span className="big">SANSKAR.</span>
        </div>
      </footer>
    </main>
  )
}
