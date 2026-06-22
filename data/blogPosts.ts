// Sample blog posts data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'UN OSPO 2026: Leveraging Open Source for Global Good',
    excerpt: 'Exploring how open source principles are transforming international cooperation and digital public infrastructure.',
    content: `# UN OSPO 2026: A New Era of Open Source Diplomacy

Open source software has evolved from a development methodology to a fundamental principle guiding digital public infrastructure worldwide. In 2026, the United Nations Open Source Professionals Organization (UN OSPO) is at the forefront of this transformation.

## The Power of Open Collaboration

The open source movement has demonstrated that when transparency, collaboration, and community-driven development come together, remarkable innovations emerge. This same spirit is now being applied to global challenges through digital public infrastructure.

## What is Digital Public Infrastructure?

Digital public infrastructure refers to foundational systems that enable governments, organizations, and citizens to interact digitally. These include identity systems, payment infrastructure, data exchange platforms, and open-source software repositories.

## Our Mission

At UN OSPO 2026, we're working to ensure that digital public infrastructure:
- Is accessible to all nations regardless of economic status
- Prioritizes privacy and security by design
- Encourages local adaptation and community ownership
- Maintains transparency in development processes

## Getting Involved

We welcome contributions from developers, policymakers, community leaders, and advocates. Together, we can build a more equitable digital future.`,
    date: '2026-06-22',
    image: '/un-conference.jpg',
    author: 'Etienne Jacquot',
    category: 'Conference',
  },
  {
    id: '2',
    title: 'Building Sustainable Open Source Ecosystems',
    excerpt: 'Strategies for maintaining long-term open source projects in the public sector context.',
    content: `# Building Sustainable Open Source Ecosystems

Sustainability is the cornerstone of any successful open source initiative. In the public sector, where long-term maintenance is crucial, building sustainable ecosystems requires more than just good code.

## Community-Driven Development

The key to sustainability lies in community ownership and participation. When multiple stakeholders invest in a project's success, it becomes more resilient to changes in individual circumstances.

## Governance Models

Various governance models exist for public sector open source:
- Consensus-based decision making
- Technical steering committees
- Stakeholder advisory boards
- Hybrid models combining elements of each

## Funding and Resources

Sustainable ecosystems require stable funding. Consider:
- Government procurement of open source development
- Corporate sponsorships with clear community oversight
- Grants for public good technology
- Crowdfunding for specific features or improvements

## Long-Term Maintenance

Establishing clear maintenance pathways ensures projects don't become abandoned:
- Documentation of maintenance procedures
- Cross-training of maintainers
- Regular security audits
- Version management strategies`,
    date: '2026-06-15',
    image: '/open-source-community.jpg',
    author: 'Etienne Jacquot',
    category: 'Open Source',
  },
  {
    id: '3',
    title: 'AI and Open Source: A Partnership for Good',
    excerpt: 'How open source principles can guide responsible artificial intelligence development.',
    content: `# AI and Open Source: A Partnership for Good

The rapid advancement of artificial intelligence brings both opportunities and challenges. When combined with open source principles, we can work toward AI that serves the public good.

## Open AI vs. Open Source AI

It's important to distinguish between:
- Open AI: AI systems with open weights and accessible training methods
- Open Source AI: AI systems developed through collaborative, transparent processes

## The Value of Transparency

Transparency in AI development enables:
- Better understanding of model capabilities and limitations
- Community review of ethical considerations
- Local adaptation to specific contexts
- Trust through open verification processes

## Collaborative Development Models

Successful AI projects benefit from:
- Multi-stakeholder involvement
- Clear contribution guidelines
- Recognizing diverse forms of contribution
- Inclusive decision making processes

## Going Forward

As we develop AI systems for public service, let's remember that the open source approach has proven its value in creating robust, widely-adopted technologies that serve diverse communities.`,
    date: '2026-06-10',
    image: '/ai-open-source.jpg',
    author: 'Etienne Jacquot',
    category: 'AI',
  },
];