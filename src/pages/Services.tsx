import React from 'react';
import { motion } from 'framer-motion';
import { Car, Activity, Heart, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const carImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/car-insurance-65558bd0-1782370314708.webp";
const medicalImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/medical-insurance-411032a5-1782370314508.webp";
const lifeImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/life-insurance-7ad02193-1782370315477.webp";

const services = [
  {
    id: "car",
    title: "Car Insurance",
    subtitle: "Protect Your Drive",
    description: "Whether you're commuting to work or going on a cross-country road trip, we've got you covered with comprehensive auto insurance that protects you, your vehicle, and others on the road.",
    icon: Car,
    image: carImg,
    color: "text-blue-600",
    features: [
      "Collision & Comprehensive Coverage",
      "Liability Protection",
      "Uninsured Motorist Coverage",
      "24/7 Roadside Assistance",
      "Rental Car Reimbursement"
    ]
  },
  {
    id: "medical",
    title: "Medical Insurance",
    subtitle: "Your Health, Our Priority",
    description: "Health is your most valuable asset. Our medical insurance plans provide access to top-tier healthcare providers and financial protection against unexpected medical expenses.",
    icon: Activity,
    image: medicalImg,
    color: "text-emerald-600",
    features: [
      "Individual & Family Plans",
      "Dental & Vision Coverage",
      "Preventative Care Coverage",
      "Prescription Drug Coverage",
      "International Health Travel Coverage"
    ]
  },
  {
    id: "life",
    title: "Life Insurance",
    subtitle: "Secure Their Future",
    description: "Ensure your loved ones are financially protected even when you're no longer there. Our life insurance policies offer peace of mind and financial security for your family's future.",
    icon: Heart,
    image: lifeImg,
    color: "text-rose-600",
    features: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Final Expense Coverage",
      "Child Life Insurance"
    ]
  }
];

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive <span className="text-blue-400 italic">Protection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Discover our wide range of insurance solutions designed to safeguard what matters most to you.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-600">{service.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.color}`} />
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link to={`/quote?type=${service.id}`}>
                    <Button size="lg" className="h-14 px-8 text-lg font-bold gap-2">
                      Get a Quote for {service.title} <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className={`absolute -inset-4 rounded-3xl blur-2xl opacity-20 ${service.color.replace('text', 'bg')}`} />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-3xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ/Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
              <p className="text-slate-600">Everything you need to know about our coverage and process.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "How do I choose the right coverage?", a: "Our advisors work with you to assess your risks and budget. We'll recommend a plan that provides optimal protection without unnecessary extras." },
                { q: "Can I bundle my policies?", a: "Yes! Bundling car, home, and life insurance can save you up to 25% on your total premiums." },
                { q: "How long does it take to get a quote?", a: "Most quotes are generated instantly online. For complex life insurance policies, an advisor will contact you within 24 hours." }
              ].map((faq, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
