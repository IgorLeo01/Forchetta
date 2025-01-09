import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HamburguerMenu',
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeMenu() {
            this.$emit('close-menu');
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['sidebar'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['sidebar', { open: __VLS_ctx.isMenuOpen }])) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeMenu) }, ...{ class: ("close-button") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("sidebar-link") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("sidebar-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/sobre"), ...{ class: ("sidebar-link") }, }));
    const __VLS_8 = __VLS_7({ to: ("/sobre"), ...{ class: ("sidebar-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/menu"), ...{ class: ("sidebar-link") }, }));
    const __VLS_14 = __VLS_13({ to: ("/menu"), ...{ class: ("sidebar-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/contato"), ...{ class: ("sidebar-link") }, }));
    const __VLS_20 = __VLS_19({ to: ("/contato"), ...{ class: ("sidebar-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/reservar"), ...{ class: ("sidebar-link") }, }));
    const __VLS_26 = __VLS_25({ to: ("/reservar"), ...{ class: ("sidebar-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['close-button'];
    __VLS_styleScopedClasses['sidebar-link'];
    __VLS_styleScopedClasses['sidebar-link'];
    __VLS_styleScopedClasses['sidebar-link'];
    __VLS_styleScopedClasses['sidebar-link'];
    __VLS_styleScopedClasses['sidebar-link'];
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
