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
                    links: "Links"
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
                stepspage: {
                    title: "Unity",
                    list: [
                        "Our common welfare should come first; personal recovery depends upon A.A. unity.",
                        "For our group purpose there is but one ultimate authority — a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern.",
                        "The only requirement for A.A. membership is a desire to stop drinking.",
                        "Each group should be autonomous except in matters affecting other groups or A.A. as a whole.",
                        "Each group has but one primary purpose — to carry its message to the alcoholic who still suffers.",
                        "An A.A. group ought never endorse, finance, or lend the A.A. name to any related facility or outside enterprise, lest problems of money, property, and prestige divert us from our primary purpose.",
                        "Every A.A. group ought to be fully self-supporting, declining outside contributions.",
                        "Alcoholics Anonymous should remain forever non-professional, but our service centers may employ special workers.",
                        "A.A., as such, ought never be organized; but we may create service boards or committees directly responsible to those they serve.",
                        "Alcoholics Anonymous has no opinion on outside issues; hence the A.A. name ought never be drawn into public controversy.",
                        "Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.",
                        "Anonymity is the spiritual foundation of all our traditions, ever reminding us to place principles before personalities."
                    ]
                },
                stepspage1: {
                    title: "Recovery",
                    list: [
                        'Our common welfare should come first; personal recovery depends upon A.A. unity',
                        'For our group purpose there is but one ultimate authority — a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern',
                        'The only requirement for A.A. membership is a desire to stop drinking',
                        'Each group should be autonomous except in matters affecting other groups or A.A. as a whole',
                        'Each group has but one primary purpose — to carry its message to the alcoholic who still suffers',
                        ' An A.A. group ought never endorse, finance, or lend the A.A. name to any related facility or outside enterprise, lest problems of money, property, and prestige divert us from our primary purpose',
                        ' Every A.A. group ought to be fully self-supporting, declining outside contributions.',
                        'Alcoholics Anonymous should remain forever non-professional, but our service centers may employ special workers.',
                        'A.A., as such, ought never be organized; but we may create service boards or committees directly responsible to those they serve.',
                        'Alcoholics Anonymous has no opinion on outside issues; hence the A.A. name ought never be drawn into public controversy.',
                        'Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.',
                        'Anonymity is the spiritual foundation of all our traditions, ever reminding us to place principles before personalities.'
                    ]
                },
                stepspage2: {
                    title: "Service",
                    list: [
                        ' Final responsibility and ultimate authority for A.A. world services should always reside in the collective conscience of our whole Fellowship',
                        'The General Service Conference of A.A. has become, for nearly every practical purpose, the active voice and the effective conscience of our whole society in its world affairs.',
                        'To insure effective leadership, we should endow each element of A.A.—the Conference, the General Service Board and its service corporations, staffs, committees, and executives—with a traditional “Right of Decision.',
                        'At all responsible levels, we ought to maintain a traditional “Right of Participation,” allowing a voting representation in reasonable proportion to the responsibility that each must discharge.',
                        'Throughout our structure, a traditional “Right of Appeal” ought to prevail, so that minority opinion will be heard and personal grievances receive careful consideration.',
                        'The Conference recognizes that the chief initiative and active responsibility in most world service matters should be exercised by the trustee members of the Conference acting as the General Service Board.',
                        'The Charter and Bylaws of the General Service Board are legal instruments, empowering the trustees to manage and conduct world service affairs. The Conference Charter is not a legal document; it relies upon tradition and the A.A. purse for final effectiveness.',
                        'The trustees are the principal planners and administrators of over-all policy and finance. They have custodial oversight of the separately incorporated and constantly active services, exercising this through their ability to elect all the directors of these entities. ',
                        'Good service leadership at all levels is indispensable for our future functioning and safety. Primary world service leadership, once exercised by the founders, must necessarily be assumed by the trustees. ',
                        'Every service responsibility should be matched by an equal service authority, with the scope of such authority well defined.',
                        'The trustees should always have the best possible committees, corporate service directors, executives, staffs, and consultants. Composition, qualifications, induction procedures, and rights and duties will always be matters of serious concern',
                        'The Conference shall observe the spirit of A.A. tradition, taking care that it never becomes the seat of perilous wealth or power; that sufficient operating funds and reserve be its prudent financial principle; that it place none of its members in a position of unqualified authority over others; that it reach all important decisions by discussion'
                    ]
                },
                principles: {
                    title: "Unity • Recovery • Service",
                    items: [

                        {
                            title: "Recovery",
                            desc: "A journey of change and growth, helping us live free from the struggles of addiction.",
                            href: '/steps1'
                        },
                        {
                            title: "Unity",
                            desc: "We come together with strength in unity, sharing hope and fellowship to heal as one.",
                            href: '/steps'
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
                    bottomNote: "ஏதேனும் ஒரு கேள்விக்கு ஆம் என்று விடை சொல்லியிருந்தால் நீங்கள் ஒரு குடிநோயாளியாக இருக்கலாம் என்பதற்கு எச்சரிக்கையாகும். ஏதேனும் இரண்டிற்கு ஆம் என்று விடை சொல்லியிருந்தால் நீங்கள் குடிநோயாளியாக இருக்க வாய்ப்புகள் உண்டு. மூன்று தடவை அல்லது அதற்கு மேல் ஆம் என்று விடை சொல்லியிருந்தால் நீங்கள் உறுதியாக ஒரு குடிநோயாளிதான்.(மேற்கண்ட சோதனைக் கேள்விகள் ஒருவர் குடிநோயாளியா இல்லையா என்று தீர்மானிக்க அமெரிக்கா, பால்டிமோ நகர், ஜான் ஹாப்கின்ஸ பல்கலைக்கழகத்தினரால் பயன்படுத்தப்படுகின்றன. "
                },
                footer: {
                    home: "முகப்பு",
                    about: "AA பற்றி",
                    reflections: "தினசரி சிந்தனைகள்",
                    meetings: "சந்திப்பு பட்டியல்",
                    selftest: "சுய பரிசோதனை",
                    contact: "எங்களை எங்கு காணலாம்",
                    links: "இணைப்புகள்"
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
                stepspage: {
                    title: "ஒற்றுமை",
                    list: [
                        "நமது பொதுநலன் தான் நமக்கு முக்கியமானது. நாம்    குணமடைவது நமது ஒற்றுமையை பொறுத்திருக்கிறது.",
                        "நமது குழுவின் நடவடிக்கைகளுக்கு அன்பான இறைவனே அதிகாரி --- அவர் நமது குழுவின் மனசாட்சியின் மூலம் தீர்மானத்தை வெளிப்படுத்துவார் என கருதுகிறோம். நமது தலைவர்கள் உண்மையில் நமது நம்பிக்கை பெற்ற சேவையாளர்கள்; அவர்கள் ஆதிக்கம் செலுத்துவதில்லை.",
                        "குடிப்பதை நிறுத்த வேண்டும் என்ற விருப்பமே A.A வில் உறுப்பினராவதற்கு தேவையான ஒரே தகுதி.",
                        "A.A வை மொத்தமாகவோ, மற்ற குழுக்களையோ பாதிக்காத விவகாரங்களில் ஒவ்வொரு குழுவும்  சுயேட்சையாகச் செயல்படும்.",
                        "குடிநோயால் அவதிப்பட்டுக் கொண்டிருப்பவர்களுக்கு விடிவு உண்டு என்ற செய்தியை எடுத்துச் சொல்வது ஒவ்வொரு குழுவின் அடிப்படை நோக்கம்.",
                        "A A குழுக்கள் தங்கள் ஆதரவு, பணம், பெயர் இவைகளை அதைப்போன்ற சம்பந்தப்பட்ட அமைப்பிற்கோ அல்லது வெளி நிறுவனங்களுக்கோ கொடுத்து உதவக்கூடாது. ஏனெனில் பணம் சொத்து புகழ் போன்றவை நம்மை நம்முடைய அடிப்படை நோக்கத்திலிருந்து திசைதிருப்பி விடலாம். ",
                        "ஒவ்வொரு குழுவும் வெளி உதவியை மறுத்துத் தன் சொந்த பலத்தாலேயே இயங்க வேண்டும்.",
                        " A. A என்றென்றும்  தொழில் அடிப்படையில்  செயல்படக்கூடாது.  ஆனால் நமது சேவை மையங்கள் சில வேலைகளுக்காக சிறப்பு பணியாளர்களை நியமிக்கலாம். ",
                        "A. A வை கட்டுப்பாடு செய்யும் அமைப்பாக ஒருபோதும் நிறுவப்படக்கூடாது. ஆனால் தொண்டு செய்பவர்களுக்கு மட்டுமே பொறுப்பான சேவை மையம், சேவை குழு போன்றவைகளை உருவாக்கலாம். ",
                        "வெளி விவகாரங்களைப் பற்றி A. A க்கு  அபிப்பிராயங்கள் கிடையாது. ஆகையால் பொதுக் கருத்து வேறுபாடுகளில் A A வின் பெயரை ஈடுபடுத்தக் கூடாது.",
                        "நமது பொதுத் தொடர்பு கொள்கை எடுத்துக்காட்டு மூலம் இருக்க வேண்டுமே தவிர விளம்பரங்களால் அல்ல. பத்திரிகை, ரேடியோ, டிவி,  சினிமா  போன்றவைகளில் நம்மை தனிப்பட்ட முறையில் இன்னார் என்று வெளிப்படுத்தலாகாது.",
                        "நாம் இன்னாரென்று வெளிப்படுத்தாமல் இருப்பதே நமது கோட்பாடுகளின் ஆன்மீக அஸ்திவாரம். இது தனிமனித ஆளுமையை விட நமது தத்துவங்கள் தான் முக்கியமென வலியுறுத்துகிறது."
                    ]
                },
                stepspage1: {
                    title: "மீட்பு",
                    list: [
                        "எங்களுடைய பொதுவான நலனே முதலில் இருக்க வேண்டும்; தனிப்பட்ட மீட்பு, A.A. ஒற்றுமையை சார்ந்ததே.",
                        "எங்கள் குழுவின் நோக்கத்திற்கு ஒரே உயர் அதிகாரம் மட்டுமே உள்ளது — எங்கள் குழுவின் மனச்சாட்சியின் மூலம் வெளிப்படும் அன்பான கடவுள். எங்கள் தலைவர்கள் நம்பிக்கைக்குரிய ஊழியர்களே; அவர்கள் ஆட்சி செய்வதில்லை.",
                        "A.A.வில் உறுப்பினராவதற்கான ஒரே தேவையானது குடிப்பதை நிறுத்த வேண்டும் என்ற விருப்பமே.",
                        "ஒவ்வொரு குழுவும் தன்னாட்சி உடையதாக இருக்க வேண்டும், ஆனால் மற்ற குழுக்கள் அல்லது முழுமையான A.A.-ஐ பாதிக்கும் விஷயங்களில் விதிவிலக்காக.",
                        "ஒவ்வொரு குழுவின் முதன்மை நோக்கம், இன்னும் அவதிப்படுகிற குடி நோயாளிகளுக்கு தனது செய்தியை கொண்டு சேர்ப்பதே.",
                        "ஒரு A.A. குழு எப்போதும் எதையும் ஆதரிக்கவோ, நிதியளிக்கவோ அல்லது A.A. பெயரை தொடர்புடைய நிறுவனத்திற்கோ வெளிப்புற தொழில்களுக்கோ கடனாக அளிக்கக்கூடாது; இல்லையெனில் பணம், சொத்து, புகழ் போன்ற பிரச்சினைகள் எங்களை எங்கள் முதன்மை நோக்கத்திலிருந்து விலக்கி விடும்.",
                        "ஒவ்வொரு A.A. குழுவும் முழுமையாக சுய ஆதரவை கொண்டிருக்க வேண்டும்; வெளிப்புற பங்களிப்புகளை நிராகரிக்க வேண்டும்.",
                        "Alcoholics Anonymous என்ற அமைப்பு எப்போதும் தொழில்முறையற்றதாக இருக்க வேண்டும்; ஆனால் எங்கள் சேவை மையங்கள் சிறப்பு ஊழியர்களை பணியில் அமர்த்தலாம்.",
                        "A.A. ஒருங்கிணைக்கப்படக்கூடாது; ஆனால் நாங்கள் சேவை வாரியங்கள் அல்லது குழுக்களை உருவாக்கலாம், அவர்கள் சேவை செய்யும் உறுப்பினர்களுக்கே நேரடியாக பொறுப்பாளிகளாக இருப்பார்கள்.",
                        "Alcoholics Anonymous வெளிப்புற பிரச்சினைகள் குறித்து எந்த கருத்தும் கொள்ளாது; ஆகவே A.A. பெயர் எப்போதும் பொது விவாதங்களில் ஈடுபடக்கூடாது.",
                        "எங்களுடைய பொது தொடர்பு கொள்கை, விளம்பரத்தை விட ஈர்ப்பை அடிப்படையாகக் கொண்டது; பத்திரிகை, வானொலி மற்றும் திரைப்படங்களில் எப்போதும் தனிப்பட்ட அநாமதேயத்தை பேண வேண்டும்.",
                        "அநாமதேயம் என்பது எங்கள் அனைத்து பாரம்பரியங்களின் ஆன்மீக அடித்தளம்; அது எப்போதும் நம்மை நினைவூட்டுகிறது: தனிப்பட்டவர்களை விட கொள்கைகளுக்கு முன்னுரிமை தர வேண்டும்."
                    ]
                },

                stepspage2: {
                    title: "சேவை",
                    list: [
                        "A.A. உலக சேவைகளுக்கான இறுதி பொறுப்பும் உயர் அதிகாரமும் எப்போதும் எங்கள் முழு சகோதரத்துவத்தின் கூட்டு மனச்சாட்சியில் நிலைத்து இருக்க வேண்டும்.",
                        "A.A. பொது சேவை மாநாடு, உலக விஷயங்களில் எங்கள் முழு சமூகத்தின் செயல்பாட்டு குரலாகவும், பயனுள்ள மனச்சாட்சியாகவும், கிட்டத்தட்ட அனைத்து நடைமுறை நோக்கங்களுக்கும் உருவாகியுள்ளது.",
                        "திறமையான தலைமைத்துவத்தை உறுதிப்படுத்த, A.A.வின் ஒவ்வொரு கூறுக்கும் — மாநாடு, பொது சேவை வாரியம் மற்றும் அதன் சேவை நிறுவனங்கள், பணியாளர்கள், குழுக்கள் மற்றும் நிர்வாகிகள் — பாரம்பரியமான “முடிவெடுக்கும் உரிமை” வழங்கப்பட வேண்டும்.",
                        "அனைத்து பொறுப்பான நிலைகளிலும், ஒவ்வொருவரும் ஏற்க வேண்டிய பொறுப்பிற்கு ஏற்ப வாக்களிக்கும் உரிமையுடன் கூடிய பாரம்பரியமான “பங்கேற்பு உரிமை” பராமரிக்கப்பட வேண்டும்.",
                        "எங்கள் அமைப்பில் முழுவதும், பாரம்பரியமான “மேல்முறையீட்டு உரிமை” நிலவ வேண்டும், இதன் மூலம் குறைந்தபட்ச கருத்துக்களும் கேட்கப்படும், தனிப்பட்ட குறைகளும் கவனமாக பரிசீலிக்கப்படும்.",
                        "மாநாடு, பெரும்பாலான உலக சேவை விஷயங்களில் முதன்மை முன்முயற்சியும் செயலில் பொறுப்பும் மாநாட்டின் நம்பிக்கையாளர்கள் பொது சேவை வாரியமாக செயல்படும் போது மேற்கொள்ளப்பட வேண்டும் என்பதை அங்கீகரிக்கிறது.",
                        "பொது சேவை வாரியத்தின் சட்டப்பிரிவுகள் மற்றும் சட்டங்கள், உலக சேவை விவகாரங்களை நிர்வகிக்கவும் நடத்தவும் நம்பிக்கையாளர்களுக்கு அதிகாரமளிக்கும் சட்ட ஆவணங்களாகும். மாநாட்டு சட்டம் சட்ட ஆவணம் அல்ல; அது பாரம்பரியம் மற்றும் A.A.வின் நிதியை நம்புகிறது.",
                        "நம்பிக்கையாளர்கள், மொத்தக் கொள்கை மற்றும் நிதி விவகாரங்களின் பிரதான திட்டமிடுவோர் மற்றும் நிர்வாகிகள். அவர்கள் தனித்தனியாக இணைக்கப்பட்ட மற்றும் தொடர்ந்து செயலில் இருக்கும் சேவைகளுக்கு பராமரிப்பு மேற்பார்வை செய்கிறார்கள், இதை அவர்கள் அந்த நிறுவனங்களின் அனைத்து இயக்குநர்களையும் தேர்ந்தெடுக்கும் தங்கள் அதிகாரத்தின் மூலம் செய்கிறார்கள்.",
                        "அனைத்து நிலைகளிலும் நல்ல சேவைத் தலைமைத்துவம் எங்கள் எதிர்கால செயல்பாடு மற்றும் பாதுகாப்பிற்குத் தவிர்க்க முடியாதது. உலக சேவையின் முதன்மைத் தலைமைத்துவம், ஒருகாலத்தில் நிறுவுநர்களால் மேற்கொள்ளப்பட்டது, இப்போது அவசியமாக நம்பிக்கையாளர்களால் மேற்கொள்ளப்பட வேண்டும்.",
                        "ஒவ்வொரு சேவை பொறுப்பும் சமமான சேவை அதிகாரத்துடன் பொருந்த வேண்டும், அத்தகைய அதிகாரத்தின் வரம்பு தெளிவாக வரையறுக்கப்பட வேண்டும்.",
                        "நம்பிக்கையாளர்களிடம் எப்போதும் சிறந்த குழுக்கள், நிறுவன சேவை இயக்குநர்கள், நிர்வாகிகள், பணியாளர்கள் மற்றும் ஆலோசகர்கள் இருக்க வேண்டும். அமைப்பு, தகுதிகள், நியமன முறைகள், உரிமைகள் மற்றும் கடமைகள் எப்போதும் மிகுந்த கவலையாக இருக்கும்.",
                        "மாநாடு எப்போதும் A.A. பாரம்பரியத்தின் ஆன்மாவைக் கடைப்பிடிக்க வேண்டும்; அது ஆபத்தான செல்வத்திற்கோ அதிகாரத்திற்கோ இருக்கக்கூடிய இடமாக மாறக்கூடாது; போதுமான செயல்பாட்டு நிதி மற்றும் இருப்பு அதன் விவேகமான நிதி கொள்கையாக இருக்க வேண்டும்; அது எந்த உறுப்பினரையும் மற்றவர்களுக்கு மீறிய முழுமையான அதிகாரத்தில் வைக்கக்கூடாது; அனைத்து முக்கிய முடிவுகளும் விவாதம், வாக்கெடுப்பு மற்றும் அதிகபட்ச ஒப்புதலின் மூலம் எடுக்கப்பட வேண்டும்."
                    ]
                },

            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
