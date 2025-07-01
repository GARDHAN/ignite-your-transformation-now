
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
    <section id="registration-form" className="seamless-section soft-sky">
      <div className="max-w-3xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray mb-6 leading-tight">
            Start Your Journey
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light">
            Fill out this simple form to get your personalized fitness transformation plan
          </p>
        </div>

        {/* Form - no containers, seamless flow */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Personal Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-dm-sans font-medium text-soft-gray text-center">
              Tell us about yourself
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-inter font-light text-muted-gray">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`border-0 border-b-2 rounded-none bg-transparent pb-2 font-inter font-light ${
                    errors.name ? 'border-red-400' : 'border-gray-300 focus:border-soft-gray'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-400 text-xs font-inter">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm font-inter font-light text-muted-gray">
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={`border-0 border-b-2 rounded-none bg-transparent pb-2 font-inter font-light ${
                    errors.age ? 'border-red-400' : 'border-gray-300 focus:border-soft-gray'
                  }`}
                  placeholder="Your age"
                  min="16"
                  max="65"
                />
                {errors.age && <p className="text-red-400 text-xs font-inter">{errors.age}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-inter font-light text-muted-gray">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`border-0 border-b-2 rounded-none bg-transparent pb-2 font-inter font-light ${
                    errors.email ? 'border-red-400' : 'border-gray-300 focus:border-soft-gray'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs font-inter">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-inter font-light text-muted-gray">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`border-0 border-b-2 rounded-none bg-transparent pb-2 font-inter font-light ${
                    errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-soft-gray'
                  }`}
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="text-red-400 text-xs font-inter">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Goals & Preferences */}
          <div className="space-y-8">
            <h3 className="text-xl font-dm-sans font-medium text-soft-gray text-center">
              Your fitness goals
            </h3>

            <div className="space-y-6">
              <Label className="text-sm font-inter font-light text-muted-gray block text-center">
                What's your primary goal?
              </Label>
              <RadioGroup 
                value={formData.goal} 
                onValueChange={(value) => handleInputChange('goal', value)}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-3 p-4 transition-all hover:bg-white/50 rounded-lg">
                  <RadioGroupItem value="fat-loss" id="fat-loss" />
                  <Label htmlFor="fat-loss" className="cursor-pointer font-inter font-light text-muted-gray">
                    Fat Loss & Weight Reduction
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 transition-all hover:bg-white/50 rounded-lg">
                  <RadioGroupItem value="muscle-gain" id="muscle-gain" />
                  <Label htmlFor="muscle-gain" className="cursor-pointer font-inter font-light text-muted-gray">
                    Muscle Gain & Strength
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 transition-all hover:bg-white/50 rounded-lg">
                  <RadioGroupItem value="recomposition" id="recomposition" />
                  <Label htmlFor="recomposition" className="cursor-pointer font-inter font-light text-muted-gray">
                    Body Recomposition
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 transition-all hover:bg-white/50 rounded-lg">
                  <RadioGroupItem value="general-fitness" id="general-fitness" />
                  <Label htmlFor="general-fitness" className="cursor-pointer font-inter font-light text-muted-gray">
                    General Fitness & Health
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-inter font-light text-muted-gray block text-center">
                Your fitness experience level?
              </Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger className="border-0 border-b-2 rounded-none bg-transparent font-inter font-light">
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
              className="bg-soft-gray hover:bg-gray-600 text-white font-dm-sans font-normal px-16 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start My Transformation
            </Button>
            
            <p className="text-center text-sm text-muted-gray font-inter font-light mt-6">
              Your information is secure. We'll contact you within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
