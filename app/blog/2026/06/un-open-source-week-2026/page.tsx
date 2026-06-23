import Link from "next/link";
import Image from "next/image";

export default function Post() {
  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-sans">
      <article className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-8 py-16 px-8 sm:px-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
        >
          &larr; Back to blog
        </Link>

        {/* Post header */}
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
              Conference
            </span>
            <time dateTime="2026-06-22">June 22, 2026</time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            UN Open Source Week 2026: Maintainers, Narwhals, and the Future of AI
          </h1>
          <p className="text-zinc-400 text-sm">By Etienne Jacquot</p>
        </header>

        {/* Post content */}
        <section className="prose prose-invert prose-blue max-w-none flex flex-col gap-6 text-zinc-300 leading-relaxed">
          <p>
            UN Open Source Week 2026 brought together an incredible range of people &mdash; coders,
            legal advocates, community builders, and security engineers &mdash; all united by their
            relationship to free and open source software. Here are my reflections from the first
            two days.
          </p>

          <figure className="flex flex-col gap-2">
            <Image
              src="/blog/2026/06/un-open-source-week-2026/nyc-06222026.png"
              alt="New York City - June 22, 2026 - UN Open Source Week Day One"
              width={800}
              height={450}
              className="rounded-xl w-full"
            />
            <figcaption className="text-xs text-zinc-500 text-center">NYC, June 22 2026 — Day One of UN Open Source Week</figcaption>
          </figure>

          <h2 className="text-xl font-semibold text-white">Day One: The Maintain-a-thon</h2>
          <p>
            Day one offered three tracks: a hackathon, an editathon, and a maintain-a-thon. I chose
            the latter, and it turned out to be a fascinating window into the hearts and minds of
            developer teams &mdash; not just coding folks, but a whole breadth of non-technical
            business, legal, and community advocate positions &mdash; sharing their pain points
            maintaining critical FOSS software.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">Sake, Sashimi, and Origin Stories</h3>
          <p>
            Of the presenters, I had the pleasure of joining two &mdash; Thilio from FFMPEG and Tim
            from the Drupal Organization &mdash; over sake and sashimi. Each shared how they got
            into their project. The FFMPEG maintainer has no particular interest in music or audio
            other than occasionally practicing a hundred-year-old violin in his countryside house
            in the suburbs of Berlin. He mentioned having a professor who was an early maintainer
            of the FFMPEG project. Tim similarly joined Drupal because a former mentor who taught
            him coding was particularly interested in content management on Drupal 4.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">Security, Imposter Syndrome, and Pushing Through</h3>
          <p>
            After lunch it was raining as we walked back to the United Nations. With the post-lunch
            lull setting in, we returned to the maintain-a-thon to hear from lead security engineers
            sponsored by{" "}
            <a
              href="https://openssf.org/community/alpha-omega/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Alpha-Omega
            </a>{" "}
            at the PyPI &amp; Python organizations.
          </p>
          <p>
            In a handful of the breakout sessions, I experienced what it always feels like in tech
            &mdash; being an outsider. The overwhelming feeling of imposter syndrome, that you maybe
            (both technically but also vibes-wise) don&apos;t belong in the room. But as a consumer
            of open source software, it&apos;s important to push yourself to be in these spaces.
            It&apos;s like enjoying a tasty meal but never knowing the chef, or the kitchen, or any
            of the utensils, herbs, and spices.
          </p>
          <p>
            Going outside of your comfort zone means at the very least you start to know what
            questions to ask.
          </p>

          <h3 className="text-lg font-semibold text-zinc-100">Capacity, Burnout, and Narwhals</h3>
          <p>
            In facilitating discussion between recent college graduates, old-school FOSS maintainers
            who never moved off vim or nano, and more experienced (and siloed, and compensated)
            industry developers, it is humbling to realize just how fast technology is moving &mdash;
            and that we are all always reinventing ourselves and the work we do.
          </p>
          <p>
            A common theme: while OSS maintenance and burnout are ubiquitous, it is a unique
            privilege to have the opportunity to participate and contribute to public code. We&apos;re
            all at different stages of personal and professional life, and many of these codebases
            might (at least functionally) go on to outlive the developers.
          </p>
          <p>
            Another big topic was <strong>capacity</strong> &mdash; capacity for a single individual,
            for organizations, for mentorship and onboarding new junior developers, for token context.
            For a lot of folks, especially in cybersecurity, it&apos;s always been <em>trial by fire</em>:
            you get good at digital security not as a passion but usually out of necessity &mdash; an
            off-hours email from your boss, a downtime notification, some global incident you find
            out about on social media. There&apos;s probably a gap in education for new engineers
            when it comes to building capacity to introduce new workers into the field.
          </p>
          <p>
            Notions of capacity go beyond job descriptions too &mdash; we&apos;re all wearing so
            many hats. Someone was asked to put all the hats they wear into a job description, for
            which I asked: &ldquo;Yes, how would you describe being a unicorn at your
            organization?&rdquo; They quipped back that they prefer to think of themselves as a
            narwhal. I was left thinking that unicorns are maybe exclusionary, whereas narwhals
            could be a new way of thinking about building capacity that is inclusive, proactive,
            digital native, and at least trying to anticipate society&apos;s need for more
            unicorn-like talent.
          </p>

          <figure className="flex flex-col gap-2">
            <Image
              src="/blog/2026/06/un-open-source-week-2026/nyc-06232026.png"
              alt="New York City - June 23, 2026 - UN Open Source Week Day Two"
              width={800}
              height={450}
              className="rounded-xl w-full"
            />
            <figcaption className="text-xs text-zinc-500 text-center">NYC, June 23 2026 — Day Two: AI and Data Sovereignty</figcaption>
          </figure>

          <h2 className="text-xl font-semibold text-white">Day Two: AI and Data Sovereignty</h2>
          <p>
            The second day was all about AI. Yann LeCun gave a great keynote sharing his thoughts
            on advanced machine intelligence which will bridge the physical-digital divide through
            projects like{" "}
            <a
              href="https://amilabs.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              AMI Labs
            </a>.
          </p>
          <p>
            His emphasis: the race for AI is unsustainable. The globe may move towards a shared
            vector representation of all human knowledge, where nations, foundations, and corporations
            retain <strong>data sovereignty</strong> on their contributions but have a mechanism to
            share vector representations of their culture, values, and standards of language.
          </p>

          <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-300">
            <li>Open source maintenance is a privilege &mdash; and a burden that needs shared capacity</li>
            <li>Imposter syndrome is universal; showing up matters more than feeling ready</li>
            <li>Be a narwhal, not a unicorn &mdash; build inclusive, proactive capacity</li>
            <li>The future of AI may depend on data sovereignty and shared vector representations</li>
            <li>Origin stories matter: mentors create maintainers</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
