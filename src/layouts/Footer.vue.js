import footerImg from "../assets/FooterImg.png";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits();
function navigate(page) {
    emit("navigate", page);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
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
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer-contact'];
    __VLS_styleScopedClasses['footer-contact'];
    __VLS_styleScopedClasses['footer-link'];
    __VLS_styleScopedClasses['footer-navigation'];
    __VLS_styleScopedClasses['footer-nav-link'];
    __VLS_styleScopedClasses['footer-button'];
    __VLS_styleScopedClasses['footer-bottom'];
    __VLS_styleScopedClasses['footer-bottom'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['flex'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("relative bg-[#040d10] text-white py-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto max-w-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-6") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/sobre"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }));
    const __VLS_8 = __VLS_7({ to: ("/sobre"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/menu"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }));
    const __VLS_14 = __VLS_13({ to: ("/menu"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/contato"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }));
    const __VLS_20 = __VLS_19({ to: ("/contato"), ...{ class: ("font-prompt text-sm uppercase hover:text-[#FFA000]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-px bg-[#FFA000] opacity-30") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col md:flex-row justify-between items-center mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center md:items-start text-center md:text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-sm text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-sm mt-2 text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center mt-4 md:mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-prompt text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 md:mt-0") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/reservar"), ...{ class: ("footer-button bg-white text-[#040d10] font-prompt text-sm px-6 py-2 rounded-full border-none") }, }));
    const __VLS_26 = __VLS_25({ to: ("/reservar"), ...{ class: ("footer-button bg-white text-[#040d10] font-prompt text-sm px-6 py-2 rounded-full border-none") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-px bg-[#FFA000] opacity-30 mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.footerImg)), alt: ("Footer Decoration"), ...{ class: ("absolute right-1 bottom-1 w-40") }, ...{ style: ({}) }, });
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['bg-[#040d10]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['max-w-3xl'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['hover:text-[#FFA000]'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['hover:text-[#FFA000]'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['hover:text-[#FFA000]'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['hover:text-[#FFA000]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-px'];
    __VLS_styleScopedClasses['bg-[#FFA000]'];
    __VLS_styleScopedClasses['opacity-30'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['md:flex-row'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['md:items-start'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['md:text-left'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['md:mt-0'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['md:mt-0'];
    __VLS_styleScopedClasses['footer-button'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['text-[#040d10]'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-none'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-px'];
    __VLS_styleScopedClasses['bg-[#FFA000]'];
    __VLS_styleScopedClasses['opacity-30'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-1'];
    __VLS_styleScopedClasses['bottom-1'];
    __VLS_styleScopedClasses['w-40'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
            footerImg: footerImg,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
