(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Translation strings for English and Arabic
__turbopack_context__.s([
    "t",
    ()=>t,
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Common
        back: "Back",
        continue: "Continue",
        completeAndContinue: "Complete & Continue",
        cancel: "Cancel",
        save: "Save",
        loading: "Loading...",
        years: "Years",
        months: "Months",
        target: "Target",
        sar: "SAR",
        step: "Step",
        of: "of",
        // Link Page
        link: {
            title: "Link your spending source",
            subtitle: "Connect a card or wallet to start rounding up purchases",
            demoMode: "Demo Mode:",
            demoDesc: "No real accounts will be connected. This is for demonstration only.",
            selectSource: "Select Source",
            mockBank: "Mock Bank Card",
            mockBankDesc: "Connect your bank card",
            mockWallet: "Mock Wallet (STC Pay)",
            mockWalletDesc: "Connect your digital wallet",
            addFunds: "Add Funds",
            depositLabel: "Initial Deposit Amount",
            recurringLabel: "Make this a monthly deposit",
            recurringDesc: "Automate your savings habit",
            roundUpSettings: "Round-Up Settings",
            roundUpTo: "Round up to nearest",
            discretionaryOnly: "Discretionary only",
            discretionaryDesc: "Only restaurants, coffee, entertainment",
            connect: "Connect & Continue",
            successTitle: "Account Linked Successfully!",
            successDesc: "Your round-ups are now active. Watch your savings grow automatically.",
            depositAdded: "Initial Deposit Added",
            goToDashboard: "Go to Dashboard"
        },
        // Landing
        landing: {
            tagline: "Spend normally. Grow automatically.",
            subtitle: "Round up your purchases and invest the change in domestic, Shariah-aligned portfolios.",
            trustChips: {
                domestic: "Domestic",
                shariah: "Shariah-aligned",
                habitFirst: "Habit-first"
            },
            cta: "Get Started (Demo)",
            demo: {
                coffee: "Try Coffee Purchase",
                payday: "Simulate Payday",
                arabic: "Switch to Arabic (RTL)"
            },
            footer: {
                terms: "Terms",
                privacy: "Privacy",
                risk: "Risk Disclosure"
            },
            demoMode: "Demo Mode: Prototype for demonstration purposes only.",
            riskDisclosure: "Investing involves risk. Values may go down as well as up. Domestic & Shariah alignment are illustrative."
        },
        // Home
        home: {
            title: "Sunbullah",
            subtitle: "Your change is now working for you.",
            investedSoFar: "Invested so far",
            thisWeek: "This week",
            nextDeposit: "Next deposit",
            growthOverTime: "Growth over time",
            yourGoals: "Your Goals",
            quickActions: "Quick Actions",
            addDeposit: "Add SAR 25",
            quickDeposit: "Quick deposit",
            pauseRoundUps: "Pause Round-Ups",
            resumeRoundUps: "Resume Round-Ups",
            pauseDesc: "Temporarily stop investing",
            resumeDesc: "Start investing again",
            adjustPortfolio: "Adjust Portfolio",
            adjustDesc: "Change your investment strategy",
            insight: "Investing made effortless",
            insightDesc: "Based on your spending patterns, you're on track to invest around 80-100 SAR per month through round-ups alone. Keep it up!",
            noGoals: "No goals yet",
            noGoalsDesc: "Set a savings goal to track your progress and stay motivated.",
            addGoal: "Add Goal"
        },
        // Round-ups
        roundups: {
            title: "Round-Ups Settings",
            subtitle: "Customize how your spare change gets invested",
            roundUpTo: "Round up to nearest",
            example: "Example: A 18 SAR coffee rounds to",
            investing: "investing",
            weeklyCap: "Weekly Cap",
            weeklyCapDesc: "Maximum amount to invest per week through round-ups",
            discretionaryOnly: "Discretionary Only",
            discretionaryDesc: "Only round up restaurants, coffee, and entertainment",
            categoryBoosts: "Category Boosts",
            categoryBoostsDesc: "Add extra SAR to specific categories",
            paydaySave: "Payday Save",
            paydaySaveDesc: "Automatically invest a percentage of your monthly paycheck",
            estimatedMonthly: "Estimated Monthly Investment",
            estimatedDesc: "Based on your last 30 days of spending and current settings"
        },
        // Portfolios
        portfolios: {
            title: "Portfolios",
            subtitle: "All portfolios are Shariah-aligned and invest in domestic Saudi assets",
            riskLevel: "Risk Level",
            details: "Details",
            timeHorizon: "Time horizon",
            about: "About Our Portfolios",
            aboutDesc: "All portfolios invest exclusively in domestic Saudi assets and are structured to comply with Shariah principles. Fees are kept low with a flat subscription model. This is a demonstration - actual portfolios would be managed by licensed professionals.",
            currentlySelected: "Currently Selected",
            switchTo: "Switch to This Portfolio",
            growthPotential: "Growth Potential",
            shariahCompliant: "Shariah Compliant",
            shariahDesc: "All investments screened and structured according to Islamic principles",
            timeHorizonLabel: "Time Horizon",
            recommended: "Recommended",
            assetAllocation: "Asset Allocation",
            fees: "Fees",
            feesDesc: "Low flat subscription fee - Demo mode. Actual fees would be disclosed in production."
        },
        // Learn
        learn: {
            title: "Learn",
            subtitle: "Build your investing knowledge with short, practical articles",
            whyLearn: "Why Learn?",
            whyLearnDesc: "Understanding the basics of investing helps you make informed decisions and stay confident during market changes. Each article takes just 2-3 minutes to read.",
            backToLearn: "Back to Learn",
            readingTime: "Reading time: 2-3 minutes",
            shariahContent: "Shariah-aligned content",
            continueLearn: "Continue Learning",
            searchPlaceholder: "Search articles...",
            noResults: "No articles found",
            noResultsDesc: "Try adjusting your search query to find what you're looking for.",
            clearSearch: "Clear Search"
        },
        // Profile
        profile: {
            title: "Profile",
            subtitle: "Manage your account and preferences",
            accountInfo: "Account Information",
            fullName: "Full Name",
            nationalId: "National ID",
            iban: "IBAN",
            preferences: "Preferences",
            darkMode: "Dark Mode",
            darkModeDesc: "Toggle dark theme",
            language: "Language",
            demoActions: "Demo Actions",
            resetDemo: "Reset Demo Data",
            exportData: "Export Mock Data (JSON)",
            legal: "Legal",
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            risk: "Risk Disclosure"
        },
        // Transfer
        transfer: {
            title: "Transfer Money",
            subtitle: "Add or withdraw funds from your account",
            deposit: "Deposit",
            withdraw: "Withdraw",
            amount: "Amount (SAR)",
            processingTime: "Processing Time: Instant in demo mode. Real transfers would take 1-3 business days.",
            fees: "Fees: No fees in demo. Actual fees would be disclosed before confirmation."
        },
        zakat: {
            title: "Zakat",
            subtitle: "Calculate and track your zakat obligations on investments",
            calculator: "Zakat Calculator",
            calculatorDesc: "Zakat is 2.5% of total assets above nisab held for a lunar year",
            currentInvestment: "Current Investment Value",
            additionalAssets: "Additional Assets (Optional)",
            additionalAssetsPlaceholder: "Enter amount in SAR",
            additionalAssetsDesc: "Add cash, gold, or other zakatable assets",
            nisabThreshold: "Nisab Threshold",
            nisabDesc: "Equivalent to 85g of gold at current prices",
            zakatDue: "Zakat Due (2.5%)",
            aboveNisab: "Your assets exceed the nisab threshold. Zakat is due.",
            belowNisab: "Your assets are below the nisab threshold. No zakat is currently due.",
            hijriYear: "Current Hijri Year",
            paymentHistory: "Payment History",
            noPayments: "No previous payments",
            payNow: "Pay Zakat Now",
            learnMore: "Learn More About Zakat",
            disclaimer: "Note: This calculator is for guidance only. Consult a qualified Islamic scholar for personalized fatwa regarding your zakat obligations."
        },
        // Market
        market: {
            title: "Saudi Market",
            subtitle: "Live from Tadawul",
            tasiIndex: "TASI Index",
            lastUpdated: "Last updated",
            portfolioSummary: "Portfolio Summary",
            totalValue: "Total Value",
            totalGain: "Total Gain/Loss",
            yourHoldings: "Your Holdings",
            shares: "shares",
            currentValue: "Current Value",
            viewMarket: "View Market",
            disclaimer: "Data is for demonstration purposes. In production, real-time market data from Tadawul would be integrated."
        },
        // Budget
        budget: {
            title: "Budget Tracker",
            subtitle: "Track your monthly spending and reach your financial goals",
            summary: "Monthly Budget Summary",
            totalBudget: "Total Budget",
            spent: "Spent",
            remaining: "Remaining",
            utilization: "Budget Utilization",
            byCategory: "Spending by Category",
            distribution: "Expense Distribution",
            categoryDetails: "Category Details"
        },
        news: {
            title: "Financial News",
            subtitle: "Stay updated with latest financial and Saudi market news",
            all: "All",
            forYou: "For You",
            markets: "Markets",
            personal: "Personal",
            regulations: "Regulations",
            important: "Important",
            loading: "Loading...",
            noNews: "No news available"
        },
        health: {
            title: "Financial Health Report",
            subtitle: "Comprehensive assessment of your financial health with personalized recommendations",
            overallScore: "Overall Health Score",
            excellent: "Excellent financial health!",
            good: "Good financial health",
            improve: "Room for improvement",
            savingsRate: "Savings Rate",
            diversification: "Diversification",
            emergencyFund: "Emergency Fund",
            performance: "Performance",
            zakat: "Zakat",
            budget: "Budget",
            recommendations: "Personalized Recommendations",
            you_have: "You have"
        },
        quizzes: {
            title: "Quizzes",
            subtitle: "Test your knowledge and learn new skills",
            shariah: "Shariah Investing",
            budgeting: "Smart Budgeting",
            investing: "Investment Basics",
            zakat: "Zakat Essentials",
            questions: "Questions",
            min: "min",
            start: "Start",
            retake: "Retake",
            backToQuizzes: "Back to Quizzes",
            question: "Question",
            excellent: "Excellent!",
            goodTry: "Good Try!",
            outstanding: "Outstanding performance!",
            onTrack: "You're on the right track!",
            review: "Review the material and try again",
            next: "Next",
            finish: "Finish"
        },
        // Savings and Investment sections
        savings: {
            title: "Savings Account",
            subtitle: "Your secure savings account details",
            currentBalance: "Current Balance",
            accountDetails: "Account Details",
            partnerBank: "Partner Bank",
            accountType: "Account Type",
            profitRate: "Current Profit Rate",
            accountStatus: "Account Status",
            active: "Active",
            keyFeatures: "Key Features",
            secureAccessible: "Secure & Accessible",
            secureAccessibleDesc: "Withdraw anytime without penalties",
            profitSharing: "Profit Sharing",
            profitSharingDesc: "Earn profits based on bank performance",
            autoRoundups: "Automatic Round-ups",
            autoRoundUpsDesc: "Funds accumulate from your daily spending",
            recentActivity: "Recent Activity",
            roundUp: "Round-up",
            commonQuestions: "Common Questions",
            isMoneySafe: "Is my money safe?",
            isMoneySafeDesc: "Yes. Your funds are held by Al Rajhi Bank, a licensed Saudi financial institution regulated by SAMA.",
            whenProfits: "When do I earn profits?",
            whenProfitsDesc: "Profit-sharing is calculated monthly and credited to your account quarterly.",
            canWithdrawAnytime: "Can I withdraw anytime?",
            canWithdrawAnytimeDesc: "Yes, you can withdraw your funds at any time without penalties or lock-in periods.",
            withdrawFunds: "Withdraw Funds"
        },
        investment: {
            title: "Partner Investment",
            subtitle: "Your partner investment account details",
            currentPortfolioValue: "Current Portfolio Value",
            investmentDetails: "Investment Details",
            expectedAnnualProfit: "Expected Annual Profit",
            monthlyEstimate: "Monthly Estimate",
            investmentType: "Investment Type",
            expectedReturn: "Expected Annual Return",
            nextPayout: "Next Payout",
            fixedIncomeSukuk: "Fixed Income (Sukuk)",
            whyPartnerInvestment: "Why Partner Investment?",
            fixedReturns: "Fixed Expected Returns",
            fixedReturnsDesc: "~5% annual profit, predictable and consistent",
            shariahCompliant: "Shariah-Compliant",
            shariahCompliantDesc: "100% halal investment structure certified by Islamic scholars",
            annualPayouts: "Annual Payouts",
            annualPayoutsDesc: "Profits distributed yearly, reinvested or withdrawn",
            steadyGrowth: "Steady Growth",
            steadyGrowthDesc: "Compound your wealth through automatic round-ups",
            riskDisclosure: "Risk Disclosure",
            riskDisclosureDesc: "While partner bank investments are generally lower risk, past performance does not guarantee future results. Expected profits are not guaranteed and may vary based on market conditions. This investment is backed by the partner bank's balance sheet and regulatory oversight by SAMA.",
            isGuaranteed: "Is this a guaranteed investment?",
            isGuaranteedDesc: "Expected profits are based on partner bank performance. While backed by the bank, market conditions can affect returns.",
            canWithdrawEarly: "Can I withdraw early?",
            canWithdrawEarlyDesc: "Withdrawals are typically processed at year-end. Early redemptions may apply terms as per contract.",
            isShariahCompliant: "Is this Shariah-compliant?",
            isShariahCompliantDesc: "Yes. All investments are in Shariah-compliant instruments like Sukuk and Islamic bonds certified by Islamic financial scholars.",
            howTaxesCalculated: "How are taxes calculated?",
            howTaxesCalculatedDesc: "Currently, no applicable taxes on investment returns. Zakat may apply depending on your wealth level.",
            portfolio: {
                title: "Partner Investment Portfolio"
            },
            returns: {
                label: "Expected Profit",
                sub: "Paid Annually",
                tooltip: "This is the estimated annual profit rate based on the partner bank's historical performance. It is not guaranteed."
            },
            risk: {
                label: "Risk Level",
                low: "Low",
                sub: "Capital Preservation",
                tooltip: "Low risk means your principal investment is prioritized for safety, with lower volatility but steady growth."
            }
        },
        // Simulator
        simulator: {
            title: "See your money grow",
            subtitle: "Projected savings over time",
            tooltip: "This projection assumes consistent monthly deposits and estimated annual returns. Past performance does not guarantee future results.",
            timeHorizon: "Time Horizon",
            totalDeposited: "Your Deposits",
            estProfit: "Est. Profit",
            profit: "Profit",
            balance: "Balance",
            disclaimer: "Estimates only. Not guaranteed. Based on historical market performance and does not predict future returns."
        },
        // Onboarding
        onboarding: {
            welcome: {
                title: "Save without feeling it",
                subtitle: "Join 50,000+ Saudis growing their wealth automatically.",
                cta: "Get Started"
            },
            trust: {
                regulated: "Regulated & Secure",
                regulatedDesc: "Operating in SAMA Sandbox & CMA FinTech Lab",
                shariah: "100% Halal",
                shariahDesc: "Certified Shariah-compliant investments"
            },
            phone: {
                title: "What's your number?",
                subtitle: "We'll send a code to verify your account.",
                label: "Mobile Number",
                otpLabel: "Verification Code",
                sendOtp: "Send Verification Code",
                verify: "Verify & Continue",
                changeNumber: "Change Number"
            },
            goals: {
                emergency: "Emergency Fund",
                hajj: "Hajj / Umrah",
                car: "New Car",
                home: "Save For A Home",
                marriage: "Marriage",
                wealth: "General Wealth"
            },
            goal: {
                title: "What are you saving for?",
                subtitle: "Choose a goal to start your journey.",
                targetLabel: "Target Amount (SAR)",
                successTitle: "Goal Created Successfully!",
                successDesc: "You've taken the first step towards your {goal}. Now let's choose how to grow it.",
                successCta: "Continue to Risk Assessment"
            },
            kyc: {
                title: "Tell us about yourself",
                subtitle: "We need this information to comply with Saudi financial regulations (CMA/SAMA).",
                fullName: "Full Name (as per National ID)",
                nationalId: "National ID / Iqama Number",
                dateOfBirth: "Date of Birth",
                occupation: "Occupation",
                monthlyIncome: "Monthly Income (SAR)"
            },
            risk: {
                title: "What's your risk preference?",
                subtitle: "Choose how you'd like your round-ups to be allocated between savings and investment.",
                conservative: "Conservative",
                conservativeDesc: "Prioritize safety and liquidity. All funds go to savings account.",
                moderate: "Moderate",
                moderateDesc: "Balanced approach with equal split between savings and investment.",
                growth: "Growth",
                growthDesc: "Maximize returns. All funds directed to Shariah-compliant investment portfolio."
            }
        }
    },
    ar: {
        // Common
        back: "رجوع",
        continue: "متابعة",
        completeAndContinue: "إكمال ومتابعة",
        cancel: "إلغاء",
        save: "حفظ",
        // Link Page
        link: {
            title: "اربط مصدر إنفاقك",
            subtitle: "اربط بطاقة أو محفظة لبدء تقريب المشتريات",
            demoMode: "الوضع التجريبي:",
            demoDesc: "لن يتم ربط أي حسابات حقيقية. هذا للعرض التوضيحي فقط.",
            selectSource: "اختر المصدر",
            mockBank: "بطاقة بنكية تجريبية",
            mockBankDesc: "اربط بطاقتك البنكية",
            mockWallet: "محفظة تجريبية (STC Pay)",
            mockWalletDesc: "اربط محفظتك الرقمية",
            addFunds: "إضافة أموال",
            depositLabel: "مبلغ الإيداع الأولي",
            recurringLabel: "اجعل هذا إيداعًا شهريًا",
            recurringDesc: "أتمتة عادة الادخار الخاصة بك",
            roundUpSettings: "إعدادات التقريب",
            roundUpTo: "قرّب إلى أقرب",
            discretionaryOnly: "اختياري فقط",
            discretionaryDesc: "المطاعم والقهوة والترفيه فقط",
            connect: "ربط ومتابعة",
            successTitle: "تم ربط الحساب بنجاح!",
            successDesc: "التقريب التلقائي نشط الآن. شاهد مدخراتك تنمو تلقائيًا.",
            depositAdded: "تمت إضافة الإيداع الأولي",
            goToDashboard: "الذهاب إلى لوحة التحكم"
        },
        // Landing
        landing: {
            tagline: "أنفق بشكل طبيعي. انمُ تلقائيًا.",
            subtitle: "قرّب مشترياتك واستثمر الفكة في محافظ محلية متوافقة مع الشريعة.",
            trustChips: {
                domestic: "محلي",
                shariah: "متوافق مع الشريعة",
                habitFirst: "يركز على العادات"
            },
            cta: "ابدأ (تجريبي)",
            demo: {
                coffee: "جرب شراء قهوة",
                payday: "محاكاة يوم الراتب",
                arabic: "التبديل إلى الإنجليزية"
            },
            footer: {
                terms: "الشروط",
                privacy: "الخصوصية",
                risk: "الإفصاح عن المخاطر"
            },
            demoMode: "الوضع التجريبي: نموذج أولي لأغراض العرض التوضيحي فقط.",
            riskDisclosure: "الاستثمار ينطوي على مخاطر. قد تنخفض القيم أو ترتفع. التوافق المحلي والشرعي توضيحي."
        },
        // Home
        home: {
            title: "سنبلة",
            subtitle: "فكتك الآن تعمل من أجلك.",
            investedSoFar: "المستثمر حتى الآن",
            thisWeek: "هذا الأسبوع",
            nextDeposit: "الإيداع التالي",
            growthOverTime: "النمو مع مرور الوقت",
            yourGoals: "أهدافك",
            quickActions: "إجراءات سريعة",
            addDeposit: "أضف ٢٥ ريال",
            quickDeposit: "إيداع سريع",
            pauseRoundUps: "إيقاف التقريب",
            resumeRoundUps: "استئناف التقريب",
            pauseDesc: "إيقاف الاستثمار مؤقتًا",
            resumeDesc: "ابدأ الاستثمار مرة أخرى",
            adjustPortfolio: "تعديل المحفظة",
            adjustDesc: "غيّر استراتيجية الاستثمار",
            insight: "الاستثمار بدون جهد",
            insightDesc: "بناءً على أنماط إنفاقك، أنت في طريقك لاستثمار حوالي ٢٠-١٠٠ ريال شهريًا من خلال التقريب وحده. استمر!",
            noGoals: "لا توجد أهداف بعد",
            noGoalsDesc: "حدد هدف ادخار لتتبع تقدمك والبقاء متحفزًا.",
            addGoal: "إضافة هدف"
        },
        // Round-ups
        roundups: {
            title: "إعدادات التقريب",
            subtitle: "خصص كيفية استثمار فكتك",
            roundUpTo: "قرّب إلى أقرب",
            example: "مثال: قهوة بـ ١٢ ريال تقرب إلى",
            investing: "استثمار",
            weeklyCap: "الحد الأسبوعي",
            weeklyCapDesc: "الحد الأقصى للمبلغ المستثمر أسبوعيًا من خلال التقريب",
            discretionaryOnly: "اختياري فقط",
            discretionaryDesc: "قرّب المطاعم والقهوة والترفيه فقط",
            categoryBoosts: "تعزيزات الفئة",
            categoryBoostsDesc: "أضف ريالات إضافية لفئات محددة",
            paydaySave: "ادخار يوم الراتب",
            paydaySaveDesc: "استثمر نسبة من راتبك الشهري تلقائيًا",
            estimatedMonthly: "الاستثمار الشهري المقدر",
            estimatedDesc: "بناءً على آخر ٣٠ يومًا من الإنفاق والإعدادات الحالية"
        },
        // Portfolios
        portfolios: {
            title: "المحافظ",
            subtitle: "جميع المحافظ متوافقة مع الشريعة وتستثمر في الأصول المحلية السعودية",
            riskLevel: "مستوى المخاطرة",
            details: "التفاصيل",
            timeHorizon: "الأفق الزمني",
            about: "حول المحافظ",
            aboutDesc: "تستثمر جميع المحافظ حصريًا في الأصول المحلية السعودية ومنظمة للامتثال لمبادئ الشريعة. الرسوم منخفضة مع نموذج اشتراك ثابت. هذا عرض توضيحي - المحافظ الفعلية ستدار من قبل محترفين مرخصين.",
            currentlySelected: "المحدد حاليًا",
            switchTo: "التبديل إلى هذه المحفظة",
            growthPotential: "إمكانات النمو",
            shariahCompliant: "متوافق مع الشريعة",
            shariahDesc: "جميع الاستثمارات مفحوصة ومنظمة وفقًا للمبادئ الإسلامية",
            timeHorizonLabel: "الأفق الزمني",
            recommended: "موصى به",
            assetAllocation: "توزيع الأصول",
            fees: "الرسوم",
            feesDesc: "رسوم اشتراك ثابتة منخفضة - الوضع التجريبي. سيتم الإفصاح عن الرسوم الفعلية في الإنتاج."
        },
        // Learn
        learn: {
            title: "تعلم",
            subtitle: "بناء معرفتك الاستثمارية بمقالات قصيرة وعملية",
            whyLearn: "لماذا التعلم؟",
            whyLearnDesc: "فهم أساسيات الاستثمار يساعدك على اتخاذ قرارات مستنيرة والبقاء واثقًا أثناء تغيرات السوق. كل مقال يستغرق ٢-٣ دقائق فقط للقراءة.",
            backToLearn: "العودة إلى التعلم",
            readingTime: "وقت القراءة: ٢-٣ دقائق",
            shariahContent: "محتوى متوافق مع الشريعة",
            continueLearn: "متابعة التعلم",
            searchPlaceholder: "ابحث عن المقالات...",
            noResults: "لم يتم العثور على مقالات",
            noResultsDesc: "حاول تعديل استعلام البحث للعثور على ما تبحث عنه.",
            clearSearch: "مسح البحث"
        },
        // Profile
        profile: {
            title: "الملف الشخصي",
            subtitle: "إدارة حسابك وتفضيلاتك",
            accountInfo: "معلومات الحساب",
            fullName: "الاسم الكامل",
            nationalId: "رقم الهوية الوطنية",
            iban: "رقم الآيبان",
            preferences: "التفضيلات",
            darkMode: "الوضع الداكن",
            darkModeDesc: "تبديل المظهر الداكن",
            language: "اللغة",
            demoActions: "إجراءات تجريبية",
            resetDemo: "إعادة تعيين البيانات التجريبية",
            exportData: "تصدير البيانات الوهمية (JSON)",
            legal: "قانوني",
            terms: "شروط الخدمة",
            privacy: "سياسة الخصوصية",
            risk: "الإفصاح عن المخاطر"
        },
        // Transfer
        transfer: {
            title: "تحويل الأموال",
            subtitle: "إضافة أو سحب الأموال من حسابك",
            deposit: "إيداع",
            withdraw: "سحب",
            amount: "المبلغ (ريال)",
            processingTime: "وقت المعالجة: فوري في الوضع التجريبي. التحويلات الحقيقية ستستغرق ١-٣ أيام عمل.",
            fees: "الرسوم: لا توجد رسوم في التجريبي. سيتم الإفصاح عن الرسوم الفعلية قبل التأكيد."
        },
        zakat: {
            title: "الزكاة",
            subtitle: "احسب وتتبع التزامات الزكاة على استثماراتك",
            calculator: "حاسبة الزكاة",
            calculatorDesc: "الزكاة هي ٢.٥٪ من إجمالي الأصول التي تتجاوز النصاب وتم الاحتفاظ بها لمدة عام قمري",
            currentInvestment: "قيمة الاستثمار الحالية",
            additionalAssets: "أصول إضافية (اختياري)",
            additionalAssetsPlaceholder: "أدخل المبلغ بالريال",
            additionalAssetsDesc: "أضف نقود أو ذهب أو أصول أخرى خاضعة للزكاة",
            nisabThreshold: "عتبة النصاب",
            nisabDesc: "يعادل ٢٩ جرام من الذهب بالأسعار الحالية",
            zakatDue: "الزكاة المستحقة (٢.٥٪)",
            aboveNisab: "أصولك تتجاوز عتبة النصاب. الزكاة واجبة.",
            belowNisab: "أصولك أقل من عتبة النصاب. لا زكاة واجبة حاليًا.",
            hijriYear: "السنة الهجرية الحالية",
            paymentHistory: "سجل المدفوعات",
            noPayments: "لا توجد مدفوعات سابقة",
            payNow: "ادفع الزكاة الآن",
            learnMore: "تعلم المزيد عن الزكاة",
            disclaimer: "ملاحظة: هذه الحاسبة للإرشاد فقط. استشر عالم دين مؤهل للحصول على فتوى شخصية بشأن التزامات الزكاة الخاصة بك."
        },
        // Market
        market: {
            title: "السوق السعودي",
            subtitle: "تحديث مباشر من تداول",
            tasiIndex: "مؤشر تاسي",
            lastUpdated: "آخر تحديث",
            portfolioSummary: "ملخص المحفظة",
            totalValue: "القيمة الإجمالية",
            totalGain: "الربح/الخسارة",
            yourHoldings: "الأسهم المملوكة",
            shares: "سهم",
            currentValue: "القيمة الحالية",
            viewMarket: "عرض السوق",
            disclaimer: "البيانات للأغراض التوضيحية فقط. في الإنتاج، سيتم دمج بيانات السوق في الوقت الفعلي من تداول."
        },
        // Budget
        budget: {
            title: "متتبع الميزانية",
            subtitle: "تابع نفقاتك الشهرية وتحقق من أهدافك المالية",
            summary: "ملخص الميزانية الشهرية",
            totalBudget: "الميزانية الكلية",
            spent: "المبلغ المنفق",
            remaining: "المتبقي",
            utilization: "استخدام الميزانية",
            byCategory: "الإنفاق حسب الفئة",
            distribution: "توزيع النفقات",
            categoryDetails: "تفاصيل الفئات"
        },
        news: {
            title: "أخبار مالية",
            subtitle: "احصل على آخر الأخبار المالية والسعودية ذات الصلة",
            all: "الكل",
            forYou: "لك",
            markets: "الأسواق",
            personal: "شخصي",
            regulations: "اللوائح",
            important: "مهم",
            loading: "جاري التحميل...",
            noNews: "لا توجد أخبار متاحة"
        },
        health: {
            title: "تقرير الصحة المالية",
            subtitle: "تقييم شامل لصحتك المالية والتوصيات الشخصية",
            overallScore: "درجة الصحة العامة",
            excellent: "صحتك المالية ممتازة!",
            good: "صحتك المالية جيدة",
            improve: "هناك مجال للتحسن",
            savingsRate: "معدل الادخار",
            diversification: "التنويع",
            emergencyFund: "صندوق الطوارئ",
            performance: "الأداء",
            zakat: "الزكاة",
            budget: "الميزانية",
            recommendations: "التوصيات الشخصية",
            you_have: "لديك"
        },
        quizzes: {
            title: "الاختبارات",
            subtitle: "اختبر معرفتك وتعلم مهارات جديدة",
            shariah: "الاستثمار الشرعي",
            budgeting: "الميزانية الذكية",
            investing: "أساسيات الاستثمار",
            zakat: "أساسيات الزكاة",
            questions: "أسئلة",
            min: "دقائق",
            start: "ابدأ",
            retake: "إعادة محاولة",
            backToQuizzes: "العودة إلى الاختبارات",
            question: "السؤال",
            excellent: "ممتاز!",
            goodTry: "جيد محاولة!",
            outstanding: "أداء استثنائي!",
            onTrack: "أنت على الطريق الصحيح!",
            review: "مراجعة المواد وحاول مرة أخرى",
            next: "التالي",
            finish: "إنهاء"
        },
        // Savings and Investment sections
        savings: {
            title: "حساب التوفير",
            subtitle: "تفاصيل حساب التوفير الآمن الخاص بك",
            currentBalance: "الرصيد الحالي",
            accountDetails: "تفاصيل الحساب",
            partnerBank: "بنك الشريك",
            accountType: "نوع الحساب",
            profitRate: "معدل الربح الحالي",
            accountStatus: "حالة الحساب",
            active: "نشط",
            keyFeatures: "المميزات الرئيسية",
            secureAccessible: "آمن وسهل الوصول",
            secureAccessibleDesc: "اسحب أموالك في أي وقت بدون رسوم",
            profitSharing: "تقاسم الأرباح",
            profitSharingDesc: "اكسب أرباح بناءً على أداء البنك",
            autoRoundups: "التقريب التلقائي",
            autoRoundUpsDesc: "تتراكم الأموال من مشترياتك اليومية",
            recentActivity: "النشاط الحديث",
            roundUp: "تقريب",
            commonQuestions: "أسئلة شائعة",
            isMoneySafe: "هل أموالي آمنة؟",
            isMoneySafeDesc: "نعم. يتم الاحتفاظ بأموالك في مصرف الراجحي، وهو مؤسسة مالية سعودية مرخصة تخضع لإشراف ساما.",
            whenProfits: "متى أكسب الأرباح؟",
            whenProfitsDesc: "يتم حساب توزيع الأرباح شهريًا وإيداعها في حسابك ربع سنويًا.",
            canWithdrawAnytime: "هل يمكنني السحب في أي وقت؟",
            canWithdrawAnytimeDesc: "نعم، يمكنك سحب أموالك في أي وقت بدون رسوم أو فترات قفل.",
            withdrawFunds: "سحب الأموال"
        },
        investment: {
            title: "استثمار الشريك",
            subtitle: "تفاصيل حساب استثمار الشريك الخاص بك",
            currentPortfolioValue: "قيمة المحفظة الحالية",
            investmentDetails: "تفاصيل الاستثمار",
            expectedAnnualProfit: "الربح السنوي المتوقع",
            monthlyEstimate: "التقدير الشهري",
            investmentType: "نوع الاستثمار",
            expectedReturn: "العائد السنوي المتوقع",
            nextPayout: "الدفعة التالية",
            fixedIncomeSukuk: "الدخل الثابت (صكوك)",
            whyPartnerInvestment: "لماذا استثمار الشريك؟",
            fixedReturns: "عائد مثابت متوقع",
            fixedReturnsDesc: "ربح سنوي ~٥٪، قابل للتنبؤ به ومستقر",
            shariahCompliant: "متوافق مع الشريعة",
            shariahCompliantDesc: "هيكل استثمار حلال ١٠٠٪ معتمد من العلماء الإسلاميين",
            annualPayouts: "الدفعات السنوية",
            annualPayoutsDesc: "يتم توزيع الأرباح سنويًا، سحب أو إعادة استثمار",
            steadyGrowth: "نمو ثابت",
            steadyGrowthDesc: "زد ثروتك من خلال التقريب التلقائي",
            riskDisclosure: "الإفصاح عن المخاطر",
            riskDisclosureDesc: "بينما استثمارات البنك الشريك عادة ما تكون أقل مخاطرة، الأداء السابق لا يضمن النتائج المستقبلية. لا يتم ضمان الأرباح المتوقعة وقد تختلف بناءً على ظروف السوق. هذا الاستثمار مدعوم من قبل الميزانية العمومية للبنك الشريك والإشراف التنظيمي من قبل ساما.",
            isGuaranteed: "هل هذا استثمار مضمون؟",
            isGuaranteedDesc: "الأرباح المتوقعة تعتمد على أداء البنك الشريك. بينما مدعومة من البنك، قد تؤثر ظروف السوق على العائدات.",
            canWithdrawEarly: "هل يمكنني السحب مبكرًا؟",
            canWithdrawEarlyDesc: "عادة ما يتم معالجة السحب في نهاية السنة. قد تنطبق شروط على الاسترداد المبكر حسب العقد.",
            isShariahCompliant: "هل هذا متوافق مع الشريعة؟",
            isShariahCompliantDesc: "نعم. جميع الاستثمارات في أدوات متوافقة مع الشريعة الإسلامية مثل الصكوك والسندات الإسلامية المعتمدة من علماء التمويل الإسلامي.",
            howTaxesCalculated: "كيف تُحسب الضرائب؟",
            howTaxesCalculatedDesc: "حاليًا، لا توجد ضرائب قابلة للتطبيق على عوائد الاستثمار. قد تنطبق الزكاة حسب مستوى ثروتك.",
            portfolio: {
                title: "محفظة الاستثمار الشريكة"
            },
            returns: {
                label: "الربح المتوقع",
                sub: "يدفع سنوياً",
                tooltip: "هذا هو معدل الربح السنوي المقدر بناءً على الأداء التاريخي للبنك الشريك. وهو غير مضمون."
            },
            risk: {
                label: "مستوى المخاطرة",
                low: "منخفض",
                sub: "حفظ رأس المال",
                tooltip: "المخاطرة المنخفضة تعني أن استثمارك الأساسي له أولوية في الأمان، مع تقلبات أقل ولكن نمو ثابت."
            }
        },
        // Simulator
        simulator: {
            title: "شاهد نمو أموالك",
            subtitle: "توقعات المدخرات مع مرور الوقت",
            tooltip: "يفترض هذا التوقع إيداعات شهرية منتظمة وعوائد سنوية تقديرية. الأداء السابق لا يضمن النتائج المستقبلية.",
            timeHorizon: "الأفق الزمني",
            totalDeposited: "إيداعاتك",
            estProfit: "الربح المقدر",
            profit: "ربح",
            balance: "الرصيد",
            disclaimer: "تقديرات فقط. غير مضمونة. بناءً على أداء السوق التاريخي ولا تتنبأ بالعوائد المستقبلية."
        },
        // Onboarding
        onboarding: {
            welcome: {
                title: "ادخر دون أن تشعر",
                subtitle: "انضم إلى أكثر من 50,000 سعودي ينمون ثرواتهم تلقائيًا.",
                cta: "ابدأ الآن"
            },
            trust: {
                regulated: "مرخص وآمن",
                regulatedDesc: "نعمل في البيئة التجريبية لمؤسسة النقد وهيئة السوق المالية",
                shariah: "100% حلال",
                shariahDesc: "استثمارات متوافقة مع الشريعة الإسلامية"
            },
            phone: {
                title: "ما هو رقم جوالك؟",
                subtitle: "سنرسل رمزًا للتحقق من حسابك.",
                label: "رقم الجوال",
                otpLabel: "رمز التحقق",
                sendOtp: "إرسال رمز التحقق",
                verify: "تحقق ومتابعة",
                changeNumber: "تغيير الرقم"
            },
            goals: {
                emergency: "صندوق الطوارئ",
                hajj: "الحج / العمرة",
                car: "سيارة جديدة",
                home: "الادخار لمنزل",
                marriage: "الزواج",
                wealth: "تنمية الثروة"
            },
            goal: {
                title: "ما الذي تدخر من أجله؟",
                subtitle: "اختر هدفًا لبدء رحلتك.",
                targetLabel: "المبلغ المستهدف (ريال)",
                successTitle: "تم إنشاء الهدف بنجاح!",
                successDesc: "لقد اتخذت الخطوة الأولى نحو {goal}. الآن دعنا نختار كيفية تنميته.",
                successCta: "متابعة إلى تقييم المخاطر"
            },
            kyc: {
                title: "أخبرنا عن نفسك",
                subtitle: "نحتاج هذه المعلومات للامتثال للوائح المالية السعودية (هيئة السوق المالية/مؤسسة النقد).",
                fullName: "الاسم الكامل (كما في الهوية الوطنية)",
                nationalId: "رقم الهوية الوطنية / الإقامة",
                dateOfBirth: "تاريخ الميلاد",
                occupation: "المهنة",
                monthlyIncome: "الدخل الشهري (ريال)"
            },
            risk: {
                title: "ما هو تفضيلك للمخاطر؟",
                subtitle: "اختر كيف تريد توزيع تقريباتك بين التوفير والاستثمار.",
                conservative: "محافظ",
                conservativeDesc: "إعطاء الأولوية للأمان والسيولة. جميع الأموال تذهب إلى حساب التوفير.",
                moderate: "متوازن",
                moderateDesc: "نهج متوازن مع تقسيم متساوٍ بين التوفير والاستثمار.",
                growth: "نمو",
                growthDesc: "تنمية العوائد ، جميع الأموال الموجهة الى محفظتك الاستثمارية متوافقة مع الشريعة الإسلامية"
            }
        }
    }
};
function t(key, lang = "en", customText) {
    // If custom text is provided and exists for the current language, use it
    if (customText && customText[lang]) {
        return customText[lang];
    }
    // Otherwise, use the standard translation lookup
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys){
        value = value?.[k];
    }
    return value || key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/translations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTranslation() {
    _s();
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { language } = state.settings;
    const t = (key, customText)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(key, language, customText);
    return {
        t,
        language
    };
}
_s(useTranslation, "4T9imRGE2C10qdYg9OIaug00+PA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/track-event.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Analytics event tracking utility
// In production, this would integrate with analytics services like Google Analytics, Mixpanel, etc.
__turbopack_context__.s([
    "trackEvent",
    ()=>trackEvent
]);
function trackEvent(eventName, properties) {
    // Demo mode: just log to console
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("[v0] Analytics Event:", eventName, properties);
    }
// In production, you would integrate with your analytics service:
// Example:
// gtag('event', eventName, properties)
// mixpanel.track(eventName, properties)
// analytics.track(eventName, properties)
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Client - Centralized API connection handler
 * 
 * This module provides a unified interface for making API calls.
 * It handles configuration, error handling, and can switch between
 * mock data and real API endpoints based on environment variables.
 */ // Types for API responses
__turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "apiClient",
    ()=>apiClient,
    "handleApiError",
    ()=>handleApiError,
    "isApiError",
    ()=>isApiError,
    "isApiSuccess",
    ()=>isApiSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// API Configuration
const API_CONFIG = {
    // Use environment variable for base URL, throw error if not provided
    baseUrl: ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || (()=>{
        throw new Error('NEXT_PUBLIC_API_URL environment variable is required');
    })(),
    // Default timeout for API requests
    timeout: 10000,
    // Default headers
    defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};
/**
 * Generic API client class
 */ class ApiClient {
    baseUrl;
    defaultHeaders;
    timeout;
    constructor(){
        this.baseUrl = API_CONFIG.baseUrl;
        this.defaultHeaders = API_CONFIG.defaultHeaders;
        this.timeout = API_CONFIG.timeout;
    }
    /**
   * Set authorization token for authenticated requests
   */ setAuthToken(token) {
        this.defaultHeaders['Authorization'] = `Bearer ${token}`;
    }
    /**
   * Remove authorization token
   */ clearAuthToken() {
        delete this.defaultHeaders['Authorization'];
    }
    /**
   * Generic request method
   */ async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        // Automatically include auth token from localStorage if available
        const authToken = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('authToken') : "TURBOPACK unreachable";
        const headers = {
            ...this.defaultHeaders,
            ...options.headers
        };
        if (authToken && !headers['Authorization']) {
            headers['Authorization'] = `Bearer ${authToken}`;
        }
        const config = {
            ...options,
            headers,
            signal: AbortSignal.timeout(this.timeout)
        };
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            return {
                data,
                success: true,
                message: 'Request successful'
            };
        } catch (error) {
            console.error('API Request Error:', error);
            const apiError = {
                data: null,
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
            throw apiError;
        }
    }
    /**
   * GET request
   */ async get(endpoint, params) {
        const url = new URL(endpoint, this.baseUrl);
        if (params) {
            Object.keys(params).forEach((key)=>{
                if (params[key] !== undefined && params[key] !== null) {
                    url.searchParams.append(key, String(params[key]));
                }
            });
        }
        return this.request(url.pathname + url.search);
    }
    /**
   * POST request
   */ async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    /**
   * PUT request
   */ async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    /**
   * PATCH request
   */ async patch(endpoint, data) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    /**
   * DELETE request
   */ async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
    /**
   * Upload file
   */ async upload(endpoint, file, additionalData) {
        const formData = new FormData();
        formData.append('file', file);
        if (additionalData) {
            Object.keys(additionalData).forEach((key)=>{
                formData.append(key, String(additionalData[key]));
            });
        }
        return this.request(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
                // Don't set Content-Type for FormData, let browser set it with boundary
                ...Object.fromEntries(Object.entries(this.defaultHeaders).filter(([key])=>key.toLowerCase() !== 'content-type'))
            }
        });
    }
    /**
   * Health check endpoint
   */ async healthCheck() {
        try {
            const response = await this.get('/health');
            return response.success;
        } catch  {
            return false;
        }
    }
    /**
   * Get API configuration
   */ getConfig() {
        return {
            baseUrl: this.baseUrl,
            timeout: this.timeout
        };
    }
}
const apiClient = new ApiClient();
;
function handleApiError(error) {
    if (error?.error) {
        return error.error;
    }
    if (error?.message) {
        return error.message;
    }
    return 'An unexpected error occurred';
}
function isApiSuccess(response) {
    return response.success === true;
}
function isApiError(response) {
    return response.success === false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/user-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUser",
    ()=>createUser,
    "getUserById",
    ()=>getUserById,
    "updateUser",
    ()=>updateUser,
    "updateUserDuringOnboarding",
    ()=>updateUserDuringOnboarding,
    "verifyOtp",
    ()=>verifyOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-client] (ecmascript)");
;
async function createUser(userData) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/auth/createUser', userData);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiSuccess"])(response)) {
        // The API response has the user data nested in a 'data' property
        return response.data.data;
    } else {
        throw new Error(response.error || 'Failed to create user');
    }
}
async function getUserById(userId) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/users/${userId}`);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiSuccess"])(response)) {
        return response.data;
    } else {
        throw new Error(response.error || 'Failed to fetch user');
    }
}
async function updateUser(userId, userData) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/users/${userId}`, userData);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiSuccess"])(response)) {
        return response.data;
    } else {
        throw new Error(response.error || 'Failed to update user');
    }
}
async function updateUserDuringOnboarding(userId, userData) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/auth/updateUser/${userId}`, userData);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiSuccess"])(response)) {
        return response.data.data;
    } else {
        throw new Error(response.error || 'Failed to update user during onboarding');
    }
}
async function verifyOtp(userId, otp) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/auth/verify-otp/${userId}`, {
        otp
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isApiSuccess"])(response)) {
        // The API response has the verification result nested in a 'data' property
        return response.data.data;
    } else {
        throw new Error(response.error || 'Failed to verify OTP');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/onboarding/Welcome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Welcome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Welcome({ handleNext }) {
    _s();
    const { updateSettings, completeOnboarding } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "sm",
                    onClick: ()=>updateSettings({
                            language: language === "en" ? "ar" : "en"
                        }),
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                            lineNumber: 20,
                            columnNumber: 17
                        }, this),
                        language === "en" ? "العربية" : "English"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                    lineNumber: 14,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/placeholder.svg?key=khgdt",
                            alt: "Sunbullah",
                            className: "w-12 h-12"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-emerald-900 dark:text-emerald-50",
                        children: t("onboarding.welcome.title", {
                            en: "Save without feeling it",
                            ar: "استثمر بفكة اليوم واصنع لك بكرة غير"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 29,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground max-w-xs mx-auto",
                        children: t("onboarding.welcome.subtitle", {
                            en: "Join 50,000+ Saudis growing their wealth automatically.",
                            ar: "انضم لأكثر من 50 ألف سعودي يستثمرون بطريقة شرعية ومربحة"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 35,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-none shadow-sm bg-slate-50 dark:bg-slate-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4 flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-6 w-6 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                        lineNumber: 48,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                    lineNumber: 47,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm",
                                            children: t("onboarding.trust.regulated", {
                                                en: "Regulated & Secure",
                                                ar: "مرخص من الجهات المختصة"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: t("onboarding.trust.regulatedDesc", {
                                                en: "Operating in SAMA Sandbox & CMA FinTech Lab",
                                                ar: "مرخص من مؤسسة النقد العربي السعودي وهيئة السوق المالية"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                    lineNumber: 50,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                            lineNumber: 46,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-none shadow-sm bg-slate-50 dark:bg-slate-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4 flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-6 w-6 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm",
                                            children: t("onboarding.trust.shariah", {
                                                en: "100% Halal",
                                                ar: "استثمار شرعي 100%"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                            lineNumber: 72,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: t("onboarding.trust.shariahDesc", {
                                                en: "Certified Shariah-compliant investments",
                                                ar: "معتمد من كبار علماء الشريعة الإسلامية"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                            lineNumber: 78,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 66,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full h-12 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:scale-[1.02]",
                onClick: handleNext,
                children: t("onboarding.welcome.cta")
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center text-muted-foreground mt-4",
                children: [
                    language === "ar" ? "بالمتابعة، أنت توافق على " : "By continuing, you agree to our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "underline hover:text-emerald-600",
                        children: t("profile.legal.terms")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 98,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold",
                                children: "SAMA"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Sandbox"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 104,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold",
                                children: "CMA"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "FinTech Lab"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                        lineNumber: 108,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/Welcome.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/onboarding/Welcome.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Welcome, "br/Wsz+r2dx52ArYihdx7Z3WyuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Welcome;
var _c;
__turbopack_context__.k.register(_c, "Welcome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/onboarding/PhoneStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhoneStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/user-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function PhoneStep({ handleNext, phone, setPhone, otp, setOtp, isOtpSent, setIsOtpSent, kycData }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otp_code, set_otp_code] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("") // for demo purposes
    ;
    const handleCreateUser = async ()=>{
        setIsCreating(true);
        setError(null);
        try {
            const userData = {
                fullName: kycData.fullName,
                nationalId: kycData.nationalId,
                dateOfBirth: kycData.dateOfBirth,
                occupation: kycData.occupation,
                monthlyIncome: kycData.monthlyIncome,
                password: kycData.password,
                phone: `+966${phone}`
            };
            // Create user via API
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUser"])(userData);
            console.log("Created user response: ", response);
            // Store user ID in state and localStorage for future use
            // Use _id as that's what MongoDB returns
            setUserId(response.user._id);
            // Store the OTP code for demo purposes
            set_otp_code(response.otp_code ?? '');
            console.log("extracted user id: ", response.user._id);
            localStorage.setItem('userId', response.user._id);
            // Store authentication token for API calls
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                console.log("✅ Auth token stored successfully in localStorage");
                console.log("Token preview:", response.token.substring(0, 20) + "...");
                // Verify token was stored correctly
                const storedToken = localStorage.getItem('authToken');
                if (storedToken === response.token) {
                    console.log("✅ Token verification successful - localStorage working correctly");
                } else {
                    console.error("❌ Token verification failed - localStorage issue");
                }
            } else {
                console.warn("⚠️ No token received in response - authentication may not work");
                console.log("Full response:", response);
            }
            // If user creation successful, proceed to send OTP
            setIsOtpSent(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create user account');
        } finally{
            setIsCreating(false);
        }
    };
    console.log("user id at render: ", userId);
    const handleVerifyOtp = async ()=>{
        if (!userId) {
            setError('User ID is required for OTP verification');
            return;
        }
        console.log("user id: ", userId);
        setIsCreating(true);
        setError(null);
        try {
            // Verify OTP with the backend using user ID
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOtp"])(userId, otp);
            console.log(result);
            if (result.success) {
                // OTP verified successfully, proceed to next step
                handleNext();
            } else {
                setError(result.message || 'OTP verification failed');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to verify OTP');
        } finally{
            setIsCreating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            !isOtpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-right-8 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: t("onboarding.phone.title", {
                                    en: "Verify Your Number",
                                    ar: "تحقق من رقمك"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: t("onboarding.phone.subtitle", {
                                    en: "We'll send a code to verify your account",
                                    ar: "سوف يتم إرسال رمز التحقق للتحقّق من حسابك على الرقم التالي"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "phone",
                                        className: "text-left block",
                                        children: t("onboarding.phone.label", {
                                            en: "Phone Number",
                                            ar: "رقم الهاتف"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        dir: "ltr",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center px-3 border rounded-md bg-muted text-muted-foreground text-sm font-medium",
                                                children: "+966"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "phone",
                                                type: "tel",
                                                placeholder: "5X XXX XXXX",
                                                value: phone,
                                                onChange: (e)=>setPhone(e.target.value),
                                                className: "text-lg tracking-wide"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full h-12",
                                onClick: handleCreateUser,
                                disabled: phone.length < 9 || isCreating,
                                children: [
                                    isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 182,
                                        columnNumber: 30
                                    }, this),
                                    t("onboarding.phone.sendOtp", {
                                        en: "Send Verification Code",
                                        ar: "إرسال رمز التحقق"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-right-8 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: t("onboarding.phone.verifyTitle", {
                                    en: "Enter the code sent to your phone",
                                    ar: "الرجاء التحقق من الرمز المرسَل إلى هاتفك"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: t("onboarding.phone.verifySubtitle", {
                                    en: "Check your messages for the 4-digit code",
                                    ar: "الرجاء إدخال رمز التحقق"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "otp",
                                        className: "text-left block",
                                        children: t("onboarding.phone.otpLabel", {
                                            en: "Verification Code",
                                            ar: "رمز التحقق"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "otp",
                                        type: "text",
                                        placeholder: "XXXX",
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value),
                                        className: "text-center text-2xl tracking-[1em] font-mono h-14",
                                        maxLength: 6
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-sm text-muted-foreground",
                                children: [
                                    "Demo OTP: ",
                                    otp_code
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full h-12",
                                onClick: handleVerifyOtp,
                                disabled: otp.length < 4 || isCreating,
                                children: [
                                    isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 234,
                                        columnNumber: 30
                                    }, this),
                                    t("onboarding.phone.verify", {
                                        en: "Verify Code",
                                        ar: "تحقق من الرمز"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOtpSent(false),
                                        className: "text-sm text-emerald-600 hover:underline font-medium",
                                        children: t("onboarding.phone.changeNumber", {
                                            en: "Change Phone Number",
                                            ar: "تغيير رقم الهاتف"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            t("onboarding.phone.noCode", {
                                                en: "Didn't receive code? ",
                                                ar: "لم يصلك الرمز؟ "
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "underline hover:text-emerald-600",
                                                children: t("onboarding.phone.resend", {
                                                    en: "Resend",
                                                    ar: "إعادة إرسال"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/PhoneStep.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PhoneStep, "zNt/c+e+RE75bjIhifPZbnSgZsY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = PhoneStep;
var _c;
__turbopack_context__.k.register(_c, "PhoneStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/onboarding/KycStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KycStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function KycStep({ handleNext, kycData, setKycData, phone }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isFormValid = kycData.fullName && kycData.nationalId && kycData.dateOfBirth && kycData.occupation && kycData.monthlyIncome;
    const handleSubmit = ()=>{
        if (!isFormValid) return;
        handleNext();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in slide-in-from-right-8 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: t("onboarding.kyc.title", {
                            en: "Introduce Yourself",
                            ar: "عرفنا عليك"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: t("onboarding.kyc.subtitle", {
                            en: "Help us get to know you better",
                            ar: "ساعدنا في التعرف عليك بشكل أفضل"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "fullName",
                                children: t("onboarding.kyc.fullName", {
                                    en: "Full Name",
                                    ar: "الاسم الكامل"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "fullName",
                                type: "text",
                                value: kycData.fullName,
                                onChange: (e)=>setKycData({
                                        ...kycData,
                                        fullName: e.target.value
                                    }),
                                placeholder: t("onboarding.kyc.fullNamePlaceholder", {
                                    en: "Enter your full name",
                                    ar: "أدخل اسمك الكامل"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "nationalId",
                                children: t("onboarding.kyc.nationalId", {
                                    en: "National ID",
                                    ar: "رقم الهوية الوطنية"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "nationalId",
                                type: "text",
                                value: kycData.nationalId,
                                onChange: (e)=>setKycData({
                                        ...kycData,
                                        nationalId: e.target.value
                                    }),
                                placeholder: "1XXXXXXXXX",
                                maxLength: 10
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "dateOfBirth",
                                children: t("onboarding.kyc.dateOfBirth", {
                                    en: "Date of Birth",
                                    ar: "تاريخ الميلاد"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "dateOfBirth",
                                type: "date",
                                value: kycData.dateOfBirth,
                                onChange: (e)=>setKycData({
                                        ...kycData,
                                        dateOfBirth: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "occupation",
                                children: t("onboarding.kyc.occupation", {
                                    en: "Occupation",
                                    ar: "المهنة"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "occupation",
                                type: "text",
                                value: kycData.occupation,
                                onChange: (e)=>setKycData({
                                        ...kycData,
                                        occupation: e.target.value
                                    }),
                                placeholder: t("onboarding.kyc.occupationPlaceholder", {
                                    en: "Enter your occupation",
                                    ar: "أدخل مهنتك"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "monthlyIncome",
                                children: t("onboarding.kyc.monthlyIncome", {
                                    en: "Monthly Income",
                                    ar: "الدخل الشهري"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium",
                                        children: "SAR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "monthlyIncome",
                                        type: "number",
                                        value: kycData.monthlyIncome,
                                        onChange: (e)=>setKycData({
                                                ...kycData,
                                                monthlyIncome: e.target.value
                                            }),
                                        placeholder: "5000",
                                        className: "pl-12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "password",
                                children: t("onboarding.kyc.password", {
                                    en: "Password",
                                    ar: "كلمة المرور"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    type: "password",
                                    value: kycData.password,
                                    onChange: (e)=>setKycData({
                                            ...kycData,
                                            password: e.target.value
                                        }),
                                    placeholder: "••••••••",
                                    className: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full mt-4",
                onClick: handleSubmit,
                disabled: !isFormValid,
                children: t("continue", {
                    en: "Continue",
                    ar: "متابعة"
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/KycStep.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/onboarding/KycStep.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(KycStep, "4/X0iV2RJPdS/q91qlCou1qYuwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = KycStep;
var _c;
__turbopack_context__.k.register(_c, "KycStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/onboarding/GoalStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function GoalStep({ handleNext, goal, setGoal, targetAmount, setTargetAmount, showGoalSuccess, setShowGoalSuccess, handleGoalSubmit, handleGoalSuccessContinue }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const goalOptions = [
        {
            id: "emergency",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            labelEn: "Emergency Fund",
            labelAr: "صندوق الطوارئ"
        },
        {
            id: "hajj",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
            labelEn: "Hajj / Umrah",
            labelAr: "الحج / العمرة"
        },
        {
            id: "car",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
            labelEn: "New Car",
            labelAr: "سيارة جديدة"
        },
        {
            id: "home",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            labelEn: "Home Purchase",
            labelAr: "شراء منزل"
        },
        {
            id: "marriage",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            labelEn: "Marriage",
            labelAr: "الزواج"
        },
        {
            id: "wealth",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            labelEn: "Build Wealth",
            labelAr: "بناء الثروة"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in slide-in-from-right-8 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: t("onboarding.goal.title", {
                            en: "What's Your Goal?",
                            ar: "ما هو هدفك؟"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: t("onboarding.goal.subtitle", {
                            en: "Choose what you're saving for",
                            ar: "اختر ما تدخر من أجله"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: goalOptions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setGoal(item.id),
                        className: `p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 text-center ${goal === item.id ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 shadow-md scale-[1.02]" : "border-transparent bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-full ${goal === item.id ? "bg-emerald-200 dark:bg-emerald-800" : "bg-slate-100 dark:bg-slate-700"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: `h-6 w-6 ${goal === item.id ? "text-emerald-700 dark:text-emerald-300" : "text-slate-500"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm",
                                children: language === "ar" ? item.labelAr : item.labelEn
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            goal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 animate-in fade-in slide-in-from-bottom-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "targetAmount",
                        children: t("onboarding.goal.targetLabel", {
                            en: "Target Amount (SAR)",
                            ar: "المبلغ المستهدف (ريال)"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium",
                                children: "SAR"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "targetAmount",
                                type: "number",
                                placeholder: "5000",
                                value: targetAmount,
                                onChange: (e)=>setTargetAmount(e.target.value),
                                className: "pl-12 text-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full mt-4",
                onClick: handleGoalSubmit,
                disabled: !goal || !targetAmount,
                children: t("continue", {
                    en: "Continue",
                    ar: "متابعة"
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showGoalSuccess,
                onOpenChange: setShowGoalSuccess,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-6 w-6 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-center text-xl",
                                    children: t("onboarding.goal.successTitle", {
                                        en: "Great Choice!",
                                        ar: "اختيار ممتاز!"
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-center",
                                    children: t("onboarding.goal.successDesc", {
                                        en: `You've set a goal to save ${targetAmount} SAR for your ${goalOptions.find((g)=>g.id === goal)?.[language === "ar" ? "labelAr" : "labelEn"]}. Let's make it happen!`,
                                        ar: `لقد حددت هدفاً لادخار ${targetAmount} ريال من أجل ${goalOptions.find((g)=>g.id === goal)?.labelAr}. دعنا نحققه معاً!`
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "sm:justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleGoalSuccessContinue,
                                className: "w-full sm:w-auto",
                                children: t("onboarding.goal.successCta", {
                                    en: "Let's Start Saving!",
                                    ar: "لنبدأ الادخار!"
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/onboarding/GoalStep.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(GoalStep, "AzpBYIbE/ASMGCxYS42BdRBkw3s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = GoalStep;
var _c;
__turbopack_context__.k.register(_c, "GoalStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/onboarding/OptionStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OptionStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/user-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function OptionStep({ handleNext, riskProfile, setRiskProfile, currentStep, stepsLength }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async ()=>{
        if (!riskProfile) return;
        setIsSubmitting(true);
        setError(null);
        try {
            const userId = localStorage.getItem('userId');
            if (userId) {
                // Update user with risk profile data
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserDuringOnboarding"])(userId, {
                    risk_appetite: riskProfile
                });
            }
            // Proceed to next step
            handleNext();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update risk profile');
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in slide-in-from-right-8 duration-500",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: t("onboarding.option.title", {
                            en: "Choose Your Risk Profile",
                            ar: "اختر ملف المخاطر الخاص بك"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: t("onboarding.option.subtitle", {
                            en: "Select your risk level and see how your funds will be allocated",
                            ar: "حدد مستوى المخاطرة الذي يناسبك وشاهد كيف سيتم توزيع أموالك"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 p-6 bg-muted/50 rounded-lg space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-lg",
                        children: t("onboarding.option.educationTitle", {
                            en: "Understanding Your Options",
                            ar: "فهم خياراتك"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-emerald-500 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold",
                                                children: t("onboarding.option.savingsTitle", {
                                                    en: "Savings Account",
                                                    ar: "حساب التوفير"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("onboarding.option.savingsDesc", {
                                            en: "A safe, secure account with ~0.5% annual returns. Your funds are fully protected and can be withdrawn anytime. Ideal for short-term needs and emergencies.",
                                            ar: "حساب آمن ومضمون مع عوائد سنوية ~0.5%. أموالك محمية بالكامل ويمكن سحبها في أي وقت. مثالي للاحتياجات قصيرة الأجل والطوارئ."
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-yellow-500 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold",
                                                children: t("onboarding.option.investmentTitle", {
                                                    en: "Investment Fund",
                                                    ar: "صندوق الاستثمار"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("onboarding.option.investmentDesc", {
                                            en: "Shariah-compliant investments (Sukuk) with expected ~5% annual returns. Certified by Islamic scholars and supervised by SAMA. Suitable for long-term growth.",
                                            ar: "استثمارات متوافقة مع الشريعة (صكوك) مع عوائد متوقعة ~5% سنوياً. معتمد من قبل العلماء الإسلاميين وتشرف عليه ساما. مناسب للنمو طويل الأجل."
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border-2 cursor-pointer transition-all", riskProfile === "conservative" ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : "hover:border-primary/50"),
                        onClick: ()=>setRiskProfile("conservative"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: t("onboarding.risk.conservative", {
                                                    en: "Conservative",
                                                    ar: "متحفظ"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-emerald-600 font-medium",
                                                        children: t("onboarding.risk.riskFree", {
                                                            en: "Risk Free",
                                                            ar: "بدون مخاطر"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-2 bg-emerald-500 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("onboarding.risk.conservativeDesc", {
                                            en: "Perfect for beginners or those prioritizing capital protection",
                                            ar: "مثالي للمبتدئين أو أولئك الذين يعطون الأولوية لحماية رأس المال"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: t("onboarding.risk.allocation", {
                                                        en: "Allocation",
                                                        ar: "التوزيع"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-emerald-500",
                                                        style: {
                                                            width: "100%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("onboarding.risk.savingsOnly", {
                                                            en: "100% Savings",
                                                            ar: "توفير 100%"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: t("onboarding.risk.conservativeReturn", {
                                            en: "Expected Return: ~0.5% annually",
                                            ar: "العائد المتوقع: ~0.5% سنوياً"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border-2 cursor-pointer transition-all", riskProfile === "moderate" ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : "hover:border-primary/50"),
                        onClick: ()=>setRiskProfile("moderate"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: t("onboarding.risk.moderate", {
                                                    en: "Moderate",
                                                    ar: "متوسط"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-emerald-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-emerald-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("onboarding.risk.moderateDesc", {
                                            en: "Balanced approach with both safety and growth potential",
                                            ar: "نهج متوازن يجمع بين الأمان وإمكانات النمو"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: t("onboarding.risk.allocation", {
                                                        en: "Allocation",
                                                        ar: "التوزيع"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-emerald-500",
                                                            style: {
                                                                width: "50%"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-yellow-500",
                                                            style: {
                                                                width: "50%"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: t("onboarding.risk.moderateSavings", {
                                                                en: "50% Savings",
                                                                ar: "توفير 50%"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: t("onboarding.risk.moderateInvestment", {
                                                                en: "50% Investment",
                                                                ar: "استثمار 50%"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: t("onboarding.risk.moderateReturn", {
                                            en: "Expected Return: ~2.75% annually (blended)",
                                            ar: "العائد المتوقع: ~2.75% سنوياً (مزيج)"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border-2 cursor-pointer transition-all", riskProfile === "growth" ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : "hover:border-primary/50"),
                        onClick: ()=>setRiskProfile("growth"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: t("onboarding.risk.growth", {
                                                    en: "Growth",
                                                    ar: "نمو"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-emerald-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-emerald-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-2 bg-emerald-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: t("onboarding.risk.growthDesc", {
                                            en: "Maximum growth potential with Shariah-compliant investments",
                                            ar: "أقصى إمكانات النمو مع الاستثمارات المتوافقة مع الشريعة"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground mb-1",
                                                    children: t("onboarding.risk.allocation", {
                                                        en: "Allocation",
                                                        ar: "التوزيع"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-yellow-500",
                                                        style: {
                                                            width: "100%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("onboarding.risk.investmentOnly", {
                                                            en: "100% Investment",
                                                            ar: "استثمار 100%"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("onboarding.risk.growthReturn", {
                                                    en: "Expected Return: ~5% annually",
                                                    ar: "العائد المتوقع: ~5% سنوياً"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-3 w-3 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-600",
                                                children: t("onboarding.risk.shariahCompliant", {
                                                    en: "Shariah-Compliant",
                                                    ar: "متوافق مع الشريعة"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full h-12",
                onClick: handleSubmit,
                disabled: !riskProfile || isSubmitting,
                children: [
                    isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                        lineNumber: 337,
                        columnNumber: 26
                    }, this),
                    currentStep === stepsLength - 1 ? t("completeAndContinue", {
                        en: "Complete & Continue",
                        ar: "إكمال والمتابعة"
                    }) : t("continue", {
                        en: "Continue",
                        ar: "متابعة"
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/onboarding/OptionStep.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(OptionStep, "ARVoR2wyUf4KPol6h3ZirLQNeN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = OptionStep;
var _c;
__turbopack_context__.k.register(_c, "OptionStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$track$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/track-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/user-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$Welcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/onboarding/Welcome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$PhoneStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/onboarding/PhoneStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$KycStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/onboarding/KycStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$GoalStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/onboarding/GoalStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$OptionStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/onboarding/OptionStep.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const steps = [
    {
        id: "welcome",
        title: "welcome"
    },
    {
        id: "kyc",
        title: "kyc"
    },
    {
        id: "phone",
        title: "phone"
    },
    {
        id: "goal",
        title: "goal"
    },
    {
        id: "option",
        title: "option"
    }
];
function OnboardingPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { updateSettings, completeOnboarding } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [targetAmount, setTargetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showGoalSuccess, setShowGoalSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("investment");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isOtpSent, setIsOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [kycData, setKycData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        nationalId: "",
        dateOfBirth: "",
        occupation: "",
        monthlyIncome: "",
        password: ""
    });
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [riskProfile, setRiskProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$track$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("onboarding_start", {
                language
            });
        }
    }["OnboardingPage.useEffect"], [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            // Check if user ID is stored in localStorage (from KYC step)
            const storedUserId = localStorage.getItem('userId');
            if (storedUserId) {
                setUserId(storedUserId);
            }
        }
    }["OnboardingPage.useEffect"], [
        currentStep
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            if (steps[currentStep].id === "option") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }["OnboardingPage.useEffect"], [
        currentStep
    ]);
    const progress = (currentStep + 1) / steps.length * 100;
    const handleNext = ()=>{
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$track$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("onboarding_complete", {
                goal,
                investmentOption: selectedOption,
                riskProfile
            });
            completeOnboarding([
                goal || "wealth"
            ], selectedOption);
            router.push("/link");
        }
    };
    const handleBack = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            router.push("/");
        }
    };
    const handleGoalSubmit = async ()=>{
        if (goal && targetAmount) {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    // Update user with goal data
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserDuringOnboarding"])(userId, {
                        fiancial_goals: goal,
                        target_amount: parseInt(targetAmount)
                    });
                }
                setShowGoalSuccess(true);
            } catch (error) {
                console.error('Error updating user goals:', error);
                // Still show success dialog even if API call fails
                setShowGoalSuccess(true);
            }
        }
    };
    const handleGoalSuccessContinue = ()=>{
        setShowGoalSuccess(false);
        handleNext();
    };
    const renderStep = ()=>{
        switch(steps[currentStep].id){
            case "welcome":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$Welcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    handleNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 113,
                    columnNumber: 16
                }, this);
            case "kyc":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$KycStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    handleNext: handleNext,
                    kycData: kycData,
                    setKycData: setKycData,
                    phone: phone
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this);
            case "phone":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$PhoneStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    handleNext: handleNext,
                    phone: phone,
                    setPhone: setPhone,
                    otp: otp,
                    setOtp: setOtp,
                    isOtpSent: isOtpSent,
                    setIsOtpSent: setIsOtpSent,
                    kycData: kycData
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this);
            case "goal":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$GoalStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    handleNext: handleNext,
                    goal: goal,
                    setGoal: setGoal,
                    targetAmount: targetAmount,
                    setTargetAmount: setTargetAmount,
                    showGoalSuccess: showGoalSuccess,
                    setShowGoalSuccess: setShowGoalSuccess,
                    handleGoalSubmit: handleGoalSubmit,
                    handleGoalSuccessContinue: handleGoalSuccessContinue
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this);
            case "option":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$onboarding$2f$OptionStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    handleNext: handleNext,
                    riskProfile: riskProfile,
                    setRiskProfile: setRiskProfile,
                    currentStep: currentStep,
                    stepsLength: steps.length
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-10 bg-background pt-12 pb-4 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                            value: progress,
                            className: "w-full"
                        }, void 0, false, {
                            fileName: "[project]/app/onboarding/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                t("step"),
                                " ",
                                currentStep + 1,
                                " ",
                                t("of"),
                                " ",
                                steps.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/onboarding/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center pt-24 pb-8 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md",
                    children: renderStep()
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/onboarding/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(OnboardingPage, "R3KRfyeKFzHvsBD34AXEvtC+ttU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = OnboardingPage;
var _c;
__turbopack_context__.k.register(_c, "OnboardingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5ffa30d6._.js.map