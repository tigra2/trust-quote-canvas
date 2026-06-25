import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              We're Reimagining <span className="text-blue-600 italic">Insurance</span> for the Modern World.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              EDVAN AGENCY was founded on a simple principle: insurance should be transparent, accessible, and centered around the client.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Meeting" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Started in 2010 in a small office in New York, EDVAN AGENCY grew from a local broker to a nationwide insurance technology leader.
                </p>
                <p>
                  We saw that traditional insurance was too slow, too confusing, and too disconnected from people's real lives. We decided to change that by combining cutting-edge technology with world-class personal service.
                </p>
                <p>
                  Today, we protect over 50,000 families and businesses across the country, while maintaining the same personal touch that started it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The pillars that define everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity First", desc: "We do what's right for our clients, even when no one is watching." },
              { icon: Target, title: "Precision", desc: "We obsess over the details to ensure you have the perfect coverage." },
              { icon: Users, title: "Human Centric", desc: "Technology is our tool, but people are our purpose." },
              { icon: Award, title: "Excellence", desc: "We strive to be the best in everything we touch." }
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl text-blue-400 mb-2">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
