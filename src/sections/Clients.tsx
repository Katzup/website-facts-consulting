import { motion } from 'framer-motion';

interface Client {
  name: string;
  detail?: string;
}

const clients: Client[] = [
  { name: 'Sun Communities', detail: 'Anaplan Implementation' },
  { name: 'ServiceSource', detail: 'Anaplan FP&A' },
  { name: 'WinTrust Financial', detail: 'Adaptive Planning' },
  { name: 'Mimecast', detail: 'Adaptive Planning' },
  { name: 'Jaguar Mining', detail: 'CPM & IFRS Transition' },
  { name: 'Global Advanced Metals', detail: 'ERP Migration' },
  { name: 'Paycor', detail: 'NetSuite/Snowflake Integration' },
  { name: 'FiscalNote', detail: 'Adaptive Planning / NetSuite' },
  { name: 'Volt Information Sciences', detail: 'Revenue Modeling' },
  { name: 'Learfield IMG', detail: 'Adaptive Planning' },
  { name: 'ScienceLogic', detail: 'ASC 606 / NetSuite' },
  { name: 'EnerNOC', detail: 'Adaptive Planning' },
  { name: 'Exponent Inc.', detail: 'Deltek Reporting' },
  { name: 'Gain, Inc.', detail: 'SOX / SOC2 Controls' },
  { name: 'Oportun', detail: 'Adaptive Insights' },
  { name: 'edX', detail: 'Adaptive Insights' },
  { name: 'RS McGladrey', detail: 'Adaptive Planning' },
  { name: 'LEWA', detail: 'Adaptive Insights / SAP' },
  { name: 'Signature', detail: 'Adaptive Insights' },
  { name: 'Unica (IBM)', detail: 'OutlookSoft / BPC' },
  { name: 'ADVO', detail: 'Hyperion Planning' },
  { name: 'Dunkin Donuts', detail: 'Hyperion Planning' },
  { name: 'ATG, Inc.', detail: 'FP&A / Oracle' },
  { name: 'PegaSystems', detail: 'SOX Compliance' },
  { name: 'Giner Electrochemical', detail: 'Business Plan / VC Funding' },
  { name: 'Catania Oils', detail: 'Cost Allocation Model' },
  { name: 'BigMouth LLC', detail: 'Adaptive Planning' },
  { name: 'Buck Global', detail: 'Adaptive Planning' },
  { name: 'Bit9', detail: 'Adaptive Planning' },
  { name: 'Boathouse Group', detail: 'Adaptive Planning' },
  { name: 'Marathon Technologies', detail: 'Adaptive Planning' },
  { name: 'Placemark Investments', detail: 'Adaptive Planning' },
  { name: 'iTaggit', detail: 'Revenue Reporting' },
  { name: 'Little Sprouts / Babilou', detail: 'Adaptive Planning' },
  { name: 'Cambridge Institute', detail: 'Adaptive Planning' },
  { name: 'Jewish Family Services', detail: 'Adaptive Planning' },
  { name: 'IntegriCo', detail: 'Financial Modeling' },
  { name: 'Mood Media', detail: 'Adaptive Planning' },
  { name: 'TalkDesk', detail: 'Adaptive Planning' },
  { name: 'WittKiefer', detail: 'Adaptive Planning' },
  { name: 'Micron Products', detail: 'FP&A / Budget' },
  { name: 'Cubellis', detail: 'Adaptive Planning' },
  { name: 'Walleye Technologies', detail: 'Business Plan' },
  { name: 'WorldHealth', detail: 'Budget / Great Plains' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Clients
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            100+ clients from startups to public companies, across 25+ industries — from mining and aerospace to SaaS and financial services.
          </p>
        </motion.div>

        {/* Industry tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            'SaaS', 'Financial Services', 'Banking', 'Mining', 'Energy',
            'Manufacturing', 'Semiconductor', 'Robotics', 'Aerospace',
            'Chemical', 'Materials', 'Construction', 'Retail', 'Advertising',
            'Healthcare', 'Education', 'Non-Profit', 'Government', 'Accounting & Auditing',
            'Recruiting', 'Real Estate', 'eCommerce', 'Cybersecurity', 'Media', 'Payroll',
          ].map((industry) => (
            <span
              key={industry}
              className="px-3 py-1 bg-dark-blue/5 text-dark-blue/70 rounded-full text-xs font-medium border border-dark-blue/10"
            >
              {industry}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover border border-transparent hover:border-accent-gold/20 transition-all duration-300 flex flex-col items-center text-center will-change-transform"
            >
              <div className="w-10 h-10 bg-dark-blue/5 rounded-lg flex items-center justify-center mb-3">
                <span className="text-dark-blue font-bold text-lg">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-dark-blue font-semibold text-sm leading-tight mb-1">
                {client.name}
              </span>
              {client.detail && (
                <span className="text-gray-400 text-xs">{client.detail}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
