import HamburguerMenu from "../components/HamburguerMenu.vue";
export default (await import('vue')).defineComponent({
    name: "Navbar",
    components: {
        HamburguerMenu,
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        navigate(page) {
            this.$emit("navigate", page);
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            HamburguerMenu,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("w-full flex items-center justify-between px-10 py-4 bg-secondary z-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/LogoForchetta.png"), alt: ("Logo Forchetta"), ...{ class: ("absolute logo-position") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xl font-baskervville italic text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("hidden md:flex gap-12 text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/sobre"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }));
    const __VLS_8 = __VLS_7({ to: ("/sobre"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/menu"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }));
    const __VLS_14 = __VLS_13({ to: ("/menu"), ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/reservar"), ...{ class: ("hidden md:block text-primary font-prompt uppercase text-sm mr-4") }, }));
    const __VLS_26 = __VLS_25({ to: ("/reservar"), ...{ class: ("hidden md:block text-primary font-prompt uppercase text-sm mr-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleMenu) }, ...{ class: ("block md:hidden focus:outline-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/Hamburguer.png"), alt: ("Menu"), ...{ class: ("w-6 h-6") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.HamburguerMenu;
    /** @type { [typeof __VLS_components.HamburguerMenu, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onCloseMenu': {} }, isMenuOpen: ((__VLS_ctx.isMenuOpen)), }));
    const __VLS_32 = __VLS_31({ ...{ 'onCloseMenu': {} }, isMenuOpen: ((__VLS_ctx.isMenuOpen)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onCloseMenu: (__VLS_ctx.toggleMenu)
    };
    let __VLS_33;
    let __VLS_34;
    var __VLS_35;
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['px-10'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['logo-position'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:flex'];
    __VLS_styleScopedClasses['gap-12'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['hover:text-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['hover:text-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['hover:text-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['hover:text-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:block'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
