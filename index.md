---
title: Home
description: Red Oryx helps businesses modernise legacy Ruby and Rails systems without unnecessary disruption.
body_class: page-home
hero_eyebrow: Legacy Ruby and Rails modernisation
hero_title: Practical Ruby and Rails consulting for systems that have become difficult to change.
hero_intro: Red Oryx helps businesses stabilise fragile applications, modernise legacy Rails codebases, clean up delivery friction, and make change safer again.
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
          When internal tools, reporting systems, customer platforms, or long-lived Rails applications
          become brittle, slow to change, or risky to maintain, Red Oryx brings the technical
          discipline needed to steady them properly.
        </p>

        <ul class="hero__signals">
          <li>Legacy modernisation</li>
          <li>Refactoring and stabilisation</li>
          <li>Testing, upgrades, and workflow cleanup</li>
        </ul>

        <div class="hero__actions">
          <a class="button button--primary" href="{{ '/about/#contact' | relative_url }}">Discuss a project</a>
          <a class="button button--secondary" href="{{ '/case-studies/jugglebee/' | relative_url }}">Read the JuggleBee case study</a>
        </div>

        <div class="hero__metrics">
          <article>
            <span class="hero__metric-value">Ruby</span>
            <span class="hero__metric-label">Deep platform focus</span>
          </article>
          <article>
            <span class="hero__metric-value">Rails</span>
            <span class="hero__metric-label">Legacy rescue and modernisation</span>
          </article>
          <article>
            <span class="hero__metric-value">Practical</span>
            <span class="hero__metric-label">Hands-on, high-trust consultancy</span>
          </article>
        </div>
      </div>

      <div class="hero__visual reveal reveal--delay">
        <div class="hero__visual-panel">
          <div class="hero__visual-overlay"></div>
          <img src="{{ '/assets/images/red_oryx.png' | relative_url }}" alt="Red Oryx brand image">
        </div>
      </div>
    </section>
  </div>
</section>

<section class="page-body">
  <div class="page-body__inner">
    <section class="shell section-grid section-grid--expertise">
      <article class="content-card reveal">
        <p class="eyebrow">What Red Oryx helps with</p>
        <h2>Support for systems that matter to the business but have become harder to work on.</h2>
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
            <h3>Upgrades and technical recovery</h3>
            <p>Work through postponed Ruby, Rails, dependency, and infrastructure upgrades with structure and care.</p>
          </article>
          <article class="tile">
            <h3>Testing and workflow cleanup</h3>
            <p>Strengthen confidence in delivery by improving coverage, release flow, and day-to-day engineering friction.</p>
          </article>
        </div>
      </article>

      <article class="content-card content-card--contrast reveal reveal--delay">
        <p class="eyebrow">Why clients bring Red Oryx in</p>
        <h2>Focused technical help for teams dealing with software that has started to fight back.</h2>
        <ul class="bullet-list">
          <li>Features are getting slower and riskier to deliver.</li>
          <li>Rails upgrades have been postponed for too long.</li>
          <li>Tests are thin, unreliable, or missing where they matter most.</li>
          <li>Important parts of the system feel fragile and difficult to touch.</li>
          <li>Development and release workflows have become more painful than they should be.</li>
        </ul>
      </article>
    </section>

    <section class="shell split-panel">
      <div class="split-panel__content reveal">
        <p class="eyebrow">Selected proof</p>
        <h2>JuggleBee: building and modernising a long-running Rails platform.</h2>
        <p>
          JuggleBee is Namibia's first online auction platform. It is a strong example of the kind of
          work Red Oryx is built for: long-lived Ruby on Rails software, real operational demands,
          continuous improvement over time, and modernisation work that strengthens the platform without
          losing sight of the business it supports.
        </p>
        <a class="text-link" href="{{ '/case-studies/jugglebee/' | relative_url }}">Read the JuggleBee case study</a>
      </div>

      <div class="split-panel__panel reveal reveal--delay">
        <p class="eyebrow">How the work is approached</p>
        <ol class="step-list">
          <li>Understand the system, the business pressure points, and the areas creating the most delivery friction.</li>
          <li>Prioritise stabilisation, risk reduction, and a realistic path toward a healthier codebase.</li>
          <li>Deliver focused hands-on work that improves the system without unnecessary disruption.</li>
        </ol>
      </div>
    </section>

    <section class="shell callout-band reveal">
      <div>
        <p class="eyebrow">Start the conversation</p>
        <h2>If your Ruby or Rails system has become fragile, slow to change, or difficult to trust, Red Oryx can help.</h2>
      </div>

      <div class="callout-band__actions">
        <a class="button button--primary" href="{{ '/about/#contact' | relative_url }}">Talk to Red Oryx</a>
        <a class="button button--ghost" href="mailto:{{ site.email }}">{{ site.email }}</a>
      </div>
    </section>
  </div>
</section>
