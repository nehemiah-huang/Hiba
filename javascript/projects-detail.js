// ===== PROJECTS FILTER + DETAIL VIEW =====

(function () {

  // ── Project Data ──────────────────────────────────────────────
  const projectData = {

    0: {
      eyebrow: 'Nerasol Ghana Limited — Enterprise',
      title: 'Driving Adoption and Reliability at Scale',
      year: '2023',
      tags: ['Operations & Systems', 'Project Coordination', 'Accounts & Reporting'],
      industry: ['Product-based', 'Tech Startups'],
      stats: [
        { value: '16', label: 'Regions of Ghana covered by IWMIS deployment' },
        { value: '100+', label: 'System issues logged, tracked, and resolved' },
        { value: '∞', label: 'Financial settlements streamlined for multiple municipalities' }
      ],
      intro: 'Turning IWMIS from a technical system into a practical solution that improved data accuracy, financial settlements, and user adoption across stakeholders.',
      challenge: `Nerasol Ghana Limited, part of the Jospong Group, developed the Integrated Waste Management Information System (IWMIS) to streamline waste collection, reporting, and settlements across municipalities. As the country's largest waste management operator, Zoomlion depended on IWMIS to connect multiple stakeholders, including municipal assemblies, field operators, and finance teams.

The platform's scale introduced critical challenges. Diverse users required structured onboarding, feature rollouts demanded tight coordination, and the financial settlement process between municipalities and Zoomlion depended on absolute accuracy. To succeed, the system needed not only technical reliability but also strong operational ownership and user support.`,
      responsibilities: [
        'Led the nationwide RFID distribution project, coordinating deployment across all 16 regions',
        'Assisted in onboarding staff and ensuring consistent adoption of the IWMIS platform',
        'Delivered hands-on training and developed user support materials for municipal and contractor teams',
        'Tested and validated new system features while documenting and following up on bugs with developers',
        'Collected, cleaned, and analyzed operational data to maintain accuracy and reliability',
        'Reconciled payment and transaction records in support of timely financial settlements',
        'Coordinated between assemblies, Zoomlion, and Nerasol teams for resolution of recurring issues'
      ],
      solutions: [
        {
          title: 'Enablement',
          body: 'Working directly under the product manager, dedicated support was put in place to drive user adoption. These efforts reduced learning curves and built confidence in system use.',
          points: [
            'Focused on making IWMIS accessible for a wide range of users',
            'Onboarded and trained municipal assemblies, Zoomlion staff, and field operators',
            'Designed and delivered user guides, quick references, and training materials to sustain adoption',
            'Ensured consistent workflows to drive adoption across different user groups'
          ]
        },
        {
          title: 'Support',
          body: 'Reliability was reinforced by conducting system testing for new features, validating bug fixes, and monitoring live data for consistency.',
          points: [
            'Conducted system testing, UAT, and validation of new features before release',
            'Coordinated with developers to resolve technical issues and improve reliability',
            'Monitored system dashboards and data streams for accuracy and compliance',
            'Reconciled financial transactions between municipalities and Zoomlion',
            'Generated operational and financial reports to support executive decision-making'
          ]
        },
        {
          title: 'Growth',
          body: 'Proactive involvement turned IWMIS into more than a record-keeping system — it became a backbone for decision-making and financial clarity across the waste management ecosystem.',
          points: [
            'Collected and analyzed user feedback to refine workflows and features',
            'Identified inefficiencies in operations and proposed system improvements',
            'Coordinated phased rollouts of new features across multiple municipalities',
            'Produced insights from operational and financial data to inform product strategy'
          ]
        }
      ],
      highlights: [
        {
          title: 'RFID Tracking System',
          body: 'To streamline asset tracking, I led the setup of a system to monitor the distribution and use of RFID tags. This ensured accurate tracking, smooth delivery, and reliable oversight of waste management assets.',
          points: [
            'Designed and implemented an RFID tracking framework',
            'Coordinated delivery schedules to municipalities and operators',
            'Established reporting mechanisms for accountability and transparency'
          ]
        },
        {
          title: '1 Million Bin Project',
          body: 'I spearheaded operational systems for the nationwide "1 Million Bin" distribution project. Citizens could request free bins through a short code, and my role was to design processes that handled these requests end-to-end.',
          points: [
            'Established and managed a dedicated call center to handle bin requests and inquiries',
            'Built a tracking system for all inquiries and follow-ups to ensure accountability',
            'Oversaw delivery scheduling and coordinated field logistics for large-scale distribution'
          ]
        }
      ],
      impact: 'My work at Nerasol helped strengthen adoption of IWMIS across multiple stakeholders, creating trust in the platform and reducing operational bottlenecks. Training and onboarding accelerated user confidence. System testing and data validation improved platform reliability. Financial reconciliations became smoother, reducing disputes and delays between municipalities and Zoomlion. By supporting the product manager in both day-to-day operations and strategic improvements, IWMIS was positioned as a reliable, scalable system that could sustain the growing demands of Ghana\'s largest waste management operation.'
    },

    1: {
      eyebrow: 'AYA Editions — Small Team',
      title: 'Strengthening the Digital and Commercial Foundations of a Cultural Publishing Platform',
      year: '2023',
      tags: ['Operations & Systems', 'Launch Support', 'Strategic Oversight', 'Accounts & Reporting'],
      industry: ['Art & Culture', 'Creative', 'E-Commerce'],
      stats: [
        { value: '51', label: 'Limited-edition works structured through digital sales infrastructure' },
        { value: '8', label: 'Artist collaborations cultivated across the platform\'s ecosystem' },
        { value: '6', label: 'Exhibitions delivered across artists and venues spanning multiple countries' }
      ],
      intro: 'Transforming a niche creative publisher into a digitally streamlined, culturally visible, and partnership-driven brand.',
      challenge: `AYA Editions, a cultural publishing house dedicated to amplifying African voices and creative expression, needed to evolve from a vision-driven startup into a structured, operationally resilient brand. As the company expanded its catalogue and creative footprint, it faced challenges in aligning digital infrastructure with strategic goals, managing artist partnerships, and building visibility in both digital and physical spaces.

This called for someone comfortable operating between creativity and commerce, bringing the structure needed to sustain the platform's artistic output. My responsibilities spanned digital infrastructure, financial oversight, artist partnerships, and exhibition coordination.`,
      responsibilities: [
        'Established a reliable Shopify-based infrastructure for managing artwork inventory and online sales',
        'Oversaw financial settlements, including exhibition revenue tracking, artist royalties, and payment reconciliations',
        'Coordinated exhibitions end-to-end, aligning artists, venues, and vendors to deliver seamless public presentations',
        'Managed licensing, registrations, and compliance documentation to safeguard legal and operational standing',
        'Collaborated with the website developer to implement updates and maintain platform functionality',
        'Sourced and engaged artists aligned with the brand\'s mission, expanding the platform\'s creative ecosystem',
        'Translated strategic initiatives from the founders into actionable operational processes'
      ],
      solutions: [
        {
          title: 'Digital Foundation',
          body: 'A reliable digital infrastructure was introduced to support both the commercial and operational sides of the platform — ensuring artwork inventory, online sales, and website functionality could be managed efficiently.',
          points: [
            'Directed website updates and improvements in collaboration with the developer',
            'Implemented Shopify as the primary system for managing artwork inventory and online sales',
            'Optimized artwork listings and product metadata to align with brand standards',
            'Integrated payment systems to ensure accurate settlements and smooth transactions'
          ]
        },
        {
          title: 'Financial & Operational Oversight',
          body: 'Systems were introduced to track revenue streams, manage artist settlements, and ensure transparency across both online and exhibition-based sales.',
          points: [
            'Tracked payments from exhibitions and direct artwork sales',
            'Reconciled Shopify sales records with financial settlements',
            'Managed artist royalty calculations and payment distributions',
            'Produced financial and operational reports to support business oversight',
            'Supported budgeting processes for exhibitions, events, and publishing initiatives'
          ]
        },
        {
          title: 'Artist Ecosystem',
          body: 'Expanding the artist network required identifying talent aligned with the brand\'s vision and building meaningful collaborations that could sustain the platform\'s creative direction.',
          points: [
            'Scouted and engaged artists aligned with the platform\'s cultural mission',
            'Developed collaboration agreements and partnership structures',
            'Proposed creative initiatives to expand the platform\'s artistic reach',
            'Strengthened relationships between artists, collectors, and the platform'
          ]
        },
        {
          title: 'Experiential Visibility',
          body: 'The brand\'s presence was extended into physical spaces through curated exhibitions and cultural activations, translating the platform\'s creative vision into tangible encounters for collectors and audiences.',
          points: [
            'Coordinated logistics for exhibitions locally',
            'Liaised with artists to prepare works for display and sale',
            'Managed vendor relationships for exhibition venues and installations',
            'Supported marketing and communications for exhibition events',
            'Ensured financial reconciliation following exhibition sales'
          ]
        }
      ],
      highlights: [
        {
          title: 'Agbumite Street Art Festival',
          body: 'The Agbumite Festival, held in the La community of Accra, is a vibrant street art celebration connected to the La Homowo festivities. In 2023, the festival brought together contemporary artists, performers, and cultural practitioners — including Serge Attukwei Clottey and organizations like GoLokal and 360 Projects GH. I worked closely with Ghanaian visual artist Awo Tsegah to prepare her participation.',
          points: [
            'Coordinated the preparation and installation of Awo Tsegah\'s artwork for the festival in Labadi',
            'Liaised with artist and festival to ensure smooth participation',
            'Supported logistical preparation and setup for the exhibition environment',
            'Contributed to expanding the visibility of AYA Editions\' artists within Ghana\'s contemporary art scene'
          ]
        }
      ],
      impact: 'These efforts introduced the operational stability needed for artists, collaborators, and partners to engage with the platform confidently. Exhibitions and partnerships ran with greater coordination and reliability, while clearer financial processes improved transparency and accountability across the business. This structure allowed the founders to focus more fully on creative direction, knowing the operational side of the platform could run smoothly and support its growing network of artists, collectors, and cultural collaborators.'
    },

    2: {
      eyebrow: 'Event Production Studio — Studio',
      title: 'Coordinating the Systems Behind Experiential Projects',
      year: '2024',
      tags: ['Operations & Systems', 'Project Coordination', 'Workflow Design', 'Accounts & Reporting'],
      industry: ['Creative', 'Experience Design', 'Event Production'],
      stats: [
        { value: '16', label: 'Events delivered from production planning through execution' },
        { value: '8', label: 'Vendors coordinated per event across production, logistics, and installations' },
        { value: '600', label: 'Maximum guest capacity across produced experiences' }
      ],
      intro: 'Supporting brand activations and private events through structured production planning, vendor coordination, and disciplined budget oversight.',
      challenge: `Experiential events required translating creative concepts into fully realized environments within demanding timelines. Each production involved aligning vendors, logistics, budgets, and installation schedules while maintaining the aesthetic standards expected of high-end events. With multiple external partners and overlapping production requirements, ensuring that every component came together on time required strong operational coordination.

Delivering these events depended on careful coordination across production schedules, vendor teams, and financial oversight. My role focused on structuring these moving parts so that concepts could translate into fully executed experiences.`,
      responsibilities: [
        'Developed detailed production schedules that aligned vendor deliverables with event timelines',
        'Coordinated installations, logistics, and technical preparations leading up to event day',
        'Maintained visibility across production milestones to keep teams aligned and on schedule',
        'Coordinated vendors across production, logistics, installations, and technical services',
        'Monitored vendor costs against established event budgets',
        'Supported invoice preparation and financial reconciliation processes'
      ],
      solutions: [
        {
          title: 'Production Framework',
          body: 'Strong production planning ensured that events progressed from concept to execution within tight timelines. Clear schedules and milestone tracking created visibility across vendors, contractors, and internal teams.',
          points: [
            'Developed detailed production schedules that aligned vendor deliverables with event timelines',
            'Coordinated installations, logistics, and technical preparations leading up to event day',
            'Maintained visibility across production milestones to keep teams aligned and on schedule'
          ]
        },
        {
          title: 'Production Partners',
          body: 'Each event relied on a network of external partners responsible for installations, logistics, and technical delivery. Effective coordination ensured vendors remained aligned with both production schedules and the overall vision.',
          points: [
            'Coordinated vendors across production, logistics, installations, and technical services',
            'Maintained clear communication between vendors and internal teams to ensure alignment',
            'Ensured vendor deliverables met production timelines and event requirements'
          ]
        },
        {
          title: 'Production Financials',
          body: 'Maintaining financial discipline was essential to delivering events successfully. Careful cost tracking and analysis ensured that production activities remained aligned with approved budgets.',
          points: [
            'Monitored vendor costs against established event budgets',
            'Analyzed production expenses to maintain financial clarity across events',
            'Supported invoice preparation and financial reconciliation processes',
            'Maintained visibility across event spending to ensure cost discipline'
          ]
        }
      ],
      highlights: [
        {
          title: 'The Magna Carta Experience',
          body: 'Hosted by Villa Grace in partnership with Veuve Clicquot, The Magna Carta is an annual lifestyle event blending fine dining, music, and luxury hospitality during Accra\'s peak holiday season. The 2024 edition required transforming Polo Beach Club into a fully realized experiential environment within an extremely tight timeframe — production began less than 24 hours before guest arrival, following New Year celebrations that left the venue in active use.',
          points: [
            'Coordinated production schedules and vendor activities for the full event build',
            'Supported vendor logistics and installation planning under a compressed timeline',
            'Maintained operational alignment across vendors, venue teams, and production partners',
            'Developed a structured cash-handling framework to mitigate potential revenue leakage',
            'Assisted in ensuring event delivery aligned with the approved production framework'
          ]
        }
      ],
      impact: 'Through structured planning and disciplined coordination, complex event productions were delivered with greater reliability despite demanding timelines. Vendors, contractors, and internal teams operated within clearer production frameworks, allowing installations and logistics to progress with fewer disruptions. The Magna Carta 2024 edition generated a 200% increase in Veuve Clicquot sales, with more than 300 bottles sold during the event. Brand partners described the experience as a benchmark activation for Veuve Clicquot in Africa.'
    },

    3: {
      eyebrow: 'A Life of Design — Studio',
      title: 'Accelerating Growth for a Founder-Led Experiential Design Studio',
      year: '2024',
      tags: ['Operations & Systems', 'Strategic Oversight', 'Workflow Design', 'Accounts & Reporting'],
      industry: ['Creative', 'Experience Design', 'Lifestyle Brands'],
      stats: [
        { value: '—', label: 'Financial visibility built across studio projects through structured cost tracking' },
        { value: '—', label: 'Production coordination strengthened across events and design projects' },
        { value: '—', label: 'Repeatable workflows introduced to reduce founder\'s day-to-day involvement' }
      ],
      intro: 'Supporting the studio\'s expansion by introducing financial visibility, structured workflows, and coordinated project execution.',
      challenge: `As A Life of Design (ALOD) continued to grow its portfolio of experiential projects, the studio found itself managing an increasingly complex mix of initiatives. Event productions, design collaborations, internal initiatives, and client projects were often moving forward simultaneously, each requiring coordination across contractors, collaborators, and financial tracking.

Like many founder-led creative studios, much of the knowledge that kept projects moving lived informally with the founder. Creative direction, client relationships, and strategic decisions were naturally the founder's focus. However, sustaining the studio's growth required clearer visibility into project finances, stronger coordination across collaborators, and systems that could support multiple projects without relying on constant founder involvement.`,
      responsibilities: [
        'Coordinated contractors and collaborators across multiple studio projects',
        'Ensured deliverables, timelines, and expectations were clearly communicated',
        'Introduced documentation that helped streamline project coordination',
        'Monitored progress across initiatives and flagged issues early',
        'Supported the hiring process and contract management for collaborators',
        'Translated the founder\'s creative vision into actionable milestones and strategy boards',
        'Liaised directly with the studio\'s accountant to support financial reporting'
      ],
      solutions: [
        {
          title: 'Creating Space for Creative Leadership',
          body: 'With clearer financial visibility and more structured coordination in place, the founder was able to focus more fully on creative direction, client relationships, and strategic growth.',
          points: [
            'Translated the founder\'s creative vision into actionable milestones and strategy boards',
            'Prepared presentations and documentation to support project planning',
            'Assisted with marketing initiatives and copywriting when required'
          ]
        },
        {
          title: 'Structuring Projects and Collaborators',
          body: 'As the studio\'s project pipeline expanded, stronger coordination across collaborators became essential. Introducing clearer documentation and coordination processes allowed projects to move forward with greater consistency.',
          points: [
            'Coordinated contractors and collaborators across multiple studio projects',
            'Ensured deliverables, timelines, and expectations were clearly communicated',
            'Introduced documentation that helped streamline project coordination',
            'Monitored progress across initiatives and flagged issues early',
            'Supported the hiring process and contract management for collaborators'
          ]
        },
        {
          title: 'Bringing Financial Clarity',
          body: 'The first step in strengthening the studio\'s operations was improving visibility across project finances. Tracking costs and maintaining organized financial documentation created a clearer picture of how projects were performing.',
          points: [
            'Built structured cost tracking systems across studio projects',
            'Organized receipts and financial documentation for internal reporting',
            'Generated financial summaries that highlighted project spending patterns',
            'Identified areas of overspending and potential profitability improvements',
            'Liaised directly with the studio\'s accountant to support financial reporting'
          ]
        }
      ],
      highlights: [
        {
          title: 'Sahel Gold',
          body: 'A shea-based product line centered on natural skincare and wellness products. Work on the initiative focused on early planning and coordination as the concept moved toward product development and brand setup.',
          points: []
        },
        {
          title: 'MIAB',
          body: 'A Ghanaian-themed gift box concept designed to celebrate local culture through curated products and experiences. The project involved coordinating planning activities and helping structure the concept as it developed.',
          points: []
        },
        {
          title: 'Finds by Rose',
          body: 'A home décor initiative centered around curated decorative pieces. The project was managed end-to-end, including vendor sourcing, coordination, and the operational groundwork needed to bring the concept to life.',
          points: []
        },
        {
          title: 'TSG Property Rental',
          body: 'A property rental activity associated with the studio. Operational coordination included assisting with invoicing processes and organizing financial documentation related to rental operations.',
          points: []
        }
      ],
      impact: 'Introducing financial visibility and clearer project structures changed how the studio could operate day to day. Costs, timelines, and collaborator responsibilities became easier to track, allowing projects to move forward with greater confidence and fewer last-minute adjustments. As these systems took hold, the studio became better equipped to handle multiple initiatives at once, with creative direction remaining firmly with the founder while the operational side gained the structure needed to support a broader range of experiential projects, product initiatives, and commercial activities.'
    }

  };

  // ── DOM refs ──────────────────────────────────────────────────
  const checkboxes      = document.querySelectorAll('input[type=checkbox]');
  const rows            = document.querySelectorAll('.project-row');
  const resultCount     = document.getElementById('result-count');
  const activeFiltersEl = document.getElementById('active-filters');
  const emptyState      = document.getElementById('empty-state');
  const content         = document.querySelector('.content');

  // ── State ─────────────────────────────────────────────────────
  let detailOpen = false;

  // ── Render detail view ────────────────────────────────────────
  function renderDetail(idx) {
    const p = projectData[idx];
    if (!p) return;

    detailOpen = true;

    // Build stats HTML — skip placeholder dashes
    const statsHTML = p.stats
      .filter(s => s.value !== '—')
      .map(s => `
        <div class="detail-stat">
          <div class="detail-stat-value">${s.value}</div>
          <div class="detail-stat-label">${s.label}</div>
        </div>
      `).join('');

    // Build solutions HTML
    const solutionsHTML = p.solutions.map(s => `
      <div class="detail-solution">
        <div class="detail-solution-title">${s.title}</div>
        <p class="detail-solution-body">${s.body}</p>
        ${s.points.length ? `<ul class="detail-list">${s.points.map(pt => `<li>${pt}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('');

    // Build highlights HTML
    const highlightsHTML = p.highlights.map(h => `
      <div class="detail-highlight">
        <div class="detail-highlight-title">${h.title}</div>
        <p class="detail-highlight-body">${h.body}</p>
        ${h.points.length ? `<ul class="detail-list">${h.points.map(pt => `<li>${pt}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('');

    // Build responsibilities HTML
    const respHTML = `<ul class="detail-list">${p.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`;

    // Build tags
    const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const industryHTML = p.industry.map(t => `<span class="tag">${t}</span>`).join('');

    content.innerHTML = `
      <div class="detail-view" id="detail-view">

        <button class="detail-back" onclick="window.closeDetail()">
          <span class="detail-back-arrow">←</span>
          <span>All Projects</span>
        </button>

        <div class="detail-header">
          <div class="detail-eyebrow">${p.eyebrow}</div>
          <h2 class="detail-title">${p.title}</h2>
          <p class="detail-intro">${p.intro}</p>

          <div class="detail-meta-row">
            <div class="detail-meta-group">
              <span class="detail-meta-label">Support</span>
              <div class="project-tags">${tagsHTML}</div>
            </div>
            <div class="detail-meta-group">
              <span class="detail-meta-label">Industry</span>
              <div class="project-tags">${industryHTML}</div>
            </div>
            <div class="detail-meta-group">
              <span class="detail-meta-label">Year</span>
              <div class="detail-year">${p.year}</div>
            </div>
          </div>
        </div>

        ${statsHTML ? `<div class="detail-stats">${statsHTML}</div>` : ''}

        <div class="detail-section">
          <div class="detail-section-label">Challenge</div>
          <div class="detail-section-body">${p.challenge.split('\n\n').map(para => `<p>${para.trim()}</p>`).join('')}</div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Responsibilities</div>
          <div class="detail-section-body">${respHTML}</div>
        </div>

        <div class="detail-section">
          <div class="detail-section-label">Solutions</div>
          <div class="detail-solutions">${solutionsHTML}</div>
        </div>

        ${p.highlights.length ? `
        <div class="detail-section">
          <div class="detail-section-label">${p.highlights.length > 1 ? 'Project Highlights' : 'Featured Project'}</div>
          <div class="detail-highlights">${highlightsHTML}</div>
        </div>` : ''}

        <div class="detail-section detail-impact-section">
          <div class="detail-section-label">Impact</div>
          <div class="detail-section-body detail-impact-body"><p>${p.impact}</p></div>
        </div>

      </div>
    `;

    // Scroll content area to top
    content.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Close detail / restore list ───────────────────────────────
  window.closeDetail = function () {
    detailOpen = false;
    content.innerHTML = `
      <div class="content-meta">
        <div class="active-filters" id="active-filters"></div>
        <span class="result-count" id="result-count"></span>
      </div>
      <div class="project-list" id="project-list">
        ${Array.from(rows).map(r => r.outerHTML).join('')}
      </div>
      <div class="empty-state" id="empty-state">No projects match these filters.</div>
    `;

    // Re-attach listeners
    rebind();
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Filter logic ──────────────────────────────────────────────
  function applyFilters() {
    const currentRows    = document.querySelectorAll('.project-row');
    const rcEl           = document.getElementById('result-count');
    const afEl           = document.getElementById('active-filters');
    const esEl           = document.getElementById('empty-state');
    const industry       = getChecked('industry');
    const support        = getChecked('support');
    const client         = getChecked('client');

    let visible = 0;

    currentRows.forEach(function (row) {
      const rI = row.dataset.industry.split(',').map(s => s.trim());
      const rS = row.dataset.support.split(',').map(s => s.trim());
      const rC = row.dataset.client.split(',').map(s => s.trim());

      const matchI = industry.length === 0 || industry.some(v => rI.includes(v));
      const matchS = support.length  === 0 || support.some(v  => rS.includes(v));
      const matchC = client.length   === 0 || client.some(v   => rC.includes(v));

      const show = matchI && matchS && matchC;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (rcEl) rcEl.textContent = visible + (visible === 1 ? ' Project' : ' Projects');
    if (esEl) esEl.classList.toggle('show', visible === 0);

    const all = [...industry, ...support, ...client];
    if (afEl) afEl.innerHTML = all.map(f => '<span class="filter-pill">' + f + '</span>').join('');
  }

  function getChecked(type) {
    return Array.from(
      document.querySelectorAll('[data-type=' + type + ']:checked')
    ).map(cb => cb.dataset.val);
  }

  // ── Attach row click + checkbox listeners ─────────────────────
  function bindRows() {
    document.querySelectorAll('.project-row').forEach(function (row, idx) {
      row.addEventListener('click', function () {
        renderDetail(idx);
      });
    });
  }

  function rebind() {
    document.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', applyFilters);
    });
    bindRows();
  }

  // ── Clear all ─────────────────────────────────────────────────
  window.clearAll = function () {
    document.querySelectorAll('input[type=checkbox]').forEach(cb => (cb.checked = false));
    applyFilters();
  };

  // ── Mobile sidebar toggle ─────────────────────────────────────
  window.toggleFilters = function () {
    const btn   = document.getElementById('filterToggle');
    const inner = document.getElementById('sidebarInner');
    const isOpen = inner.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
  };

  // ── Init ──────────────────────────────────────────────────────
  checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));
  bindRows();
  applyFilters();

})();
