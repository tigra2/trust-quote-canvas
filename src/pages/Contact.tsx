import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-600">
            Have questions about a policy or need a hand? Our team is here to help you navigate your insurance journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-blue-600 text-white">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-white/80">Our friendly team is here to help.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg"><Mail className="w-5 h-5" /></div>
                    <span>support@edvanagency.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg"><Phone className="w-5 h-5" /></div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg"><MapPin className="w-5 h-5" /></div>
                    <span>123 Business Ave, New York, NY</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 px-4">
              <div className="flex gap-4">
                <MessageSquare className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Live Chat</h4>
                  <p className="text-sm text-slate-600">Available Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Response Time</h4>
                  <p className="text-sm text-slate-600">We usually respond within 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="w-full h-14 text-lg font-bold">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
