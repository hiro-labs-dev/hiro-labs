// Content for the 2026-11 redesign: products ("in the lab") and client case studies.

export const products = [
  {
    id: 'mia', name: 'mia', status: 'in daily use', tone: 'live', image: '/lab/mia.webp', featured: true,
    line: 'a personal ai assistant platform that runs the day and builds its own features.',
    points: ['today view, email, calendar and projects in one place', 'remembers decisions and recalls them in context', 'runs coding jobs in parallel and opens pull requests'],
    stack: ['mac', 'iphone', 'claude', 'aws'],
  },
  {
    id: 'juno', name: 'juno', status: 'in daily use', tone: 'live', image: '/lab/juno.webp', featured: true,
    line: 'a job-search engine that watches thousands of careers pages and applies for you.',
    points: ['scores every posting for fit and freshness', 'tailors the résumé to each role, with a diff you approve', 'one-tap apply and a pipeline to track it all'],
    stack: ['mac', 'ai matching', 'postgres'],
  },
  {
    id: 'signal', name: 'signal', status: 'pre-launch', tone: 'soon', image: '/lab/signal.webp', featured: true,
    line: 'ai-native traffic management for state traffic centers, built to replace legacy highway software.',
    points: ['map-first workspace with a live camera video wall', 'incidents, work zones and variable speed limits', 'vision ai that spots problems on camera'],
    stack: ['react', 'maps', 'computer vision'],
  },
  {
    id: 'kite', name: 'kite', status: 'pre-launch', tone: 'soon', image: '/lab/kite.webp',
    line: 'rv inspections from the roof ladder to a paid invoice, built for solo inspectors.',
    points: ['capture findings on the phone with a guided checklist', 'professional client reports, generated on the spot', 'payment and delivery through a client portal'],
    stack: ['mobile web', 'stripe', 'aws'],
  },
  {
    id: 'relora', name: 'relora', status: 'pilot', tone: 'live', image: '/lab/relora.webp',
    line: 'an operating system for real-estate brokerages, native on mac and iphone.',
    points: ['one dashboard for agents, listings and deals', 'the same workspace on desk and phone'],
    stack: ['tauri', 'mac', 'iphone'],
  },
  {
    id: 'sakura', name: 'sakura', status: 'beta', tone: 'live', image: '/lab/sakura.webp',
    line: 'a knowledge engine: ask your documents, get answers with sources.',
    points: ['every answer cites the passage it came from', "works over a team's own files"],
    stack: ['rag', 'llm', 'search'],
  },
  {
    id: 'clipsmith', name: 'clipsmith', status: 'in daily use', tone: 'live', image: '/lab/clipsmith.webp',
    line: 'an ai video toolkit that turns long footage into clips, voiceovers and guides.',
    points: ['finds the moments worth clipping', 'step-by-step guide builder with voiceover'],
    stack: ['python', 'ffmpeg', 'ai voice'],
  },
]

export const clients = [
  {
    id: 'common-ground-tampa',
    name: 'common ground tampa',
    kind: 'community platform',
    status: 'live',
    url: 'https://commongroundtampa.com',
    image: '/work/common-ground/hero.webp',
    line: 'a bilingual community platform: resource maps, an events calendar and an organization directory, managed in a cms the client runs themselves.',
    summary: 'a bilingual community hub for tampa bay: events, local organizations, resources and ways to get involved, in one place. the client runs every word of it herself.',
    tags: ['django', 'wagtail', 'react', 'mapbox', 'aws'],
    facts: [['client', 'local community organizer'], ['our role', 'design, build, hosting'], ['languages', 'english + spanish'], ['status', 'in production']],
    problem: ['one place for a city’s community', "events, mutual aid and local groups were spread across social posts and an old site the client couldn't update. she needed one hub, in english and spanish, that she could run without a developer."],
    built: ['a hub she edits herself', 'every part of the site (events, organizations, resources, the news ticker, spotlights, faq and about) is editable in a simple admin panel. the public can submit events and organizations, and nothing goes live until she approves it.'],
    features: [
      { title: 'events', text: 'search, category and date filters, a month calendar, detail pages and a featured event on the home page.', image: '/work/common-ground/events.webp' },
      { title: 'organizations directory', text: 'grid or list, searchable by name or focus area, with a page for every group.', image: '/work/common-ground/orgs.webp' },
      { title: 'home hub', text: 'a live news ticker, spotlights and featured content, all edited by the client.', image: '/work/common-ground/hub.webp' },
      { title: 'bilingual, on every screen', text: 'a full english / spanish switch for both the interface and the content, plus light and dark modes.', image: '/work/common-ground/phone.webp', phone: true },
    ],
    how: [
      ['the client edits everything', 'each kind of content is its own model in a wagtail admin, served to the site through a rest api. no developer needed to change a word.'],
      ['translated twice', 'interface text through i18next, editorial content through wagtail-localize, so both halves of the site switch together.'],
      ['moderated submissions', 'the public "share with us" form feeds a review queue, and the client gets an email for each one.'],
      ['cheap, safe hosting', 'the site is served from s3 and cloudfront; the api runs in docker behind caddy. github actions deploys with short-lived credentials, no stored aws keys.'],
    ],
    flow: [
      [['visitor'], ['cloudfront + s3'], ['react app', true], ['django + wagtail api', true, '→ rest →'], ['postgres']],
      [['client'], ['wagtail admin', true], ['same api + database']],
    ],
    stack: ['django 5', 'wagtail 6', 'django rest framework', 'postgres', 'react 18', 'vite', 'i18next', 'mapbox', 'docker', 'aws', 'github actions'],
  },
  {
    id: 'nomadic-influence',
    name: 'nomadic influence',
    kind: 'creator marketplace',
    status: 'delivered',
    image: '/work/nomadic-influence/hero.webp',
    line: 'a marketplace connecting rv creators with brands: subscriptions, role-based dashboards, an opportunity pipeline and a live explore map.',
    summary: 'a marketplace that connects rv-lifestyle creators with brands, campgrounds and events: profiles, partnership opportunities, subscriptions and the business tools around them.',
    note: 'the client has since redesigned the live product; these screens show the version we delivered.',
    tags: ['django', 'react', 'stripe', 'celery', 'aws'],
    facts: [['client', 'creator marketplace'], ['our role', 'backend, dashboards, deployment'], ['users', 'creators + businesses'], ['status', 'delivered']],
    problem: ['brand deals without the juggling', 'creators needed one place to manage brand partnerships, track opportunities and run the business side, instead of juggling a pile of separate tools.'],
    built: ['two dashboards, one platform', 'creators and businesses each get their own dashboard, kept apart at the routing level. businesses post opportunities, creators apply and track them, and subscriptions are billed through stripe.'],
    features: [
      { title: 'creator dashboard', text: 'profile, applications and partnerships at a glance, with real-time notifications.', image: '/work/nomadic-influence/dashboard.webp' },
      { title: 'explore map', text: 'a live map of businesses with open opportunities.', image: '/work/nomadic-influence/map.webp' },
      { title: 'on the road', text: 'the full dashboard works on a phone, where creators actually are.', image: '/work/nomadic-influence/phone.webp', phone: true },
    ],
    how: [
      ['a big, careful backend', 'a django api of 22 apps with jwt auth and role-based permissions.'],
      ['work in the background', 'celery and redis handle async jobs alongside stripe subscription billing.'],
      ['connected to the tools they use', 'google calendar scheduling, hubspot crm, postmark email and direct-to-s3 uploads.'],
      ['staging and production', 'docker on ec2 with shared rds postgres and redis, deployed by github actions.'],
    ],
    flow: [
      [['react + typescript app', true], ['django rest api', true, '→ jwt →'], ['postgres + redis']],
      [['celery workers'], ['stripe · s3 · postmark · hubspot · calendar']],
    ],
    stack: ['django', 'django rest framework', 'react', 'typescript', 'postgres', 'celery', 'redis', 'stripe', 'mapbox', 'docker', 'aws', 'github actions'],
  },
]
