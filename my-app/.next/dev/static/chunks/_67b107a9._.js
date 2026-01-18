(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_SAUDI_SECURITIES",
    ()=>ALL_SAUDI_SECURITIES,
    "ARTICLES",
    ()=>ARTICLES,
    "MOCK_BUDGET_DATA",
    ()=>MOCK_BUDGET_DATA,
    "MOCK_GOALS",
    ()=>MOCK_GOALS,
    "MOCK_MARKET_DATA",
    ()=>MOCK_MARKET_DATA,
    "MOCK_QUIZZES",
    ()=>MOCK_QUIZZES,
    "MOCK_STOCK_HOLDINGS",
    ()=>MOCK_STOCK_HOLDINGS,
    "MOCK_TRANSACTIONS",
    ()=>MOCK_TRANSACTIONS,
    "MOCK_ZAKAT_DATA",
    ()=>MOCK_ZAKAT_DATA,
    "PORTFOLIOS",
    ()=>PORTFOLIOS,
    "PORTFOLIO_GROWTH_HISTORY",
    ()=>PORTFOLIO_GROWTH_HISTORY
]);
// Generate dates for last 14 days
const generateDate = (daysAgo)=>{
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
};
// Generate expanded transaction history (12 months)
const generateExpandedTransactions = ()=>{
    const transactions = [];
    const merchants = {
        Coffee: [
            "Starbucks",
            "Costa Coffee",
            "Cafe Coffee Day"
        ],
        Restaurant: [
            "Albaik",
            "Shake Shack",
            "Five Guys",
            "KFC"
        ],
        Entertainment: [
            "VOX Cinemas",
            "Al Hokair Park",
            "Escape Room"
        ],
        Groceries: [
            "Panda",
            "Danube",
            "Carrefour",
            "Lulu"
        ],
        Fuel: [
            "Shell",
            "ARAMCO",
            "ENOC"
        ],
        Ride: [
            "Uber",
            "Careem",
            "Uber Eats"
        ],
        Pharmacy: [
            "Nahdi",
            "Al Saada",
            "Boots"
        ]
    };
    const categories = Object.keys(merchants);
    for(let monthsAgo = 12; monthsAgo > 0; monthsAgo--){
        // Generate 8-12 transactions per month
        const transactionsPerMonth = Math.floor(Math.random() * 5) + 8;
        for(let i = 0; i < transactionsPerMonth; i++){
            const category = categories[Math.floor(Math.random() * categories.length)];
            const categoryMerchants = merchants[category];
            const merchant = categoryMerchants[Math.floor(Math.random() * categoryMerchants.length)];
            let amount = 0;
            if (category === "Coffee") amount = Math.floor(Math.random() * 15) + 12;
            else if (category === "Restaurant") amount = Math.floor(Math.random() * 80) + 40;
            else if (category === "Entertainment") amount = Math.floor(Math.random() * 100) + 50;
            else if (category === "Groceries") amount = Math.floor(Math.random() * 200) + 80;
            else if (category === "Fuel") amount = Math.floor(Math.random() * 150) + 80;
            else if (category === "Ride") amount = Math.floor(Math.random() * 50) + 15;
            else if (category === "Pharmacy") amount = Math.floor(Math.random() * 100) + 20;
            const date = new Date();
            date.setMonth(date.getMonth() - monthsAgo);
            date.setDate(Math.floor(Math.random() * 28) + 1);
            const roundUp = Math.ceil(amount / 10) * 10 - amount;
            transactions.push({
                id: `tx-${transactions.length}`,
                date: date.toISOString(),
                merchant,
                category,
                amount,
                roundUp
            });
        }
    }
    return transactions.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
};
const MOCK_TRANSACTIONS = generateExpandedTransactions();
// Calculate cumulative round-ups for portfolio growth projection
const calculatePortfolioGrowth = ()=>{
    const monthlyGrowth = [];
    let cumulativeInvested = 100 // Starting amount
    ;
    const monthlyRoundUps = 45 // Average monthly round-ups
    ;
    const annualReturn = 0.085 // 8.5% annual return
    ;
    for(let month = 0; month <= 12; month++){
        const monthlyReturn = annualReturn / 12;
        cumulativeInvested = cumulativeInvested * (1 + monthlyReturn) + (month > 0 ? monthlyRoundUps : 0);
        monthlyGrowth.push({
            month,
            value: Math.round(cumulativeInvested * 100) / 100
        });
    }
    return monthlyGrowth;
};
const PORTFOLIO_GROWTH_HISTORY = calculatePortfolioGrowth();
const MOCK_GOALS = [
    {
        id: "emergency",
        name: "Emergency Fund",
        target: 10000,
        progress: 2850
    },
    {
        id: "hajj",
        name: "Hajj 2027",
        target: 25000,
        progress: 5240
    },
    {
        id: "car",
        name: "Car Purchase",
        target: 50000,
        progress: 8950
    },
    {
        id: "property",
        name: "Property Down Payment",
        target: 100000,
        progress: 15420
    }
];
const PORTFOLIOS = [
    {
        id: "conservative",
        name: "Conservative",
        nameAr: "محافظ",
        risk: 1,
        description: "Lower risk with focus on capital preservation through domestic Sukuk and money market instruments.",
        descriptionAr: "مخاطر أقل مع التركيز على الحفاظ على رأس المال من خلال الصكوك المحلية وأدوات سوق المال.",
        allocations: [
            {
                asset: "KSA Sukuk",
                assetAr: "صكوك سعودية",
                percentage: 60
            },
            {
                asset: "Saudi Halal Money Market",
                assetAr: "سوق المال الحلال السعودي",
                percentage: 40
            }
        ],
        timeHorizon: "1-3 years",
        timeHorizonAr: "٢-٢ سنوات"
    },
    {
        id: "balanced",
        name: "Balanced",
        nameAr: "متوازن",
        risk: 2,
        description: "Moderate risk with a mix of domestic equities and fixed income for steady growth.",
        descriptionAr: "مخاطر معتدلة مع مزيج من الأسهم المحلية والدخل الثابت لنمو مستقر.",
        allocations: [
            {
                asset: "Saudi Large-Cap (Shariah)",
                assetAr: "أسهم سعودية كبيرة (شرعية)",
                percentage: 40
            },
            {
                asset: "KSA Sukuk",
                assetAr: "صكوك سعودية",
                percentage: 40
            },
            {
                asset: "Saudi Mid-Cap",
                assetAr: "أسهم سعودية متوسطة",
                percentage: 20
            }
        ],
        timeHorizon: "3-5 years",
        timeHorizonAr: "٢-٢ سنوات"
    },
    {
        id: "growth",
        name: "Growth",
        nameAr: "نمو",
        risk: 3,
        description: "Higher risk focused on domestic equity growth with Shariah-compliant Saudi stocks.",
        descriptionAr: "مخاطر أعلى تركز على نمو الأسهم المحلية مع الأسهم السعودية المتوافقة مع الشريعة.",
        allocations: [
            {
                asset: "Saudi Large/Mid-Cap (Shariah)",
                assetAr: "أسهم سعودية كبيرة/متوسطة (شرعية)",
                percentage: 70
            },
            {
                asset: "KSA Sukuk",
                assetAr: "صكوك سعودية",
                percentage: 30
            }
        ],
        timeHorizon: "5+ years",
        timeHorizonAr: "٢+ سنوات"
    }
];
const ARTICLES = [
    {
        id: "shariah-investing",
        title: "What is Shariah Investing?",
        titleAr: "ما هو الاستثمار الشرعي؟",
        content: "Shariah investing follows Islamic principles that prohibit interest (riba), excessive uncertainty (gharar), and investments in businesses dealing with alcohol, gambling, or pork. Instead, it focuses on ethical, profit-sharing arrangements and asset-backed investments like Sukuk. This approach aligns your wealth growth with your values while participating in the Saudi economy.",
        contentAr: "يتبع الاستثمار الشرعي المبادئ الإسلامية التي تحرم الفائدة (الربا) والغرر المفرط والاستثمارات في الأعمال التي تتعامل مع الكحول أو القمار أو لحم الخنزير. بدلاً من ذلك، يركز على الترتيبات الأخلاقية لتقاسم الأرباح والاستثمارات المدعومة بالأصول مثل الصكوك.",
        readProgress: 0
    },
    {
        id: "sukuk",
        title: "What is a Sukuk?",
        titleAr: "ما هو الصك؟",
        content: "A Sukuk is an Islamic financial certificate, similar to a bond, but structured to comply with Shariah law. Instead of paying interest, Sukuk holders own a share of an asset and receive profits from that asset. Saudi Arabia issues government Sukuk backed by real assets, making them a cornerstone of Shariah-compliant investing in the Kingdom.",
        contentAr: "الصك هو شهادة مالية إسلامية، مشابهة للسند، ولكنها منظمة للامتثال للشريعة الإسلامية. بدلاً من دفع الفائدة، يمتلك حاملو الصكوك حصة من الأصل ويحصلون على أرباح من ذلك الأصل.",
        readProgress: 0
    },
    {
        id: "roundups-101",
        title: "Round-Ups 101",
        titleAr: "أساسيات التقريب",
        content: "Round-ups automatically invest your spare change. When you spend SAR 18 on coffee, we round up to SAR 20 and invest the SAR 2 difference. Over time, these small amounts add up significantly. It's a painless way to build wealth from everyday spending without changing your lifestyle.",
        contentAr: "يستثمر التقريب تلقائيًا فكتك الصغيرة. عندما تنفق ٢٠ ريالًا على القهوة، نقرب إلى ٢٢ ريالًا ونستثمر فرق الـ ٢ ريال. بمرور الوقت، تتراكم هذه المبالغ الصغيرة بشكل كبير.",
        readProgress: 0
    },
    {
        id: "risk-time",
        title: "Risk vs. Time",
        titleAr: "المخاطر مقابل الوقت",
        content: "Investment risk and time horizon go hand in hand. Conservative portfolios suit short-term goals (1-3 years) with lower volatility. Growth portfolios work best for long-term goals (5+ years), giving your investments time to recover from market fluctuations. Match your portfolio to your timeline, not just your comfort level.",
        contentAr: "تسير مخاطر الاستثمار والأفق الزمني جنبًا إلى جنب. تناسب المحافظ المحافظة الأهداف قصيرة الأجل (٢-٢ سنوات) مع تقلبات أقل. تعمل محافظ النمو بشكل أفضل للأهداف طويلة الأجل (٢+ سنوات).",
        readProgress: 0
    },
    {
        id: "saudi-economy",
        title: "Investing in the Saudi Economy",
        titleAr: "الاستثمار في الاقتصاد السعودي",
        content: "Investing domestically means your money supports Saudi businesses and infrastructure while benefiting from Vision 2030 growth initiatives. Domestic investments also avoid currency risk and align with national development. From Tadawul-listed companies to government Sukuk, you're participating in the Kingdom's economic transformation.",
        contentAr: "الاستثمار محليًا يعني أن أموالك تدعم الشركات والبنية التحتية السعودية بينما تستفيد من مبادرات النمو في رؤية ٢٠٢٠. تتجنب الاستثمارات المحلية أيضًا مخاطر العملة وتتماشى مع التنمية الوطنية.",
        readProgress: 0
    },
    {
        id: "goals",
        title: "How Goals Work",
        titleAr: "كيف تعمل الأهداف",
        content: "Setting financial goals gives your investing purpose and direction. Whether saving for Hajj, building an emergency fund, or planning for your children's future, goals help you stay motivated and track progress. We recommend matching goal timelines to portfolio risk levels for optimal results.",
        contentAr: "يمنح تحديد الأهداف المالية استثمارك هدفًا واتجاهًا. سواء كنت تدخر للحج أو بناء صندوق طوارئ أو التخطيط لمستقبل أطفالك، تساعدك الأهداف على البقاء متحفزًا وتتبع التقدم.",
        readProgress: 0
    },
    {
        id: "zakat-guide",
        title: "Understanding Zakat on Investments",
        titleAr: "فهم زكاة الاستثمارات",
        content: "Zakat is one of the five pillars of Islam, requiring Muslims to give 2.5% of their wealth annually. For investments, zakat is calculated on the total value of your holdings if they exceed the nisab threshold and have been held for a lunar year. Sunbullah helps you track your zakat obligations automatically, ensuring you fulfill this important religious duty while growing your wealth.",
        contentAr: "الزكاة هي أحد أركان الإسلام الخمسة، وتتطلب من المسلمين إخراج ٢.٥٪ من ثروتهم سنويًا. بالنسبة للاستثمارات، تُحسب الزكاة على القيمة الإجمالية لممتلكاتك إذا تجاوزت عتبة النصاب وتم الاحتفاظ بها لمدة عام قمري. تساعدك صنبلة على تتبع التزامات الزكاة تلقائيًا.",
        readProgress: 0
    }
];
const MOCK_MARKET_DATA = {
    tasi: {
        value: 11847.32,
        change: 142.18,
        changePercent: 1.21
    },
    lastUpdated: new Date().toISOString()
};
const MOCK_STOCK_HOLDINGS = [
    {
        symbol: "2222",
        nameEn: "Saudi Aramco",
        nameAr: "أرامكو السعودية",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        shares: 45,
        avgCost: 26.5,
        currentPrice: 29.85,
        change24h: 0.45,
        changePercent: 1.53,
        marketCap: 2000000,
        volume: 15234567,
        shariahCompliant: true
    },
    {
        symbol: "1120",
        nameEn: "Al Rajhi Bank",
        nameAr: "مصرف الراجحي",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        shares: 28,
        avgCost: 82.0,
        currentPrice: 87.4,
        change24h: 1.8,
        changePercent: 2.1,
        marketCap: 120000,
        volume: 2345678,
        shariahCompliant: true
    },
    {
        symbol: "2030",
        nameEn: "Saudi Telecom (STC)",
        nameAr: "الاتصالات السعودية",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        shares: 52,
        avgCost: 40.5,
        currentPrice: 43.25,
        change24h: 0.65,
        changePercent: 1.52,
        marketCap: 86000,
        volume: 1234567,
        shariahCompliant: true
    },
    {
        symbol: "2010",
        nameEn: "SABIC",
        nameAr: "سابك",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        shares: 35,
        avgCost: 75.0,
        currentPrice: 79.9,
        change24h: -0.5,
        changePercent: -0.62,
        marketCap: 95000,
        volume: 987654,
        shariahCompliant: true
    },
    {
        symbol: "ETF2",
        nameEn: "AlAhli TASI Index Fund",
        nameAr: "صندوق الأهلي لمؤشر تاسي",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "etf",
        shares: 120,
        avgCost: 17.2,
        currentPrice: 18.75,
        change24h: 0.25,
        changePercent: 1.35,
        volume: 345678,
        shariahCompliant: true
    }
];
const ALL_SAUDI_SECURITIES = [
    // Banking Sector
    {
        symbol: "1120",
        nameEn: "Al Rajhi Bank",
        nameAr: "مصرف الراجحي",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 87.4,
        change24h: 1.8,
        changePercent: 2.1,
        marketCap: 120000,
        volume: 2345678,
        shariahCompliant: true
    },
    {
        symbol: "1180",
        nameEn: "Saudi National Bank",
        nameAr: "البنك الأهلي السعودي",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 32.5,
        change24h: 0.3,
        changePercent: 0.93,
        marketCap: 97500,
        volume: 1876543,
        shariahCompliant: false
    },
    {
        symbol: "1010",
        nameEn: "Riyad Bank",
        nameAr: "بنك الرياض",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 28.75,
        change24h: -0.15,
        changePercent: -0.52,
        marketCap: 43125,
        volume: 987654,
        shariahCompliant: false
    },
    {
        symbol: "1050",
        nameEn: "Bank AlBilad",
        nameAr: "بنك البلاد",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 42.8,
        change24h: 1.2,
        changePercent: 2.88,
        marketCap: 32100,
        volume: 654321,
        shariahCompliant: true
    },
    {
        symbol: "1060",
        nameEn: "Bank AlJazira",
        nameAr: "بنك الجزيرة",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 18.95,
        change24h: 0.45,
        changePercent: 2.43,
        marketCap: 11370,
        volume: 543210,
        shariahCompliant: true
    },
    {
        symbol: "1080",
        nameEn: "Arab National Bank",
        nameAr: "البنك العربي الوطني",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 25.6,
        change24h: -0.2,
        changePercent: -0.78,
        marketCap: 19200,
        volume: 432109,
        shariahCompliant: false
    },
    {
        symbol: "1140",
        nameEn: "Bank Albilad",
        nameAr: "بنك البلاد",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 35.4,
        change24h: 0.8,
        changePercent: 2.31,
        marketCap: 26550,
        volume: 765432,
        shariahCompliant: true
    },
    {
        symbol: "1210",
        nameEn: "Bank Saudi Fransi",
        nameAr: "بنك ساب",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 34.5,
        change24h: 0.5,
        changePercent: 1.47,
        marketCap: 51750,
        volume: 654321,
        shariahCompliant: false
    },
    {
        symbol: "1220",
        nameEn: "First Abu Dhabi Bank (Saudi)",
        nameAr: "بنك أبو ظبي الأول",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 26.75,
        change24h: -0.3,
        changePercent: -1.1,
        marketCap: 26750,
        volume: 432109,
        shariahCompliant: false
    },
    {
        symbol: "1240",
        nameEn: "Bank of Montreal (Saudi)",
        nameAr: "بنك مونتريال",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 32.1,
        change24h: 0.6,
        changePercent: 1.91,
        marketCap: 32100,
        volume: 321098,
        shariahCompliant: false
    },
    {
        symbol: "1250",
        nameEn: "Emirates NBD (Saudi)",
        nameAr: "بنك الإمارات",
        sector: "Banking",
        sectorAr: "البنوك",
        type: "stock",
        currentPrice: 28.9,
        change24h: 0.4,
        changePercent: 1.4,
        marketCap: 28900,
        volume: 543210,
        shariahCompliant: false
    },
    // Energy Sector
    {
        symbol: "2222",
        nameEn: "Saudi Aramco",
        nameAr: "أرامكو السعودية",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 29.85,
        change24h: 0.45,
        changePercent: 1.53,
        marketCap: 2000000,
        volume: 15234567,
        shariahCompliant: true
    },
    {
        symbol: "4030",
        nameEn: "Bahri",
        nameAr: "البحري",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 28.3,
        change24h: -0.4,
        changePercent: -1.39,
        marketCap: 11320,
        volume: 876543,
        shariahCompliant: true
    },
    {
        symbol: "2380",
        nameEn: "Petro Rabigh",
        nameAr: "بترو رابغ",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 15.75,
        change24h: 0.25,
        changePercent: 1.61,
        marketCap: 6300,
        volume: 543210,
        shariahCompliant: true
    },
    {
        symbol: "2290",
        nameEn: "Saudi Energy Industrial",
        nameAr: "الطاقة الصناعية",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 42.3,
        change24h: 0.8,
        changePercent: 1.93,
        marketCap: 42300,
        volume: 876543,
        shariahCompliant: true
    },
    {
        symbol: "2300",
        nameEn: "Saudi Aramco Energy Ventures",
        nameAr: "مشاريع أرامكو",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 35.8,
        change24h: -0.2,
        changePercent: -0.56,
        marketCap: 35800,
        volume: 654321,
        shariahCompliant: true
    },
    {
        symbol: "2310",
        nameEn: "ACWA Power",
        nameAr: "أكوا باور",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 58.5,
        change24h: 1.2,
        changePercent: 2.09,
        marketCap: 58500,
        volume: 765432,
        shariahCompliant: true
    },
    {
        symbol: "2320",
        nameEn: "Saudi Basic Energy",
        nameAr: "الطاقة الأساسية",
        sector: "Energy",
        sectorAr: "الطاقة",
        type: "stock",
        currentPrice: 29.4,
        change24h: 0.3,
        changePercent: 1.03,
        marketCap: 29400,
        volume: 543210,
        shariahCompliant: true
    },
    // Petrochemicals
    {
        symbol: "2010",
        nameEn: "SABIC",
        nameAr: "سابك",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 79.9,
        change24h: -0.5,
        changePercent: -0.62,
        marketCap: 95000,
        volume: 987654,
        shariahCompliant: true
    },
    {
        symbol: "2020",
        nameEn: "SABIC Agri-Nutrients",
        nameAr: "سابك للمغذيات الزراعية",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 142.6,
        change24h: 2.1,
        changePercent: 1.49,
        marketCap: 42780,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "2330",
        nameEn: "Advanced Petrochemical",
        nameAr: "المتقدمة",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 52.8,
        change24h: -0.6,
        changePercent: -1.12,
        marketCap: 5808,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "2350",
        nameEn: "Saudi Kayan",
        nameAr: "كيان السعودية",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 14.32,
        change24h: 0.18,
        changePercent: 1.27,
        marketCap: 7160,
        volume: 654321,
        shariahCompliant: true
    },
    {
        symbol: "2290",
        nameEn: "Yanbu National Petrochemical",
        nameAr: "ينساب",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 58.4,
        change24h: 1.3,
        changePercent: 2.28,
        marketCap: 17520,
        volume: 456789,
        shariahCompliant: true
    },
    {
        symbol: "2360",
        nameEn: "Saudi Aramco Chemicals",
        nameAr: "أرامكو للكيماويات",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 64.2,
        change24h: -0.4,
        changePercent: -0.62,
        marketCap: 64200,
        volume: 432109,
        shariahCompliant: true
    },
    {
        symbol: "2370",
        nameEn: "Maaden",
        nameAr: "معادن",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 48.9,
        change24h: 0.8,
        changePercent: 1.66,
        marketCap: 48900,
        volume: 654321,
        shariahCompliant: true
    },
    {
        symbol: "2390",
        nameEn: "Gasco",
        nameAr: "جاسكو",
        sector: "Petrochemicals",
        sectorAr: "البتروكيماويات",
        type: "stock",
        currentPrice: 35.6,
        change24h: 0.2,
        changePercent: 0.56,
        marketCap: 35600,
        volume: 321098,
        shariahCompliant: true
    },
    // Telecom & IT
    {
        symbol: "2030",
        nameEn: "Saudi Telecom (STC)",
        nameAr: "الاتصالات السعودية",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 43.25,
        change24h: 0.65,
        changePercent: 1.52,
        marketCap: 86000,
        volume: 1234567,
        shariahCompliant: true
    },
    {
        symbol: "7020",
        nameEn: "Etihad Etisalat (Mobily)",
        nameAr: "اتحاد اتصالات (موبايلي)",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 28.95,
        change24h: -0.35,
        changePercent: -1.19,
        marketCap: 28950,
        volume: 876543,
        shariahCompliant: true
    },
    {
        symbol: "7030",
        nameEn: "Zain KSA",
        nameAr: "زين السعودية",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 12.45,
        change24h: 0.25,
        changePercent: 2.05,
        marketCap: 9960,
        volume: 543210,
        shariahCompliant: true
    },
    {
        symbol: "7010",
        nameEn: "Atheeb Telecom",
        nameAr: "عذيب للاتصالات",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 68.5,
        change24h: 1.5,
        changePercent: 2.24,
        marketCap: 6850,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "7040",
        nameEn: "Gulf Telecom",
        nameAr: "جالف للاتصالات",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 22.5,
        change24h: 0.3,
        changePercent: 1.35,
        marketCap: 22500,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "7050",
        nameEn: "Saudi Data Exchange",
        nameAr: "بورصة البيانات السعودية",
        sector: "Telecom",
        sectorAr: "الاتصالات",
        type: "stock",
        currentPrice: 28.7,
        change24h: 0.4,
        changePercent: 1.41,
        marketCap: 28700,
        volume: 198765,
        shariahCompliant: true
    },
    // Retail
    {
        symbol: "4001",
        nameEn: "Jarir Marketing",
        nameAr: "جرير للتسويق",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 165.2,
        change24h: 2.4,
        changePercent: 1.47,
        marketCap: 19824,
        volume: 123456,
        shariahCompliant: true
    },
    {
        symbol: "4003",
        nameEn: "Extra",
        nameAr: "اكسترا",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 92.8,
        change24h: -0.8,
        changePercent: -0.85,
        marketCap: 9280,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4050",
        nameEn: "Saudi Marketing (Savola)",
        nameAr: "السعودية للتسويق (سافولا)",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 28.65,
        change24h: 0.35,
        changePercent: 1.24,
        marketCap: 8595,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "4008",
        nameEn: "Saco",
        nameAr: "ساكو",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 42.3,
        change24h: 0.9,
        changePercent: 2.17,
        marketCap: 4230,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "4009",
        nameEn: "Al-Futtaim Retail",
        nameAr: "الفطيم للتجزئة",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 35.8,
        change24h: -0.5,
        changePercent: -1.37,
        marketCap: 35800,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "4011",
        nameEn: "Panda Retail",
        nameAr: "باندا للتجزئة",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 18.2,
        change24h: 0.2,
        changePercent: 1.11,
        marketCap: 18200,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4012",
        nameEn: "Danube Retail",
        nameAr: "دانوب للتجزئة",
        sector: "Retail",
        sectorAr: "التجزئة",
        type: "stock",
        currentPrice: 42.5,
        change24h: 0.8,
        changePercent: 1.92,
        marketCap: 42500,
        volume: 198765,
        shariahCompliant: true
    },
    // Real Estate
    {
        symbol: "4020",
        nameEn: "Emaar The Economic City",
        nameAr: "إعمار المدينة الاقتصادية",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 11.85,
        change24h: 0.15,
        changePercent: 1.28,
        marketCap: 11850,
        volume: 876543,
        shariahCompliant: true
    },
    {
        symbol: "4090",
        nameEn: "Taiba Holding",
        nameAr: "طيبة للاستثمار",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 38.4,
        change24h: -0.6,
        changePercent: -1.54,
        marketCap: 15360,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "4100",
        nameEn: "Makkah Construction",
        nameAr: "مكة للإنشاء",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 68.9,
        change24h: 1.2,
        changePercent: 1.77,
        marketCap: 27560,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4150",
        nameEn: "Dar Al Arkan",
        nameAr: "دار الأركان",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 9.85,
        change24h: -0.15,
        changePercent: -1.5,
        marketCap: 9850,
        volume: 654321,
        shariahCompliant: true
    },
    {
        symbol: "4160",
        nameEn: "Riyada Real Estate",
        nameAr: "ريادة العقارات",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 14.3,
        change24h: 0.25,
        changePercent: 1.78,
        marketCap: 14300,
        volume: 432109,
        shariahCompliant: true
    },
    {
        symbol: "4170",
        nameEn: "Alinma Properties",
        nameAr: "خصائص الإنماء",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 22.8,
        change24h: -0.3,
        changePercent: -1.3,
        marketCap: 22800,
        volume: 321098,
        shariahCompliant: true
    },
    {
        symbol: "4180",
        nameEn: "Saudi Vision Estate",
        nameAr: "رؤية السعودية العقارية",
        sector: "Real Estate",
        sectorAr: "العقارات",
        type: "stock",
        currentPrice: 31.5,
        change24h: 0.6,
        changePercent: 1.93,
        marketCap: 31500,
        volume: 234567,
        shariahCompliant: true
    },
    // Healthcare
    {
        symbol: "4004",
        nameEn: "Mouwasat Medical Services",
        nameAr: "المواساة للخدمات الطبية",
        sector: "Healthcare",
        sectorAr: "الرعاية الصحية",
        type: "stock",
        currentPrice: 185.6,
        change24h: 3.2,
        changePercent: 1.75,
        marketCap: 18560,
        volume: 123456,
        shariahCompliant: true
    },
    {
        symbol: "2230",
        nameEn: "Saudi Pharmaceutical",
        nameAr: "الدوائية السعودية",
        sector: "Healthcare",
        sectorAr: "الرعاية الصحية",
        type: "stock",
        currentPrice: 24.75,
        change24h: 0.45,
        changePercent: 1.85,
        marketCap: 4950,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4005",
        nameEn: "Dallah Healthcare",
        nameAr: "دله الصحية",
        sector: "Healthcare",
        sectorAr: "الرعاية الصحية",
        type: "stock",
        currentPrice: 78.3,
        change24h: -0.7,
        changePercent: -0.89,
        marketCap: 7830,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "4006",
        nameEn: "NMC Health Saudi",
        nameAr: "إن إم سي هيلث",
        sector: "Healthcare",
        sectorAr: "الرعاية الصحية",
        type: "stock",
        currentPrice: 128.5,
        change24h: 2.1,
        changePercent: 1.66,
        marketCap: 12850,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4007",
        nameEn: "Dr. Sulaiman Al Habib Medical",
        nameAr: "د. سليمان الحبيب",
        sector: "Healthcare",
        sectorAr: "الرعاية الصحية",
        type: "stock",
        currentPrice: 156.8,
        change24h: 2.5,
        changePercent: 1.62,
        marketCap: 15680,
        volume: 198765,
        shariahCompliant: true
    },
    // Insurance
    {
        symbol: "8010",
        nameEn: "Tawuniya",
        nameAr: "التعاونية",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 92.5,
        change24h: 1.5,
        changePercent: 1.65,
        marketCap: 9250,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "8020",
        nameEn: "Malath Insurance",
        nameAr: "ملاذ للتأمين",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 38.9,
        change24h: -0.4,
        changePercent: -1.02,
        marketCap: 3890,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "8030",
        nameEn: "Medgulf",
        nameAr: "ميدغلف",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 56.4,
        change24h: 0.8,
        changePercent: 1.44,
        marketCap: 5640,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "8040",
        nameEn: "Saudi Re Insurance",
        nameAr: "إعادة التأمين السعودية",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 48.3,
        change24h: 0.5,
        changePercent: 1.05,
        marketCap: 4830,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "8050",
        nameEn: "United Insurance",
        nameAr: "التأمين المتحدة",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 32.6,
        change24h: -0.2,
        changePercent: -0.61,
        marketCap: 3260,
        volume: 176543,
        shariahCompliant: true
    },
    {
        symbol: "8060",
        nameEn: "Arabian American Development",
        nameAr: "التطوير العربي الأمريكي",
        sector: "Insurance",
        sectorAr: "التأمين",
        type: "stock",
        currentPrice: 42.1,
        change24h: 0.7,
        changePercent: 1.69,
        marketCap: 4210,
        volume: 234567,
        shariahCompliant: true
    },
    // Investment Funds & ETFs
    {
        symbol: "ETF1",
        nameEn: "Falcom Saudi Equity ETF",
        nameAr: "صندوق فالكم للأسهم السعودية",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "etf",
        currentPrice: 12.45,
        change24h: 0.15,
        changePercent: 1.22,
        volume: 456789,
        shariahCompliant: true
    },
    {
        symbol: "ETF2",
        nameEn: "AlAhli TASI Index Fund",
        nameAr: "صندوق الأهلي لمؤشر تاسي",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "etf",
        currentPrice: 18.75,
        change24h: 0.25,
        changePercent: 1.35,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "ETF3",
        nameEn: "HSBC Saudi Arabia ETF",
        nameAr: "صندوق إتش إس بي سي للسعودية",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "etf",
        currentPrice: 15.6,
        change24h: 0.2,
        changePercent: 1.3,
        volume: 287654,
        shariahCompliant: false
    },
    {
        symbol: "ETF4",
        nameEn: "CIMB Saudi Arabia ETF",
        nameAr: "صندوق سيمب للسعودية",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "etf",
        currentPrice: 16.2,
        change24h: 0.2,
        changePercent: 1.25,
        volume: 321098,
        shariahCompliant: true
    },
    {
        symbol: "FUND1",
        nameEn: "Al Rajhi Diversified Fund",
        nameAr: "صندوق الراجحي المتنوع",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "fund",
        currentPrice: 24.8,
        change24h: 0.3,
        changePercent: 1.22,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "FUND2",
        nameEn: "Alinma Growth Fund",
        nameAr: "صندوق الإنماء للنمو",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "fund",
        currentPrice: 32.5,
        change24h: 0.45,
        changePercent: 1.4,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "FUND3",
        nameEn: "Jadwa Saudi Equity Fund",
        nameAr: "صندوق جدوى للأسهم السعودية",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "fund",
        currentPrice: 28.95,
        change24h: -0.15,
        changePercent: -0.52,
        volume: 123456,
        shariahCompliant: true
    },
    {
        symbol: "FUND4",
        nameEn: "Rayan Saudi Equity Fund",
        nameAr: "صندوق ريان للأسهم السعودية",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "fund",
        currentPrice: 25.4,
        change24h: -0.1,
        changePercent: -0.39,
        volume: 123456,
        shariahCompliant: true
    },
    {
        symbol: "FUND5",
        nameEn: "Banque Saudi Fransi Fund",
        nameAr: "صندوق بنك ساب",
        sector: "Funds",
        sectorAr: "الصناديق",
        type: "fund",
        currentPrice: 33.7,
        change24h: 0.5,
        changePercent: 1.5,
        volume: 234567,
        shariahCompliant: true
    },
    // Cement
    {
        symbol: "3010",
        nameEn: "Saudi Cement",
        nameAr: "الأسمنت السعودية",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 52.3,
        change24h: 0.8,
        changePercent: 1.55,
        marketCap: 10460,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "3020",
        nameEn: "Yamama Cement",
        nameAr: "اليمامة للأسمنت",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 38.9,
        change24h: -0.3,
        changePercent: -0.77,
        marketCap: 7780,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "3030",
        nameEn: "City Cement",
        nameAr: "أسمنت المدينة",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 45.6,
        change24h: 0.6,
        changePercent: 1.33,
        marketCap: 9120,
        volume: 176543,
        shariahCompliant: true
    },
    {
        symbol: "3040",
        nameEn: "Southern Cement",
        nameAr: "الأسمنت الجنوبية",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 38.5,
        change24h: 0.4,
        changePercent: 1.05,
        marketCap: 7700,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "3050",
        nameEn: "Qassim Cement",
        nameAr: "أسمنت القصيم",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 42.9,
        change24h: -0.3,
        changePercent: -0.69,
        marketCap: 8580,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "3060",
        nameEn: "Northern Cement",
        nameAr: "أسمنت الشمال",
        sector: "Cement",
        sectorAr: "الأسمنت",
        type: "stock",
        currentPrice: 35.2,
        change24h: 0.6,
        changePercent: 1.74,
        marketCap: 7040,
        volume: 176543,
        shariahCompliant: true
    },
    // Agriculture & Food
    {
        symbol: "6010",
        nameEn: "NADEC",
        nameAr: "نادك",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 28.4,
        change24h: 0.4,
        changePercent: 1.43,
        marketCap: 5680,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "6020",
        nameEn: "Almarai",
        nameAr: "المراعي",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 58.9,
        change24h: -0.5,
        changePercent: -0.84,
        marketCap: 35340,
        volume: 345678,
        shariahCompliant: true
    },
    {
        symbol: "6050",
        nameEn: "Herfy Food Services",
        nameAr: "هرفي للأغذية",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 72.5,
        change24h: 1.2,
        changePercent: 1.68,
        marketCap: 7250,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "6030",
        nameEn: "Saudi Farm Produce",
        nameAr: "المزرعة السعودية",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 52.3,
        change24h: 0.8,
        changePercent: 1.55,
        marketCap: 10460,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "6040",
        nameEn: "Arabian Livestock",
        nameAr: "الثروة الحيوانية العربية",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 45.7,
        change24h: -0.4,
        changePercent: -0.86,
        marketCap: 9140,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "6060",
        nameEn: "Saudi Food Processing",
        nameAr: "المعالجة الغذائية السعودية",
        sector: "Agriculture",
        sectorAr: "الزراعة",
        type: "stock",
        currentPrice: 38.9,
        change24h: 0.3,
        changePercent: 0.78,
        marketCap: 7780,
        volume: 176543,
        shariahCompliant: true
    },
    // Transport
    {
        symbol: "4260",
        nameEn: "Budget Saudi",
        nameAr: "بدجت السعودية",
        sector: "Transport",
        sectorAr: "النقل",
        type: "stock",
        currentPrice: 82.3,
        change24h: 1.5,
        changePercent: 1.86,
        marketCap: 8230,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4261",
        nameEn: "Theeb Rent a Car",
        nameAr: "ذيب لتأجير السيارات",
        sector: "Transport",
        sectorAr: "النقل",
        type: "stock",
        currentPrice: 68.9,
        change24h: -0.8,
        changePercent: -1.15,
        marketCap: 6890,
        volume: 198765,
        shariahCompliant: true
    },
    {
        symbol: "4262",
        nameEn: "Saudi Logistics Hub",
        nameAr: "مركز اللوجستيات السعودية",
        sector: "Transport",
        sectorAr: "النقل",
        type: "stock",
        currentPrice: 65.4,
        change24h: 1.1,
        changePercent: 1.71,
        marketCap: 6540,
        volume: 234567,
        shariahCompliant: true
    },
    {
        symbol: "4263",
        nameEn: "Arabian Shipping Company",
        nameAr: "شركة الشحن العربية",
        sector: "Transport",
        sectorAr: "النقل",
        type: "stock",
        currentPrice: 42.8,
        change24h: -0.6,
        changePercent: -1.38,
        marketCap: 4280,
        volume: 198765,
        shariahCompliant: true
    }
];
const MOCK_ZAKAT_DATA = {
    totalAssets: 15680,
    nisabThreshold: 5235,
    zakatDue: 392,
    lastCalculated: new Date().toISOString(),
    hijriYear: "1446",
    paymentHistory: [
        {
            id: "z1",
            amount: 392,
            date: new Date(2024, 8, 15).toISOString(),
            hijriDate: "10 صفر 1446",
            method: "auto",
            status: "paid"
        },
        {
            id: "z2",
            amount: 285,
            date: new Date(2023, 8, 20).toISOString(),
            hijriDate: "20 صفر 1445",
            method: "manual",
            status: "paid"
        },
        {
            id: "z3",
            amount: 218,
            date: new Date(2022, 9, 10).toISOString(),
            hijriDate: "15 صفر 1444",
            method: "manual",
            status: "paid"
        }
    ]
};
const MOCK_BUDGET_DATA = {
    categories: [
        {
            id: "coffee",
            name: "Coffee & Beverages",
            spent: 185,
            limit: 200,
            period: "monthly"
        },
        {
            id: "dining",
            name: "Dining Out",
            spent: 840,
            limit: 1000,
            period: "monthly"
        },
        {
            id: "entertainment",
            name: "Entertainment",
            spent: 320,
            limit: 400,
            period: "monthly"
        },
        {
            id: "groceries",
            name: "Groceries",
            spent: 1200,
            limit: 1500,
            period: "monthly"
        },
        {
            id: "fuel",
            name: "Fuel & Transport",
            spent: 680,
            limit: 800,
            period: "monthly"
        },
        {
            id: "pharmacy",
            name: "Health & Pharmacy",
            spent: 250,
            limit: 300,
            period: "monthly"
        }
    ],
    totalBudget: 4200,
    totalSpent: 3475,
    month: new Date().toISOString().substring(0, 7)
};
const MOCK_QUIZZES = [
    {
        id: "quiz-shariah",
        title: "Shariah Investing Basics",
        titleAr: "أساسيات الاستثمار الشرعي",
        module: "shariah",
        completedBy: [
            "user-1"
        ],
        questions: [
            {
                id: "q1",
                question: "What does 'Riba' mean in Islamic finance?",
                questionAr: "ما معنى 'الربا' في التمويل الإسلامي؟",
                options: [
                    {
                        id: "a",
                        text: "Interest or usury",
                        textAr: "الفائدة أو الربا",
                        isCorrect: true
                    },
                    {
                        id: "b",
                        text: "Charity or donation",
                        textAr: "الصدقة أو التبرع",
                        isCorrect: false
                    },
                    {
                        id: "c",
                        text: "Profit sharing",
                        textAr: "تقاسم الأرباح",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "Business contract",
                        textAr: "عقد تجاري",
                        isCorrect: false
                    }
                ]
            },
            {
                id: "q2",
                question: "Which of these is Shariah-compliant?",
                questionAr: "أي من هذه متوافق مع الشريعة الإسلامية؟",
                options: [
                    {
                        id: "a",
                        text: "Conventional bonds with interest",
                        textAr: "السندات التقليدية بفائدة",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        text: "Sukuk (Islamic bonds)",
                        textAr: "الصكوك (السندات الإسلامية)",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        text: "Alcohol company stocks",
                        textAr: "أسهم شركات الكحول",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "Gaming industry shares",
                        textAr: "أسهم قطاع الألعاب",
                        isCorrect: false
                    }
                ]
            },
            {
                id: "q3",
                question: "What is the main principle behind Shariah investing?",
                questionAr: "ما هو المبدأ الرئيسي وراء الاستثمار الشرعي؟",
                options: [
                    {
                        id: "a",
                        text: "Maximum profit at any cost",
                        textAr: "أقصى ربح بأي ثمن",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        text: "Ethical and value-aligned growth",
                        textAr: "النمو الأخلاقي والمتوافق مع القيم",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        text: "Guaranteed returns",
                        textAr: "عوائد مضمونة",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "Minimum investment amounts",
                        textAr: "الحد الأدنى من مبالغ الاستثمار",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        id: "quiz-budgeting",
        title: "Smart Budgeting",
        titleAr: "الميزانية الذكية",
        module: "budgeting",
        completedBy: [],
        questions: [
            {
                id: "q1",
                question: "What is a realistic emergency fund target?",
                questionAr: "ما هو الهدف الواقعي لصندوق الطوارئ؟",
                options: [
                    {
                        id: "a",
                        text: "One month of expenses",
                        textAr: "شهر واحد من النفقات",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        text: "Three to six months of expenses",
                        textAr: "ثلاثة إلى ستة أشهر من النفقات",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        text: "One year of expenses",
                        textAr: "سنة واحدة من النفقات",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "No emergency fund needed",
                        textAr: "لا حاجة لصندوق طوارئ",
                        isCorrect: false
                    }
                ]
            },
            {
                id: "q2",
                question: "The 50/30/20 budget rule means:",
                questionAr: "قاعدة الميزانية ٢٠/٢٠/٢٠ تعني:",
                options: [
                    {
                        id: "a",
                        text: "50% needs, 30% wants, 20% savings",
                        textAr: "٢٠٪ احتياجات، ٢٠٪ رغبات، ٢٠٪ ادخار",
                        isCorrect: true
                    },
                    {
                        id: "b",
                        text: "50% savings, 30% needs, 20% wants",
                        textAr: "٢٠٪ ادخار، ٢٠٪ احتياجات، ٢٠٪ رغبات",
                        isCorrect: false
                    },
                    {
                        id: "c",
                        text: "50% wants, 30% savings, 20% needs",
                        textAr: "٢٠٪ رغبات، ٢٠٪ ادخار، ٢٠٪ احتياجات",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "Equal portions of each",
                        textAr: "أجزاء متساوية من كل منها",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        id: "quiz-investing",
        title: "Investment Basics",
        titleAr: "أساسيات الاستثمار",
        module: "investing",
        completedBy: [],
        questions: [
            {
                id: "q1",
                question: "Why is diversification important?",
                questionAr: "لماذا يكون التنويع مهماً؟",
                options: [
                    {
                        id: "a",
                        text: "To increase risk",
                        textAr: "لزيادة المخاطرة",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        text: "To reduce risk by spreading investments",
                        textAr: "لتقليل المخاطر بنشر الاستثمارات",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        text: "To guarantee profits",
                        textAr: "لضمان الأرباح",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "To avoid paying taxes",
                        textAr: "لتجنب دفع الضرائب",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        id: "quiz-zakat",
        title: "Zakat Essentials",
        titleAr: "أساسيات الزكاة",
        module: "zakat",
        completedBy: [],
        questions: [
            {
                id: "q1",
                question: "What is the Zakat rate on investments?",
                questionAr: "ما هو معدل الزكاة على الاستثمارات؟",
                options: [
                    {
                        id: "a",
                        text: "1%",
                        textAr: "١٪",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        text: "2.5%",
                        textAr: "٢.٥٪",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        text: "5%",
                        textAr: "٥٪",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        text: "10%",
                        textAr: "١٠٪",
                        isCorrect: false
                    }
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/context/app-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_SETTINGS = {
    language: "en",
    rtl: false,
    darkMode: false,
    roundUpTo: 1,
    weeklyCapSar: 50,
    discretionaryOnly: false,
    paydaySavePercent: 0,
    boosts: [],
    linkedSource: null,
    investmentOption: "investment"
};
const getNextAutoDepositDate = ()=>{
    const date = new Date();
    const currentDay = date.getDate();
    // Set to next 1st of month if already past the 1st, otherwise this month's 1st
    if (currentDay > 1) {
        date.setMonth(date.getMonth() + 1);
    }
    date.setDate(1);
    return date.toISOString();
};
const INITIAL_STATE = {
    settings: DEFAULT_SETTINGS,
    transactions: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TRANSACTIONS"],
    goals: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_GOALS"],
    totalInvested: 2550,
    thisWeekRoundUps: 23,
    nextAutoDeposit: {
        date: getNextAutoDepositDate(),
        amount: 0
    },
    onboardingComplete: false,
    selectedGoals: [],
    savingsBalance: 1200,
    investmentBalance: 1350,
    lastPayoutDate: "2024-12-31"
};
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            const saved = localStorage.getItem("sunbullah-state");
            if (saved) {
                try {
                    const parsedState = JSON.parse(saved);
                    setState({
                        "AppProvider.useEffect": (prev)=>({
                                ...prev,
                                ...parsedState,
                                // Ensure nested objects are also merged if needed, but for now top-level defaults are key
                                savingsBalance: parsedState.savingsBalance ?? prev.savingsBalance,
                                investmentBalance: parsedState.investmentBalance ?? prev.investmentBalance,
                                settings: {
                                    ...prev.settings,
                                    ...parsedState.settings
                                }
                            })
                    }["AppProvider.useEffect"]);
                } catch (e) {
                    console.error("Failed to load saved state:", e);
                }
            }
        }
    }["AppProvider.useEffect"], []);
    // Save to localStorage on state change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            localStorage.setItem("sunbullah-state", JSON.stringify(state));
        }
    }["AppProvider.useEffect"], [
        state
    ]);
    // Apply dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (state.settings.darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }["AppProvider.useEffect"], [
        state.settings.darkMode
    ]);
    // Apply RTL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (state.settings.rtl) {
                document.documentElement.setAttribute("dir", "rtl");
            } else {
                document.documentElement.setAttribute("dir", "ltr");
            }
        }
    }["AppProvider.useEffect"], [
        state.settings.rtl
    ]);
    const updateSettings = (newSettings)=>{
        setState((prev)=>({
                ...prev,
                settings: {
                    ...prev.settings,
                    ...newSettings
                }
            }));
        updateNextAutoDeposit(newSettings);
    };
    const addTransaction = (transaction)=>{
        const newTransaction = {
            ...transaction,
            id: Date.now().toString()
        };
        setState((prev)=>({
                ...prev,
                transactions: [
                    newTransaction,
                    ...prev.transactions
                ]
            }));
    };
    const addDeposit = (amount)=>{
        setState((prev)=>{
            const investmentOption = prev.settings.investmentOption;
            const savingsAmount = investmentOption === "savings" ? amount : amount * 0.3;
            const investmentAmount = investmentOption === "investment" ? amount : amount * 0.7;
            return {
                ...prev,
                totalInvested: prev.totalInvested + amount,
                savingsBalance: prev.savingsBalance + savingsAmount,
                investmentBalance: prev.investmentBalance + investmentAmount,
                goals: prev.goals.map((goal)=>({
                        ...goal,
                        progress: goal.progress + amount / prev.goals.length
                    }))
            };
        });
    };
    const simulatePayday = ()=>{
        const { paydaySavePercent } = state.settings;
        if (paydaySavePercent === 0) return;
        const mockSalary = 10000 // Mock monthly salary
        ;
        const saveAmount = mockSalary * paydaySavePercent / 100;
        addDeposit(saveAmount);
        logAnalytics("payday_save_triggered", {
            amount: saveAmount,
            percent: paydaySavePercent
        });
    };
    const completeOnboarding = (goals, investmentOption)=>{
        setState((prev)=>({
                ...prev,
                onboardingComplete: true,
                selectedGoals: goals,
                settings: {
                    ...prev.settings,
                    investmentOption: investmentOption
                }
            }));
        logAnalytics("onboarding_completed", {
            goals,
            investmentOption
        });
    };
    const resetDemo = ()=>{
        setState(INITIAL_STATE);
        localStorage.removeItem("sunbullah-state");
    };
    const logAnalytics = (event, data)=>{
        console.log(`[v0] Analytics: ${event}`, data);
    };
    const updateNextAutoDeposit = (newSettings)=>{
        if (newSettings.paydaySavePercent !== undefined) {
            const mockSalary = 10000;
            const saveAmount = mockSalary * newSettings.paydaySavePercent / 100;
            setState((prev)=>({
                    ...prev,
                    nextAutoDeposit: {
                        date: getNextAutoDepositDate(),
                        amount: saveAmount
                    }
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            state,
            updateSettings,
            addTransaction,
            addDeposit,
            simulatePayday,
            completeOnboarding,
            resetDemo,
            logAnalytics
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/context/app-context.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(AppProvider, "pB9iUtveQxSAjqR8TNGXb5FSEXg=");
_c = AppProvider;
function useApp() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) {
        throw new Error("useApp must be used within AppProvider");
    }
    return context;
}
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/toast.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(({ id, title, description, action, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/toaster.tsx",
                                    lineNumber: 14,
                                    columnNumber: 23
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/toaster.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/toaster.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/components/ui/toaster.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/components/ui/toaster.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/components/ui/toaster.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/toaster.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_67b107a9._.js.map