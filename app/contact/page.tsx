"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Trophy,
  Users,
  Calendar,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "SA Sporting Club Ground",
        "Mohammedpur, Dhaka, Bangladesh",
        "",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+880 1730-433773", "", "Emergency: +880 1111-222333"],
      color: "text-green-500",
      bgColor: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sasporting.club@gmail.com", "", ""],
      color: "text-purple-500",
      bgColor: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/sasportingclubbd/",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50",
    },
    {
      icon: Twitter,
      href: "#",
      color: "hover:text-sky-500",
      bg: "hover:bg-sky-50",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-50",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@SASPORTINGCLUB",
      color: "hover:text-red-500",
      bg: "hover:bg-red-50",
    },
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Membership Information",
    "Coaching Programs",
    "Match Booking",
    "Sponsorship",
    "Media & Press",
    "Complaints",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Ready to join SA Sporting Club or have questions? We're here to
              help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>15+ Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <span>50+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>Year-Round Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have a question or want to learn more about our programs? Fill
                  out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting SA Sporting Club. We'll get
                        back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-medium"
                          >
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium"
                          >
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="inquiryType"
                            className="text-gray-700 font-medium"
                          >
                            Inquiry Type *
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleSelectChange("inquiryType", value)
                            }
                            required
                          >
                            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-gray-700 font-medium"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter message subject"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 font-medium"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                          placeholder="Enter your message here..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=320&width=600&text=Interactive Map')] bg-cover bg-center opacity-20"></div>
                    <div className="text-center z-10">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Find Us Here
                      </h3>
                      <p className="text-gray-600">SA Sporting Club Ground</p>
                      <p className="text-gray-600">
                        Mohammedpur, Dhaka, Bangladesh
                      </p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Call Now
                        </h4>
                        <p className="text-gray-600 text-sm">
                          +880 1730-433773
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          WhatsApp
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Quick response guaranteed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Email Support
                        </h4>
                        <p className="text-gray-600 text-sm">
                          sasporting.club@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 transition-all duration-300 ${social.bg} ${social.color} hover:border-current`}
                      >
                        <social.icon className="w-6 h-6" />
                        <span className="font-medium">
                          {social.icon === Facebook && "Facebook"}
                          {social.icon === Twitter && "Twitter"}
                          {social.icon === Instagram && "Instagram"}
                          {social.icon === Youtube && "YouTube"}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about SA Sporting Club
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How can I become a member?",
                answer:
                  "You can apply for membership by filling out our online form or visiting our club office. We offer different membership tiers to suit various needs.",
              },
              {
                question: "What coaching programs do you offer?",
                answer:
                  "We offer coaching for all age groups and skill levels, from beginner to advanced. Our programs include individual coaching, group sessions, and specialized training camps.",
              },
              {
                question: "Can I book the ground for private matches?",
                answer:
                  "Yes, our ground is available for booking for private matches and events. Please contact us at least 2 weeks in advance to check availability.",
              },
              {
                question: "Do you provide equipment?",
                answer:
                  "We have basic equipment available for training sessions. However, we recommend members to have their own gear for regular practice and matches.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
