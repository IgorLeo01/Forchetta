import Reservar from "../assets/Reservar.png";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_styleScopedClasses['reservar-image'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-secondary text-white min-h-screen flex flex-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content px-10 py-16 flex-grow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("breadcrumb text-center italic uppercase text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-baskervville uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-16 h-px bg-primary mx-auto mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col md:flex-row gap-10 items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("md:w-1/2 flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.Reservar)), alt: ("Restaurante Forchetta"), ...{ class: ("reservar-image rounded-lg shadow-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("md:w-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-3xl font-baskervville uppercase mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("people"), ...{ class: ("block text-sm font-bold uppercase text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("people"), ...{ class: ("w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("5"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("7"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("8"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("10"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("11"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("12"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("time"), ...{ class: ("block text-sm font-bold uppercase text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("time"), ...{ class: ("w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("13:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("14:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("15:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("16:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("17:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("18:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("19:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("20:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("21:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("22:00"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("date"), ...{ class: ("block text-sm font-bold uppercase text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), id: ("date"), ...{ class: ("w-full bg-transparent border-b border-primary text-white p-2 mt-1 outline-none focus:border-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("w-full bg-primary text-secondary text-sm font-bold uppercase p-4 rounded hover:bg-white hover:text-primary transition") }, });
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['px-10'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['breadcrumb'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-px'];
    __VLS_styleScopedClasses['bg-primary'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['md:flex-row'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['md:w-1/2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['reservar-image'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['md:w-1/2'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['outline-none'];
    __VLS_styleScopedClasses['focus:border-white'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['outline-none'];
    __VLS_styleScopedClasses['focus:border-white'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-primary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['outline-none'];
    __VLS_styleScopedClasses['focus:border-white'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-primary'];
    __VLS_styleScopedClasses['text-secondary'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-white'];
    __VLS_styleScopedClasses['hover:text-primary'];
    __VLS_styleScopedClasses['transition'];
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
            Reservar: Reservar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
