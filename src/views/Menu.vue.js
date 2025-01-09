export default (await import('vue')).defineComponent({
    name: "Menu",
    data() {
        return {
            activeSection: this.$route.query.section || "entradas",
            sections: ["entradas", "pratosPrincipais", "sobremesas"],
            menuItems: [
                {
                    id: 1,
                    name: "Coperto (couvert)",
                    price: 17,
                    description: "3 tipos de patês, legumes refogados, pães, torradas, manteiga e uma surpresa do chef. / Paté, vegetables, breads, toast, butter and chef´s surprise.",
                },
                {
                    id: 2,
                    name: "Arancini",
                    price: 39,
                    description: "Bolinho de arroz italiano cremoso, recheado de queijo, empanado e frito. Acompanha molho de tomate levemente picante. (4 unidades)",
                },
                {
                    id: 3,
                    name: "Carpaccio Tradizionale",
                    price: 47,
                    description: "Lâminas de carne crua temperadas com molho de azeite, limão, mostarda, sal e alcaparras. Cobertas com parmesão. / Blades of raw meat served cold with olive oil, lemon juice, mustard, salt, capers and parmesan cheese.",
                },
                {
                    id: 4,
                    name: "Burrata",
                    price: 49,
                    description: "Burrata cremosa (100 gramas) acompanhada de tomatinhos Sweet gripe marinados com azeite de manjericão. Servido com pães italianos",
                },
                {
                    id: 5,
                    name: "Caeser Salad",
                    price: 51,
                    description: "Alface americana, peito de frango grelhado cortado em tiras, queijo parmesão, croutons e molho de salada caeser. / Letucce, grilled chicken breast in strips, parmesan cheese, croutons and caeser sauce.",
                },
                {
                    id: 6,
                    name: "Insalata Alla Trevisana",
                    price: 51,
                    description: "Alface, tomate seco, rúcula, muçarela de búfala e lascas de parmesão. Temperada com nozes no azeite. / Lettuce, dried tomatoes, buffalo mozzarella cheese and chips parmesan cheese. Tempered with nuts in the olive oil.",
                },
                {
                    id: 7,
                    name: "Carpaccio Di Polpo",
                    price: 57,
                    description: "Fatias extrafinas de polvo com tempero italiano e alcaparras. / Extra thin slices of octopus with Italian seasoning and caper.",
                },
                {
                    id: 8,
                    name: "Carpaccio Con Insalata",
                    price: 62,
                    description: "Com salada de alface e muçarela de búfala, temperada com molho de azeite, limão, mostarda, sal e alcaparras. Coberta com parmesão. / Blades of raw meat, lettuce salad and buffalo mozzarella cheese, served cold with olive oil, lemon juice, mustard, salt, capers and parmesan cheese. ",
                },
            ],
            pratosPrincipais: [
                {
                    id: 1,
                    name: "Spaghetti alla Carbonara",
                    price: 75,
                    description: "Massa seca de grano duro, panceta, gema de ovos e queijo pecorino.",
                },
                {
                    id: 2,
                    name: "Casônsei (Cachunchelli)",
                    price: 79,
                    description: "Recheados com carne de vitela, presunto cru, uva passa e amareto. Coberto com molho de funghi secchi. / Stuffed with veal, prosciutto, raisins and amaretto. Covered with sauce of dried mushroom.",
                },
                {
                    id: 3,
                    name: "Ravioloni Alla Napolitana",
                    price: 77,
                    description: "Raviólis grandes recheados com muçarela de búfala. Molho: pitadas de cebola triturada, tomate sem pele e manjericão. / Stuffed with buffalo mozzarella cheese. Sauce: onion, skinless tomatoes and basil.",
                },
                {
                    id: 4,
                    name: "Lasagne Verde",
                    price: 72,
                    description: "Recheada com molho à bolonhesa e molho branco. Gratinada com queijo parmesão. / Stuffed with bolognaise and bechamel sauces. Gratin with parmesan cheese.",
                },
                {
                    id: 5,
                    name: "Gnocchi Con Braciola",
                    price: 79,
                    description: "Bife recheado com bacon, pimentão vermelho, cenoura e salsão refogado nos temperos e molho de tomate. / Filled stuffed with bacon, red peppers, carrot and celery seasoned in tomato sauce.",
                },
                {
                    id: 6,
                    name: "Spaghetti Alla Marinara",
                    price: 97,
                    description: "Frutos do mar puxados no alho e óleo, tomate sem pele e salsinha. / Sauce: seafood, garlic, olive oil, skinless tomatoes and parsley.",
                },
                {
                    id: 7,
                    name: "Filetto Di Pesce Alla Bella Mugnaia",
                    price: 87,
                    description: "Filet de peixe grelhado, molho de manteiga, fumet de peixe, vinho branco, limão, alcaparras, champignons, camarão cortado e batatas cozidas. contém glúten. Grilled fish filet. Sauce: butter, fish stock,  white wine, lemon, capers, mushrooms, shrimp and boiled potatoes. Contains gluten.",
                },
                {
                    id: 8,
                    name: "Gamberoni All’ampezzana",
                    price: 135,
                    description: "Camarões puxados na manteiga, vinho branco, tomate sem pele, leite de coco e palmito. Acompanha arroz branco. / Shrimps sautéed with butter, white wine, skinless tomato, coconut table and heart of palm. Served with white rice.",
                },
            ],
            sobremesas: [
                {
                    id: 1,
                    name: "Frutas Vermelhas Flambadas e Sorvete de Creme",
                    price: 42,
                    description: "Flamed red fruits and vanilla ice cream. (Preparadas no Réchaud)",
                },
                {
                    id: 2,
                    name: "Banana Flambada e Sorvete de Creme",
                    price: 42,
                    description: "Flamed banana and vanilla ice cream. (Preparadas no Réchaud)",
                },
                {
                    id: 3,
                    name: "Manga Flambada e Sorvete de Creme",
                    price: 42,
                    description: "Famed mango and vanilla ice cream (Preparadas no Réchaud)",
                },
                {
                    id: 4,
                    name: "Morangos Flambados e Sorvete de Creme",
                    price: 42,
                    description: "Flamed strawberry and vanilla ice cream. (Preparadas no Réchaud)",
                },
                {
                    id: 5,
                    name: "Mela Cotta All´Arancia Con Gelatto Di Crema",
                    price: 27,
                    description: "Maçã fatiada em leque cozida na calda de laranja quente e sorvete de creme. / baked appel and syrup hot orange and vanilla ice cream.",
                },
                {
                    id: 6,
                    name: "Petit Gatêau de Chocolate",
                    price: 32,
                    description: "Pequeno bolo de chocolate recheado com um cremoso chocolate quente, acompanha sorvete de creme e calda quente de chocolate. / little chocolate cake, stuffed with a hot cream chocolate, served with vanilla ice cream and hot syrup chocolate.",
                },
                {
                    id: 7,
                    name: "Tiramisù",
                    price: 36,
                    description: "Queijo mascarpone, biscoito champagne, café e cacau, sobremesa típica da Lacio/Roma. / mascarpone, lady fingers cookie, coffee, cacao powered, typical of dessert Lacio/ Roma.",
                },
                {
                    id: 8,
                    name: "Torta Mousse de Chocolate",
                    price: 27,
                    description: "chocolate mousse cake",
                },
            ],
        };
    },
    mounted() {
        const sectionFromQuery = this.$route.query.section;
        if (sectionFromQuery) {
            this.activeSection = sectionFromQuery;
        }
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
        }
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            this.sections.forEach((section, index) => {
                const sectionElement = this.$refs[section];
                const offsetTop = sectionElement.offsetTop;
                if (scrollTop >= offsetTop - windowHeight / 2) {
                    this.activeSection = section;
                }
            });
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-page bg-secondary text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("menu-header py-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("inicio text-center italic uppercase text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-center text-primary text-6xl font-baskervville uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("menu-section") }, ref: ("entradas"), ...{ class: (({ active: __VLS_ctx.activeSection === 'entradas' })) }, });
    // @ts-ignore navigation for `const entradas = ref()`
    __VLS_ctx.entradas;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-category") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-center text-primary text-5xl font-baskervville mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-container") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ...{ class: ("menu-item-row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("menu-item-name") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-divider") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-item-price") }, });
        (item.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("menu-item-description") }, });
        (item.description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("menu-section bg-new-section") }, ref: ("pratosPrincipais"), ...{ class: (({ active: __VLS_ctx.activeSection === 'pratosPrincipais' })) }, });
    // @ts-ignore navigation for `const pratosPrincipais = ref()`
    __VLS_ctx.pratosPrincipais;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-category") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-center text-primary text-5xl font-baskervville mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-container") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.pratosPrincipais))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ...{ class: ("menu-item-row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("menu-item-name") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-divider") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-item-price") }, });
        (item.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("menu-item-description") }, });
        (item.description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("menu-section bg-another-section") }, ref: ("sobremesas"), ...{ class: (({ active: __VLS_ctx.activeSection === 'sobremesas' })) }, });
    // @ts-ignore navigation for `const sobremesas = ref()`
    __VLS_ctx.sobremesas;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-category") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-center text-primary text-5xl font-baskervville mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-container") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.sobremesas))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ...{ class: ("menu-item-row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("menu-item-name") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-divider") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-item-price") }, });
        (item.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("menu-item-description") }, });
        (item.description);
    }
    __VLS_styleScopedClasses['menu-page'];
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['menu-header'];
    __VLS_styleScopedClasses['py-12'];
    __VLS_styleScopedClasses['inicio'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-6xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['menu-section'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['menu-category'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['menu-container'];
    __VLS_styleScopedClasses['menu-item-row'];
    __VLS_styleScopedClasses['menu-item-header'];
    __VLS_styleScopedClasses['menu-item-name'];
    __VLS_styleScopedClasses['menu-item-divider'];
    __VLS_styleScopedClasses['menu-item-price'];
    __VLS_styleScopedClasses['menu-item-description'];
    __VLS_styleScopedClasses['menu-section'];
    __VLS_styleScopedClasses['bg-new-section'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['menu-category'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['menu-container'];
    __VLS_styleScopedClasses['menu-item-row'];
    __VLS_styleScopedClasses['menu-item-header'];
    __VLS_styleScopedClasses['menu-item-name'];
    __VLS_styleScopedClasses['menu-item-divider'];
    __VLS_styleScopedClasses['menu-item-price'];
    __VLS_styleScopedClasses['menu-item-description'];
    __VLS_styleScopedClasses['menu-section'];
    __VLS_styleScopedClasses['bg-another-section'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['menu-category'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-baskervville'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['menu-container'];
    __VLS_styleScopedClasses['menu-item-row'];
    __VLS_styleScopedClasses['menu-item-header'];
    __VLS_styleScopedClasses['menu-item-name'];
    __VLS_styleScopedClasses['menu-item-divider'];
    __VLS_styleScopedClasses['menu-item-price'];
    __VLS_styleScopedClasses['menu-item-description'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "entradas": __VLS_nativeElements['section'],
        "pratosPrincipais": __VLS_nativeElements['section'],
        "sobremesas": __VLS_nativeElements['section'],
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
