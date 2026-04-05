---
title: JuggleBee
body_class: page-case-study
description: Case study covering the build, operation, and modernisation of JuggleBee, Namibia's first online auction platform.
summary: Building, operating, and modernising Namibia's first online auction platform across product creation, long-term production support, and full-stack Rails modernisation.
focus: Marketplace build and Rails modernisation
scope: Product delivery, long-term ownership, and production-safe platform upgrade
work_type: Co-founder, lead developer, and technical owner
highlights:
  - Built and operated Namibia's first online auction platform
  - Led end-to-end architecture, Rails development, infrastructure, and support
  - Implemented anti-sniping auction extensions and local-market invoicing workflows
  - Replatformed the live system from Rails 4.2 and PostgreSQL 9 to Rails 8 and PostgreSQL 17
outcomes:
  - More than 13,000 listings and nearly 13,000 registered users
  - More than 5,500 invoices and over N$11.8 million in paid invoice value
  - Leaner infrastructure with lower operational overhead
  - Modernised production stack with minimal user disruption
---
<section class="case-study-section case-study-section--framed">
  <p class="eyebrow">Snapshot</p>
  <h2>Namibia's first online auction platform for everyday buyers and sellers.</h2>
  <p>
    JuggleBee was built to give everyday buyers and sellers a structured way to auction goods or sell
    them directly online instead of relying only on informal channels.
  </p>
  <p>
    The platform combined timed auctions, fixed-price listings, and escrow-style transaction handling to
    create a safer and more structured alternative to person-to-person selling on platforms like Facebook
    Marketplace.
  </p>
  <p>
    That mattered in Namibia because most auctions were still physical, the population is spread across
    large distances, and there were very few digital options for general-purpose online trade.
  </p>
</section>

<section class="case-study-section case-study-section--open">
  <p class="eyebrow">The Business Problem</p>
  <h2>Demand for auctions already existed. The digital equivalent did not.</h2>
  <p>
    Namibia already had an active auction culture. Physical auction houses were familiar, trusted, and
    regularly used for everything from household goods and collectables to vehicles and estate stock.
    The gap was not demand for auctions, but the lack of a convenient digital equivalent for general
    consumer goods.
  </p>
  <p>
    In practice, most person-to-person selling online happened through informal channels such as Facebook
    Marketplace, where listings were easy to post but transactions relied heavily on trust. There was no
    structured online auction environment for people who wanted more than a classified-style listing.
  </p>
  <p>
    JuggleBee was created to close that gap by bringing auctions and direct purchases into a single online
    platform built for ordinary Namibians. Focused mainly on second-hand goods, collectables, and general
    peer-to-peer trade, it created a safer and more structured alternative to informal online selling while
    adding convenience to a market still shaped by physical auctions.
  </p>
</section>

<section class="case-study-section case-study-section--split">
  <div>
    <p class="eyebrow">My Role</p>
    <h2>End-to-end technical ownership from first release onward.</h2>
  </div>

  <div class="case-study-stack">
    <p>
      I served as co-founder, lead developer, and technical owner of JuggleBee. My business partner handled
      the operational side of the marketplace, while I was responsible for designing, building, and evolving
      the platform itself.
    </p>
    <p>
      From the initial implementation onward, I led virtually all technical work on the product. That included
      application architecture, Ruby on Rails development, database design, infrastructure planning, deployment,
      maintenance, upgrades, and ongoing production support.
    </p>
    <p>
      JuggleBee was built primarily by me as a solo developer, and I remain responsible for investigating issues,
      delivering fixes, and extending the platform where needed. That gave me full ownership of the engineering side
      of a real production system across build, operation, maintenance, and modernisation.
    </p>
  </div>
</section>

<section class="case-study-section case-study-section--framed">
  <p class="eyebrow">The Platform</p>
  <h2>A full marketplace, not just an auction listing site.</h2>
  <div class="case-study-stack">
    <p>
      JuggleBee was built as a full online marketplace rather than a simple auction listing site. Users could create
      listings for timed auctions or fixed-price products, upload images, add descriptions and item details, and
      manage their activity through a profile area that tracked listings, purchases, and auction participation.
    </p>
    <p>
      On the buyer side, the platform supported bidding workflows, outbid notifications, direct purchases, and a
      shopping cart for fixed-price items. On the operational side, it included moderation and administration tools
      for reviewing listings, editing or unpublishing problematic submissions, managing users, and maintaining
      marketplace quality.
    </p>
  </div>

  <div class="case-study-feature-list">
    <article>
      <h3>Auction fairness</h3>
      <p>
        I implemented automatic auction extensions to prevent last-second bid sniping, giving other buyers a fair
        chance to respond and making the experience feel closer to a live auction.
      </p>
    </article>
    <article>
      <h3>Local-market payments</h3>
      <p>
        JuggleBee generated transaction data internally and pushed it to a third-party invoicing service via API,
        which issued the final invoice and payment instructions to the buyer.
      </p>
    </article>
    <article>
      <h3>Original stack</h3>
      <p>
        The platform was built in Ruby on Rails with jQuery on the front end, PostgreSQL throughout, Docker from the
        beginning, and production infrastructure built around AWS Lightsail, Sidekiq, Redis, and AWS SQS.
      </p>
    </article>
  </div>
</section>

<section class="case-study-section case-study-section--open">
  <p class="eyebrow">Key Challenges</p>
  <h2>The difficult parts were commercial, operational, and technical at the same time.</h2>

  <div class="case-study-topic-grid">
    <article class="case-study-topic">
      <h3>Trust in a new marketplace model</h3>
      <p>
        The platform introduced a more structured payment-handling process into an environment where many people were
        used to informal person-to-person selling, so legitimacy and reliability had to be earned.
      </p>
    </article>

    <article class="case-study-topic">
      <h3>Fair auction behaviour online</h3>
      <p>
        Physical auctions allow room for last-minute competition. Online auctions are vulnerable to bid sniping, which
        is why I implemented automatic extensions whenever bids arrived close to the end time.
      </p>
    </article>

    <article class="case-study-topic">
      <h3>Local market constraints</h3>
      <p>
        Off-the-shelf online payment flows were not a straightforward fit for the Namibian market, so the purchasing
        process had to be designed around invoice generation and controlled payment handling instead.
      </p>
    </article>

    <article class="case-study-topic">
      <h3>Long-term continuity</h3>
      <p>
        The platform had to keep serving real users while its technical foundation aged, which turned modernisation into
        a production-safety problem as much as a code problem.
      </p>
    </article>
  </div>
</section>

<section class="case-study-section case-study-section--framed">
  <p class="eyebrow">Modernisation Work</p>
  <h2>A production-safe rebuild and migration rather than a risky in-place upgrade.</h2>
  <p>
    Modernising JuggleBee meant more than upgrading a framework version. The platform had been running live in
    production for years, so the work had to improve the system without disrupting users. Rather than attempting a
    risky in-place upgrade through multiple generations of the stack, I treated it as a broader modernisation effort
    by building a fresh Rails 8 application, migrating the platform forward, and swapping it over with minimal visible
    disruption to the live service.
  </p>

  <div class="case-study-modernisation">
    <article>
      <h3>Framework and language upgrades</h3>
      <p>
        I upgraded the application from Rails 4.2 on Ruby 2.3 to Rails 8 on Ruby 3.4.3, while also moving the
        database from PostgreSQL 9 to PostgreSQL 17.
      </p>
    </article>

    <article>
      <h3>Modern Rails patterns</h3>
      <p>
        Older patterns and dependencies were replaced with current Rails conventions, including a move away from
        CarrierWave toward S3-backed ActiveStorage and from older secrets handling toward Rails encrypted credentials.
      </p>
    </article>

    <article>
      <h3>Operational simplification</h3>
      <p>
        I removed Sidekiq, Redis, and AWS SQS, migrated background jobs onto Solid Queue and more Rails-native patterns,
        and reduced the overall infrastructure and maintenance footprint.
      </p>
    </article>

    <article>
      <h3>Deployment modernisation</h3>
      <p>
        Hosting moved from AWS Lightsail to Hetzner, manual SSH-script deployment was replaced with Kamal, and the
        Docker-based approach already in use was retained and modernised.
      </p>
    </article>
  </div>
</section>

<section class="case-study-section case-study-section--open">
  <p class="eyebrow">Outcomes</p>
  <h2>A durable production platform with real commercial usage and a leaner technical foundation.</h2>

  <div class="case-study-outcomes">
    <article class="outcome-stat">
      <span class="outcome-stat__value">13,000+</span>
      <span class="outcome-stat__label">Listings supported</span>
    </article>
    <article class="outcome-stat">
      <span class="outcome-stat__value">13,000</span>
      <span class="outcome-stat__label">Registered users, nearly reached</span>
    </article>
    <article class="outcome-stat">
      <span class="outcome-stat__value">5,500+</span>
      <span class="outcome-stat__label">Invoices generated</span>
    </article>
    <article class="outcome-stat">
      <span class="outcome-stat__value">N$11.8m+</span>
      <span class="outcome-stat__label">Paid invoice value</span>
    </article>
  </div>

  <div class="case-study-stack">
    <p>
      Since launching in 2014, the platform has remained consistently available in production, with only rare short-lived
      disruptions during deployment issues.
    </p>
    <p>
      Just as importantly, JuggleBee showed that a digitally mediated auction and second-hand marketplace model could
      work in Namibia, creating a structured online space for buying and selling in a market still shaped largely by
      physical auctions and informal person-to-person trade.
    </p>
  </div>
</section>

<section class="case-study-section case-study-section--divider">
  <p class="eyebrow">Why This Matters</p>
  <h2>The value was not just in building it, but in keeping it healthy over time.</h2>
  <p>
    JuggleBee reflects the kind of engineering work that many established businesses actually need: maintaining a real
    production system over time, dealing with technical debt as the stack ages, and modernising critical software without
    disrupting the people who rely on it.
  </p>
  <p>
    This was not a short-lived prototype or a greenfield project that could be rebuilt without consequence. It was a
    live marketplace with real users, real transactions, and operational responsibilities, which meant every technical
    decision had to balance improvement against stability and business continuity.
  </p>
  <p>
    That experience maps directly to the work I now focus on through Red Oryx: helping organisations stabilise legacy
    Ruby on Rails systems, reduce unnecessary complexity, modernise infrastructure, and make safe technical progress
    without gambling with production.
  </p>
</section>

<section class="case-study-section case-study-section--cta">
  <p class="eyebrow">Start the Conversation</p>
  <h2>If your business depends on an ageing Ruby or Ruby on Rails system that has become difficult to change, I help teams stabilise, modernise, and simplify those platforms without unnecessary disruption.</h2>
  <p>
    Get in touch through Red Oryx to discuss legacy Rails upgrades, refactoring, infrastructure modernisation, or
    production-safe technical rescue work.
  </p>
  <p><a class="text-link" href="{{ '/about/#contact' | relative_url }}">Discuss your system</a></p>
</section>
