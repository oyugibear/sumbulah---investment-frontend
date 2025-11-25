module.exports = [
"[project]/lib/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/hooks/use-translation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useTranslation() {
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { language } = state.settings;
    const t = (key, customText)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(key, language, customText);
    return {
        t,
        language
    };
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/services/recommendations-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateFinancialHealthScore",
    ()=>calculateFinancialHealthScore,
    "generateRecommendations",
    ()=>generateRecommendations
]);
function calculateFinancialHealthScore(state) {
    const totalInvested = state.totalInvested;
    const monthlySpending = calculateMonthlySpending(state);
    const monthlyIncome = 10000 // Mock salary
    ;
    const savingsRate = Math.min((monthlyIncome - monthlySpending) / monthlyIncome * 100, 100);
    // Calculate diversification (0-100)
    const portfolioAssetCount = state.selectedGoals.length || 3;
    const diversification = Math.min(portfolioAssetCount / 4 * 100, 100);
    // Calculate emergency fund (0-100)
    const emergencyFundTarget = monthlySpending * 3;
    const emergencyFund = Math.min(totalInvested / emergencyFundTarget * 100, 100);
    // Calculate investment performance (0-100)
    const investmentPerformance = Math.random() * 30 + 60 // Baseline 60-90% (mock)
    ;
    // Calculate zakat compliance (0-100)
    const zakatCompliance = 85 // Mock score
    ;
    // Calculate budget adherence (0-100)
    const budgetAdherence = 87 // Mock score
    ;
    const overall = Math.round((savingsRate * 0.2 + diversification * 0.15 + emergencyFund * 0.2 + investmentPerformance * 0.2 + zakatCompliance * 0.15 + budgetAdherence * 0.1) / 100);
    return {
        overall: Math.min(overall, 100),
        savingsRate: Math.round(savingsRate),
        diversification: Math.round(diversification),
        emergencyFund: Math.round(emergencyFund),
        investmentPerformance: Math.round(investmentPerformance),
        zakatCompliance: Math.round(zakatCompliance),
        budgetAdherence: Math.round(budgetAdherence)
    };
}
function generateRecommendations(state, healthScore) {
    const recommendations = [];
    const monthlySpending = calculateMonthlySpending(state);
    const monthlyIncome = 10000;
    // Savings rate recommendation
    if (healthScore.savingsRate < 20) {
        recommendations.push({
            id: "rec-savings",
            priority: "high",
            category: "savings",
            title: "Increase Your Savings Rate",
            titleAr: "زيادة معدل الادخار الخاص بك",
            description: `Your current savings rate is ${healthScore.savingsRate}%. Consider adjusting your budget or increasing payday savings to reach at least 20%.`,
            descriptionAr: `معدل ادخارك الحالي هو ${healthScore.savingsRate}٪. حاول تعديل ميزانيتك أو زيادة ادخار راتبك لتحقيق 20٪ على الأقل.`,
            actionLabel: "Adjust Budget"
        });
    }
    // Emergency fund recommendation
    if (healthScore.emergencyFund < 50) {
        recommendations.push({
            id: "rec-emergency",
            priority: "high",
            category: "emergency",
            title: "Build Your Emergency Fund",
            titleAr: "بناء صندوق الطوارئ الخاص بك",
            description: `You should have 3 months of expenses saved. Currently at ${Math.round(healthScore.emergencyFund)}% of target. Prioritize this goal.`,
            descriptionAr: `يجب أن يكون لديك 3 أشهر من النفقات المدخرة. حالياً عند ${Math.round(healthScore.emergencyFund)}٪ من الهدف. اجعل هذا الهدف أولويتك.`,
            actionLabel: "View Emergency Fund Goal"
        });
    }
    // Diversification recommendation
    if (healthScore.diversification < 60) {
        recommendations.push({
            id: "rec-diversify",
            priority: "medium",
            category: "diversification",
            title: "Diversify Your Portfolio",
            titleAr: "تنويع محفظتك",
            description: `Consider adding more asset classes. ETFs and mutual funds can provide instant diversification with lower investment.`,
            descriptionAr: `فكر في إضافة فئات أصول أخرى. يمكن للصناديق المتداولة والصناديق المشتركة توفير تنويع فوري برأس مال أقل.`,
            actionLabel: "Explore Funds"
        });
    }
    // Performance recommendation
    if (healthScore.investmentPerformance < 65) {
        recommendations.push({
            id: "rec-performance",
            priority: "medium",
            category: "performance",
            title: "Review Your Investment Strategy",
            titleAr: "مراجعة استراتيجية الاستثمار الخاصة بك",
            description: `Your portfolio's recent performance is below expectations. Consider reviewing your asset allocation and time horizon.`,
            descriptionAr: `أداء محفظتك الحديثة أقل من التوقعات. تأكد من مراجعة توزيع أصولك والأفق الزمني.`
        });
    }
    // Zakat reminder
    if (healthScore.zakatCompliance < 100) {
        recommendations.push({
            id: "rec-zakat",
            priority: "high",
            category: "zakat",
            title: "Zakat Calculation Reminder",
            titleAr: "تذكير بحساب الزكاة",
            description: `Review your zakat obligations. Your current portfolio value requires zakat calculation for the Hijri year.`,
            descriptionAr: `راجع التزاماتك تجاه الزكاة. تتطلب قيمة محفظتك الحالية حساب الزكاة للسنة الهجرية.`,
            actionLabel: "View Zakat Calculator"
        });
    }
    return recommendations;
}
function calculateMonthlySpending(state) {
    const recentTransactions = state.transactions.slice(0, 30) // Last 30 days
    ;
    const total = recentTransactions.reduce((sum, t)=>sum + t.amount, 0);
    return Math.round(total / 30 * 30) // Annualize to monthly
    ;
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/components/bottom-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-ssr] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const NAV_ITEMS = [
    {
        href: "/home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        labelAr: "الرئيسية"
    },
    {
        href: "/budget",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        label: "Budget",
        labelAr: "الميزانية"
    },
    {
        href: "/news",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        label: "News",
        labelAr: "الأخبار"
    },
    {
        href: "/market",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
        label: "Market",
        labelAr: "السوق"
    },
    {
        href: "/health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        label: "Health",
        labelAr: "الصحة"
    },
    {
        href: "/learn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: "Learn",
        labelAr: "تعلم"
    },
    {
        href: "/profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        label: "Profile",
        labelAr: "الملف"
    }
];
function BottomNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-lg items-center justify-around",
            children: NAV_ITEMS.map((item)=>{
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-3 py-3 text-xs transition-colors", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/bottom-nav.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/bottom-nav.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/components/bottom-nav.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/bottom-nav.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/bottom-nav.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/health/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HealthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-translation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$recommendations$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/recommendations-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/RadarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/PolarGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Radar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bottom-nav.tsx [app-ssr] (ecmascript)");
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
function HealthPage() {
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [healthScore, setHealthScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$recommendations$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateFinancialHealthScore"])(state);
        setHealthScore(score);
        setRecommendations((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$recommendations$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRecommendations"])(state, score));
    }, [
        state
    ]);
    if (!healthScore) return null;
    const radarData = [
        {
            metric: state.settings.language === "ar" ? "معدل الادخار" : "Savings Rate",
            value: healthScore.savingsRate
        },
        {
            metric: state.settings.language === "ar" ? "التنويع" : "Diversification",
            value: healthScore.diversification
        },
        {
            metric: state.settings.language === "ar" ? "صندوق الطوارئ" : "Emergency Fund",
            value: healthScore.emergencyFund
        },
        {
            metric: state.settings.language === "ar" ? "الأداء" : "Performance",
            value: healthScore.investmentPerformance
        },
        {
            metric: state.settings.language === "ar" ? "الزكاة" : "Zakat",
            value: healthScore.zakatCompliance
        },
        {
            metric: state.settings.language === "ar" ? "الميزانية" : "Budget",
            value: healthScore.budgetAdherence
        }
    ];
    const getHealthColor = (score)=>{
        if (score >= 80) return "text-green-600 dark:text-green-400";
        if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
        return "text-red-600 dark:text-red-400";
    };
    const getHealthBg = (score)=>{
        if (score >= 80) return "bg-green-50 dark:bg-green-950 border-green-200";
        if (score >= 60) return "bg-yellow-50 dark:bg-yellow-950 border-yellow-200";
        return "bg-red-50 dark:bg-red-950 border-red-200";
    };
    const getPriorityColor = (priority)=>{
        if (priority === "high") return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
        if (priority === "medium") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container max-w-4xl py-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-foreground",
                                children: state.settings.language === "ar" ? "تقرير الصحة المالية" : "Financial Health Report"
                            }, void 0, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-2",
                                children: state.settings.language === "ar" ? "تقييم شامل لصحتك المالية والتوصيات الشخصية" : "Comprehensive assessment of your financial health with personalized recommendations"
                            }, void 0, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/health/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: `mb-6 border-2 ${getHealthBg(healthScore.overall)}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-emerald-900 dark:text-emerald-100",
                                    children: state.settings.language === "ar" ? "درجة الصحة العامة" : "Overall Health Score"
                                }, void 0, false, {
                                    fileName: "[project]/app/health/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-5xl font-bold ${getHealthColor(healthScore.overall)}`,
                                                    children: healthScore.overall
                                                }, void 0, false, {
                                                    fileName: "[project]/app/health/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mt-2",
                                                    children: healthScore.overall >= 80 ? state.settings.language === "ar" ? "صحتك المالية ممتازة!" : "Excellent financial health!" : healthScore.overall >= 60 ? state.settings.language === "ar" ? "صحتك المالية جيدة" : "Good financial health" : state.settings.language === "ar" ? "هناك مجال للتحسن" : "Room for improvement"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/health/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/health/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 250,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadarChart"], {
                                                    data: radarData,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarGrid"], {}, void 0, false, {
                                                            fileName: "[project]/app/health/page.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarAngleAxis"], {
                                                            dataKey: "metric",
                                                            tick: {
                                                                fontSize: 10
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/health/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarRadiusAxis"], {
                                                            angle: 90,
                                                            domain: [
                                                                0,
                                                                100
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/health/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Radar"], {
                                                            name: "Score",
                                                            dataKey: "value",
                                                            stroke: "#059669",
                                                            fill: "#10b981",
                                                            fillOpacity: 0.6
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/health/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/health/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/health/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/health/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/health/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/health/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-6",
                        children: [
                            {
                                label: "Savings Rate",
                                labelAr: "معدل الادخار",
                                value: healthScore.savingsRate
                            },
                            {
                                label: "Diversification",
                                labelAr: "التنويع",
                                value: healthScore.diversification
                            },
                            {
                                label: "Emergency Fund",
                                labelAr: "صندوق الطوارئ",
                                value: healthScore.emergencyFund
                            },
                            {
                                label: "Performance",
                                labelAr: "الأداء",
                                value: healthScore.investmentPerformance
                            },
                            {
                                label: "Zakat",
                                labelAr: "الزكاة",
                                value: healthScore.zakatCompliance
                            },
                            {
                                label: "Budget",
                                labelAr: "الميزانية",
                                value: healthScore.budgetAdherence
                            }
                        ].map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-2",
                                            children: state.settings.language === "ar" ? metric.labelAr : metric.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/health/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-3xl font-bold ${getHealthColor(metric.value)}`,
                                            children: [
                                                metric.value,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/health/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/health/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            }, metric.label, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/health/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: state.settings.language === "ar" ? "التوصيات الشخصية" : "Personalized Recommendations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/health/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: state.settings.language === "ar" ? `لديك ${recommendations.length} توصيات` : `You have ${recommendations.length} recommendations`
                                    }, void 0, false, {
                                        fileName: "[project]/app/health/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: recommendations.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(rec.priority)}`,
                                                        children: rec.priority.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/health/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold mb-1",
                                                                children: state.settings.language === "ar" ? rec.titleAr : rec.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/health/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground mb-3",
                                                                children: state.settings.language === "ar" ? rec.descriptionAr : rec.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/health/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this),
                                                            rec.actionLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                children: rec.actionLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/health/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/health/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/health/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        }, rec.id, false, {
                                            fileName: "[project]/app/health/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/health/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/health/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/health/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/health/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/app/health/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/health/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_e10cb900._.js.map