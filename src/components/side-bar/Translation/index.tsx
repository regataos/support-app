// Select translation for app
export const Translation = (textTranslated: string) => {
    const lang = {
        "return": {
            "pt-br": "Voltar",
            "en": "Go Back",
        },
        "menu": {
            "pt-br": "Apenas ícones",
            "en": "Icons only",
        },
        "solutions": {
            "pt-br": "Soluções prontas",
            "en": "Ready solutions",
        },
        "support": {
            "pt-br": "Tutoriais e dicas",
            "en": "Tutorials and tips",
        },
        "forum": {
            "pt-br": "Regata OS Fórum",
            "en": "Regata OS Forum",
        }
    };

    let navigatorLang = navigator.language.toLowerCase();

    let getTranslatedOption: any = lang[textTranslated as keyof typeof lang]
    let getTranslatedText = getTranslatedOption[navigatorLang]

    return getTranslatedText ? getTranslatedText : getTranslatedOption["en"];
};
