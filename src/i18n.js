import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                banner: {
                    title1: "Have a",
                    title2: "Desire To",
                    title3: "Stop Drinking",
                    btn1: "Take a Self Test",
                    btn2: "Reach Us",
                },
                navbar: {
                    home: "Home",
                    about: "About AA",
                    reflections: "Daily Reflections",
                    meetings: "Meeting List",
                    selftest: "Self Test",
                    contact: "Where to find us",
                },
                about: {
                    title: "About Alcoholics Anonymous",
                    p1: "Alcoholics Anonymous is a fellowship of people who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism. The only requirement for membership is a desire to stop drinking. There are no dues or fees for A.A. membership; we are self-supporting through our own contributions.",
                    p2: "A.A. is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy, neither endorses nor opposes any causes. Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.",
                },
                aboutaa: {
                    title: "About",
                    title1: 'AA',
                    p1: "For over 90 years, Alcoholics Anonymous has helped millions of people recover from alcoholism and maintain sobriety.",
                    p2: "People affected by alcoholism have come together to form a worldwide fellowship. Today, in around 180 countries, AA is estimated to have over 123,000 groups and more than two million members.",
                    p3: "The only requirement for membership is a desire to stop drinking. There are no dues or fees for AA membership.",
                    p4: "Alcoholics Anonymous is not allied with any race, caste, religion, politics, institution, or organization. It does not wish to engage in any controversies, nor does it endorse or oppose any causes.",
                    p5: "The basic purpose of every group is to carry the message that “there is hope for those suffering from alcoholism.",
                    p6: "The Twelve Traditions of Alcoholics Anonymous emphasize the importance of anonymity, which serves as a spiritual foundation and a shield of protection for all members. AA members are responsible for preserving their own anonymity as well as that of others.Thus, since the foundation of AA is spiritual, it reminds us that principles must always come before personalities."
                },
                experience: {
                    title: "Our Experience",
                    desc: "For more than 80 years, A.A. has helped millions recover from alcoholism - to get sober and stay sober."
                },
                hope: {
                    title: "Hope",
                    desc: "You can't buy anything here, but you can take it. It works, always"
                },
                new: {
                    title: "New to AA?",
                    desc: "You can take what you need, feel it, create it, and use it. It works, always."
                },
                meeting: {
                    title: "Meeting Address",
                    desc: "Details about meetings, locations, and schedules for A.A. members."
                },
                support: {
                    title: "Self-Support",
                    desc: "Rejecting external aid. A global organization supported by its members."
                },
                service: {
                    title: "Service",
                    desc: "Helping others is a core principle; the program works by sharing experience, strength, and hope."
                },

                form: {
                    joinTitle: {
                        jo: "Jo",
                        in: "in",
                        wi: "Wi",
                        th: "th",
                        us: "Us"
                    },
                    title: "Form",
                    name: "Name",
                    email: "Email",
                    phone: "Phone Number",
                    message: "Message",
                    submit: "Submit",
                    note: "The details that you provide below is only for contact purposes & it will be maintained strictly anonymous."
                },
                trust: {
                    title1: "The Trust",
                    title2: "that made",
                    items: [
                        { number: "90", label: "Years in this Field", suffix: "yrs" },
                        { number: "180+", label: "Countries Reached" },
                        { number: "1M+", label: "People's Recovered", highlight: true }
                    ]
                },

                footer: {
                    home: "Home",
                    about: "About AA",
                    reflections: "Daily Reflections",
                    meetings: "Meeting List",
                    selftest: "Self Test",
                    contact: "Where to find us",
                },

                footerpara: {
                    title: " Rejecting external aid. A global organization with their own self- support",
                    subtitle: " A.A. costs nothing and is supported through member contributions, so there are no dues or fees for A.A. membership."
                },
                footerparas: {
                    heading: "A Help",
                    heading1: "to those who",
                    heading3: "need it",
                    responsibilityTitle: "A.A.'s Responsibility Statement",
                    responsibilityText: "I am responsible, when anyone, anywhere reaches out for help, I want the hand of A.A. always to be there. And for that: I am responsible.",
                    helpline: "Helpline : +91 9884447648",
                    address: "4/189A,1st Street , MMDA Colony Main Road , \nMaduravoyal, Chennai - 600095 , Tamilnadu, INDIA"
                },

                selftest: {
                    title: "Are you an Alcoholic?",
                    note: "*Answer these questions truthfully. Always consult a doctor for proper medical advice.",
                    questions: [
                        "1. Do you lose work time because of drinking?",
                        "2. Is drinking making your family life unhappy?",
                        "3. Do you drink because you are shy with other people?",
                        "4. Is drinking affecting your reputation?",
                        "5. Have you ever felt remorse after drinking?",
                        "6. Have you ever got into financial difficulties as a result of drinking?",
                        "7. Do you drink with low companions and in undesirable environments?",
                        "8. Has drinking made you careless of your family’s welfare?",
                        "9. Has your ambition decreased since drinking?",
                        "10. Do you crave a drink at a definite time daily?",
                        "11. Do you require a drink the next morning?",
                        "12. Does drinking cause you to have difficulty sleeping?",
                        "13. Has your efficiency decreased since drinking?",
                        "14. Is drinking jeopardizing your job or business?",
                        "15. Do you drink to escape from worries or trouble?",
                        "16. Do you drink alone?",
                        "17. Have you ever had a complete loss of memory as a result of drinking?",
                        "18. Have you ever been treated by a doctor because of drinking?",
                        "19. Do you drink to build up your self-confidence?",
                        "20. Have you ever been in a hospital or institution on account of drinking?"
                    ],
                    yes: "Yes",
                    no: "No",
                    prev: "Previous",
                    next: "Next",
                    submit: "Submit",
                    bottomNote: "If you answered 'Yes' to three or more questions, you are definitely an alcoholic. (These questions are adapted from Johns Hopkins University, Baltimore, USA)."
                },
                principles: {
                    title: "Unity • Recovery • Service",
                    items: [
                        {
                            title: "Unity",
                            desc: "We come together with strength in unity, sharing hope and fellowship to heal as one.",
                            href: '/steps'
                        },
                        {
                            title: "Recovery",
                            desc: "A journey of change and growth, helping us live free from the struggles of addiction.",
                            href: '/steps1'
                        },
                        {
                            title: "Service",
                            desc: "Carrying the message to others, we serve with love, compassion and commitment.",
                            href: '/steps2'
                        },
                    ],
                },
            },
        },
        ta: {
            translation: {
                banner: {
                    title1: "ஒரு ஆசை",
                    title2: "உள்ளதா",
                    title3: "மதுபானத்தை நிறுத்த",
                    btn1: "சுய பரிசோதனை செய்யவும்",
                    btn2: "எங்களை அணுகவும்",
                },
                navbar: {
                    home: "முகப்பு",
                    about: "AA பற்றி",
                    reflections: "தினசரி சிந்தனைகள்",
                    meetings: "சந்திப்பு பட்டியல்",
                    selftest: "சுய பரிசோதனை",
                    contact: "எங்களை எங்கு காணலாம்",
                },
                about: {
                    title: "அல்கஹாலிக்ஸ் அனானிமஸ் பற்றி",
                    p1: "அல்கஹாலிக்ஸ் அனானிமஸ் என்பது ஒருவருக்கொருவர் தங்கள் அனுபவம், வலிமை மற்றும் நம்பிக்கைகளைப் பகிர்ந்து கொண்டு, தங்கள் பொதுவான பிரச்சனையைத் தீர்த்து, பிறரை மதுபான அடிமையிலிருந்து மீள உதவும் மக்களின் கூட்டமைப்பாகும். உறுப்பினராவதற்கான ஒரே தேவையானது குடிப்பதை நிறுத்த வேண்டும் என்ற விருப்பமே. A.A. உறுப்பினருக்கான கட்டணம் எதுவும் இல்லை; நாங்கள் எங்களது சொந்த பங்களிப்புகளின் மூலம் தங்களைத் தானே ஆதரிக்கிறோம்.",
                    p2: "A.A. எந்த மதம், அரசியல், அமைப்பு அல்லது நிறுவனத்துடனும் இணைக்கப்படவில்லை; எந்த விவாதத்திலும் ஈடுபட விரும்பவில்லை, எதையும் ஆதரிக்கவோ அல்லது எதிர்க்கவோ இல்லை. எங்களது முதன்மை நோக்கம் குடிக்காமல் இருப்பதும், மற்ற மதுபான அடிமைகளுக்கு மதுவிலக்கு அடைய உதவுவதுமாகும்.",
                },
                aboutaa: {
                    title: 'AA',
                    title1: 'பற்றி',

                    p1: "90 ஆண்டுகளின் நிறைவாக மில்லியன் கணக்கான மக்கள் குடிப்பழக்கத்திலிருந்து மீண்டு வரவும், மது அருந்தாமல் இருக்கவும் ஆல்கஹாலிக்ஸ் அனானிமஸ் அமைப்பு உதவியுள்ளது.",
                    p2: "குடி நோயால் பாதிக்கப்பட்டவர்கள் ஒன்றிணைந்து, தோராயமாக180 நாடுகளில் உலகம் தழுவிய அமைப்பாக 123,000. குழுக்களால் இரண்டு மில்லியனுக்கும் அதிகமான உறுப்பினர்கள் இருப்பதாக மதிப்பிடப்பட்டுள்ளது",
                    p3: "குடியை நிறுத்த வேண்டும் என்ற விருப்பமே இதில் உறுப்பினராவதற்கு தேவையான ஒரே தகுதி. இதற்கு சந்தா இல்லை.",
                    p4: "ஆல்கஹாலிக்ஸ் அனானிமஸ் எந்த ஒரு இனம், ஜாதி, மதம், அரசியல், நிறுவனம், அமைப்பு போன்றவைகளுடன் இணைவதில்லை. எந்தவித கருத்து வேறுபாடுகளிலும் ஈடுபட விரும்புவதில்லை. எங்களுக்கு சம்பந்தமற்ற விவகாரங்களை எதிர்ப்பதோ, ஆதரிப்பதோ இல்லை.",
                    p5: "குடி நோயின் தாக்கத்தால் அவதிப்பட்டுக் கொண்டிருப்பவர்களுக்கு விடிவு உண்டு என்ற செய்தியை எடுத்துச் சொல்வதே ஒவ்வொரு குழுவின் அடிப்படை நோக்கமாகும்",
                    p6: "ஆல்கஹாலிக்ஸ் அனானிமஸ் 12, கோட்பாடுகளின் முக்கியத்துவம் குழுவிலுள்ள அதன் உறுப்பினர்களுக்கு அநாமதேயத்தை வலியுறுத்தி பாதுகாப்பு அரணாக விளங்குகிறது. ஆல்கஹாலிக்ஸ் அனானிமஸ் உறுப்பினர்கள் தங்கள் சொந்த அநாமதேயத்திற்கும், மற்றவர்களின் அநாமதேயத்திற்கும் பொறுப்பாவார்கள். ஆகவே நமது கோட்பாடுகளின் அஸ்திவாரம் ஆன்மீகமே , என்பதால் தனி நபரை விட தத்துவங்களுக்கே முதன்மை தர வேண்டும் என்பதை நமக்கு நினைவூட்டுகிறது."
                },
                experience: {
                    title: "எங்கள் அனுபவம்",
                    desc: "80 ஆண்டுகளுக்கும் மேலாக, A.A. மது பழக்கத்திலிருந்து கோடிக்கணக்கானவர்களை மீண்டு, பூரணமாக இருக்க உதவியுள்ளது."
                },
                hope: {
                    title: "நம்பிக்கை",
                    desc: "இங்கே எதையும் வாங்க முடியாது, ஆனால் எடுத்துக்கொள்ளலாம். இது எப்போதும் செயல்படும்."
                },
                new: {
                    title: "AA-க்கு புதியவரா?",
                    desc: "உங்களுக்கு தேவையானதை எடுத்துக்கொள்ளலாம், உணரலாம், உருவாக்கலாம், பயன்படுத்தலாம். இது எப்போதும் செயல்படும்."
                },
                meeting: {
                    title: "சந்திப்பு முகவரி",
                    desc: "A.A. உறுப்பினர்களுக்கான கூட்டங்கள், இடங்கள் மற்றும் அட்டவணை விவரங்கள்."
                },
                support: {
                    title: "சுய ஆதரவு",
                    desc: "வெளி உதவியை நிராகரித்து, உறுப்பினர்களால் ஆதரிக்கப்படும் ஒரு உலகளாவிய அமைப்பு."
                },
                service: {
                    title: "சேவை",
                    desc: "மற்றவர்களுக்கு உதவுவது ஒரு முக்கியக் கொள்கை; அனுபவம், வலிமை மற்றும் நம்பிக்கையை பகிர்ந்து கொண்டு இந்த திட்டம் செயல்படுகிறது."
                },
                form: {
                    joinTitle: {   // Tamil version
                        jo: "எ",
                        in: "ங",
                        wi: "ள",
                        th: "ு",
                        us: "டுடன்"
                    },
                    title: "படிவம்",
                    name: "பெயர்",
                    email: "மின்னஞ்சல்",
                    phone: "கைபேசி எண்",
                    message: "செய்தி",
                    submit: "சமர்ப்பிக்க",
                    note: "நீங்கள் கீழே வழங்கும் விவரங்கள் தொடர்பு கொள்ளும் நோக்கத்திற்காக மட்டுமே பயன்படுத்தப்படும், மேலும் அவை கடுமையாக ரகசியமாக வைக்கப்படும்."
                },
                trust: {
                    title1: "நம்பிக்கை",
                    title2: "உருவாக்கியது",
                    items: [
                        { number: "90", label: "ஆண்டுகள் அனுபவம்", suffix: "ஆ" },
                        { number: "150+", label: "நாடுகள் சென்றடைந்தது" },
                        { number: "1M+", label: "மீண்டு வந்த மக்கள்", highlight: true }
                    ]
                },
                selftest: {
                    title: "நீங்கள் ஒரு குடி நோயாளியா?",
                    note: "*இந்தக் கேள்விகளுக்கு பதிலளிக்கும்போது உண்மையாக பதிலளிக்கவும். எப்போதும் சரியான மருத்துவ ஆலோசனைக்கு மருத்துவரை அணுகவும்.",
                    questions: [
                        "1. குடிப்பழக்கத்தினால் வேலை செய்யும் நேரத்தை இழக்கிறீர்களா?",
                        "2. குடிப்பது உங்கள் குடும்ப வாழ்க்கையை மகிழ்ச்சியற்றதாகச் செய்கிறதா?",
                        "3. நீங்கள் மற்றவர்களுடன் பழகக் கூச்சப்படுவதால் குடிக்கிறீர்களா?",
                        "4. குடிப்பது உங்கள் நற்பெயரை பாதிக்கிறதா?",
                        "5. குடித்த பிறகு உங்களுக்கு எப்போதாவது குற்றம் செய்துவிட்டோம் என்ற வருத்த உணர்ச்சி ஏற்பட்டிருக்கிறதா?",
                        "6. குடியின் விளைவாக நீங்கள் எப்போதாவது பணக்கஷ்டத்திற்கு ஆளாகியிருக்கிறீர்களா?",
                        "7. குடிக்கும்போது நீங்கள் தரக்குறைவான தோழர்களையும் சூழ்நிலைகளையும் நாடி இருக்கிறீர்களா?",
                        "8. குடி உங்கள் குடும்ப நலனைப்பற்றிக் கவலைப்படாதவராகச் செய்திருக்கிறதா?",
                        "9. நீங்கள் குடிக்க ஆரம்பித்ததிலிருந்து வாழ்க்கையில் குடிக்க வேண்டும் என்ற தீவிர விருப்பம் உங்களுக்கு ஏற்படுகிறதா?",
                        "10. தினந்தோறும் ஒரு குறிப்பிட்ட நேரத்தில் குடிக்க வேண்டும் என்ற தீவிர விருப்பம் உங்களுக்கு ஏற்படுகிறதா?",
                        "11. மறுநாள் காலையில் உங்களுக்குக் குடி தேவைப்படுகிறதா?",
                        "12. குடிப்பது உங்கள் தூக்கத்தைப் பாதிக்கிறதா?",
                        "13. குடிக்க தொடங்கியதிலிருந்து உங்கள் வேலைத்திறன் குறைந்துவிட்டதா?",
                        "14. குடிப்பது உங்களுடைய தொழில் அல்லது வியாபாரத்தை ஆபத்திற்குள்ளாக்கிக் கொண்டுடிருக்கிறதா?",
                        "15. கவலைகள் அல்லது தொல்லைகளில் இருந்து தப்பித்துக் கொள்ள நீங்கள் குடிக்கிறீர்களா?",
                        "16. நீங்கள் தனிமையில் குடிக்கிறீர்களா?",
                        "17. நீங்கள் குடித்ததின் பலனாக எப்போதாவது முழு ஞாபக மறதி ஏற்பட்டுள்ளதா?",
                        "18. குடித்ததின் விளைவாக எப்போதாவது ஒரு டாக்டர் உங்களுக்கு சிகிச்சை செய்திருக்கிறாரா?",
                        "19. உங்களது தன்னம்பிக்கையை அதிகரித்துக் கொள்வதற்காக நீங்கள் குடிக்கிறீர்களா?",
                        "20. குடித்ததினால் மருத்துவமனையிலோ, சிகிச்சை நிறுவனத்திலோ இருந்திருக்கிறீர்களா?"
                    ],
                    yes: "ஆமாம்",
                    no: "இல்லை",
                    prev: "முந்தைய",
                    next: "அடுத்த",
                    submit: "சமர்ப்பிக்கவும்",
                    bottomNote: "மூன்று தடவை அல்லது அதற்கு மேல் 'ஆமாம்' என்று பதிலளித்திருந்தால், நீங்கள் உறுதியாக ஒரு குடிநோயாளி. (மேற்கண்ட சோதனைக் கேள்விகள் அமெரிக்கா, பால்டிமோர் நகர ஜான் ஹாப்கின்ஸ் பல்கலைக்கழகத்தில் பயன்படுத்தப்படுகின்றன.)"
                },
                footer: {
                    home: "முகப்பு",
                    about: "AA பற்றி",
                    reflections: "தினசரி சிந்தனைகள்",
                    meetings: "சந்திப்பு பட்டியல்",
                    selftest: "சுய பரிசோதனை",
                    contact: "எங்களை எங்கு காணலாம்",
                },

                footerpara: {
                    title: " வெளி உதவிகளை நிராகரித்தல் – தன்னிறைவு கொண்ட உலகளாவிய அமைப்பு",
                    subtitle: "அல்கஹாலிக்ஸ் அனானிமஸ் (A.A.) வெளிப்புற நிதி உதவிகளை ஏற்காது. இது முழுவதும் உறுப்பினர்களின் தன்னார்வ பங்களிப்புகளால் மட்டுமே இயங்குகிறது. A.A. உறுப்பினருக்கு எந்த கட்டணமும், கட்டாய கட்டணங்களும் இல்லை – உறுப்பினராக இருப்பது இலவசம்."
                },
                footerparas: {
                    heading: "உதவி",
                    heading1: "தேவையுள்ளவர்களுக்கு",
                    heading3: "எப்போதும்",
                    responsibilityTitle: "A.A. பொறுப்புத் தெரிவிப்பு",
                    responsibilityText: "யாராவது எங்கோ உதவிக்காக அணுகும்போது, A.A. கையின் உதவி எப்போதும் கிடைக்க வேண்டும் என நான் பொறுப்பேற்பவன். அதற்காக: நான் பொறுப்பேற்பவன்.",
                    helpline: "ஹெல்ப்லைன் : +91 9884447648",
                    address: "4/189A, 1st வீதி, MMDA காலனி மெயின் ரோடு, \nமதுரவாயல், சென்னை - 600095, தமிழ்நாடு, இந்தியா"
                },
                principles: {
                    title: "ஒற்றுமை • மீட்பு • சேவை",
                    items: [
                        {
                            title: "ஒற்றுமை",
                            desc: "ஒற்றுமையின் வலிமையுடன் நாம் ஒன்றிணைந்து, நம்பிக்கையும் நட்பும் பகிர்ந்து ஒரே குடும்பமாக குணமடைகிறோம்.",
                            href: '/steps'
                        },
                        {
                            title: "மீட்பு",
                            desc: "மாற்றமும் வளர்ச்சியும் நிறைந்த ஒரு பயணம்; அடிமைத்தனத்தின் சிக்கல்களில் இருந்து விடுபட உதவுகிறது.",
                        },
                        {
                            title: "சேவை",
                            desc: "செய்தியை பிறருக்கு எடுத்துச் சென்று, அன்பும் கருணையும் அர்ப்பணிப்புடன் நாம் சேவை செய்கிறோம்.",
                        },
                    ],
                },

            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
