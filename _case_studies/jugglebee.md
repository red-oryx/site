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
cta_eyebrow: Start the Conversation
cta_title: Whether you are modernising a long-lived Rails system or building new work that needs solid technical foundations, Red Oryx can help.
cta_body: Red Oryx works with organisations that need thoughtful Ruby and Rails engineering, whether that means stabilising an ageing platform, refactoring a difficult codebase, supporting upgrades, or building new features and products properly from the start.
cta_button_label: Start the conversation
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
        offer a more trustworthy and structured alternative to Facebook Marketplace.
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
            delivering fixes, and extending the platform where needed. That meant full technical ownership of a real production system across initial build, ongoing operation, maintenance, and later modernisation.
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
            for reviewing listings, editing or unpublishing problematic submissions, managing users, and maintaining standards across the marketplace.
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
    The platform had to keep serving real users while its technical foundation aged, which meant modernisation had to be handled as an operational risk, not just a coding exercise.
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
    Just as importantly, JuggleBee showed that an online auction and second-hand marketplace model could
work in Namibia, creating a structured online space for buying and selling in a market still shaped largely by
physical auctions and informal person-to-person trade.
</p>
    </div>
</section>

<section class="case-study-section case-study-section--divider">
    <p class="eyebrow">Why This Matters</p>
    <h2>The value was not just in building the platform, but in evolving it responsibly over time.</h2>
    <p>
        JuggleBee reflects the kind of engineering work many businesses actually need: building useful software,
        operating it in the real world, and continuing to improve it as the product, users, and technical demands evolve.
    </p>
    <p>
        That included greenfield product development, long-term ownership of a live production system, and later
        modernisation work carried out without losing sight of stability, continuity, or the commercial realities behind the platform.
    </p>
    <p>
        That experience maps directly to the work Red Oryx now focuses on: helping organisations build new software on solid
        foundations, improve long-lived Ruby on Rails systems, and make safer technical progress over time.
    </p>
</section>
