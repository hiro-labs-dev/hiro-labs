import { useEffect, useState } from 'react'
import './LOrdinateur.css'

const groups = [
  {
    title: 'Core Components',
    subtitle: 'The parts that define the build',
    items: [
      {
        part: 'CPU',
        name: 'AMD Ryzen 7 9800X3D',
        original: '$443',
        revised: 'Keep',
        price: 443,
        verdict: 'keep',
        note: 'Best gaming CPU available right now. No change needed.',
        link: 'https://www.amazon.com/s?k=AMD+Ryzen+7+9800X3D',
      },
      {
        part: 'GPU',
        name: 'Asus TUF RTX 5070 Ti 16GB',
        original: '$1,390',
        revised: 'Keep',
        price: 1390,
        verdict: 'keep',
        note: 'Keep. Fits the case and the PSU has the right 12V-2x6 connector.',
        link: 'https://www.amazon.com/s?k=Asus+TUF+RTX+5070+Ti+16GB',
      },
      {
        part: 'Motherboard',
        name: 'MSI MAG B850 Tomahawk Max WiFi II',
        original: '$260',
        revised: 'Keep',
        price: 260,
        verdict: 'keep',
        note: 'Solid-value AM5 board with WiFi built in.',
        link: 'https://www.amazon.com/s?k=MSI+MAG+B850+Tomahawk+Max+WiFi+II',
      },
      {
        part: 'Memory',
        name: 'Corsair Vengeance RGB 32GB DDR5-6000 CL36',
        original: '$510',
        revised: 'Keep',
        price: 510,
        verdict: 'keep',
        note: 'High, but this is genuine market price today, DDR5 prices have spiked industry-wide. No cheaper equivalent exists right now.',
        link: 'https://www.amazon.com/s?k=Corsair+Vengeance+RGB+32GB+DDR5+6000+CL36',
      },
      {
        part: 'Storage',
        name: 'Samsung 990 Pro 2TB NVMe',
        original: '$410',
        revised: 'Keep',
        price: 410,
        verdict: 'keep',
        note: 'Keep. Consider a second drive later, the board has 3 free M.2 slots.',
        link: 'https://www.amazon.com/s?k=Samsung+990+Pro+2TB',
      },
    ],
  },
  {
    title: 'Cooling & Airflow',
    subtitle: 'Where the savings are',
    items: [
      {
        part: 'CPU Cooler',
        name: 'Arctic Liquid Freezer III Pro 420',
        original: 'NZXT Kraken Elite 420: $425',
        revised: '~$110',
        price: 110,
        verdict: 'swap',
        note: 'Same 420mm radiator, cools better in reviews. You only lose the LCD pump screen. Biggest saving in the build (~$300+).',
        link: 'https://www.amazon.com/s?k=Arctic+Liquid+Freezer+III+Pro+420',
      },
      {
        part: 'Case Fans',
        name: 'Lian Li Uni Fan (trim 10 → ~7)',
        original: '10× for ~$328',
        revised: '~7× for ~$215',
        price: 215,
        verdict: 'swap',
        note: 'The Arctic AIO already includes its own 3×140mm radiator fans, avoid double-buying. Saves ~$110.',
        link: 'https://www.amazon.com/s?k=Lian+Li+Uni+Fan',
      },
    ],
  },
  {
    title: 'Chassis & Power',
    subtitle: 'The foundation',
    items: [
      {
        part: 'Case',
        name: 'Lian Li O11 Dynamic EVO XL',
        original: '$270',
        revised: 'Keep',
        price: 270,
        verdict: 'keep',
        note: 'Supports the 420mm radiator and built for high airflow.',
        link: 'https://www.amazon.com/s?k=Lian+Li+O11+Dynamic+EVO+XL',
      },
      {
        part: 'Power Supply',
        name: 'Asus ROG Strix 1000W Platinum',
        original: '$215',
        revised: 'Keep',
        price: 215,
        verdict: 'minor',
        note: 'Over-spec for a ~600W system, an 850W would have been enough. Leave it if you want upgrade headroom.',
        link: 'https://www.amazon.com/s?k=Asus+ROG+Strix+1000W+Platinum',
      },
    ],
  },
  {
    title: 'Software',
    subtitle: 'Get it running',
    items: [
      {
        part: 'Operating System',
        name: 'Windows 11 Home OEM',
        original: '$129',
        revised: 'Keep',
        price: 129,
        verdict: 'keep',
        note: 'Keep.',
        link: 'https://www.microsoft.com/en-us/d/windows-11-home/dg7gmgf0krt0',
      },
    ],
  },
]

const gaps = [
  {
    tag: 'GAP',
    tone: 'bad',
    title: 'Cooler, the one real overpay',
    body: 'NZXT Kraken Elite 420 ($425) vs. Arctic Liquid Freezer III Pro 420 (~$110). Same 420mm radiator; the Arctic cools better per Tom\u2019s Hardware (~249W dissipation, beating top 360mm units). You lose only the LCD pump screen. Saves ~$300\u2013320.',
  },
  {
    tag: 'OK',
    tone: 'good',
    title: 'RAM, not a gap',
    body: '$510 for 32GB DDR5-6000 is genuine market price right now. DDR5 prices have spiked industry-wide and no cheaper swap exists today.',
  },
  {
    tag: 'MINOR',
    tone: 'warn',
    title: 'PSU, mild over-spec',
    body: '1000W Platinum for a ~600W system. Not wrong, 850W would have been enough. Leave it if you value GPU-upgrade headroom.',
  },
]

const decisions = [
  {
    title: 'Secondary storage',
    body: 'Single 2TB NVMe for now. Add a second drive later for game/media libraries, the board has 3 free M.2 slots and the case holds 3.5"/2.5" drives.',
  },
  {
    title: 'Monitor & peripherals',
    body: 'No display, keyboard, mouse, or audio in the list. Budget for these separately if needed.',
  },
  {
    title: 'Fan count',
    body: 'Trim from 10 to ~7 case fans. The AIO supplies its own radiator fans; a sensible EVO XL layout is ~3 bottom intake + ~3 side intake.',
  },
]

const futureproof = [
  {
    part: 'CPU & Socket',
    rating: 'strong',
    label: 'Ages extremely well',
    body: 'This is the build\u2019s biggest strength. AM5 is supported through 2027+, so you can drop a next-gen Ryzen into this same board years from now without replacing anything else. The 9800X3D itself will stay a top gaming chip for a long time.',
    tip: 'Do nothing. You already bought the best piece for longevity.',
  },
  {
    part: 'Motherboard',
    rating: 'ok',
    label: 'Solid, but the value ceiling',
    body: 'The B850 Tomahawk is a smart-value board and a fine match for this CPU. The honest tradeoff vs. a premium X870E: fewer PCIe 5.0 / USB4 lanes and less extreme VRM headroom. It will not hold back this CPU or GPU, it just has a slightly lower ceiling for future extreme builds.',
    tip: 'Only step up to X870E if you want USB4, more M.2 at full speed, or plan heavy overclocking. Otherwise keep it.',
  },
  {
    part: 'GPU & VRAM',
    rating: 'watch',
    label: 'Most likely to age first',
    body: 'The 5070 Ti is powerful, effectively the second tier behind the 5080/5090, so raw performance lasts. The thing to watch is its 16GB of VRAM for Blender scenes and future games at high resolution. The board\u2019s PCIe 5.0 slot means a future GPU drops straight in with no other changes.',
    tip: 'Keep it now. When VRAM becomes the wall, upgrade straight to a 24GB+ card, your PSU and board already support it.',
  },
  {
    part: 'Power Supply',
    rating: 'strong',
    label: 'Already future-proofed',
    body: 'The 1000W Platinum looked over-spec for today\u2019s ~600W draw, but that headroom is exactly what lets you drop in a power-hungry 5080 or 5090 later without buying a new PSU. The over-spec is an asset here, not waste.',
    tip: 'Keep it, it is your upgrade insurance.',
  },
  {
    part: 'Memory',
    rating: 'watch',
    label: 'Grow later, not now',
    body: '32GB handles competitive gaming and hobby-to-intermediate Blender with no issue today. Two DIMM slots sit empty for a later jump to 64GB \u2014 but note that 64GB DDR5-6000 currently runs ~$990\u2013$1,200 during the DDR5 price spike, roughly double the 32GB kit. The slots are the real future-proofing; the upgrade is cheap to do, just not cheap to buy right now.',
    tip: 'Keep 32GB today. Add a matched 64GB kit later once DDR5 prices fall \u2014 only sooner if Blender scenes are stalling at 32GB.',
  },
  {
    part: 'Storage',
    rating: 'strong',
    label: 'Room to expand',
    body: 'One 2TB NVMe fills a single slot, leaving three free M.2 slots plus drive bays in the case. Expansion is painless and cheap as your game and project libraries grow.',
    tip: 'Add a second NVMe when you run low, no rebuild required.',
  },
]

const gpuTiers = [
  {
    name: 'RTX 5070 Ti · 16GB',
    rec: 'pick',
    recLabel: 'Recommended',
    fps: 'Already overkill, competitive FPS is CPU-limited, so a bigger card adds no extra frames.',
    blender: 'Strong for hobby-to-intermediate scenes. NVIDIA OptiX renders fast; 16GB holds most projects.',
    bottom: 'The right-sized card for mostly-gaming, some-Blender. Keep it.',
  },
  {
    name: 'RTX 5080 · 16GB',
    rec: 'skip',
    recLabel: 'Skip',
    fps: 'Same real-world FPS as the 5070 Ti in competitive shooters. No gain for your main use.',
    blender: 'Renders faster, but has the SAME 16GB VRAM, so it does not let you build bigger scenes, only finish them quicker.',
    bottom: 'You pay a big premium for shorter render times you probably do not need. Poor value here.',
  },
  {
    name: 'RTX 5090 · 32GB',
    rec: 'maybe',
    recLabel: 'Only if Blender pays',
    fps: 'Still no FPS benefit for competitive shooters, total overkill for gaming.',
    blender: 'The real workstation card. 32GB VRAM unlocks large, complex scenes the 16GB cards cannot hold.',
    bottom: 'Worth it only if Blender becomes professional income with heavy scenes. ~$2,000+.',
  },
]

const options = [
  {
    name: 'Build this PC',
    price: '~$3,875',
    type: 'one-time',
    tone: 'own',
    best: 'You want the best possible experience for both high-FPS shooters and Blender, and you want to own the hardware outright.',
    catch: 'Highest upfront cost, and you assemble it yourself (or pay someone to).',
  },
  {
    name: 'Build a leaner PC',
    price: '~$2,200 to $2,800',
    type: 'one-time',
    tone: 'own',
    best: 'Same two jobs for less money. Drop to an RTX 5070 (non-Ti), an 850W PSU, and a simpler cooler while keeping the 9800X3D.',
    catch: 'Slightly lower ceiling for heavy Blender scenes and max-setting gaming. For competitive FPS you will not notice a difference.',
  },
  {
    name: 'Buy a prebuilt',
    price: '~$4,200 to $5,000',
    type: 'one-time',
    tone: 'own',
    best: 'You want it to arrive assembled, under a single warranty, with no building stress.',
    catch: 'You pay a $300 to $600 premium and often get a cheaper PSU, board, or RAM than this parts list. Harder to upgrade later.',
  },
  {
    name: 'Gaming laptop',
    price: '~$2,000 to $3,500',
    type: 'one-time',
    tone: 'own',
    best: 'You need portability more than raw power, gaming in different rooms or on the go.',
    catch: 'Mobile GPUs are power-limited and throttle under sustained Blender renders. Worse value and a shorter lifespan than a desktop.',
  },
  {
    name: 'GeForce NOW (streaming)',
    price: '~$20 / month',
    type: 'rental',
    tone: 'rent',
    best: 'You want to start playing now with little or no hardware, or bridge the gap while saving for a build.',
    catch: 'Adds ~20 to 40ms of input lag, a real handicap for competitive FPS, and it only runs supported games, so it cannot run Blender at all.',
  },
  {
    name: 'Cloud workstation (Shadow, etc.)',
    price: '~$30 to $50+ / month',
    type: 'rental',
    tone: 'rent',
    best: 'You want a full remote Windows PC that can run Blender and games without owning hardware.',
    catch: 'Ongoing cost forever, you never own it, performance depends on your internet, and latency still hurts competitive FPS.',
  },
]

const compatibility = [
  'AM5 socket matches the 9800X3D',
  'RAM type supported by the B850 board',
  'RTX 5070 Ti fits the EVO XL; PSU has the 12V-2x6 connector',
  'Case supports the 420mm radiator',
  'Thermal paste pre-applied on the AIO, nothing extra needed',
]

const verdictLabel = { keep: 'Keep', swap: 'Swap', minor: 'Review' }

const fmt = (n) => '$' + n.toLocaleString('en-US')

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'components', label: 'Components' },
  { id: 'gaps', label: 'Pricing Gaps' },
  { id: 'options', label: 'Your Options' },
  { id: 'future', label: 'Future-Proofing' },
  { id: 'details', label: 'Details' },
]

export default function LOrdinateur() {
  const [tab, setTab] = useState('overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    document.title = "L'Ordinateur, PC Build Breakdown"
  }, [])

  const selectTab = (id) => {
    setTab(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeLabel = TABS.find((t) => t.id === tab)?.label

  return (
    <div className="lo">
      <div className="lo-wrap">
        <header className="lo-hero">
          <div className="lo-eyebrow">PC Build · Gap Analysis &amp; Revised List</div>
          <h1>L&rsquo;Ordinateur</h1>
          <div className="lo-translation">(The Computer)</div>
          <p className="lo-sub">
            A plain-English review of the parts list. Prices are current-market
            estimates (USD) and will vary by retailer and availability.
          </p>
          <div className="lo-totals">
            <div className="lo-total">
              <span className="lo-total-label">Original</span>
              <span className="lo-total-value">~$4,410</span>
            </div>
            <div className="lo-total lo-total--revised">
              <span className="lo-total-label">Revised</span>
              <span className="lo-total-value">~$3,875</span>
            </div>
            <div className="lo-total lo-total--save">
              <span className="lo-total-label">You save</span>
              <span className="lo-total-value">~$535</span>
            </div>
          </div>
        </header>

        <div className="lo-video">
          <div className="lo-video-bar">
            <span className="lo-video-title">Roddy&rsquo;s explanation</span>
            <button
              className="lo-video-toggle"
              aria-expanded={showVideo}
              onClick={() => setShowVideo((v) => !v)}
            >
              {showVideo ? 'Hide video' : 'Show video'}
            </button>
          </div>
          {showVideo && (
            <video
              controls
              playsInline
              preload="metadata"
              className="lo-video-el"
            >
              <source src="/lordinateur-clip.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Desktop tab bar */}
        <nav className="lo-tabs" role="tablist" aria-label="Sections">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={tab === t.id ? 'active' : ''}
              onClick={() => selectTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger bar */}
        <div className="lo-mobile-nav">
          <button
            className="lo-hamburger"
            aria-expanded={menuOpen}
            aria-label="Open sections menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`lo-hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
            <span className="lo-hamburger-label">{activeLabel}</span>
          </button>
          {menuOpen && (
            <div className="lo-drawer" role="menu">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="menuitem"
                  className={tab === t.id ? 'active' : ''}
                  onClick={() => selectTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lo-panel" key={tab}>
          {tab === 'overview' && (
            <section className="lo-section">
              <h2>The Bottom Line</h2>
              <p>
                The list is well-built and fully compatible. There is exactly one
                real overpay, the CPU cooler, plus one easy fan-count fix.
                Everything else is a decision to make, not a mistake. Swapping the
                cooler and trimming duplicate fans drops the price by about $535
                with no loss in performance.
              </p>
              <div className="lo-grandtotal">
                <div className="lo-grandtotal-row">
                  <span>Original parts list</span>
                  <span className="lo-strike">~$4,410</span>
                </div>
                <div className="lo-grandtotal-row lo-grandtotal-row--final">
                  <span>Revised build total</span>
                  <span>~$3,875</span>
                </div>
                <div className="lo-grandtotal-row lo-grandtotal-row--save">
                  <span>Total savings</span>
                  <span>~$535</span>
                </div>
              </div>
            </section>
          )}

          {tab === 'components' && (
            <section className="lo-section">
              <h2>Component Comparison</h2>
              {groups.map((group) => {
                const subtotal = group.items.reduce((sum, i) => sum + i.price, 0)
                return (
                  <div key={group.title} className="lo-group">
                    <div className="lo-group-head">
                      <div>
                        <h3 className="lo-group-title">{group.title}</h3>
                        <span className="lo-group-sub">{group.subtitle}</span>
                      </div>
                      <div className="lo-group-subtotal">
                        <span className="lo-group-subtotal-label">Section total</span>
                        <span className="lo-group-subtotal-value">{fmt(subtotal)}</span>
                      </div>
                    </div>
                    <div className="lo-cards">
                      {group.items.map((c) => (
                        <a
                          key={c.part}
                          className={`lo-card lo-card--${c.verdict}`}
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="lo-card-top">
                            <span className="lo-card-part">{c.part}</span>
                            <span className={`lo-badge lo-badge--${c.verdict}`}>
                              {verdictLabel[c.verdict]}
                            </span>
                          </div>
                          <div className="lo-card-name">{c.name}</div>
                          <div className="lo-card-prices">
                            <span className="lo-card-orig">{c.original}</span>
                            <span className="lo-card-arrow">→</span>
                            <span className="lo-card-rev">{c.revised}</span>
                          </div>
                          <p className="lo-card-note">{c.note}</p>
                          <span className="lo-card-link">Find it online ↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              })}

              <div className="lo-grandtotal">
                <div className="lo-grandtotal-row">
                  <span>Original parts list</span>
                  <span className="lo-strike">~$4,410</span>
                </div>
                <div className="lo-grandtotal-row lo-grandtotal-row--final">
                  <span>Revised build total</span>
                  <span>~$3,875</span>
                </div>
                <div className="lo-grandtotal-row lo-grandtotal-row--save">
                  <span>Total savings</span>
                  <span>~$535</span>
                </div>
              </div>
            </section>
          )}

          {tab === 'gaps' && (
            <section className="lo-section">
              <h2>Pricing Gaps</h2>
              <div className="lo-gaps">
                {gaps.map((g) => (
                  <div key={g.title} className={`lo-gap lo-gap--${g.tone}`}>
                    <span className="lo-gap-tag">{g.tag}</span>
                    <div>
                      <h3>{g.title}</h3>
                      <p>{g.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {tab === 'options' && (
            <section className="lo-section">
              <h2>You&rsquo;re Not Stuck, Your Options</h2>
              <p className="lo-options-intro">
                RAM and GPU prices are unusually high right now, so there&rsquo;s no
                rush to commit. Here are honest alternatives, including not building
                at all, so you can pick what fits while you wait to see where
                component costs land. Each one lists who it&rsquo;s best for and the
                real catch, no spin.
              </p>
              <div className="lo-options">
                {options.map((o) => (
                  <div key={o.name} className={`lo-option lo-option--${o.tone}`}>
                    <div className="lo-option-head">
                      <h3>{o.name}</h3>
                      <span className={`lo-option-type lo-option-type--${o.tone}`}>
                        {o.type}
                      </span>
                    </div>
                    <div className="lo-option-price">{o.price}</div>
                    <p className="lo-option-best">
                      <span className="lo-option-label lo-option-label--best">Best if</span>
                      {o.best}
                    </p>
                    <p className="lo-option-catch">
                      <span className="lo-option-label lo-option-label--catch">The catch</span>
                      {o.catch}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lo-verdict">
                <h3>Straight answer</h3>
                <p>
                  For high-FPS competitive shooters <em>and</em> Blender, owning a
                  desktop wins, Blender renders far faster on an NVIDIA GPU, and
                  local hardware has none of the input lag that streaming adds. But
                  you do not have to buy today. If money&rsquo;s tight or prices feel
                  crazy, GeForce NOW or a cheaper build will get you gaming now, and
                  you can build the full machine once DDR5 and GPU prices cool off.
                  The only option that can&rsquo;t do Blender at all is GeForce NOW,
                  keep that in mind if rendering matters to you.
                </p>
              </div>
            </section>
          )}

          {tab === 'future' && (
            <>
              <section className="lo-section">
                <h2>Future-Proofing, Making It Last</h2>
                <p className="lo-options-intro">
                  This build is well-balanced: the <strong>best gaming CPU</strong>, a
                  <strong> near-top GPU</strong> (the 5070 Ti sits just behind the
                  5080/5090), and a <strong>smart-value motherboard</strong>. That mix
                  means most of it will last years, here&rsquo;s exactly what stays
                  strong, what to watch, and how to extend each part&rsquo;s life.
                </p>
                <div className="lo-fp">
                  {futureproof.map((f) => (
                    <div key={f.part} className={`lo-fp-item lo-fp-item--${f.rating}`}>
                      <div className="lo-fp-head">
                        <h3>{f.part}</h3>
                        <span className={`lo-fp-badge lo-fp-badge--${f.rating}`}>
                          {f.label}
                        </span>
                      </div>
                      <p className="lo-fp-body">{f.body}</p>
                      <p className="lo-fp-tip">
                        <span className="lo-fp-tip-label">Do this</span>
                        {f.tip}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="lo-section">
                <h2>Build-Balance Note</h2>
                <p>
                  The 9800X3D + RTX 5070 Ti pairing is CPU-heavy, the 9800X3D will
                  never bottleneck this GPU in games. That is perfectly fine for
                  productivity work or a future GPU upgrade. For pure gaming, the
                  budget leans slightly more toward the CPU than it needs to.
                </p>
              </section>

              <section className="lo-section">
                <h2>Should I Upgrade the GPU?</h2>
                <p className="lo-options-intro">
                  Tempted by a 5080 or the top-of-the-line 5090? For this mix of
                  mostly competitive FPS and some Blender, the short answer is{' '}
                  <strong>keep the 5070 Ti</strong>. Here&rsquo;s why, tier by tier.
                </p>
                <div className="lo-gpu">
                  {gpuTiers.map((g) => (
                    <div key={g.name} className={`lo-gpu-card lo-gpu-card--${g.rec}`}>
                      <div className="lo-gpu-head">
                        <h3>{g.name}</h3>
                        <span className={`lo-gpu-rec lo-gpu-rec--${g.rec}`}>
                          {g.recLabel}
                        </span>
                      </div>
                      <p className="lo-gpu-row">
                        <span className="lo-gpu-tag">Gaming</span>
                        {g.fps}
                      </p>
                      <p className="lo-gpu-row">
                        <span className="lo-gpu-tag">Blender</span>
                        {g.blender}
                      </p>
                      <p className="lo-gpu-bottom">{g.bottom}</p>
                    </div>
                  ))}
                </div>
                <div className="lo-verdict">
                  <h3>Bottom line</h3>
                  <p>
                    Competitive shooters are limited by the CPU and your monitor,
                    not the GPU, so a 5080 or 5090 buys <em>zero</em> extra frames
                    in your main games. The 5080&rsquo;s trap is that it shares the
                    5070 Ti&rsquo;s 16GB of VRAM, so it renders faster but can&rsquo;t
                    handle bigger Blender scenes. Only the 5090&rsquo;s 32GB truly
                    raises the ceiling, and that only matters if Blender becomes
                    paid, heavy work. Keep the 5070 Ti; upgrade straight to a 24GB+
                    card the day a real project hits the VRAM wall. Your board and
                    PSU already support it with no rebuild.
                  </p>
                </div>
              </section>
            </>
          )}

          {tab === 'details' && (
            <>
              <section className="lo-section">
                <h2>Decisions, Not Errors</h2>
                <div className="lo-decisions">
                  {decisions.map((d) => (
                    <div key={d.title} className="lo-decision">
                      <span className="lo-decision-tag">Decide</span>
                      <div>
                        <h3>{d.title}</h3>
                        <p>{d.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="lo-section">
                <h2>Fan Layout (O11 EVO XL)</h2>
                <ul className="lo-layout">
                  <li><strong>Top:</strong> 420mm AIO with its 3×140mm included fans</li>
                  <li><strong>Bottom:</strong> 3× 140mm intake</li>
                  <li><strong>Side:</strong> 3× 120/140mm intake</li>
                  <li><strong>Rear:</strong> optional / often omitted on this case</li>
                </ul>
              </section>

              <section className="lo-section">
                <h2>Compatibility, All Clear</h2>
                <ul className="lo-check">
                  {compatibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <p className="lo-disclaimer">
                Prices are current-market estimates and may vary by retailer and
                availability. This is an independent review of a provided list, not a
                purchase recommendation or financial advice.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
