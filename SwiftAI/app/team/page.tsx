import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';
import { Linkedin } from 'lucide-react';

export const metadata = {
  title: 'Our Team | SwiftAI PRISM',
  description: 'Meet the people behind SwiftAI PRISM — leaders in enterprise technology and operational intelligence.',
};

const leaders = [
  {
    name: 'Jason Girzadas',
    title: 'Chief Executive Officer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    group: 'Leadership',
    bio: 'Seasoned enterprise technology leader with 20+ years driving digital transformation across Fortune 500 organizations.',
  },
  {
    name: 'Lara Abrash',
    title: 'Chair',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    group: 'Leadership',
    bio: 'Visionary executive with deep expertise in governance, strategy, and enterprise operations at global scale.',
  },
  {
    name: 'Alex Kim',
    title: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    linkedin: '#',
    group: 'Engineering',
    bio: 'Full-stack engineer specializing in observability platforms, real-time data pipelines, and SAP system integrations.',
  },
  {
    name: 'Priya Patel',
    title: 'Senior Frontend Engineer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    linkedin: '#',
    group: 'Engineering',
    bio: 'Expert in building high-performance UIs with deep focus on accessibility, design systems, and user experience.',
  },
  {
    name: 'Sofia Martinez',
    title: 'Marketing Lead',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    group: 'Marketing',
    bio: 'Brand strategist and growth marketer with a track record of scaling B2B SaaS products across global markets.',
  },
  {
    name: 'Michael Chen',
    title: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    linkedin: '#',
    group: 'Product',
    bio: 'Product leader focused on enterprise monitoring solutions, customer discovery, and outcome-driven roadmaps.',
  },
  {
    name: 'Emily Nguyen',
    title: 'UX/UI Designer',
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
    linkedin: '#',
    group: 'Product',
    bio: 'Designer passionate about translating complex operational data into intuitive, human-centered interfaces.',
  },
];

const groups = ['Leadership', 'Engineering', 'Product', 'Marketing'];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SwiftAINavigation scrolledByDefault />

      {/* Page hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0c1222' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange-400/50" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-orange-400/80">Our People</span>
            <div className="h-px w-10 bg-orange-400/50" />
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            The team behind <span className="text-orange-400">SwiftAI PRISM</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            A group of enterprise technologists, product designers, and operations experts united by a mission to make SAP landscapes resilient.
          </p>
        </div>
      </div>

      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {groups.map((group) => {
            const members = leaders.filter((l) => l.group === group);
            if (!members.length) return null;
            return (
              <div key={group} className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400">{group}</h2>
                  <div className="flex-1 h-px bg-border/60" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-orange-500/40 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.15)] transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-border/60 group-hover:ring-orange-500/30 transition-all shrink-0">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-base leading-tight">{member.name}</p>
                          <p className="text-xs text-orange-400 font-medium mt-0.5">{member.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-orange-400 transition-colors"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
