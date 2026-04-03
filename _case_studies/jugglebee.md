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
## Snapshot

JuggleBee is Namibia's first online auction platform, built to give everyday buyers and sellers a structured way to auction goods or sell them directly online instead of relying only on informal channels.

Built for general consumers, the platform combines timed auctions, fixed-price listings, and escrow-style transaction handling to create a safer and more structured alternative to person-to-person selling on platforms like Facebook Marketplace.

That mattered in Namibia because most auctions were still physical, the population is spread across large distances, and there were very few digital options for general-purpose online trade.

## The Business Problem

Before JuggleBee, Namibia already had an active auction culture. Physical auction houses were familiar, trusted, and regularly used for everything from household goods and collectables to vehicles and estate stock. The gap was not demand for auctions, but the lack of a convenient digital equivalent for general consumer goods.

In practice, most person-to-person selling online happened through informal channels such as Facebook Marketplace, where listings were easy to post but transactions relied heavily on trust. There was no structured online auction environment for people who wanted more than a classified-style listing.

JuggleBee was created to close that gap by bringing auctions and direct purchases into a single online platform built for ordinary Namibians. Focused mainly on second-hand goods, collectables, and general peer-to-peer trade, it created a safer and more structured alternative to informal online selling while adding convenience to a market still shaped by physical auctions.

## My Role

I served as co-founder, lead developer, and technical owner of JuggleBee. My business partner handled the operational side of the marketplace, while I was responsible for designing, building, and evolving the platform itself.

From the initial implementation onward, I led virtually all technical work on the product. That included application architecture, Ruby on Rails development, database design, infrastructure planning, deployment, maintenance, upgrades, and ongoing production support. JuggleBee was built primarily by me as a solo developer, and I remain responsible for investigating issues, delivering fixes, and extending the platform where needed.

This gave me end-to-end ownership of the engineering side of a real production system, from first release through long-term maintenance and modernisation.

## The Platform

JuggleBee was built as a full online marketplace rather than a simple auction listing site. Users could create listings for timed auctions or fixed-price products, upload images, add descriptions and item details, and manage their activity through a profile area that tracked listings, purchases, and auction participation.

On the buyer side, the platform supported bidding workflows, outbid notifications, direct purchases, and a shopping cart for fixed-price items. On the operational side, it included moderation and administration tools for reviewing listings, editing or unpublishing problematic submissions, managing users, and maintaining marketplace quality.

One of the more important pieces of custom functionality was the auction extension system I implemented to prevent last-second bid sniping. When a bid arrived near the end of an auction, the closing time was automatically extended, giving other interested buyers a fair chance to respond and making the experience feel closer to a live auction.

The platform also included an invoicing workflow to support completed purchases. JuggleBee generated the transaction data internally and pushed it to a third-party invoicing service via API, which issued the final invoice and payment instructions to the buyer. This fit the local market more realistically than relying on an off-the-shelf payment gateway.

Technically, the platform was built in Ruby on Rails with jQuery on the front end, using PostgreSQL throughout, and was containerised with Docker from the beginning. It was originally deployed to AWS Lightsail with background processing handled through Sidekiq, Redis, and AWS SQS. As part of its later modernisation, I upgraded the stack from PostgreSQL 9 to PostgreSQL 17, moved the application to Rails 8, removed older supporting services, migrated background processing to Solid Queue and modern Rails conventions, moved hosting to Hetzner, and adopted Kamal for deployment.

## Key Challenges

JuggleBee's challenges were not only technical; many were rooted in the realities of the market it served. One of the biggest early hurdles was trust. Because the platform introduced a more structured payment-handling process into an environment where many people were used to informal person-to-person selling, buyers and sellers initially had to be convinced that the system was legitimate and reliable.

Another challenge was making online auctions feel fair. Physical auctions allow room for last-minute competition, but online auctions are vulnerable to bid sniping, where a user places a winning bid in the final seconds before others can react. I addressed this by implementing automatic auction extensions whenever bids arrived close to the end time.

The platform also had to operate within local commercial constraints. Off-the-shelf online payment flows were not a straightforward fit for the Namibian market, so I designed the purchasing process around invoice generation and controlled payment handling rather than a standard integrated gateway. Delivery posed a similar limitation, with fulfilment coordinated between buyer and seller after the sale.

Finally, there was the long-term engineering challenge of sustaining and modernising a live production system without disrupting the people relying on it.

## Modernisation Work

Modernising JuggleBee meant more than upgrading a framework version. The platform had been running live in production for years, so the work had to improve the system without disrupting users. Rather than attempting a risky in-place upgrade through multiple generations of the stack, I treated it as a broader modernisation effort by building a fresh Rails 8 application, migrating the platform forward, and swapping it over with minimal visible disruption to the live service.

I upgraded the application from Rails 4.2 on Ruby 2.3 to Rails 8 on Ruby 3.4.3, while also moving the database from PostgreSQL 9 to PostgreSQL 17. Alongside that, I replaced older patterns and dependencies with modern Rails conventions, including moving away from CarrierWave in favour of S3-backed ActiveStorage and replacing older secrets management with Rails encrypted credentials.

I also simplified the operational footprint of the platform by removing Sidekiq, Redis, and AWS SQS, migrating background jobs onto Solid Queue and modern Rails-native patterns, and reducing infrastructure complexity and maintenance overhead.

The deployment model was modernised as well. JuggleBee had originally been hosted on AWS Lightsail and deployed manually through scripts over SSH. I migrated the platform to Hetzner, adopted Kamal for deployment, and retained the Docker-based approach already in place. The end result was a leaner, more maintainable production setup that was cheaper to run, easier to reason about, and largely invisible to end users during the transition.

## Outcome

JuggleBee grew from an initial idea into a long-running production platform with real commercial usage and staying power. At the time of writing, it has supported more than 13,000 listings, nearly 13,000 registered users, more than 5,500 invoices, and over N$11.8 million in paid invoice value.

The platform has also proven durable over time. Since launching in 2014, it has remained consistently available in production, with only rare short-lived disruptions during deployment issues.

Just as importantly, JuggleBee showed that a digitally mediated auction and second-hand marketplace model could work in Namibia, creating a structured online space for buying and selling in a market still shaped largely by physical auctions and informal person-to-person trade.

## Why This Matters

JuggleBee matters as a case study because it reflects the kind of engineering work that many established businesses actually need: maintaining a real production system over time, dealing with technical debt as the stack ages, and modernising critical software without disrupting the people who rely on it.

This was not a short-lived prototype or a greenfield project that could be rebuilt without consequence. It was a live marketplace with real users, real transactions, and operational responsibilities, which meant every technical decision had to balance improvement against stability and business continuity.

That experience maps directly to the work I now focus on through Red Oryx: helping organisations stabilise legacy Ruby on Rails systems, reduce unnecessary complexity, modernise infrastructure, and make safe technical progress without gambling with production.

## Start the Conversation

If your business depends on an ageing Ruby or Ruby on Rails system that has become difficult to change, I help teams stabilise, modernise, and simplify those platforms without unnecessary disruption.

Get in touch through Red Oryx to discuss legacy Rails upgrades, refactoring, infrastructure modernisation, or production-safe technical rescue work.
