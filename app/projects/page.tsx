export default function Projects() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-8 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        My Projects
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl text-center">
        Here are some of the projects I've worked on. Check back later for updates as I continue to build new things.
      </p>
      
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* Placeholder for project cards */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="h-48 w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-6" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Project Name {item}
              </h2>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 line-clamp-3">
                A brief description of what this project is about, the technologies used, and the problem it solves. This is a placeholder for actual project details.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between w-full">
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  React
                </span>
                <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  Next.js
                </span>
              </div>
              <span className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">
                View →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
