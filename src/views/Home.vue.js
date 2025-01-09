import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import arrowMenuLeft from "../assets/ArrowMenuLeft.png";
import arrowMenuRight from "../assets/ArrowMenuRight.png";
import Tagliatelle1 from "../assets/Tagliatelle-al-ragu.png";
import Tagliatelle2 from "../assets/Tagliatelle-al-ragu2.png";
import arrowCriticaRight from "../assets/arrowCriticaRight.png";
import arrowCriticaLeft from "../assets/arrowCriticaLeft.png";
import aspasRight from "../assets/aspasRight.png";
import aspasLeft from "../assets/aspasLeft.png";
import footerImg from "../assets/FooterImg.png";
import carbonara from "../assets/Carbonara.png";
import reservar from "../assets/Reservar.png";
import horario from "../assets/Horario.png";
import especialidade1 from "../assets/SpaghettiAllaSiracusa.jpg";
import especialidade2 from "../assets/Especialidade.jpg";
import SpaghettiAllaCarbonara from "../assets/Spaghetti alla Carbonara.jpg";
import RavioloniAllaNapolitana from "../assets/RavioloniAllaNapolitana.jpg";
import GnocciBrachiolli from "../assets/GnocciBrachiolli.jpg";
import LasagneVerde from "../assets/LasagneVerde.jpg";
import FilettoPesceAllaMugnaia from "../assets/FilettoPesceAllaMugnaia.jpg";
import CarpaccioDiPolpo from "../assets/CarpaccioDiPolpo.jpg";
import Burrata from "../assets/Burrata.jpg";
import Arancini from "../assets/Arancini.jpg";
export default (await import('vue')).defineComponent({
    name: "Home",
    data() {
        return {
            arrowLeft,
            arrowRight,
            arrowMenuLeft,
            arrowMenuRight,
            Tagliatelle2,
            Tagliatelle1,
            arrowCriticaRight,
            arrowCriticaLeft,
            aspasRight,
            aspasLeft,
            footerImg,
            reservar,
            horario,
            especialidade1,
            especialidade2,
            SpaghettiAllaCarbonara,
            currentIndex: 2,
            currentContentIndex: 0,
            autoSlideInterval: null,
            carouselItems: [
                {
                    image: SpaghettiAllaCarbonara,
                },
                {
                    image: RavioloniAllaNapolitana,
                },
                {
                    image: GnocciBrachiolli,
                },
                {
                    image: LasagneVerde,
                },
                {
                    image: FilettoPesceAllaMugnaia,
                },
                {
                    image: CarpaccioDiPolpo,
                },
                {
                    image: Burrata,
                },
                {
                    image: Arancini,
                },
            ],
            contentList: [
                {
                    title: "Clássico Restaurante",
                    subtitle: "Italiano",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus...",
                    buttonText: "Sobre Nós",
                },
                {
                    title: "Experiência Gastronômica",
                    subtitle: "Requintada",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus, facilisis at felis non, luctus maximus justo...",
                    buttonText: "Descubra o Cardápio",
                    image: carbonara,
                },
                {
                    title: "Horário de Funcionamento",
                    subtitle: "",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus, facilisis at felis non, luctus maximus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae ex felis. Donec ac diam in sem convallis facilisis non et neque. Vivamus a lacus pulvinar turpis maximus rutrum ut ac purus. Donec.",
                    buttonText: "Reservar",
                    image: horario,
                    schedule: [
                        "Sábado - Domingo: 11:30h - 23:00h",
                        "Terça - Sexta: 13:30h - 00:00h",
                    ],
                },
            ],
            comments: [
                {
                    text: "Forchetta traz pratos com influência italiana e referências às culinárias: francesa, portuguesa, com toques de brasilidade e muitas frutas, um menu que resulta em uma gastronomia de sabor único, surpreendente e, ao mesmo tempo, clássica.",
                    author: "— Info:mente / 2023",
                },
                {
                    text: "A culinária italiana com toque brasileiro! Experiência única que mistura o melhor dos dois mundos.",
                    author: "— GoWhere / 2024",
                },
                {
                    text: " É sempre agradável comer aqui por causa do serviço espetacular, da gastronomia de alta qualidade e o ambiente muito aconchegante",
                    author: "— RestaurantGuru / 2024",
                },
            ],
            currentCommentIndex: 0,
        };
    },
    methods: {
        onWheel(event) {
            event.preventDefault();
            const direction = event.deltaY > 0 ? 1 : -1;
            this.moveCarousel(direction);
        },
        moveCarousel(direction) {
            const totalItems = this.carouselItems.length;
            this.currentIndex =
                (this.currentIndex + direction + totalItems) % totalItems;
        },
        getStyle(index) {
            const total = this.carouselItems.length;
            const middle = 2;
            const position = (index - this.currentIndex + total) % total;
            const scale = position === middle ? 1 : 0.8;
            const translateX = (position - middle) * 220;
            const zIndex = position === middle ? 2 : 1;
            const opacity = position === middle ? 1 : 0.5;
            return {
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity,
                transition: "transform 0.5s ease, opacity 0.5s ease",
            };
        },
        goToPreviousCritica() {
            this.currentCommentIndex =
                (this.currentCommentIndex - 1 + this.comments.length) %
                    this.comments.length;
        },
        goToNextCritica() {
            this.currentCommentIndex =
                (this.currentCommentIndex + 1) % this.comments.length;
        },
        goToPrevious() {
            this.currentContentIndex =
                (this.currentContentIndex - 1 + this.contentList.length) %
                    this.contentList.length;
            console.log("Index anterior:", this.currentContentIndex);
        },
        goToNext() {
            this.currentContentIndex =
                (this.currentContentIndex + 1) % this.contentList.length;
            console.log("Próximo index:", this.currentContentIndex);
        },
        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.goToNext();
            }, 5000);
        },
        stopAutoSlide() {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        this.stopAutoSlide();
    },
    getImageForContent(index) {
        const images = {
            1: require("../assets/Carbonara.png"),
            2: require("../assets/Tagliatelle-al-ragu.png"),
        };
        console.log("Índice recebido:", index);
        console.log("Imagem retornada:", images[index]);
        return images[index] || "";
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-secondary text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("initial-section min-h-screen relative") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("slide-horizontal"), mode: ("out-in"), }));
    const __VLS_2 = __VLS_1({ name: ("slide-horizontal"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((`content-${__VLS_ctx.currentContentIndex}`)), ...{ class: ("absolute top-40 left-1/2 transform -translate-x-1/2 flex items-start gap-8 w-4/5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-primary font-baskervville italic text-lg") }, });
    (__VLS_ctx.currentContentIndex + 1);
    (__VLS_ctx.contentList.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary h-px w-2/3 my-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-baskervville uppercase mb-4") }, });
    (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    if (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].subtitle) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-primary italic") }, });
        (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].subtitle);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-grayText max-w-xl text-lg") }, });
    (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].description);
    if (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].schedule) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("text-grayText text-sm mt-4") }, });
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.contentList[__VLS_ctx.currentContentIndex]
            .schedule))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            (item);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn-primary mt-6 px-6 py-3 bg-primary text-secondary text-sm font-prompt rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].buttonText);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex justify-end") }, });
    if (__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].image) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.contentList[__VLS_ctx.currentContentIndex].image)), alt: ("Conteúdo Visual"), ...{ class: ("rounded-lg shadow-lg max-w-full w-full sm:w-3/4 md:w-4/5 hide-mobile") }, });
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center gap-8 absolute bottom-10 left-1/2 transform -translate-x-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.stopAutoSlide();
                __VLS_ctx.goToPrevious();
                __VLS_ctx.startAutoSlide();
                ;
            } }, src: ((__VLS_ctx.arrowLeft)), alt: ("Seta Esquerda"), ...{ class: ("w-8 h-8 cursor-pointer hover:opacity-80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.stopAutoSlide();
                __VLS_ctx.goToNext();
                __VLS_ctx.startAutoSlide();
                ;
            } }, src: ((__VLS_ctx.arrowRight)), alt: ("Seta Direita"), ...{ class: ("w-8 h-8 cursor-pointer hover:opacity-80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scroll-section bg-secondary text-white pt-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-center text-primary text-5xl font-baskervville mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("carousel-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onWheel: (__VLS_ctx.onWheel) }, ...{ class: ("carousel") }, ref: ("carousel"), });
    // @ts-ignore navigation for `const carousel = ref()`
    __VLS_ctx.carousel;
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.carouselItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("carousel-item") }, ...{ style: ((__VLS_ctx.getStyle(index))) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((item.image)), alt: ("Card Image"), ...{ class: ("card-image") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("carousel-navigation flex items-center justify-center mt-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.moveCarousel(-1);
            } }, src: ((__VLS_ctx.arrowMenuLeft)), alt: ("Seta Esquerda"), ...{ class: ("arrow-icon cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("circles flex gap-2 mx-4") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.carouselItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.goToIndex(index);
                } }, key: (('circle-' + index)), ...{ class: ("circle") }, ...{ class: (({ active: __VLS_ctx.currentIndex === index })) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.moveCarousel(1);
            } }, src: ((__VLS_ctx.arrowMenuRight)), alt: ("Seta Direita"), ...{ class: ("arrow-icon cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nossa-especialidade relative mt-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-container flex flex-col items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-primary font-baskervville text-5xl mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.especialidade1)), alt: ("Prato menor"), ...{ class: ("prato-image-left mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-right-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.especialidade2)), alt: ("Prato maior"), ...{ class: ("prato-image-right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stars-container mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/Stars.png"), alt: ("Estrelas"), ...{ class: ("stars") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("critica-section relative py-20") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-primary text-3xl font-baskervville mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start gap-4 px-4") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.aspasLeft)), alt: ("Aspas Esquerda"), ...{ class: ("w-10 h-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("italic text-lg leading-relaxed") }, });
    (__VLS_ctx.comments[__VLS_ctx.currentCommentIndex].text);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-sm text-gray-400") }, });
    (__VLS_ctx.comments[__VLS_ctx.currentCommentIndex].author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.aspasRight)), alt: ("Aspas Direita"), ...{ class: ("w-10 h-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mt-10 justify-center gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToPreviousCritica) }, ...{ class: ("btn-critica btn-critica-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.arrowCriticaLeft)), alt: ("Seta Esquerda"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToNextCritica) }, ...{ class: ("btn-critica btn-critica-right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.arrowCriticaRight)), alt: ("Seta Direita"), });
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['initial-section'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-40'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['w-4/5'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['bg-primary'];
    __VLS_styleScopedClasses['h-px'];
    __VLS_styleScopedClasses['w-2/3'];
    __VLS_styleScopedClasses['my-4'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-grayText'];
    __VLS_styleScopedClasses['max-w-xl'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-grayText'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['bg-primary'];
    __VLS_styleScopedClasses['text-secondary'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-prompt'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['max-w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm:w-3/4'];
    __VLS_styleScopedClasses['md:w-4/5'];
    __VLS_styleScopedClasses['hide-mobile'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-10'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['scroll-section'];
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['pt-20'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['carousel-container'];
    __VLS_styleScopedClasses['carousel'];
    __VLS_styleScopedClasses['carousel-item'];
    __VLS_styleScopedClasses['card-content'];
    __VLS_styleScopedClasses['card-image'];
    __VLS_styleScopedClasses['carousel-navigation'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['arrow-icon'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['circles'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['mx-4'];
    __VLS_styleScopedClasses['circle'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['arrow-icon'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['nossa-especialidade'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['text-container'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['prato-image-left'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['image-right-container'];
    __VLS_styleScopedClasses['prato-image-right'];
    __VLS_styleScopedClasses['stars-container'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['stars'];
    __VLS_styleScopedClasses['critica-section'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['py-20'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['max-w-3xl'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['btn-critica'];
    __VLS_styleScopedClasses['btn-critica-left'];
    __VLS_styleScopedClasses['btn-critica'];
    __VLS_styleScopedClasses['btn-critica-right'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "carousel": __VLS_nativeElements['div'],
    };
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
