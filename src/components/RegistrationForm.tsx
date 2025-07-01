
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    experience: '',
    timeCommitment: '',
    motivation: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast({
        title: "Thank you! 🎉",
        description: "We'll contact you within 24 hours to start your transformation journey.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        goal: '',
        experience: '',
        timeCommitment: '',
        motivation: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="registration-form" className="seamless-section soft-sky relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/f571165a-b1c5-41f3-b1dc-a1f46f72840a.png')`,
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto section-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-dm-sans font-bold text-soft-gray mb-6 leading-tight">
            Start Your Journey
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light">
            Fill out this simple form to get your personalized fitness transformation plan
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-dm-sans font-bold text-soft-gray text-center">
                Tell us about yourself
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-inter font-bold text-muted-gray">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`border-2 rounded-xl bg-white/80 backdrop-blur-sm p-4 font-inter font-medium ${
                      errors.name ? 'border-red-400' : 'border-gray-300 focus:border-coral-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-xs font-inter font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-inter font-bold text-muted-gray">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className={`border-2 rounded-xl bg-white/80 backdrop-blur-sm p-4 font-inter font-medium ${
                      errors.age ? 'border-red-400' : 'border-gray-300 focus:border-coral-500'
                    }`}
                    placeholder="Your age"
                    min="16"
                    max="65"
                  />
                  {errors.age && <p className="text-red-400 text-xs font-inter font-bold">{errors.age}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-inter font-bold text-muted-gray">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`border-2 rounded-xl bg-white/80 backdrop-blur-sm p-4 font-inter font-medium ${
                      errors.email ? 'border-red-400' : 'border-gray-300 focus:border-coral-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs font-inter font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-inter font-bold text-muted-gray">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`border-2 rounded-xl bg-white/80 backdrop-blur-sm p-4 font-inter font-medium ${
                      errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-coral-500'
                    }`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-red-400 text-xs font-inter font-bold">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Goals & Preferences */}
            <div className="space-y-8">
              <h3 className="text-2xl font-dm-sans font-bold text-soft-gray text-center">
                Your fitness goals
              </h3>

              <div className="space-y-6">
                <Label className="text-sm font-inter font-bold text-muted-gray block text-center">
                  What's your primary goal?
                </Label>
                <RadioGroup 
                  value={formData.goal} 
                  onValueChange={(value) => handleInputChange('goal', value)}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-coral-400 transition-all hover:scale-105">
                    <RadioGroupItem value="fat-loss" id="fat-loss" />
                    <Label htmlFor="fat-loss" className="cursor-pointer font-inter font-bold text-muted-gray">
                      Fat Loss & Weight Reduction
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-coral-400 transition-all hover:scale-105">
                    <RadioGroupItem value="muscle-gain" id="muscle-gain" />
                    <Label htmlFor="muscle-gain" className="cursor-pointer font-inter font-bold text-muted-gray">
                      Muscle Gain & Strength
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-coral-400 transition-all hover:scale-105">
                    <RadioGroupItem value="recomposition" id="recomposition" />
                    <Label htmlFor="recomposition" className="cursor-pointer font-inter font-bold text-muted-gray">
                      Body Recomposition
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-coral-400 transition-all hover:scale-105">
                    <RadioGroupItem value="general-fitness" id="general-fitness" />
                    <Label htmlFor="general-fitness" className="cursor-pointer font-inter font-bold text-muted-gray">
                      General Fitness & Health
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-inter font-bold text-muted-gray block text-center">
                  Your fitness experience level?
                </Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger className="border-2 rounded-xl bg-white/80 backdrop-blur-sm p-4 font-inter font-medium border-gray-300 focus:border-coral-500">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner (0-6 months)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (6 months - 2 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                    <SelectItem value="returning">Returning after a break</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button 
                type="submit"
                size="lg"
                className="bg-coral-500 hover:bg-coral-600 text-white font-dm-sans font-bold px-16 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Start My Transformation
              </Button>
              
              <p className="text-center text-sm text-muted-gray font-inter font-light mt-6">
                Your information is secure. We'll contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
