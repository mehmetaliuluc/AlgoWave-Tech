import { 
  CpuChipIcon, 
  ChartBarIcon, 
  CircleStackIcon, 
  ArrowPathIcon, 
  BanknotesIcon, 
  CubeTransparentIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'AI Consensus Optimization',
    description: 'Resolving conflicts in datasets for more accurate results.',
    icon: CpuChipIcon,
  },
  {
    name: 'Reinforcement Learning',
    description: 'Developing autonomous decision systems using game theory and machine learning.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Algorithms',
    description: 'Custom algorithms for data analysis and accelerating processes.',
    icon: CircleStackIcon,
  },
  {
    name: 'Correlation & Similarity Finder',
    description: 'Analyzing data relationships and identifying similar patterns.',
    icon: ChartBarIcon,
  },
  {
    name: 'Financial Tools',
    description: 'Advanced financial analysis tools to optimize investment strategies.',
    icon: BanknotesIcon,
  },
  {
    name: 'Financial Tools Leasing',
    description: 'Offering B2B clients the ability to lease customized financial tools for their operations.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Pattern Scanning System',
    description: 'Pattern recognition technology to understand market movements and make predictions.',
    icon: CubeTransparentIcon,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Leveraging AI and advanced algorithms to transform your business
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md text-blue-600">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 