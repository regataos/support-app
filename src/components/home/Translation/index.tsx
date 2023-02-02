// Select translation for app
export const Translation = (textTranslated: string) => {
    const lang = {
        "home-title": {
            "pt-br": "Você precisa de ajuda com o Regata OS?",
            "en": "Do you need help with Regata OS?",
        },
        "home-desc": {
            "pt-br": "Este é o centro de solução de problemas do Regata OS.\n Separamos aqui algumas opções que podem lhe ajudar a resolver alguns problemas.",
            "en": "This is the Regata OS troubleshooting center.\n We have separated some options here that can help you solve some problems.",
        },
        "home-desc-forum": {
            "pt-br": "Se você ainda não encontrou o que procura, pergunte à comunidade, através do ",
            "en": "If you still haven't found what you're looking for, ask the community using our ",
        },
        "forum-link": {
            "pt-br": "nosso fórum.",
            "en": "Telegram group.",
        }
    };

    let navigatorLang = navigator.language.toLowerCase();
    let getTranslatedOption: any = lang[textTranslated as keyof typeof lang];
    let getTranslatedText = getTranslatedOption[navigatorLang];

    return getTranslatedText ? getTranslatedText : getTranslatedOption["en"];
};
