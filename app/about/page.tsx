import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-sans">
      {/* Gradient overlay orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <main className="relative z-10 flex flex-1 w-full max-w-3xl mx-auto flex-col gap-10 py-16 px-8 sm:px-16">
        {/* Page heading */}
        <section className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl flex-shrink-0">
            <Image
              src="https://img.saysdont.com/images/etienne_wcf.jpeg"
              alt="Etienne Jacquot"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            About Me
          </h1>
        </section>

        {/* Bio */}
        <section className="flex flex-col gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-zinc-200 leading-relaxed text-base sm:text-lg">
          <p>
            My name is <strong>Etienne Jacquot</strong>, a 30-year-old born and raised in Philadelphia, PA.</p>
          <p> In my academic career, I attended{" "}
            <a href="https://centralhigh.net/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Central High School</a>{" "}
            (#273) before enrolling in <a href="https://drexel.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Drexel University</a>, and transferred after one year to the{" "}
            <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">University of Pennsylvania</a>. In May 2020, I earned a Bachelor of Arts (BA) in{" "}
            <a href="https://web.sas.upenn.edu/philosophyclassof2020/etienne-jacquot/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Philosophy of Science</a>{" "}
            with a minor in cognitive sciences. In May 2026, I completed my graduate studies with a Master in Law (ML) degree from the <a href="https://www.law.upenn.edu/admissions/master-in-law" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Penn Carey Law school</a>.          </p>

          <p>
            In my professional career, I&apos;ve spent the last 10 years working at UPenn as an IT Systems Administrator and DevOps engineer at the{" "}
            <a href="https://www.asc.upenn.edu" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Annenberg School for Communication</a>.
            My work involves supporting data science, grant-funded research, and web development initiatives across the school's departments, labs, and centers. 
          </p>

          <p>

            In my free time, I enjoy running in the summer, snowboarding in the winter, traveling the world to experience new things, 
            digging for & spinning vinyl records <a href="https://img.saysdont.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">b2b</a>,
            all things open source, and having various modes of artistic expression.
          </p>
        </section>
      </main>
    </div>
  );
}
