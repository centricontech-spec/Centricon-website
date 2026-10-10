import { motion } from 'framer-motion';

const Privacy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide to us, such as your name, email address, and phone number when you contact us or request our services.',
        'Usage data, including information about how you interact with our website and services.',
        'Technical data, such as your IP address, browser type, and device information.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services.',
        'To communicate with you about our services, updates, and promotional offers.',
        'To respond to your inquiries and provide customer support.',
        'To analyze usage patterns and optimize our website and services.',
        'To comply with legal obligations and protect our legal rights.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption protocols to secure data transmission.',
        'Access to personal information is restricted to authorized personnel only.',
        'We regularly review and update our security practices to ensure ongoing protection.',
      ],
    },
    {
      title: 'Data Sharing and Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share your information with trusted service providers who assist us in operating our website and providing our services.',
        'We may disclose your information if required by law or to protect our rights and safety.',
        'In the event of a merger or acquisition, your information may be transferred to the acquiring entity.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, correct, or delete your personal information.',
        'You can opt-out of receiving promotional communications from us at any time.',
        'You have the right to request a copy of the personal information we hold about you.',
        'You can object to the processing of your personal information in certain circumstances.',
      ],
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience on our website.',
        'Cookies help us understand how you use our website and improve our services.',
        'You can control cookie settings through your browser preferences.',
        'Some features of our website may not function properly if cookies are disabled.',
      ],
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.',
        'We encourage you to review the privacy policies of any third-party sites you visit.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not intended for children under the age of 13.',
        'We do not knowingly collect personal information from children.',
        'If we become aware that we have collected personal information from a child, we will take steps to delete it.',
      ],
    },
    {
      title: 'Changes to This Privacy Policy',
      content: [
        'We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.',
        'We will notify you of any significant changes by posting the updated policy on our website.',
        'The date of the last update is indicated at the top of this page.',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        'If you have any questions or concerns about this privacy policy or our data practices, please contact us:',
        'Email: centricon.tech@gmail.com',
        'Phone: +92 343 3021725',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-gradient"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto"
          >
            Last Updated: October 4, 2025
          </motion.p>
        </motion.div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-gray-300 text-lg leading-relaxed">
                At Centricon, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="text-primary mr-3">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <motion.p
                      key={pIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIndex * 0.1 }}
                      className="text-gray-300 leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-12 p-6 bg-dark-lighter border border-primary/30 rounded-xl"
            >
              <p className="text-gray-300 text-center">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
