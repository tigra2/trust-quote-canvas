import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Car, Heart, Activity, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const heroImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/hero-background-40a8ea3a-1782370315537.webp";
const carImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/car-insurance-65558bd0-1782370314708.webp";
const medicalImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/medical-insurance-411032a5-1782370314508.webp";
const lifeImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2994cf7e-3e7c-41c3-8730-f9f9e12add34/life-insurance-7ad02193-1782370315477.webp";

const services = [
  {
    title: "Car Insurance",
    description: "Get comprehensive coverage for your vehicle and peace of mind on every journey.",
    icon: Car,
    image: carImg,
    href: "/services#car",
    color: "bg-blue-500"
  },
  {
    title: "Medical Insurance",
    description: "Quality healthcare coverage for you and your family, whenever you need it most.",
    icon: Activity,
    image: medicalImg,
    href: "/services#medical",
    color: "bg-emerald-500"
  },
  {
    title: "Life Insurance",
    description: "Secure your family's future with flexible plans tailored to your long-term goals.",
    icon: Heart,
    image: lifeImg,
    href: "/services#life",
    color: "bg-rose-500"
  }
];

const stats = [
  { label: "Clients Protected", value: "50k+" },
  { label: "Claims Paid", value: "98%" },
  { label: "Years of Trust", value: "14+" },
  { label: "Expert Advisors", value: "200+" }
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Insurance Hero" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Trusted by 50,000+ Families</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Insurance Built Around <span className="text-blue-400 italic">Your Life</span>.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              From your first car to your family's future, EDVAN AGENCY provides modern insurance solutions that actually make sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold gap-2 shadow-lg shadow-primary/20">
                  Get My Free Quote <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md">
                  Explore Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tailored Protection for You</h3>
            <p className="text-slate-600 max-w-2xl text-lg">
              We offer a wide range of insurance products designed to meet the unique needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className={`${service.color} p-3 rounded-xl shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      to={service.href} 
                      className="inline-flex items-center gap-2 font-bold text-blue-600 group/link"
                    >
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Working Together" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm font-medium text-slate-900 leading-relaxed italic">
                  "EDVAN AGENCY made the whole process so simple. Best service I've ever had."
                </p>
                <div className="mt-3 text-xs font-bold text-slate-500">— Sarah J., Client</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Why Choose Us</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  We Put Our Clients <span className="text-blue-600 italic">First</span>, Always.
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Personalized Support", desc: "No call centers. Talk directly to your dedicated agent anytime." },
                  { title: "Fast Claims Processing", desc: "We understand emergencies don't wait. Most claims processed in 24h." },
                  { title: "Multiple Carriers", desc: "We compare 30+ top-rated carriers to find you the best rates." },
                  { title: "Simple Digital Experience", desc: "Manage everything from your phone. Simple, modern, and transparent." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="h-12 px-8 font-bold">About Our Agency</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get a customized quote in minutes. Our team is ready to help you find the perfect coverage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/quote">
                <Button size="lg" className="h-16 px-10 text-xl font-bold gap-2">
                  Get Started Now <ChevronRight className="w-6 h-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold text-white border-white/20 hover:bg-white/10">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
