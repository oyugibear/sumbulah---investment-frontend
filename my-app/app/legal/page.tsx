"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function LegalPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const section = searchParams.get("section") || "terms"

  const content = {
    terms: {
      title: "Terms of Service",
      body: `
        <h2>1. Acceptance of Terms</h2>
        <p>This is a demonstration prototype of Sunbullah, a micro-investing application. By using this demo, you acknowledge that this is not a real financial service and no actual investments or transactions occur.</p>
        
        <h2>2. Demo Purpose</h2>
        <p>This application is designed to showcase the concept of round-up investing with Shariah-aligned, domestic Saudi portfolios. All data, transactions, and accounts are simulated for demonstration purposes only.</p>
        
        <h2>3. No Financial Advice</h2>
        <p>Nothing in this demo constitutes financial, investment, or legal advice. This is purely an illustrative prototype.</p>
        
        <h2>4. Intellectual Property</h2>
        <p>All content, design, and functionality in this demo are protected by applicable intellectual property laws.</p>
      `,
    },
    privacy: {
      title: "Privacy Policy",
      body: `
        <h2>1. Data Collection</h2>
        <p>This demo stores data locally in your browser using localStorage. No personal data is transmitted to external servers.</p>
        
        <h2>2. Demo Data</h2>
        <p>All account information, transactions, and personal details shown in this demo are fictional and for demonstration purposes only.</p>
        
        <h2>3. Analytics</h2>
        <p>This demo logs user interactions to the browser console for demonstration purposes. No actual analytics are collected or stored externally.</p>
        
        <h2>4. Your Rights</h2>
        <p>You can reset all demo data at any time from the Profile screen. This will clear all locally stored information.</p>
      `,
    },
    risk: {
      title: "Risk Disclosure",
      body: `
        <h2>Investment Risks</h2>
        <p>This section would normally contain comprehensive risk disclosures for actual investment products. Key points would include:</p>
        
        <h2>1. Market Risk</h2>
        <p>The value of investments can go down as well as up. You may receive back less than you originally invested.</p>
        
        <h2>2. Shariah Compliance</h2>
        <p>While portfolios are designed to be Shariah-compliant, investors should conduct their own due diligence and consult with qualified scholars.</p>
        
        <h2>3. Domestic Concentration</h2>
        <p>Investing exclusively in domestic Saudi assets means exposure to country-specific economic and political risks.</p>
        
        <h2>4. No Guarantees</h2>
        <p>Past performance does not guarantee future results. All investments carry risk, and you should only invest what you can afford to lose.</p>
        
        <h2>5. Demo Disclaimer</h2>
        <p>This is a demonstration only. Actual investment products would require proper licensing, regulatory approval, and comprehensive risk disclosures.</p>
      `,
    },
  }

  const currentContent = content[section as keyof typeof content] || content.terms

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="mx-auto max-w-lg px-4 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        <Card className="p-8">
          <h1 className="mb-6 text-3xl font-bold text-card-foreground">{currentContent.title}</h1>

          <div
            className="prose prose-sm max-w-none [&>h2]:mb-3 [&>h2]:mt-6 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-card-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: currentContent.body }}
          />

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
