import Image from "next/image";

export default function FilmsPage() {
  return (
    <main className="films-shell">
      <header className="films-top">
        <a className="films-brand" href="https://blatantspace.com">
          Blatant Space
        </a>
        <div className="films-date">
          <span className="films-date-full">Pre-Construction Films · </span>
          August 2026
        </div>
      </header>

      <h1 className="films-h1">
        Sell the finished home before the foundation is poured.
      </h1>

      <figure className="films-hero">
        <Image
          src="/films/hero-golden.webp"
          alt="Photorealistic frame of an unbuilt infill home on an established street"
          width={2000}
          height={1117}
          sizes="(max-width: 768px) 100vw, 46rem"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <figcaption className="films-hero-caption">
          Production frame. The home above does not exist yet.
        </figcaption>
      </figure>

      <p className="films-lede">
        Photorealistic films of unbuilt homes — the completed house, on its real
        lot, in its real neighbourhood — finished as a designed piece: titles,
        end card, and motion graphics. CGI animation needs a full 3D model and
        two to six weeks; we work from your drawings and deliver in about a
        week, every frame reviewed by hand.
      </p>

      <div className="films-label">Pricing</div>

      <div className="films-tier">
        <div className="films-tier-name">The Film</div>
        <div className="films-tier-price">
          $700
          <small>per home · CAD</small>
        </div>
        <p className="films-tier-desc">
          A 30-second exterior film of the finished home — day and dusk —
          plus five photorealistic stills. Titles, end card, and a
          motion-graphics finish designed for the listing. Licensed music,
          widescreen and vertical formats, two revision rounds. One house,
          one look — listings, signage, web, and social.
        </p>
      </div>

      <div className="films-tier">
        <div className="films-tier-name">Three or more homes</div>
        <div className="films-tier-price">
          $550
          <small>per home · CAD</small>
        </div>
        <p className="films-tier-desc">
          The same film (day and dusk), stills, and motion-graphics system
          for each home — consistent visual identity across the portfolio,
          priority scheduling as lots open.
        </p>
      </div>

      <div className="films-label">Additions</div>

      <table className="films-addons">
        <tbody>
          <tr>
            <td>
              Extra stills or cut-downs{" "}
              <span className="note">
                — 15s spots, square formats, alternate music
              </span>
            </td>
            <td className="price">$100 each</td>
          </tr>
          <tr>
            <td>
              Rush delivery{" "}
              <span className="note">— three business days</span>
            </td>
            <td className="price">+30%</td>
          </tr>
        </tbody>
      </table>

      <div className="films-cols">
        <div>
          <div className="films-label">What We Need From You</div>
          <ul className="films-list">
            <li>
              <em>Elevations and floor plans</em>
              <span className="sub">PDF is fine — no 3D model required.</span>
            </li>
            <li>
              <em>Exterior material &amp; finish selections</em>
              <span className="sub">
                Cladding, roofing, window frames, door — a schedule, or
                supplier photos.
              </span>
            </li>
            <li>
              <em>The lot address</em>
              <span className="sub">
                We photograph the site and streetscape ourselves if needed.
              </span>
            </li>
            <li>
              <em>Any existing renderings</em>
              <span className="sub">
                Helpful but not required; drawings are enough.
              </span>
            </li>
            <li>
              <em>Your branding, if desired</em>
              <span className="sub">
                Logo, type, and colours — we design the titles and end card
                around them.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div className="films-label">How It Works</div>
          <ol className="films-process">
            <li>
              <div>
                Brief
                <span className="sub">
                  A short call. Design intent, buyer, where the film will run.
                </span>
              </div>
            </li>
            <li>
              <div>
                Stills approval
                <span className="sub">
                  You approve the realized house as still imagery before any
                  film is produced.
                </span>
              </div>
            </li>
            <li>
              <div>
                The film
                <span className="sub">
                  Production, edit, and motion graphics — titles, pacing, end
                  card. First cut, two revision rounds.
                </span>
              </div>
            </li>
            <li>
              <div>
                Delivery
                <span className="sub">
                  All formats, ready for MLS, web, and social. About one week,
                  brief to delivery.
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <blockquote className="films-quote">
        Marketing on a new build typically runs under one percent of the sale
        price. One film is a fraction of that line — and it works every day
        the home is unsold, on every channel, before a shovel touches the lot.
      </blockquote>

      <div className="films-label">Context</div>
      <p className="films-lede" style={{ fontSize: "0.95rem" }}>
        Conventional listing videography requires a finished house — the best
        local packages top out around $850 for a home that already exists.
        Traditional CGI animation studios quote $2,000–$7,500 USD for a
        comparable 30-second piece, require complete CAD models, and deliver
        in two to six weeks. We price alongside the best videography, deliver
        what only CGI could — and in days, for every home you build, not just
        the flagship.
      </p>

      <p className="films-fine">
        All prices CAD, GST additional. Deliverables licensed for the marketing
        of the subject property across all channels, in perpetuity. Films
        depict the designed home photorealistically on its actual lot; minor
        material rendering variances from final construction may occur, and a
        disclosure line for marketing compliance is included on request.
        Scheduling: 50% on booking, 50% on delivery. Revisions beyond the
        included rounds billed at $100 per round.
      </p>

      <a
        className="films-cta"
        href="mailto:blatantspace@gmail.com?subject=Pre-construction%20film"
      >
        Send elevations
      </a>

      <footer className="films-foot">
        <div>Blatant Space — Ben Myers</div>
        <a href="mailto:blatantspace@gmail.com">blatantspace@gmail.com</a>
      </footer>
    </main>
  );
}
