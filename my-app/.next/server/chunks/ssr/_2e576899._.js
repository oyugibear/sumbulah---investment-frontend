module.exports=[40695,70121,11011,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}function e(...a){return b=>{let c=!1,e=a.map(a=>{let e=d(a,b);return c||"function"!=typeof e||(c=!0),e});if(c)return()=>{for(let b=0;b<e.length;b++){let c=e[b];"function"==typeof c?c():d(a[b],null)}}}}function f(...a){return c.useCallback(e(...a),a)}a.s(["composeRefs",()=>e,"useComposedRefs",()=>f],70121);var g=c.forwardRef((a,d)=>{let{children:e,...f}=a,g=c.Children.toArray(e),i=g.find(j);if(i){let a=i.props.children,e=g.map(b=>b!==i?b:c.Children.count(a)>1?c.Children.only(null):c.isValidElement(a)?a.props.children:null);return(0,b.jsx)(h,{...f,ref:d,children:c.isValidElement(a)?c.cloneElement(a,void 0,e):null})}return(0,b.jsx)(h,{...f,ref:d,children:e})});g.displayName="Slot";var h=c.forwardRef((a,b)=>{let{children:d,...f}=a;if(c.isValidElement(d)){var g;let a,h,i=(g=d,(h=(a=Object.getOwnPropertyDescriptor(g.props,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?g.ref:(h=(a=Object.getOwnPropertyDescriptor(g,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?g.props.ref:g.props.ref||g.ref);return c.cloneElement(d,{...function(a,b){let c={...b};for(let d in b){let e=a[d],f=b[d];/^on[A-Z]/.test(d)?e&&f?c[d]=(...a)=>{f(...a),e(...a)}:e&&(c[d]=e):"style"===d?c[d]={...e,...f}:"className"===d&&(c[d]=[e,f].filter(Boolean).join(" "))}return{...a,...c}}(f,d.props),ref:b?e(b,i):i})}return c.Children.count(d)>1?c.Children.only(null):null});h.displayName="SlotClone";var i=({children:a})=>(0,b.jsx)(b.Fragment,{children:a});function j(a){return c.isValidElement(a)&&a.type===i}a.s(["Slot",()=>g,"Slottable",()=>i],11011);var k=a.i(187),l=a.i(97895);let m=(0,k.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function n({className:a,variant:c,size:d,asChild:e=!1,...f}){let h=e?g:"button";return(0,b.jsx)(h,{"data-slot":"button",className:(0,l.cn)(m({variant:c,size:d,className:a})),...f})}a.s(["Button",()=>n],40695)},3130,a=>{"use strict";var b=a.i(87924),c=a.i(97895);function d({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card",className:(0,c.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...d})}function e({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-header",className:(0,c.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...d})}function f({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-title",className:(0,c.cn)("leading-none font-semibold",a),...d})}function g({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-description",className:(0,c.cn)("text-muted-foreground text-sm",a),...d})}function h({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-content",className:(0,c.cn)("px-6",a),...d})}a.s(["Card",()=>d,"CardContent",()=>h,"CardDescription",()=>g,"CardHeader",()=>e,"CardTitle",()=>f])},13749,a=>{"use strict";let b=(0,a.i(70106).default)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);a.s(["ChevronLeft",()=>b],13749)},5533,a=>{"use strict";var b=a.i(87924),c=a.i(50944),d=a.i(40695),e=a.i(3130),f=a.i(13749);function g(){let a=(0,c.useSearchParams)(),g=(0,c.useRouter)(),h=a.get("section")||"terms",i={terms:{title:"Terms of Service",body:`
        <h2>1. Acceptance of Terms</h2>
        <p>This is a demonstration prototype of Sunbullah, a micro-investing application. By using this demo, you acknowledge that this is not a real financial service and no actual investments or transactions occur.</p>
        
        <h2>2. Demo Purpose</h2>
        <p>This application is designed to showcase the concept of round-up investing with Shariah-aligned, domestic Saudi portfolios. All data, transactions, and accounts are simulated for demonstration purposes only.</p>
        
        <h2>3. No Financial Advice</h2>
        <p>Nothing in this demo constitutes financial, investment, or legal advice. This is purely an illustrative prototype.</p>
        
        <h2>4. Intellectual Property</h2>
        <p>All content, design, and functionality in this demo are protected by applicable intellectual property laws.</p>
      `},privacy:{title:"Privacy Policy",body:`
        <h2>1. Data Collection</h2>
        <p>This demo stores data locally in your browser using localStorage. No personal data is transmitted to external servers.</p>
        
        <h2>2. Demo Data</h2>
        <p>All account information, transactions, and personal details shown in this demo are fictional and for demonstration purposes only.</p>
        
        <h2>3. Analytics</h2>
        <p>This demo logs user interactions to the browser console for demonstration purposes. No actual analytics are collected or stored externally.</p>
        
        <h2>4. Your Rights</h2>
        <p>You can reset all demo data at any time from the Profile screen. This will clear all locally stored information.</p>
      `},risk:{title:"Risk Disclosure",body:`
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
      `}},j=i[h]||i.terms;return(0,b.jsx)("div",{className:"min-h-screen bg-background pb-8",children:(0,b.jsxs)("div",{className:"mx-auto max-w-lg px-4 py-8",children:[(0,b.jsxs)(d.Button,{variant:"ghost",size:"sm",onClick:()=>g.back(),className:"mb-6",children:[(0,b.jsx)(f.ChevronLeft,{className:"mr-1 h-4 w-4"}),"Back"]}),(0,b.jsxs)(e.Card,{className:"p-8",children:[(0,b.jsx)("h1",{className:"mb-6 text-3xl font-bold text-card-foreground",children:j.title}),(0,b.jsx)("div",{className:"prose prose-sm max-w-none [&>h2]:mb-3 [&>h2]:mt-6 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-card-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-muted-foreground",dangerouslySetInnerHTML:{__html:j.body}}),(0,b.jsx)("div",{className:"mt-8 border-t border-border pt-6",children:(0,b.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Last updated: ",new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})})]})]})})}a.s(["default",()=>g])}];

//# sourceMappingURL=_2e576899._.js.map