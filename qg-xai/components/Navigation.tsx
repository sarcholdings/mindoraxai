'use client'

import { useMemo, useRef, useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search, Globe, Phone, User, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

// Types for navigation structure - updated for three levels
type NavLeaf = {
	label: string;
	action: () => void;
};

type NavSubGroup = NavLeaf & {
	subItems?: NavLeaf[];
};

type NavGroup = NavLeaf & {
	subItems?: NavSubGroup[];
};

type TopNav = {
	label: string;
	items: NavGroup[];
};

interface NavigationProps {
  activeHero?: string;
  onHeroChange?: (hero: string) => void;
  heroTheme?: string;
}

const Navigation = ({ activeHero = "hero", onHeroChange, heroTheme = "blue" }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeThirdDropdown, setActiveThirdDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Theme
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const cycleTheme = () => {
    if (resolvedTheme === 'light') setTheme('dark');
    else setTheme('light');
  };

  const ThemeIcon = !mounted ? Sun : resolvedTheme === 'dark' ? Moon : Sun;
  const themeLabel = !mounted ? 'Light' : resolvedTheme === 'dark' ? 'Dark' : 'Light';

  // Timer ref for delayed dropdown close
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const subDropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const thirdDropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation items with three-level structure (default fallback)
  const defaultNavigationItems: TopNav[] = [
    {
      label: 'Home',
      items: [
        {
          label: 'Home',
          action: () => { window.location.href = '/'; }
        }
      ]
    },
    // {
    //   label: 'Offerings',
    //   items: [
    //     {
    //       label: 'Offerings',
    //       action: () => { window.location.href = '/offerings'; },
    //       subItems: [
    //         {
    //           label: 'SAP',
    //           action: () => { window.location.href = '/offerings/sap'; },
    //           subItems: [
    //             { label: 'Brownfield Migration', action: () => { window.location.href = '/offerings/sap/brownfield'; } },
    //             { label: 'S/4HANA Public Cloud', action: () => { window.location.href = '/offerings/sap/public-cloud'; } },
    //             { label: 'ERP Modernization', action: () => { window.location.href = '/offerings/sap/modernization'; } },
    //             { label: 'Data Migration and Quality', action: () => { window.location.href = '/offerings/sap/data-migration'; } },
    //             { label: 'Universal Parallel Accounting', action: () => { window.location.href = '/offerings/sap/upa'; } },
    //             { label: 'Integration and Extensions', action: () => { window.location.href = '/offerings/sap/integration'; } },
    //           ]
    //         },
    //         {
    //           label: 'Finance',
    //           action: () => { window.location.href = '/offerings/finance'; },
    //           subItems: [
    //             { label: 'Central Finance', action: () => { window.location.href = '/offerings/finance/central-finance'; } },
    //             { label: 'Close and Reporting Automation', action: () => { window.location.href = '/offerings/finance/close-automation'; } },
    //             { label: 'Predictive Planning and FP&A', action: () => { window.location.href = '/offerings/finance/fpa'; } },
    //             { label: 'Controllership and Treasury', action: () => { window.location.href = '/offerings/finance/controllership-treasury'; } },
    //             { label: 'Finance Operate', action: () => { window.location.href = '/offerings/finance/operate'; } },
    //             { label: 'GBS for Finance', action: () => { window.location.href = '/offerings/finance/gbs'; } },
    //           ]
    //         },
    //         {
    //           label: 'Supply Chain',
    //           action: () => { window.location.href = '/offerings/scm'; },
    //           subItems: [
    //             { label: 'Connected Planning', action: () => { window.location.href = '/offerings/scm/connected-planning'; } },
    //             { label: 'Real-time Visibility', action: () => { window.location.href = '/offerings/scm/visibility'; } },
    //             { label: 'Adaptive Fulfillment', action: () => { window.location.href = '/offerings/scm/fulfillment'; } },
    //             { label: 'Digital Manufacturing', action: () => { window.location.href = '/offerings/scm/digital-mfg'; } },
    //             { label: 'Logistics Optimization', action: () => { window.location.href = '/offerings/scm/logistics'; } },
    //             { label: 'Sustainability and Traceability', action: () => { window.location.href = '/offerings/scm/traceability'; } },
    //           ]
    //         },
    //         {
    //           label: 'Cloud',
    //           action: () => { window.location.href = '/offerings/cloud'; },
    //           subItems: [
    //             { label: 'Cloud Migration', action: () => { window.location.href = '/offerings/cloud/migration'; } },
    //             { label: 'Clean Core Enablement', action: () => { window.location.href = '/offerings/cloud/clean-core'; } },
    //             { label: 'Platform Engineering', action: () => { window.location.href = '/offerings/cloud/platform-engineering'; } },
    //             { label: 'DevSecOps and SRE', action: () => { window.location.href = '/offerings/cloud/devsecops'; } },
    //             { label: 'FinOps and Cost Optimization', action: () => { window.location.href = '/offerings/cloud/finops'; } },
    //           ]
    //         },
    //       ]
    //     },
    //     // {
    //     //   label: 'Solutions',
    //     //   action: () => { window.location.href = '/solutions'; },
    //     //   subItems: [
    //     //     { label: 'Transformation Control Tower', action: () => { window.location.href = '/solutions/transformation-control-tower'; } },
    //     //     { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/solutions/partner-ecosystem-strategy'; } },
    //     //     { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/solutions/ai-data-intelligent-enterprise'; } },
    //     //   ]
    //     // },
    //     {
    //       label: 'Enablers',
    //       action: () => { window.location.href = '/enablers'; },
    //       subItems: [
    //         {
    //           label: 'Enterprise Navigation Office',
    //           action: () => { window.location.href = '/enablers/eno'; },
    //           subItems: [
    //             { label: 'Operating Model and Governance', action: () => { window.location.href = '/enablers/eno/operating-model'; } },
    //             { label: 'Portfolio and Roadmap Control', action: () => { window.location.href = '/enablers/eno/portfolio'; } },
    //             { label: 'Value Engineering and Benefits', action: () => { window.location.href = '/enablers/eno/value'; } },
    //             { label: 'Risk and Issue Management', action: () => { window.location.href = '/enablers/eno/risk'; } },
    //           ]
    //         },
    //         {
    //           label: 'Program Planning and Execution',
    //           action: () => { window.location.href = '/enablers/program'; },
    //       subItems: [
    //             { label: 'Accelerated Planning', action: () => { window.location.href = '/enablers/program/accelerated-planning'; } },
    //             { label: 'Intelligent Testing and QA', action: () => { window.location.href = '/enablers/program/qa-automation'; } },
    //             { label: 'Cloud Modernization and Platforms', action: () => { window.location.href = '/enablers/program/cloud-modernization'; } },
    //             { label: 'Change Enablement and Adoption', action: () => { window.location.href = '/enablers/program/change'; } },
    //           ]
    //         },
    //         {
    //           label: 'Partner Ecosystem Strategy',
    //           action: () => { window.location.href = '/enablers/partners'; },
    //       subItems: [
    //             { label: 'Current State Assessment', action: () => { window.location.href = '/enablers/partners/assessment'; } },
    //             { label: 'RFI and RFP Management', action: () => { window.location.href = '/enablers/partners/rfx'; } },
    //             { label: 'Solution Fit and Integration', action: () => { window.location.href = '/enablers/partners/fit'; } },
    //             { label: 'Launch Readiness', action: () => { window.location.href = '/enablers/partners/readiness'; } },
    //             { label: 'Business Case and ROI', action: () => { window.location.href = '/enablers/partners/business-case'; } },
    //             { label: 'Ecosystem Mapping', action: () => { window.location.href = '/enablers/partners/ecosystem'; } },
    //           ]
    //         },
    //         {
    //           label: 'AI and Data for the Intelligent Enterprise',
    //           action: () => { window.location.href = '/enablers/ai-data'; },
    //           subItems: [
    //             { label: 'Data Governance and Stewardship', action: () => { window.location.href = '/enablers/ai-data/governance'; } },
    //             { label: 'Data Architecture and Integration', action: () => { window.location.href = '/enablers/ai-data/architecture'; } },
    //             { label: 'Analytics and Decision Intelligence', action: () => { window.location.href = '/enablers/ai-data/analytics'; } },
    //             { label: 'Applied AI and Automation', action: () => { window.location.href = '/enablers/ai-data/applied-ai'; } },
    //             { label: 'Emerging Tech', action: () => { window.location.href = '/enablers/ai-data/emerging-tech'; } },
    //             { label: 'MLOps and Model Governance', action: () => { window.location.href = '/enablers/ai-data/mlops'; } },
    //             { label: 'Archiving and Retention', action: () => { window.location.href = '/enablers/ai-data/archiving'; } },
    //           ]
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Products',
    //       action: () => { window.location.href = '/products'; },
    //       subItems: [
    //         {
    //           label: 'MindoraX AI',
    //           action: () => { window.location.href = '/products/mindorax-ai'; },
    //           subItems: [
    //             { label: 'Finance', action: () => { window.location.href = '/products/mindorax-ai/finance'; } },
    //             { label: 'ERP', action: () => { window.location.href = '/products/mindorax-ai/erp'; } },
    //             { label: 'Supply Chain', action: () => { window.location.href = '/products/mindorax-ai/scm'; } },
    //             { label: 'Cloud and Platforms', action: () => { window.location.href = '/products/mindorax-ai/cloud'; } },
    //             { label: 'Control Tower', action: () => { window.location.href = '/products/mindorax-ai/control-tower'; } },
    //           ]
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Industries',
    //       action: () => { window.location.href = '/industries'; },
    //       subItems: [
    //         { label: 'Financial Services and Insurance', action: () => { window.location.href = '/industries/fsi'; } },
    //         { label: 'Technology, Media, and Telecom', action: () => { window.location.href = '/industries/tmt'; } },
    //         { label: 'Life Sciences and Healthcare', action: () => { window.location.href = '/industries/health'; } },
    //         { label: 'Manufacturing and Industrial', action: () => { window.location.href = '/industries/manufacturing'; } },
    //         { label: 'Consumer Goods and Retail', action: () => { window.location.href = '/industries/retail'; } },
    //         { label: 'Energy and Utilities', action: () => { window.location.href = '/industries/energy'; } },
    //         { label: 'Automotive and Transportation', action: () => { window.location.href = '/industries/auto'; } },
    //         { label: 'Government and Public Services', action: () => { window.location.href = '/industries/public-sector'; } },
    //       ]
    //     },
    //   ]
    // },
    {
      label: 'Careers',
      items: [
        {
          label: 'Careers',
          action: () => { window.location.href = '/careers'; }
        }
      ]
    },
    {
      label: 'Contact Us',
      items: [
        {
          label: 'Contact Us',
          action: () => { window.location.href = '/contact'; }
        }
      ]
    }
  ];

  const navigationItems = defaultNavigationItems;

  // Handlers for dropdown with delay on close
  const handleDropdownMouseEnter = (label: string) => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    dropdownCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
      setActiveThirdDropdown(null);
    }, 1000);
  };

  const handleSubDropdownMouseEnter = (label: string) => {
    if (subDropdownCloseTimer.current) {
      clearTimeout(subDropdownCloseTimer.current);
      subDropdownCloseTimer.current = null;
    }
    setActiveSubDropdown(label);
  };

  const handleSubDropdownMouseLeave = () => {
    if (subDropdownCloseTimer.current) {
      clearTimeout(subDropdownCloseTimer.current);
    }
    subDropdownCloseTimer.current = setTimeout(() => {
      setActiveSubDropdown(null);
      setActiveThirdDropdown(null);
    }, 2000);
  };

  const handleThirdDropdownMouseEnter = (label: string) => {
    if (thirdDropdownCloseTimer.current) {
      clearTimeout(thirdDropdownCloseTimer.current);
      thirdDropdownCloseTimer.current = null;
    }
    setActiveThirdDropdown(label);
  };

  const handleThirdDropdownMouseLeave = () => {
    if (thirdDropdownCloseTimer.current) {
      clearTimeout(thirdDropdownCloseTimer.current);
    }
    thirdDropdownCloseTimer.current = setTimeout(() => {
      setActiveThirdDropdown(null);
    }, 2000);
  };

  // Dynamic theme styling based on active hero — theme-aware colors
  const getThemeStyles = () => {
    switch (heroTheme) {
      case 'green':
        return {
          text: 'text-foreground',
          hover: 'hover:text-hero-accent-2'
        };
      case 'cyan':
        return {
          text: 'text-foreground',
          hover: 'hover:text-hero-accent-3'
        };
      case 'purple':
        return {
          text: 'text-foreground',
          hover: 'hover:text-hero-accent-4'
        };
      case 'blue':
      default:
        return {
          text: 'text-foreground',
          hover: 'hover:text-hero-accent-1'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 max-w-[1400px] z-50 transition-all duration-500 rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 shadow-2xl text-blue-900">
      <div className="px-12 py-3">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.location.href = '/'}
            role="button"
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = '/';
              }
            }}
          >
            <div className="relative">
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-blue-600 transition-all duration-300">
                MindoraX
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  // Open dropdown and prime first sub category (for mega menu style)
                  handleDropdownMouseEnter(item.label);
                  const firstWithChildren = item.items.find((i: any) => i.subItems && i.subItems.length > 0);
                  if (firstWithChildren) {
                    setActiveSubDropdown(firstWithChildren.label);
                    // For three-level navigation, also set the first third-level item
                    const firstWithThirdLevel = firstWithChildren.subItems?.find((subI: any) => subI.subItems && subI.subItems.length > 0);
                    if (firstWithThirdLevel) {
                      setActiveThirdDropdown(firstWithThirdLevel.label);
                    } else {
                      setActiveThirdDropdown(null);
                    }
                  } else {
                    setActiveSubDropdown(null);
                    setActiveThirdDropdown(null);
                  }
                }}
                onMouseLeave={handleDropdownMouseLeave}
                style={{ display: 'inline-block' }}
              >
                <button
                  className="flex items-center text-blue-900 hover:text-blue-700 transition-colors duration-200 font-semibold"
                  // If Home, Careers or Contact Us, make the button directly clickable
                  onClick={
                    (item.label === 'Home' || item.label === 'Careers' || item.label === 'Contact Us' || item.label === 'MindoraX AI Platform')
                      ? item.items[0].action
                      : undefined
                  }
                >
                  {item.label}
                  {(item.label !== 'Home' && item.label !== 'Careers' && item.label !== 'Contact Us' && item.label !== 'MindoraX AI Platform') && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  (() => {
                    const hasThreeLevels = item.items.some((i: any) => i.subItems && i.subItems.some((subI: any) => subI.subItems && subI.subItems.length > 0));
                    const hasTwoLevels = item.items.some((i: any) => i.subItems && i.subItems.length > 0);
                    const isMega = hasThreeLevels || hasTwoLevels;
                    
                    // If Home, Careers or Contact Us, do not show dropdown
                    if (item.label === 'Home' || item.label === 'Careers' || item.label === 'Contact Us' || item.label === 'MindoraX AI Platform') {
                      return null;
                    }
                    if (!isMega) {
                      // Simple list dropdown
                      return (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 rounded-xl py-2 z-50 bg-white/92 backdrop-blur-md border border-white/70 shadow-2xl"
                          onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {item.items.map((subItem: any) => (
                            <button
                              key={subItem.label}
                              onClick={subItem.action}
                              className="block text-left px-4 py-2 text-sm text-blue-900 hover:bg-white/70 hover:text-blue-700 transition-colors duration-150 rounded-lg mx-1 w-[calc(100%-0.5rem)]"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      );
                    }

                    // Mega menu layout with three levels
                    const selectedCategory = item.items.find((i: any) => i.label === activeSubDropdown) || item.items.find((i: any) => i.subItems && i.subItems.length > 0);
                    const selectedThirdLevel = selectedCategory?.subItems?.find((i: any) => i.label === activeThirdDropdown);

                    return (
                      <div
                        className="absolute top-full left-0 mt-2 rounded-xl z-50 bg-white/92 backdrop-blur-md border border-white/70 shadow-2xl"
                        onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex w-[800px] h-auto py-4">
                          {/* Left column: main categories */}
                          <div className="w-48 border-r border-white/20">
                            {item.items.map((subItem: any) => {
                              const isActive = activeSubDropdown === subItem.label;
                              return (
                                <button
                                  key={subItem.label}
                                  onMouseEnter={() => handleSubDropdownMouseEnter(subItem.label)}
                                  onFocus={() => handleSubDropdownMouseEnter(subItem.label)}
                                  onClick={subItem.action}
                                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                    isActive ? 'bg-white/70 font-semibold text-blue-700' : 'text-blue-900 hover:bg-white/70 hover:text-blue-700'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              );
                            })}
                          </div>

                          {/* Middle panel: sub-categories */}
                          <div className="w-48 border-r border-white/20">
                            {selectedCategory && selectedCategory.subItems && selectedCategory.subItems.length > 0 ? (
                              selectedCategory.subItems.map((subSubItem: any) => {
                                const isActive = activeThirdDropdown === subSubItem.label;
                                return (
                                  <button
                                    key={subSubItem.label}
                                    onMouseEnter={() => handleThirdDropdownMouseEnter(subSubItem.label)}
                                    onFocus={() => handleThirdDropdownMouseEnter(subSubItem.label)}
                                    onClick={subSubItem.action}
                                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                      isActive ? 'bg-white/70 font-semibold text-blue-700' : 'text-blue-900 hover:bg-white/70 hover:text-blue-700'
                                    }`}
                                  >
                                    {subSubItem.label}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="text-sm text-blue-800/40 px-4 py-2">No sub-categories</div>
                            )}
                          </div>

                          {/* Right panel: third level items */}
                          <div className="flex-1 px-4">
                            <div className="grid grid-cols-1 gap-1">
                              {selectedThirdLevel && selectedThirdLevel.subItems && selectedThirdLevel.subItems.length > 0 ? (
                                selectedThirdLevel.subItems.map((link: any) => (
                                  <button
                                    key={link.label}
                                    onClick={link.action}
                                    className="text-left px-3 py-2 rounded-lg text-sm text-blue-900 hover:bg-white/70 hover:text-blue-700 transition-colors duration-150"
                                  >
                                    {link.label}
                                  </button>
                                ))
                              ) : (
                                <div className="text-sm text-blue-800/40 px-3 py-2">
                                  {selectedCategory?.subItems?.length > 0 ? 'Select a sub-category' : 'No items available'}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme toggle */}
            <button
              onClick={cycleTheme}
              className="text-blue-900 hover:text-blue-700 transition-all duration-200 relative p-1.5 rounded-lg hover:bg-white/60"
              title={`Theme: ${themeLabel}`}
              aria-label={`Current theme: ${themeLabel}. Click to change.`}
            >
              <ThemeIcon className="h-5 w-5" />
            </button>

            <div className="w-px h-5 bg-white/30" />

            <button
              className="text-blue-900 hover:text-blue-700 transition-colors duration-200 relative p-1.5 rounded-lg hover:bg-white/60"
              onClick={() => (window.location.href = '/contact')}
            >
              <Phone className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-blue-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/60 bg-white/90 backdrop-blur-md rounded-xl mt-2">
              {/* Mobile theme toggle */}
              <div className="px-3 py-2 flex items-center justify-between border-b border-white/20 mb-2">
                <span className="text-sm font-semibold text-blue-900">Theme</span>
                <button
                  onClick={cycleTheme}
                  className="flex items-center p-2 rounded-lg bg-white/70 text-blue-700"
                  title={`Theme: ${themeLabel}`}
                >
                  <ThemeIcon className="h-5 w-5" />
                </button>
              </div>
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-blue-900 font-semibold">
                    {item.label}
                  </div>
                  {item.items.map((subItem) => (
                    <div key={subItem.label} className="space-y-1">
                      <button
                        onClick={subItem.action}
                        className="px-6 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-150 w-full text-left text-sm flex items-center justify-between"
                      >
                        <span>{subItem.label}</span>
                        {subItem.subItems && <ChevronDown className="ml-2 h-4 w-4" />}
                      </button>
                      {/* Mobile sub-items */}
                      {subItem.subItems && (
                        <div className="pl-8">
                          {subItem.subItems.map((subSubItem) => (
                            <div key={subSubItem.label} className="space-y-1">
                            <button
                              onClick={subSubItem.action}
                                className="flex px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-150 w-full text-left text-xs items-center justify-between"
                              >
                                <span>{subSubItem.label}</span>
                                {subSubItem.subItems && <ChevronRight className="ml-2 h-3 w-3" />}
                              </button>
                              {/* Mobile third level items */}
                              {subSubItem.subItems && (
                                <div className="pl-8">
                                  {subSubItem.subItems.map((thirdLevelItem) => (
                                    <button
                                      key={thirdLevelItem.label}
                                      onClick={thirdLevelItem.action}
                              className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-150 w-full text-left text-xs"
                            >
                                      {thirdLevelItem.label}
                            </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;