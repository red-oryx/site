---
title: BatterBee
body_class: page-case-study
description: Case study covering the product thinking, architecture, and delivery of BatterBee, a Rails SaaS application for small and home baking businesses.
summary: Designing and building a focused SaaS product for home bakers, covering recipe costing, pantry tracking, order management, storefront enquiries, subscriptions, and production deployment.
focus: SaaS product design and Rails application delivery
scope: Product strategy, workflow design, full-stack Rails development, payments, deployment, and production support
work_type: Founder, product designer, lead developer, and technical owner
highlights:
- Designed and built a niche SaaS product for small and home baking businesses
- Created connected workflows for recipe costing, pantry stock, orders, calendar planning, and customer enquiries
- Implemented Stripe subscriptions with a 14-day trial and recurring billing
- Built and deployed a production Rails 8 application using Kamal, PostgreSQL, Solid Queue, and modern Rails conventions
outcomes:
- Launched a focused SaaS product under the Red Oryx brand
- Replaced spreadsheet-heavy baking admin with connected business workflows
- Created a production-ready subscription platform with payment, onboarding, and storefront foundations
- Established a reusable Rails SaaS foundation for future product work
cta_eyebrow: Start the Conversation
cta_title: Whether you need to turn a messy workflow into reliable software or build a focused Rails product from the ground up, Red Oryx can help.
cta_body: Red Oryx works with organisations that need thoughtful Ruby and Rails engineering, from early product delivery and workflow design to application architecture, production deployment, refactoring, and long-term technical ownership.
cta_button_label: Start the conversation
---

<section class="case-study-section case-study-section--framed">
    <p class="eyebrow">Snapshot</p>
    <h2>A focused SaaS product for home bakers who need more than a spreadsheet.</h2>
    <p>
        <a href="https://batterbee.app" target="_blank" rel="noopener noreferrer">BatterBee</a> is a subscription-based SaaS application built for small and home baking businesses that need
        a clearer way to manage recipes, ingredient costs, pantry stock, customer enquiries, and upcoming orders.
    </p>
    <p>
        The product was created after seeing the same operational problems appear repeatedly in a real home baking
        business: under-priced cakes, awkward ingredient planning, last-minute stock surprises, and too much admin
        spread across notebooks, messages, spreadsheets, and memory.
    </p>
    <p>
        Rather than building a generic business management tool, BatterBee focuses on the specific workflow of a baker:
        turning recipes into costed products, products into quotes, quotes into orders, and orders into practical planning.
    </p>
</section>

<section class="case-study-section case-study-section--open">
    <p class="eyebrow">The Business Problem</p>
    <h2>Home bakers are often running real businesses with tools that do not match the work.</h2>
    <p>
        Many small baking businesses start informally. A customer sends a message, the baker checks a recipe,
        estimates a price, looks through the cupboard, and tries to remember what still needs to be bought. That
        may work for the first few orders, but it becomes fragile as the business grows.
    </p>
    <p>
        The problem is that baking admin is connected. Ingredient prices affect recipe costs. Recipe costs affect
        quotes. Quotes become orders. Orders affect stock. Stock affects shopping lists. Delivery dates affect the
        calendar. When those pieces live in separate spreadsheets, notebooks, inboxes, and social messages, the baker
        has to act as the integration layer.
    </p>
    <p>
        BatterBee was built to make that workflow easier and more reliable. The goal was not to add more admin, but
        to reduce the amount of mental bookkeeping required to run a small baking business professionally.
    </p>
</section>

<section class="case-study-section case-study-section--split">
    <div>
        <p class="eyebrow">Why I Built It</p>
        <h2>The idea came from a real kitchen, not a whiteboard exercise.</h2>
    </div>

    <div class="case-study-stack">
    <p>
    BatterBee started with a personal observation. My wife bakes, and I saw first-hand how easy it was for
    good work to be under-priced when ingredient costs, time, decoration effort, and extras were not tracked
    in one place.
    </p>
    <p>
    Running out of key ingredients was another recurring pressure point. A baker might know the order is due,
    and they might know the recipe, but unless stock levels and upcoming work are connected, it is still easy
    to discover too late that something important is missing.
    </p>
    <p>
    That made BatterBee a useful product to build because the pain was specific, practical, and repeated.
    It was not a vague idea for "business software". It was a focused attempt to solve the small but stressful
    operational problems that build up around a busy home baker.
    </p>
    </div>
</section>

<section class="case-study-section case-study-section--framed">
    <p class="eyebrow">The Product</p>
    <h2>A connected workflow for recipes, stock, orders, and customer enquiries.</h2>
    <div class="case-study-stack">
        <p>
            BatterBee is built around the idea that baking admin should flow naturally from one part of the business
            to the next. Recipes are not just notes. They are costed products. Ingredients are not just pantry items.
            They affect pricing, stock planning, and shopping lists. Orders are not just dates on a calendar. They
            create work, consume ingredients, and need clear status tracking.
        </p>
        <p>
            The application therefore links the core parts of a baker's workflow into one system: pantry management,
            recipe costing, order handling, customer enquiries, calendar planning, and subscription access.
        </p>
    </div>

    <div class="case-study-feature-list">
    <article>
    <h3>Pantry and ingredient tracking</h3>
    <p>
    Bakers can manage ingredients, units, costs, stock levels, and low-stock thresholds so pricing and
    planning are based on current information rather than guesswork.
    </p>
    </article>

    <article>
    <h3>Recipe costing</h3>
    <p>
    Recipes can be built from pantry ingredients so the application can estimate recipe cost, support
    pricing decisions, and make the true cost of a product more visible.
    </p>
    </article>

    <article>
    <h3>Order workflow</h3>
    <p>
    Customer enquiries can move through quote, payment, confirmation, production, and completion stages,
    giving the baker a clearer view of what needs attention and what happens next.
    </p>
    </article>

    <article>
    <h3>Calendar planning</h3>
    <p>
    Orders and custom events appear on a calendar so bakers can plan around due dates, preparation time,
    personal commitments, and busy production periods.
    </p>
    </article>

    <article>
    <h3>Storefront enquiries</h3>
    <p>
    A public storefront gives customers a cleaner way to start an enquiry, helping move requests away from
    scattered direct messages and into a more structured workflow.
    </p>
    </article>

    <article>
    <h3>Subscription access</h3>
    <p>
    BatterBee uses Stripe for paid subscriptions, including a 14-day trial, so the product can operate as
    a real SaaS business rather than a private internal tool.
    </p>
    </article>
    </div>
</section>

<section class="case-study-section case-study-section--open">
    <p class="eyebrow">Key Challenges</p>
    <h2>The difficult part was turning a messy real-world workflow into something simple enough to use.</h2>

    <div class="case-study-topic-grid">
    <article class="case-study-topic">
    <h3>Keeping the workflow focused</h3>
    <p>
    Baking businesses vary widely, so the product needed enough flexibility to be useful without becoming
    a generic operations platform. The design challenge was deciding what to support directly and what to
    keep intentionally simple.
    </p>
    </article>

    <article class="case-study-topic">
    <h3>Costing without false precision</h3>
    <p>
    Ingredient costing can become deceptively complex because ingredients are bought, stored, and used in
    different units. BatterBee had to make costs clearer without pretending that every real-world kitchen
    measurement can be converted perfectly.
    </p>
    </article>

    <article class="case-study-topic">
    <h3>Order-specific complexity</h3>
    <p>
    Cakes, breads, and small bakes do not behave the same way. A tiered cake needs different information
    from a batch of cupcakes or a loaf of bread, so the ordering model had to support different product
    shapes without overwhelming the user.
    </p>
    </article>

    <article class="case-study-topic">
    <h3>Reducing admin, not adding more</h3>
    <p>
    The application had to justify every extra field and workflow step. A small business owner does not
    need software that feels like paperwork with a login screen. They need the system to remove friction.
    </p>
    </article>

    <article class="case-study-topic">
    <h3>Building for production from the start</h3>
    <p>
    BatterBee was intended to become a public product, so payments, authentication, deployment, background
    jobs, email flows, file uploads, and legal pages had to be treated as part of the real product rather
    than as afterthoughts.
    </p>
    </article>

    <article class="case-study-topic">
    <h3>Balancing personal insight with broader use</h3>
    <p>
    The original motivation came from one baker's experience, but the product still had to be shaped for
    other bakers with different products, habits, pricing models, and levels of technical comfort.
    </p>
    </article>
    </div>
</section>

<section class="case-study-section case-study-section--framed">
    <p class="eyebrow">Architecture and Delivery</p>
    <h2>A modern Rails SaaS application built for maintainability and operational simplicity.</h2>
    <p>
        BatterBee was built as a Rails 8 application with a deliberately lean production architecture. The aim was to
        keep the stack modern, understandable, and operationally lean while still supporting the foundations expected
        from a public SaaS product.
    </p>

    <div class="case-study-modernisation">
    <article>
    <h3>Rails 8 application stack</h3>
    <p>
    The application was built with Ruby on Rails 8, PostgreSQL, Hotwire, Stimulus, Tailwind CSS, and
    Rails-native conventions where possible to keep the codebase cohesive and maintainable.
    </p>
    </article>

    <article>
    <h3>Subscription billing</h3>
    <p>
    Stripe handles subscription checkout and trial management, allowing BatterBee to offer a simple paid
    plan with a 14-day trial while keeping billing logic out of the core product workflow.
    </p>
    </article>

    <article>
    <h3>Background jobs and email</h3>
    <p>
    Background work is handled using Solid Queue, keeping the deployment simpler by avoiding unnecessary
    external queue infrastructure for a small, focused SaaS product.
    </p>
    </article>

    <article>
    <h3>File handling</h3>
    <p>
    ActiveStorage provides the foundation for uploaded images and attachments, including recipe files,
    order reference images, and final product galleries.
    </p>
    </article>

    <article>
    <h3>Production deployment</h3>
    <p>
    The application is containerised and deployed with Kamal, with production infrastructure kept lean and
    manageable on a Hetzner server behind Cloudflare.
    </p>
    </article>

    <article>
    <h3>Security and configuration</h3>
    <p>
    Secrets and production configuration are managed through Rails encrypted credentials and deployment
    environment variables, with an emphasis on repeatable deployment rather than manual server changes.
    </p>
    </article>
    </div>
</section>

<section class="case-study-section case-study-section--open">
    <p class="eyebrow">Product Thinking</p>
    <h2>The core design decision was to connect the baker's work rather than simply store records.</h2>
    <p>
        A simple recipe database would not solve the real problem. A simple order tracker would not solve it either.
        The value in BatterBee comes from the way those parts relate to each other.
    </p>
    <p>
        When a recipe is costed from pantry ingredients, the baker has better pricing information. When an order is
        linked to a recipe, the baker can understand what ingredients and preparation are required. When stock levels
        are tracked, the baker can plan shopping around upcoming work. When enquiries enter through a storefront, the
        order pipeline becomes easier to manage.
    </p>
    <p>
        That product thinking shaped the build. The aim was not to create the largest possible feature list. The aim
        was to make each feature reinforce the others so the application becomes more useful the more of the workflow
        it supports.
    </p>
</section>

<section class="case-study-section case-study-section--framed">
    <p class="eyebrow">Commercial Foundation</p>
    <h2>From internal tool idea to public subscription product.</h2>
    <p>
        BatterBee was not built as a one-off private tool. From early in the project, it was shaped as a public product
        that could be launched, marketed, subscribed to, and supported under the Red Oryx brand.
    </p>

    <div class="case-study-modernisation">
    <article>
    <h3>Simple pricing</h3>
    <p>
    The product uses a single monthly subscription plan rather than multiple tiers, keeping the offer easy
    to understand for small businesses.
    </p>
    </article>

    <article>
    <h3>Trial-based onboarding</h3>
    <p>
    New users can start with a 14-day trial through Stripe, giving them time to explore the workflow while
    still treating BatterBee as a real paid product.
    </p>
    </article>

    <article>
    <h3>Marketing site and legal pages</h3>
    <p>
    The public-facing site, product messaging, privacy policy, terms, cookies policy, and company details
    were all considered part of the launch work rather than separate administrative chores.
    </p>
    </article>

    <article>
    <h3>Founder-led positioning</h3>
    <p>
    BatterBee is positioned as a practical tool built from direct exposure to the problem, with marketing
    that speaks to bakers in plain language rather than abstract software terminology.
    </p>
    </article>
    </div>
</section>

<section class="case-study-section case-study-section--divider">
    <p class="eyebrow">Why This Matters</p>
    <h2>BatterBee shows how thoughtful software can turn small operational problems into a coherent product.</h2>
    <p>
        BatterBee is smaller in scale than a marketplace such as JuggleBee, but it reflects an equally important type
        of engineering work: understanding a niche workflow deeply enough to build software that genuinely fits it.
    </p>
    <p>
        The project combined product design, domain modelling, Rails development, payment integration, deployment,
        marketing preparation, and production ownership. It required both technical execution and judgement about what
        should be included, what should be simplified, and what should be left out.
    </p>
    <p>
        That experience maps directly to the work Red Oryx now focuses on: helping businesses turn operational mess
        into maintainable software, building focused Rails products, and creating systems that are practical, durable,
        and pleasant to use.
    </p>
</section>
