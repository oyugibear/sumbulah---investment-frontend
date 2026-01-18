module.exports = [
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
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/components/ui/alert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
AlertDescription.displayName = "AlertDescription";
;
}),
"[project]/components/info-tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoTooltip",
    ()=>InfoTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function InfoTooltip({ content, className }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground transition-colors hover:text-foreground", className),
                onMouseEnter: ()=>setIsVisible(true),
                onMouseLeave: ()=>setIsVisible(false),
                onClick: ()=>setIsVisible(!isVisible),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/info-tooltip.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/info-tooltip.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg border border-border bg-popover p-3 text-sm text-popover-foreground shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-popover"
                    }, void 0, false, {
                        fileName: "[project]/components/info-tooltip.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    content
                ]
            }, void 0, true, {
                fileName: "[project]/components/info-tooltip.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/info-tooltip.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/zakat/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZakatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context/app-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$info$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/info-tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bottom-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
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
function ZakatPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, logAnalytics } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2f$app$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { language } = state.settings;
    const [customAssets, setCustomAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const zakatData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_ZAKAT_DATA"];
    const totalAssets = customAssets ? Number.parseFloat(customAssets) || zakatData.totalAssets : state.totalInvested;
    const isAboveNisab = totalAssets >= zakatData.nisabThreshold;
    const calculatedZakat = isAboveNisab ? totalAssets * 0.025 : 0;
    const handlePayZakat = ()=>{
        logAnalytics("zakat_payment_initiated", {
            amount: calculatedZakat
        });
        // In production, this would integrate with payment gateway
        alert(language === "ar" ? `سيتم توجيهك لدفع ${calculatedZakat.toFixed(2)} ريال سعودي` : `You would be directed to pay SAR ${calculatedZakat.toFixed(2)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-lg px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: ()=>router.back(),
                        className: "mb-4 -ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            language === "ar" ? "رجوع" : "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-2 text-3xl font-bold text-foreground",
                                children: language === "ar" ? "الزكاة" : "Zakat"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: language === "ar" ? "احسب وتتبع التزامات الزكاة على استثماراتك" : "Calculate and track your zakat obligations on investments"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    isAboveNisab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                        className: "mb-6 border-primary/50 bg-primary/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-4 w-4 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: language === "ar" ? "أصولك تتجاوز عتبة النصاب. الزكاة واجبة." : "Your assets exceed the nisab threshold. Zakat is due."
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: language === "ar" ? "أصولك أقل من عتبة النصاب. لا زكاة واجبة حاليًا." : "Your assets are below the nisab threshold. No zakat is currently due."
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                        className: "h-5 w-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-card-foreground",
                                        children: language === "ar" ? "حاسبة الزكاة" : "Zakat Calculator"
                                    }, void 0, false, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$info$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoTooltip"], {
                                        content: language === "ar" ? "الزكاة هي ٢.٥٪ من إجمالي الأصول التي تتجاوز النصاب وتم الاحتفاظ بها لمدة عام قمري" : "Zakat is 2.5% of total assets above nisab held for a lunar year"
                                    }, void 0, false, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-card-foreground",
                                                children: language === "ar" ? "قيمة الاستثمار الحالية" : "Current Investment Value"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-card-foreground",
                                                        children: [
                                                            state.totalInvested.toFixed(2),
                                                            " ",
                                                            language === "ar" ? "ريال" : "SAR"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-card-foreground",
                                                children: language === "ar" ? "أصول إضافية (اختياري)" : "Additional Assets (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                placeholder: language === "ar" ? "أدخل المبلغ بالريال" : "Enter amount in SAR",
                                                value: customAssets,
                                                onChange: (e)=>setCustomAssets(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-muted-foreground",
                                                children: language === "ar" ? "أضف نقود أو ذهب أو أصول أخرى خاضعة للزكاة" : "Add cash, gold, or other zakatable assets"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-border bg-muted/30 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: language === "ar" ? "عتبة النصاب" : "Nisab Threshold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-card-foreground",
                                                        children: [
                                                            zakatData.nisabThreshold.toFixed(2),
                                                            " ",
                                                            language === "ar" ? "ريال" : "SAR"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: language === "ar" ? "يعادل ٣٥ جرام من الذهب بالأسعار الحالية" : "Equivalent to 85g of gold at current prices"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border-2 border-primary bg-primary/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 text-sm text-muted-foreground",
                                                children: language === "ar" ? "الزكاة المستحقة (٢.٥٪)" : "Zakat Due (2.5%)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-primary",
                                                children: [
                                                    calculatedZakat.toFixed(2),
                                                    " ",
                                                    language === "ar" ? "ريال" : "SAR"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/app/zakat/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-card-foreground",
                                            children: language === "ar" ? "السنة الهجرية الحالية" : "Current Hijri Year"
                                        }, void 0, false, {
                                            fileName: "[project]/app/zakat/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: zakatData.hijriYear
                                        }, void 0, false, {
                                            fileName: "[project]/app/zakat/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/zakat/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/zakat/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 text-lg font-semibold text-card-foreground",
                                children: language === "ar" ? "سجل المدفوعات" : "Payment History"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            zakatData.paymentHistory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: zakatData.paymentHistory.map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between rounded-lg border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/zakat/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-card-foreground",
                                                                children: [
                                                                    payment.amount.toFixed(2),
                                                                    " ",
                                                                    language === "ar" ? "ريال" : "SAR"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/zakat/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: language === "ar" ? payment.hijriDate : new Date(payment.date).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/zakat/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/zakat/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/zakat/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, payment.id, true, {
                                        fileName: "[project]/app/zakat/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm text-muted-foreground",
                                children: language === "ar" ? "لا توجد مدفوعات سابقة" : "No previous payments"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    isAboveNisab && calculatedZakat > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                size: "lg",
                                onClick: handlePayZakat,
                                children: language === "ar" ? "ادفع الزكاة الآن" : "Pay Zakat Now"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "w-full bg-transparent",
                                size: "lg",
                                onClick: ()=>router.push("/learn/zakat-guide"),
                                children: language === "ar" ? "تعلم المزيد عن الزكاة" : "Learn More About Zakat"
                            }, void 0, false, {
                                fileName: "[project]/app/zakat/page.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed",
                            children: language === "ar" ? "ملاحظة: هذه الحاسبة للإرشاد فقط. استشر عالم دين مؤهل للحصول على فتوى شخصية بشأن التزامات الزكاة الخاصة بك." : "Note: This calculator is for guidance only. Consult a qualified Islamic scholar for personalized fatwa regarding your zakat obligations."
                        }, void 0, false, {
                            fileName: "[project]/app/zakat/page.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/zakat/page.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/zakat/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/app/zakat/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/zakat/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_9ae3bce7._.js.map