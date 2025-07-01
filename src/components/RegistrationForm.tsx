
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
    dietRestrictions: '',
    budget: '',
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
    } else if (parseInt(formData.age) < 16 || parseInt(formData.age) > 65) {
      newErrors.age = 'Age must be between 16 and 65';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for starting your fitness transformation journey. We'll contact you within 24 hours!",
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
        dietRestrictions: '',
        budget: '',
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
    <section id="registration-form" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Get Started Today</span>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            Start Your <span className="gradient-text">Transformation</span>
            <br />Journey Now
          </h2>
          <p className="text-lg text-gray-600">
            Fill out this form to get your personalized <span className="font-semibold text-coral-600">fitness transformation plan</span>. 
            We'll analyze your goals and create a custom approach just for you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`transition-all duration-200 ${errors.name ? 'border-red-500' : 'focus:border-coral-500'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-2 block">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className={`transition-all duration-200 ${errors.age ? 'border-red-500' : 'focus:border-coral-500'}`}
                    placeholder="Your age"
                    min="16"
                    max="65"
                  />
                  {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`transition-all duration-200 ${errors.email ? 'border-red-500' : 'focus:border-coral-500'}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`transition-all duration-200 ${errors.phone ? 'border-red-500' : 'focus:border-coral-500'}`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Fitness Goals */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Your Fitness Goals
              </h3>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  What's your primary goal? *
                </Label>
                <RadioGroup 
                  value={formData.goal} 
                  onValueChange={(value) => handleInputChange('goal', value)}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="fat-loss" id="fat-loss" />
                    <Label htmlFor="fat-loss" className="cursor-pointer">🔥 Fat Loss & Weight Reduction</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="muscle-gain" id="muscle-gain" />
                    <Label htmlFor="muscle-gain" className="cursor-pointer">💪 Muscle Gain & Strength</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="recomposition" id="recomposition" />
                    <Label htmlFor="recomposition" className="cursor-pointer">⚡ Body Recomposition</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="general-fitness" id="general-fitness" />
                    <Label htmlFor="general-fitness" className="cursor-pointer">🎯 General Fitness & Health</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Your fitness experience level?
                </Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger className="focus:border-coral-500">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">🌱 Complete Beginner (0-6 months)</SelectItem>
                    <SelectItem value="intermediate">🏃 Intermediate (6 months - 2 years)</SelectItem>
                    <SelectItem value="advanced">🏆 Advanced (2+ years)</SelectItem>
                    <SelectItem value="returning">🔄 Returning after a break</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Lifestyle & Preferences */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Lifestyle & Preferences
              </h3>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  How many days per week can you commit to workouts?
                </Label>
                <RadioGroup 
                  value={formData.timeCommitment} 
                  onValueChange={(value) => handleInputChange('timeCommitment', value)}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="3-days" id="3-days" />
                    <Label htmlFor="3-days" className="cursor-pointer">3 days/week (Beginner friendly)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="4-days" id="4-days" />
                    <Label htmlFor="4-days" className="cursor-pointer">4 days/week (Balanced approach)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="5-days" id="5-days" />
                    <Label htmlFor="5-days" className="cursor-pointer">5 days/week (Dedicated)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="6-plus-days" id="6-plus-days" />
                    <Label htmlFor="6-plus-days" className="cursor-pointer">6+ days/week (Maximum results)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Any dietary restrictions or preferences?
                </Label>
                <Select value={formData.dietRestrictions} onValueChange={(value) => handleInputChange('dietRestrictions', value)}>
                  <SelectTrigger className="focus:border-coral-500">
                    <SelectValue placeholder="Select your dietary preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No restrictions</SelectItem>
                    <SelectItem value="vegetarian">🥗 Vegetarian</SelectItem>
                    <SelectItem value="vegan">🌱 Vegan</SelectItem>
                    <SelectItem value="keto">🥑 Keto-friendly</SelectItem>
                    <SelectItem value="gluten-free">🌾 Gluten-free</SelectItem>
                    <SelectItem value="other">Other (will discuss)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Investment & Motivation */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Investment & Motivation
              </h3>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  What's your budget range for transformation coaching?
                </Label>
                <RadioGroup 
                  value={formData.budget} 
                  onValueChange={(value) => handleInputChange('budget', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="starter" id="starter" />
                    <Label htmlFor="starter" className="cursor-pointer">₹4,999 - ₹12,999 (Starter Plans)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="cursor-pointer">₹12,999 - ₹25,999 (Premium Plans)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="elite" id="elite" />
                    <Label htmlFor="elite" className="cursor-pointer">₹25,999+ (Elite Transformation)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  What motivates you most to start this transformation?
                </Label>
                <Select value={formData.motivation} onValueChange={(value) => handleInputChange('motivation', value)}>
                  <SelectTrigger className="focus:border-coral-500">
                    <SelectValue placeholder="Select your main motivation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confidence">💪 Build confidence & self-esteem</SelectItem>
                    <SelectItem value="health">❤️ Improve overall health</SelectItem>
                    <SelectItem value="energy">⚡ Increase energy levels</SelectItem>
                    <SelectItem value="appearance">✨ Look better & feel attractive</SelectItem>
                    <SelectItem value="lifestyle">🎯 Adopt healthier lifestyle</SelectItem>
                    <SelectItem value="performance">🏃 Improve physical performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Terms & Submit */}
            <div className="space-y-6">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                  I agree to receive communications about my fitness transformation journey and understand that 
                  results may vary based on individual commitment and consistency.
                </Label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-semibold py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get My Transformation Plan 🚀
              </Button>

              <p className="text-center text-sm text-gray-500">
                🔒 Your information is secure and will never be shared. We'll contact you within 24 hours with your personalized plan.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
