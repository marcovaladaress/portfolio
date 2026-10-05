import { stackGroups, techIcons } from "@/lib/profile";

const Stacks = () => {
  return (
    <section id="stack" className="container mx-auto px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="glow mb-16 text-3xl md:text-4xl">Stack</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-primary mb-4 font-sans text-xs tracking-widest uppercase">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((name) => {
                  const Icon = techIcons[name];
                  return (
                    <li key={name} className="flex items-center gap-3 text-sm">
                      {Icon && (
                        <Icon className="text-muted-foreground h-4 w-4" />
                      )}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
