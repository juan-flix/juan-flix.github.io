const translations = {
    es: {
        signIn: "Iniciar sesión",
        title: "Películas y diversión",
        subtitle: "Disfruta con Juan Flix+",
        startButton: "Comprar",
        trendsTitle: "Recientes",
        trendsSubtitle: "Películas recientes",
        features: {
            tv: {
                title: "Disfruta en tu Android",
                desc: "Diseñamos una app compatible con todos los dispositivos Android"
            },
            download: {
                title: "Constantes mejoras",
                desc: "Siempre mejorando y agregando nuevas características"
            },
            everywhere: {
                title: "Interfaz amigable para el usuario",
                desc: "Fácil de usar y con una interfaz intuitiva"
            },
            kids: {
                title: "Centrado en los niños",
                desc: "Los niños son nuestra prioridad, por eso diseñamos contenido para ellos"
            }
        },
        footer: {
            helpCenter: "Centro de ayuda",
            account: "Cuenta",
            terms: "Términos de uso",
            privacy: "Privacidad",
            contact: "Contáctanos",
            region: "Juan Flix+ | 2024 - Juan Systems"
        }
    },
    en: {
        signIn: "Log In",
        title: "Movies and fun",
        subtitle: "Enjoy with Juan Flix+",
        startButton: "Buy",
        trendsTitle: "Recent",
        trendsSubtitle: "Recent movies",
        features: {
            tv: {
                title: "Enjoy on your Android",
                desc: "We design an app compatible with all Android devices"
            },
            download: {
                title: "Constant improvements",
                desc: "Always improving and adding new features"
            },
            everywhere: {
                title: "User friendly interface",
                desc: "Easy to use and with an intuitive interface"
            },
            kids: {
                title: "Focused on children",
                desc: "Children are our priority, that's why we design content for them"
            }
        },
        footer: {
            helpCenter: "Help center",
            account: "Account",
            terms: "Terms of use",
            privacy: "Privacy",
            contact: "Contact us",
            region: "Juan Flix+ | 2024 - Juan Systems"
        }
    }
};

function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error('Error (translation):', lang);
        return;
    }

    const t = translations[lang];

    try {
        document.querySelector('.sign-in-btn').textContent = t.signIn;
        document.querySelector('.hero-content h1').textContent = t.title;
        document.querySelector('.hero-content h2').textContent = t.subtitle;
        document.querySelector('.start-btn').textContent = t.startButton;
        document.querySelector('.trends-title').textContent = t.trendsTitle;
        document.querySelector('.trends-subtitle').textContent = t.trendsSubtitle;

        const featureItems = document.querySelectorAll('.feature-item');
        const features = [t.features.tv, t.features.download, t.features.everywhere, t.features.kids];
        featureItems.forEach((item, index) => {
            if (features[index]) {
                item.querySelector('h3').textContent = features[index].title;
                item.querySelector('p').textContent = features[index].desc;
            }
        });

        const footerLinks = document.querySelectorAll('.footer-links a');
        const footerTexts = [
             t.footer.helpCenter, t.footer.account,
            t.footer.terms, t.footer.privacy, t.footer.contact
        ];
        footerLinks.forEach((link, index) => {
            if (footerTexts[index]) {
                link.textContent = footerTexts[index];
            }
        });

        document.querySelector('.footer-bottom p').textContent = t.footer.region;

        document.querySelectorAll('.language-select').forEach(select => {
            select.value = lang;
        });

        console.info('El cambio de idioma ha sido exitoso');
    } catch (error) {
        console.error('Error updating language:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = document.querySelector('.language-select').value.toLowerCase();
    updateLanguage(defaultLanguage);

    document.querySelectorAll('.language-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const selectedLang = e.target.value.toLowerCase();
            updateLanguage(selectedLang);
            document.querySelectorAll('.language-select').forEach(otherSelect => {
                otherSelect.value = e.target.value;
            });
        });
    });
});

function updateLanguageSelectors() {
    document.querySelectorAll('.language-select').forEach(select => {
        const options = `
            <option value="es">Español</option>
            <option value="en">English</option>
        `;
        select.innerHTML = options;
    });
}

document.addEventListener('DOMContentLoaded', updateLanguageSelectors);

function redirect(location){
    window.location.href = location;
}