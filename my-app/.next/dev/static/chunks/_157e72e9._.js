(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/bottom-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NAV_ITEMS = [
    {
        href: "/home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        labelAr: "الرئيسية"
    },
    {
        href: "/budget",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        label: "Budget",
        labelAr: "الميزانية"
    },
    {
        href: "/news",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        label: "News",
        labelAr: "الأخبار"
    },
    // { href: "/market", icon: PieChart, label: "Market", labelAr: "السوق" },
    // { href: "/health", icon: Activity, label: "Health", labelAr: "الصحة" },
    {
        href: "/learn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: "Learn",
        labelAr: "تعلم"
    },
    {
        href: "/profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        label: "Profile",
        labelAr: "الملف"
    }
];
function BottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-lg items-center justify-around",
            children: NAV_ITEMS.map((item)=>{
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-3 py-3 text-xs transition-colors", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/bottom-nav.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(BottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
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
"[project]/components/empty-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function EmptyState({ icon: Icon, title, description, actionLabel, onAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col items-center justify-center p-12 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-8 w-8 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/components/empty-state.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/empty-state.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 text-lg font-semibold text-card-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/empty-state.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 max-w-sm text-sm text-muted-foreground",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/empty-state.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            actionLabel && onAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onAction,
                variant: "default",
                children: actionLabel
            }, void 0, false, {
                fileName: "[project]/components/empty-state.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/empty-state.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/learn/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bottom-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
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
function LearnPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { language } = state.settings;
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredArticles = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLES"].filter((article)=>{
        if (!searchQuery) return true;
        const title = language === "ar" ? article.titleAr : article.title;
        const content = language === "ar" ? article.contentAr : article.content;
        return title.toLowerCase().includes(searchQuery.toLowerCase()) || content.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-lg px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/learn/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            language === "ar" ? "رجوع" : "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/learn/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-2 text-2xl font-bold text-foreground",
                                children: "Learn"
                            }, void 0, false, {
                                fileName: "[project]/app/learn/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Build your investing knowledge with short, practical articles"
                            }, void 0, false, {
                                fileName: "[project]/app/learn/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/learn/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "text",
                                    placeholder: language === "ar" ? "ابحث عن المقالات..." : "Search articles...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "pl-10"
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/learn/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    filteredArticles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        title: "No articles found",
                        description: "Try adjusting your search query to find what you're looking for.",
                        actionLabel: "Clear Search",
                        onAction: ()=>setSearchQuery("")
                    }, void 0, false, {
                        fileName: "[project]/app/learn/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: filteredArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "cursor-pointer p-6 transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-md",
                                        onClick: ()=>router.push(`/learn/${article.id}`),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/learn/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/learn/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mb-1 font-semibold text-card-foreground",
                                                            children: language === "ar" ? article.titleAr : article.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/learn/page.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-2 line-clamp-2 text-sm text-muted-foreground",
                                                            children: language === "ar" ? article.contentAr.substring(0, 100) + "..." : article.content.substring(0, 100) + "..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/learn/page.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this),
                                                        article.readProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-1 flex-1 overflow-hidden rounded-full bg-muted",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-primary transition-all duration-300",
                                                                        style: {
                                                                            width: `${article.readProgress}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/learn/page.tsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/learn/page.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: [
                                                                        article.readProgress,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/learn/page.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/learn/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/learn/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-5 w-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/learn/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/learn/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    }, article.id, false, {
                                        fileName: "[project]/app/learn/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/learn/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "mt-6 border-primary/20 bg-primary/5 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-2 font-semibold text-card-foreground",
                                        children: "Why Learn?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-muted-foreground",
                                        children: "Understanding the basics of investing helps you make informed decisions and stay confident during market changes. Each article takes just 2-3 minutes to read."
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/learn/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/learn/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/app/learn/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/learn/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(LearnPage, "i8IFnSbWmHcosGxLll7kMb1PmTU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = LearnPage;
var _c;
__turbopack_context__.k.register(_c, "LearnPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>House
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BookOpen", [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
]);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Wallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Wallet", [
    [
        "path",
        {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
            key: "xoc0q4"
        }
    ]
]);
;
 //# sourceMappingURL=wallet.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Newspaper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Newspaper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Newspaper", [
    [
        "path",
        {
            d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
            key: "7pis2x"
        }
    ],
    [
        "path",
        {
            d: "M18 14h-8",
            key: "sponae"
        }
    ],
    [
        "path",
        {
            d: "M15 18h-5",
            key: "95g1m2"
        }
    ],
    [
        "path",
        {
            d: "M10 6h8v4h-8V6Z",
            key: "smlsk5"
        }
    ]
]);
;
 //# sourceMappingURL=newspaper.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Newspaper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_157e72e9._.js.map