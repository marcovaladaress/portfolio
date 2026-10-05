import { certifications, education, experience } from "@/lib/profile";

const Journey = () => {
  return (
    <section id="journey" className="container mx-auto px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="glow mb-16 text-3xl md:text-4xl">Trajetória</h2>

        <div className="grid gap-16 md:grid-cols-[1fr_340px]">
          <ol className="space-y-12">
            {experience.map((job) => (
              <li
                key={job.role + job.company}
                className="grid gap-2 sm:grid-cols-[140px_1fr]"
              >
                <p className="text-primary text-xs tracking-wider uppercase">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-base">{job.role}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {job.company}
                  </p>
                  <p className="text-muted-foreground mt-3 max-w-lg text-sm">
                    {job.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-10">
            <div>
              <h3 className="text-muted-foreground mb-4 font-sans text-xs tracking-widest uppercase">
                Formação
              </h3>
              <p className="text-sm">{education.course}</p>
              <p className="text-muted-foreground mt-1 text-xs">
                {education.school} · {education.period}
              </p>
            </div>

            <div>
              <h3 className="text-muted-foreground mb-2 font-sans text-xs tracking-widest uppercase">
                Certificados
              </h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.name} className="border-border border-b py-3">
                    <p className="text-sm">{cert.name}</p>
                    <p className="text-muted-foreground mt-0.5 text-xs">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
