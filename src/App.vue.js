import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";
import { ref, watch } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentPage = ref("home");
watch(currentPage, () => {
    if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
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
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [Navbar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({ ...{ 'onNavigate': {} }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onNavigate': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onNavigate: (...[$event]) => {
            __VLS_ctx.currentPage = $event;
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(Footer, new Footer({ ...{ 'onNavigate': {} }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onNavigate': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onNavigate: (...[$event]) => {
            __VLS_ctx.currentPage = $event;
        }
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
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
            Navbar: Navbar,
            Footer: Footer,
            currentPage: currentPage,
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
