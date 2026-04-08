---
title: Home
description: Red Oryx helps businesses modernise legacy Ruby and Rails systems without unnecessary disruption.
body_class: page-home
hero_eyebrow: Legacy Ruby and Rails modernisation
hero_title: Practical Ruby and Rails consulting for systems that need to move forward safely
hero_intro: Red Oryx helps businesses stabilise long-lived Rails applications, modernise legacy codebases, and create safer foundations for new features and future growth.
layout: default
---
<section class="top-stage top-stage--home">
  {% include site_header.html %}

  <div class="top-stage__content">
    <section class="hero shell">
      <div class="hero__content reveal">
        <p class="eyebrow">{{ page.hero_eyebrow }}</p>
        <h1>{{ page.hero_title }}</h1>
        <p class="hero__lead">{{ page.hero_intro }}</p>
        <p class="hero__supporting">
            Rather than reaching for disruptive rewrites, Red Oryx focuses on pragmatic engineering: untangling complexity, improving test confidence, and building cleaner foundations for future work.
        </p>

        <div class="hero__actions">
          <a class="button button--primary" href="{{ '/about/#contact' | relative_url }}">Start the conversation</a>
          <a class="button button--secondary" href="{{ '/case-studies/jugglebee/' | relative_url }}">Read the JuggleBee case study</a>
        </div>

        <div class="hero__metrics">
          <article>
            <span class="hero__metric-value">Modernisation</span>
            <span class="hero__metric-label">Legacy systems improved without reckless rewrites</span>
          </article>
          <article>
            <span class="hero__metric-value">New feature delivery</span>
            <span class="hero__metric-label">Bespoke software and features built properly</span>
          </article>
          <article>
            <span class="hero__metric-value">Engineering discipline</span>
            <span class="hero__metric-label">Testing, refactoring, and maintainable design</span>
          </article>
        </div>
      </div>

      <div class="hero__visual reveal reveal--delay">
        <div class="hero__visual-panel">
          <div class="hero__visual-overlay"></div>
          <img src="{{ '/assets/images/oryx-silhouette.png' | relative_url }}" alt="Red Oryx silhouette">
        </div>
      </div>
    </section>
  </div>
</section>

<section class="page-body">
  <div class="page-body__inner">
    <section class="shell section-grid section-grid--expertise home-row">
      <article class="content-card content-card--expertise reveal">
        <p class="eyebrow">What Red Oryx helps with</p>
        <h2>Support for the Rails systems and codebases businesses depend on every day.</h2>
        <div class="tile-grid">
          <article class="tile">
            <h3>Legacy Rails modernisation</h3>
            <p>Improve older Rails systems in a controlled way without defaulting to a rewrite.</p>
          </article>
          <article class="tile">
            <h3>Refactoring and stabilisation</h3>
            <p>Reduce risk, simplify brittle areas of the codebase, and make future change safer.</p>
          </article>
          <article class="tile">
            <h3>Bespoke feature development</h3>
            <p>Build new features and tailored software in a way that supports long-term maintainability.</p>
          </article>
          <article class="tile">
            <h3>Testing and confidence</h3>
            <p>Strengthen practical test coverage so teams can change important software with less risk.</p>
          </article>
        </div>
      </article>

      <article class="home-aside reveal reveal--delay">
        <p class="eyebrow">When to bring Red Oryx in</p>
        <h2>Focused technical help for teams dealing with software that has become harder to change safely.</h2>
        <ul class="bullet-list">
          <li>Features are taking longer to deliver and carrying more risk.</li>
          <li>Ruby and Rails upgrades have been left too long.</li>
          <li>Test coverage is thin, unreliable, or missing where it matters most.</li>
          <li>Important parts of the codebase feel fragile and difficult to change.</li>
          <li>Day-to-day delivery has become more painful than it should be.</li>
        </ul>
      </article>
    </section>

    <section class="shell split-panel home-proof">
      <div class="split-panel__content reveal">
        <p class="eyebrow">Selected proof</p>
        <h2>JuggleBee: building, running, and modernising a long-lived Rails platform.</h2>
        <p>JuggleBee is Namibia’s first online auction platform. It reflects the kind of work Red Oryx is focused on: long-lived Rails applications, real operational demands, continuous improvement over time, and modernisation work that strengthens the platform without losing sight of the business behind it.</p>
        <a class="button button--secondary" href="{{ '/case-studies/jugglebee/' | relative_url }}">Read the JuggleBee case study</a>
      </div>

      <div class="split-panel__panel reveal reveal--delay">
        <p class="eyebrow">How the work is approached</p>
        <ol class="step-list">
          <li>Start by understanding the system, the business context, and the areas where the codebase is creating the most risk.</li>
          <li>Prioritise the work that will make change safer, reduce technical debt, and support more reliable delivery.</li>
          <li>Improve the system through practical hands-on engineering, careful refactoring, and incremental change rather than disruption.</li>
        </ol>
      </div>
    </section>

    <section class="shell home-founder">
      <article class="content-card reveal">
        <p class="eyebrow">Behind Red Oryx</p>
        <h2>A senior Ruby and Rails consultancy led by Braden King.</h2>
        <p>
          With more than a decade of experience in Ruby and Rails, Braden leads Red Oryx as a focused,
          hands-on consultancy for long-lived systems, modernisation work, and new software built on solid foundations.
        </p>
        <p>
          The consultancy is intentionally small and specialist, with a trusted network of experienced
          Ruby engineers available where a piece of work benefits from additional support or specialist
          input.
        </p>
        <p class="home-note">Specialist-led support, not a bloated agency model.</p>
      </article>
    </section>

  </div>

  <section class="callout-stage reveal">
    <div class="shell">
      <div class="callout-band">
        <div class="callout-band__copy">
          <p class="eyebrow">Start the conversation</p>
          <h2>Whether you are modernising a legacy Rails system or building new work on solid foundations, Red Oryx can help.</h2>
          <p class="callout-band__support">With careful refactoring, practical testing, and maintainable design, Red Oryx helps teams move existing systems forward and build new work on solid foundations. It all starts with a short conversation.</p>
          <p class="callout-band__signals">Legacy modernisation · New feature delivery · engineering discipline</p>
        </div>

        <div class="callout-band__actions">
          <a class="button button--primary" href="{{ '/about/#contact' | relative_url }}">Start the conversation</a>
          <p class="callout-band__note">A short message is enough to get started.</p>
        </div>
      </div>
    </div>
  </section>
</section>
