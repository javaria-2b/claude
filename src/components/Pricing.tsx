import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  // Define the pricing plans data
  const pricingPlans = [
    {
      title: "Free",
      price: "$0 / month",
      features: [
        "Talk to Claude on the web, iOS, and Android",
        "Ask about images and docs",
        "Access to Claude 3.5 Sonnet",
      ],
    },
    {
      title: "Pro",
      price: "$20 / month",
      features: [
        "Everything in free",
        "Use Claude 3 Opus and Haiku",
        "Higher usage limits versus Free",
        "Create Projects to work with Claude around a set of docs, code, or files",
        "Priority bandwidth and availability",
        "Early access to new features",
      ],
    },
    {
      title: "Team",
      price: "$25 / month*",
     
      features: [
        "Everything in Pro",
        "Higher usage limits versus Pro",
        "Share and discover chats from teammates",
        "Central billing and administration",
      ],
      note: "*Price billed annually; $30 / month if billed monthly",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the pricingPlans array to dynamically generate cards */}
          {pricingPlans.map((plan, index) => (
            <Card className="bg-white p-4" key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <p className="text-base font-normal">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li className="flex items-start" key={idx}>
                      <span className="bg-black rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-2 w-2 text-white" strokeWidth={4} /> {/* Bold Check */}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <p className="text-xs text-gray-600 mt-4">{plan.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
