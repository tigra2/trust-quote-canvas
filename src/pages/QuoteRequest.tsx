import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const QuoteRequest = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || 'car';
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Quote request submitted successfully!");
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-emerald-100 p-6 rounded-full mb-8"
        >
          <CheckCircle2 className="w-20 h-20 text-emerald-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Request Received!</h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10">
          Thank you for choosing EDVAN AGENCY. One of our specialist advisors will review your details and contact you within the next 24 hours with your personalized quote.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => setIsSuccess(false)} variant="outline">Request Another Quote</Button>
          <Button onClick={() => window.location.href = '/'}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-2/5 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              Secure Quote Request
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get Your Personalized <span className="text-blue-600 italic">Quote</span> Today.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fill out the form to help us understand your needs. It takes less than 3 minutes, and there's no obligation to buy.
            </p>
            
            <div className="space-y-6 pt-4 border-t border-slate-200">
              {[
                { title: "Privacy Guaranteed", desc: "Your data is encrypted and never sold." },
                { title: "No Hidden Fees", desc: "Transparent pricing with no surprises." },
                { title: "Expert Advice", desc: "Real human advisors, not just algorithms." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insuranceType">Insurance Type</Label>
                    <Select defaultValue={defaultType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car Insurance</SelectItem>
                        <SelectItem value="medical">Medical Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="home">Home Insurance</SelectItem>
                        <SelectItem value="travel">Travel Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about what you're looking for..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Generate My Quote <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-center text-xs text-slate-400">
                    By clicking "Generate My Quote", you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
