import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IndustryEditions = () => {
  const editions = [
    {
      id: 'kpi-domains',
      label: 'KPI Domains',
      title: '1,100+ KPIs Across SAP and Related Operational Domains',
      subtitle: 'Broad coverage — and growing',
      features: [
        'SAP Core Operations — enqueue, background jobs, work processes, users, runtime errors, RFC, locks, updates, system statistics',
        'HANA Database — services, service components, OS-level monitoring, alerts',
        'Predictive Early Warning — number ranges, file systems, table growth',
        'Logs, Audit & Governance — application logs, system logs, audit logs, archiving data',
        'Infrastructure — operating system visibility',
        'Business Process / Interfaces — IDocs and integration-related visibility',
        'SAP BTP — global accounts, events, Cloud Foundry instances & applications',
      ]
    },
    {
      id: 'cloud-alm',
      label: 'vs Cloud ALM',
      title: 'SOM vs SAP Cloud ALM',
      subtitle: 'Baseline ALM + operations for SAP customers',
      features: [
        'Cloud ALM: SaaS-only, SAP-managed — not installable on-prem',
        'Cloud ALM: Non-SAP monitoring is mainly integration-centric, not deep APM',
        'Cloud ALM: Capacity governed by tenant entitlements / fair-use',
        'Cloud ALM: Retention bounded by service/app rules (SaaS model)',
        'SOM: Customer-operated (on-prem-first / customer-controlled)',
        'SOM: Direct non-SAP monitoring via APIs/exporters/agents',
        'SOM: No SaaS quota ceiling — scale governed by sizing/ops',
        'SOM: Retain raw data at any interval as long as policy allows',
      ]
    },
    {
      id: 'focused-run',
      label: 'vs Focused Run',
      title: 'SOM vs SAP Focused Run',
      subtitle: 'Advanced enterprise-scale operations cockpit',
      features: [
        'FRUN: Separate platform with infrastructure + implementation + ongoing ops effort',
        'FRUN: Customer-operated but heavyweight to run',
        'FRUN: Broader enterprise ops posture, still SAP-centric',
        'FRUN: 28-day default retention for system monitoring historical data',
        'SOM: Typically lower TCO than FRUN — lighter stack + commodity infra',
        'SOM: Unified KPI model across SAP + non-SAP via APIs/exporters',
        'SOM: Store raw + generate rollups without losing raw data',
        'SOM: Better for deep RCA + ML training with raw data retention',
      ]
    },
    {
      id: 'financial-impact',
      label: 'Financial Impact',
      title: 'The Financial Impact of SAP Outages',
      sections: [
        { name: '$300K+ / hour', desc: '90% of mid-size and large enterprises report hourly downtime costs exceeding $300,000. 41% report costs between $1M and $5M+ per hour.' },
        { name: '54% Preventable', desc: '54% of respondents said their most recent significant outage cost more than $100,000. Many were considered preventable with better management and monitoring.' },
        { name: '$146M Median Annual', desc: 'Median annual downtime of 77 hours for high-impact outages, translating to $146 million in median annual outage cost.' },
        { name: '$400B Global Loss', desc: 'Global 2000 companies lose about $400 billion annually from downtime, with an average 2.5% stock price drop after a single event.' },
      ]
    },
  ];

  return (
    <section id="industry-editions" className="py-32 bg-muted/50 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            SOM Coverage & Comparison
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade monitoring coverage with transparent comparison against SAP&apos;s own offerings.
          </p>
        </div>

        <Tabs defaultValue="kpi-domains" className="max-w-5xl mx-auto">
          <div className="overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <TabsList className="inline-flex w-max min-w-full justify-start md:justify-center bg-slate-900/50 border border-border/50 p-1.5 h-auto rounded-2xl backdrop-blur-sm">
              {editions.map((edition) => (
                <TabsTrigger
                  key={edition.id}
                  value={edition.id}
                  className="px-5 py-3 text-sm md:text-base text-muted-foreground data-[state=active]:bg-teal-500 data-[state=active]:text-black data-[state=active]:font-medium rounded-xl transition-all duration-300"
                >
                  {edition.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {editions.map((edition) => (
            <TabsContent key={edition.id} value={edition.id} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
              <Card className="bg-card border-4 border-border/80 dark:border-border/60 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden hover:border-hero-accent-1/40 hover:shadow-[0_25px_70px_-10px_rgba(45,212,191,0.2)] transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-accent via-accent/50 to-accent border-b-4 border-border/80 dark:border-border/60 p-8 md:p-10">
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">{edition.title}</CardTitle>
                  {edition.subtitle && <CardDescription className="text-teal-400 text-lg font-medium">{edition.subtitle}</CardDescription>}
                </CardHeader>
                <CardContent className="p-8 md:p-10">
                  {edition.features && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {edition.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="w-2 h-2 mt-2.5 rounded-full bg-hero-accent-1 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {edition.sections && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {edition.sections.map((section, i) => (
                        <div key={i} className="p-6 rounded-xl bg-accent border-2 border-border/80 dark:border-border/60 hover:bg-background/50 hover:border-hero-accent-1/60 hover:shadow-xl hover:shadow-hero-accent-1/10 hover:-translate-y-1 transition-all duration-300">
                          <h4 className="text-xl font-bold text-foreground mb-3">{section.name}</h4>
                          <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default IndustryEditions;
