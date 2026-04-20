// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-first-post-covid-in-person-lab-meeting-in-istanbul",
          title: 'First post COVID in-person lab meeting in Istanbul.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-10-istlabmeeting/";
            },},{id: "news-hot-pot-with-the-vancouver-team",
          title: 'Hot pot with the Vancouver team',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-10-hotpot/";
            },},{id: "news-ugur-meric-dikbas-was-awarded-the-pcfbc-39-s-grant-in-aid-award-for-his-work-on-hoxb13-39-s-structural-biology",
          title: 'Ugur Meric Dikbas was awarded the PCFBC&amp;#39;s Grant-in-Aid award for his work on...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-10-mericgia/";
            },},{id: "news-flora-was-awarded-the-2021-co-op-supervisor-award",
          title: 'Flora was awarded the 2021 Co-op Supervisor Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-12-floracoop/";
            },},{id: "news-we-celebrated-christmas-with-our-team-in-koc",
          title: 'We celebrated Christmas with our team in Koc.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-12-christmasinkoc/";
            },},{id: "news-dogancan-ozturan-phd-successfully-defended-his-thesis-and-graduated",
          title: 'Dogancan Ozturan (PhD) successfully defended his thesis and graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-12-dogancanphd/";
            },},{id: "news-bengul-gokbayrak-phd-successfully-defended-her-thesis-and-graduated",
          title: 'Bengul Gokbayrak (PhD) successfully defended her thesis and graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-01-bengulphd/";
            },},{id: "news-betul-won-the-best-presentation-award-at-the-kuttam-graduate-research-seminar-for-her-work-on-hoxb13",
          title: 'Betul won the best presentation award at the KUTTAM Graduate Research Seminar for...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-02-betulgrc/";
            },},{id: "news-kerim-yavuz-has-joined-the-lab-as-a-wet-lab-phd-student",
          title: 'Kerim Yavuz has joined the lab as a wet lab PhD student!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-03-kerimjoin/";
            },},{id: "news-we-went-axe-throwing",
          title: 'We went axe throwing!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-06-axe/";
            },},{id: "news-betül-ersoy-phd-successfully-defended-her-thesis-and-graduated",
          title: 'Betül Ersoy (PhD) successfully defended her thesis and graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-08-betulphd/";
            },},{id: "news-elif-yapıcı-msc-successfully-defended-her-thesis-and-graduated",
          title: 'Elif Yapıcı (MSc) successfully defended her thesis and graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-08-elifms/";
            },},{id: "news-umut-berkay-altıntaş-msc-successfully-defended-his-thesis-and-graduated",
          title: 'Umut Berkay Altıntaş (MSc) successfully defended his thesis and graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-08-berkayms/";
            },},{id: "news-lynn-masri-and-sıla-akdoğan-have-joined-the-lab-as-dry-lab-phd-students",
          title: 'Lynn Masri and Sıla Akdoğan have joined the lab as dry lab PhD...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-09-newstudents/";
            },},{id: "news-ivan-yu-was-awarded-the-pcfbc-39-s-grant-in-aid-award",
          title: 'Ivan Yu was awarded the PCFBC&amp;#39;s Grant-in-Aid award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-09-ivangia/";
            },},{id: "news-congratulations-dr-morova-tunç-succesfully-defended-his-dissertation",
          title: 'Congratulations Dr. Morova! Tunç succesfully defended his dissertation.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-12-tuncphd/";
            },},{id: "news-congratulations-to-meric-for-passing-the-comprehensive-exam-and-advancing-to-phd-candidacy",
          title: 'Congratulations to Meric for passing the comprehensive exam and advancing to PhD candidacy!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-12-mericcomp/";
            },},{id: "news-congratulations-to-ivan-for-his-excellent-talk-at-the-vpc-terry-fox-seminar-series",
          title: 'Congratulations to Ivan for his excellent talk at the VPC/Terry Fox Seminar Series....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-01-ivanterryfox/";
            },},{id: "news-congratulations-to-ivan-for-passing-his-comprehensive-exam-and-advancing-to-phd-candidacy",
          title: 'Congratulations to Ivan for passing his comprehensive exam and advancing to PhD candidacy!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-01-ivancomp/";
            },},{id: "news-our-snpstarrseq-paper-was-published-in-nar-so-we-went-curling",
          title: 'Our snpSTARRseq paper was published in NAR so we went curling!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-02-snpstarrseq/";
            },},{id: "news-dinner-and-a-surprise-for-nathan",
          title: 'Dinner and a surprise for Nathan',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-02-nathanbd/";
            },},{id: "news-congratulations-to-berkay-for-his-amazing-talk-at-the-vpc-terry-fox-seminar-series",
          title: 'Congratulations to Berkay for his amazing talk at the VPC/Terry Fox Seminar Series...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-berkayterryfox/";
            },},{id: "news-berkay-delivered-an-engaging-5-minute-lay-talk-at-the-big23-research-day",
          title: 'Berkay delivered an engaging 5-minute lay talk at the BIG23 Research Day!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-berkaybig23/";
            },},{id: "news-congratulations-to-emir-for-earning-the-2nd-best-presentation-award-at-the-kuttam-grc",
          title: 'Congratulations to Emir for earning the 2nd Best Presentation Award at the KUTTAM...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-emirgrc/";
            },},{id: "news-we-celebrated-doğancan-s-birthday-with-joy-and-laughter",
          title: 'We celebrated Doğancan’s birthday with joy and laughter!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-dogancanbd/";
            },},{id: "news-meric-kerim-and-ivan-presented-their-posters-at-the-17th-annual-lorne-d-sullivan-research-day",
          title: 'Meric, Kerim, and Ivan presented their posters at the 17th Annual Lorne D....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-06-lornedsullivan/";
            },},{id: "news-we-enjoyed-a-lovely-dinner-with-nathan-in-richmond-at-once-more-restaurant",
          title: 'We enjoyed a lovely dinner with Nathan in Richmond at Once More restaurant!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-06-dinner/";
            },},{id: "news-berkay-and-doğancan-showcased-their-artwork-at-the-artists-in-science-exhibition-in-the-vpc-atrium",
          title: 'Berkay and Doğancan showcased their artwork at the “Artists in Science” exhibition in...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-06-artistsinscience/";
            },},{id: "news-brandon-james-fasy-has-joined-the-turkish-dry-lab-team-as-a-m-sc-student",
          title: 'Brandon James Fasy has joined the Turkish dry lab team as a M.Sc....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-08-brandon/";
            },},{id: "news-lack-lab-vancouver-had-a-fantastic-evening-playing-pool-and-joining-a-trivia-night-at-the-american-pub",
          title: 'Lack Lab Vancouver had a fantastic evening playing pool and joining a trivia...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-09-pool/";
            },},{id: "news-the-koç-team-observed-a-robotic-assisted-radical-prostatectomy-rarp",
          title: 'The Koç team observed a Robotic-Assisted Radical Prostatectomy (RARP)!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-kuhrarp/";
            },},{id: "news-happy-birthday-ivan",
          title: 'Happy Birthday, Ivan!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-ivanbd/";
            },},{id: "news-the-big-lack-lab-family-gathered-for-a-wonderful-meal-at-golden-swan-restaurant",
          title: 'The big Lack Lab family gathered for a wonderful meal at Golden Swan...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-dinner/";
            },},{id: "news-the-vancouver-team-triumphed-at-trivia-night-and-gave-a-warm-welcome-to-olka",
          title: 'The Vancouver team triumphed at trivia night and gave a warm welcome to...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-trivianight/";
            },},{id: "news-kerim-visited-the-lack-lab-in-istanbul",
          title: 'Kerim visited the Lack Lab in Istanbul!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-kerimistanbul/";
            },},{id: "news-lack-lab-celebrated-christmas-with-a-delightful-dinner-at-stepho-s-a-greek-restaurant",
          title: 'Lack Lab celebrated Christmas with a delightful dinner at Stepho’s, a Greek restaurant!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-christmas/";
            },},{id: "news-we-enjoyed-a-festive-joint-secret-santa-celebration-with-the-lallous-lab",
          title: 'We enjoyed a festive Joint Secret Santa celebration with the Lallous Lab!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-secretsanta/";
            },},{id: "news-rosie-and-james-received-biotalent-funding-congratulations-we-celebrated-with-dinner-at-suika",
          title: 'Rosie and James received BioTalent funding — congratulations! We celebrated with dinner at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-biotalent/";
            },},{id: "news-happy-birthday-olka-celebrated-with-delicious-tacos-at-la-taqueria-pinche-taco-shop",
          title: 'Happy Birthday, Olka! Celebrated with delicious tacos at La Taqueria Pinche Taco Shop!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-olkabd/";
            },},{id: "news-lynn-and-brandon-gave-great-presentations-at-the-pharmacology-physiology-seminars-at-koc",
          title: 'Lynn and Brandon gave great presentations at the Pharmacology-Physiology Seminars at Koc!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-kuttamseminars/";
            },},{id: "news-congratulations-to-lynn-for-winning-the-best-poster-award-at-the-kuttam-grc-conference",
          title: 'Congratulations to Lynn for winning the Best Poster award at the KUTTAM GRC...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-lynngrc/";
            },},{id: "news-nathan-delivered-his-talk-at-the-spore-meeting",
          title: 'Nathan delivered his talk at the SPORE meeting!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-03-nathanspore/";
            },},{id: "news-dinner-at-meet-in-yaletown-happy-birthday-berkay-james-and-nathan",
          title: 'Dinner at MeeT in Yaletown! Happy Birthday, Berkay, James, and Nathan!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-03-groupbd/";
            },},{id: "news-kerim-delivered-an-inspiring-talk-at-the-terry-fox-seminar",
          title: 'Kerim delivered an inspiring talk at the Terry Fox Seminar!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-03-kerimterryfox/";
            },},{id: "news-emir-attended-the-igvf-mpra-workshop-and-presented-a-poster",
          title: 'Emir attended the IGVF MPRA Workshop and presented a poster!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-03-emirigvf/";
            },},{id: "news-wishing-ivan-the-best-as-he-heads-to-the-uk-as-a-visiting-researcher-at-adam-sharp-s-lab",
          title: 'Wishing Ivan the best as he heads to the UK as a visiting...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-04-ivanicr/";
            },},{id: "news-wishing-emir-the-best-as-he-heads-to-mcgill-as-a-visiting-researcher-with-yue-li",
          title: 'Wishing Emir the best as he heads to McGill as a visiting researcher...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-05-emirmcgill/";
            },},{id: "news-vancouver-witnessed-the-mesmerizing-northern-lights",
          title: 'Vancouver witnessed the mesmerizing northern lights!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-05-northernlights/";
            },},{id: "news-lack-lab-enjoyed-a-delightful-dinner-at-banana-leaf",
          title: 'Lack Lab enjoyed a delightful dinner at Banana Leaf!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-06-dinner/";
            },},{id: "news-berkay-meric-and-kerim-presented-at-the-18th-annual-lorne-d-sullivan-lectureship-and-research-day",
          title: 'Berkay, Meric, and Kerim presented at the 18th Annual Lorne D. Sullivan Lectureship...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-06-lornedsullivan/";
            },},{id: "news-berkay-presented-at-the-prostate-cancer-foundation-young-investigators-meeting",
          title: 'Berkay presented at the Prostate Cancer Foundation Young Investigators Meeting!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-06-berkaypcf/";
            },},{id: "news-meric-proudly-presented-at-the-terry-fox-seminars",
          title: 'Meric proudly presented at the Terry Fox Seminars!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-06-mericterryfox/";
            },},{id: "news-congratulations-to-rosie-and-james-on-completing-their-coop-and-starting-their-internships",
          title: 'Congratulations to Rosie and James on completing their coop and starting their internships!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-coopendjr/";
            },},{id: "news-kerim-is-awarded-cancer-research-society-s-doctoral-research-award",
          title: 'Kerim is awarded Cancer Research Society’s Doctoral Research Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-kerimcrsdr/";
            },},{id: "news-nathan-is-awarded-the-best-poster-presentation-in-at-the-pacrim-breast-and-prostate-cancer-meeting-in-darwin-australia",
          title: 'Nathan is awarded the best poster presentation in at the PacRim Breast and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-nathanpacrim/";
            },},{id: "news-kerim-is-awarded-prostate-cancer-foundation-of-canada-s-grant-in-aid",
          title: 'Kerim is awarded Prostate Cancer Foundation of Canada’s Grant-in-Aid!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-kerimpcf/";
            },},{id: "news-emir-visits-his-wet-lab-colleagues-in-vancouver",
          title: 'Emir visits his wet lab colleagues in Vancouver!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-emirvan/";
            },},{id: "news-happy-birthday-to-rosie-flora-emir-and-meric-we-had-a-wonderful-hotpot-dinner-together-at-happy-lamb",
          title: 'Happy Birthday to Rosie, Flora, Emir, and Meric! We had a wonderful hotpot...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-groupbd/";
            },},{id: "news-happy-birthday-flora-dinner-celebration-at-homura-yakiniku-japanese-bbq",
          title: 'Happy Birthday, Flora! Dinner celebration at Homura Yakiniku, Japanese BBQ.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-florabd/";
            },},{id: "news-happy-birthday-ivan-we-celebrated-with-a-dinner-at-sun-bo-kong-a-vegetarian-chinese-restaurant",
          title: 'Happy Birthday, Ivan! We celebrated with a dinner at Sun Bo Kong, a...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-ivanbd/";
            },},{id: "news-kerim-passed-his-comprehensive-exam-with-flying-colors",
          title: 'Kerim passed his comprehensive exam with flying colors!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-kerimcomp/";
            },},{id: "news-berkay-s-paper-has-been-published-in-nature-communications",
          title: 'Berkay’s paper has been published in Nature Communications',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-berkaypaper/";
            },},{id: "news-lack-lab-gathers-for-a-vancouver-dinner-at-tenen-an-eastern-european-restaurant",
          title: 'Lack Lab gathers for a Vancouver dinner at TENEN, an Eastern European restaurant...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-dinner/";
            },},{id: "news-kerim-is-awarded-ubc-science-co-op-supervisor-recognition-award",
          title: 'Kerim is awarded UBC Science Co-op Supervisor Recognition Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-kerimcoopaward/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-mericcellsymposia/";
            },},{id: "news-lack-lab-warmly-welcomes-mayuko-and-daniel-with-a-dinner-at-akbar-joojeh-persian-restaurant",
          title: 'Lack Lab warmly welcomes Mayuko and Daniel with a dinner at Akbar Joojeh...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-dinner/";
            },},{id: "news-happy-birthday-olka-we-celebrated-olka-s-birthday-at-nonna-s-italian-street-food",
          title: 'Happy birthday Olka! We celebrated Olka’s birthday at Nonna’s Italian Street Food!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-olkabd/";
            },},{id: "news-bengul-s-paper-is-published-in-communications-biology",
          title: 'Bengul’s paper is published in Communications Biology!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-bengulpaper/";
            },},{id: "news-hatice-kibar-joined-our-istanbul-lab-as-a-bioinformatics-ph-d-student-welcome-hatice",
          title: 'Hatice Kibar joined our Istanbul lab as a bioinformatics Ph.D. student. Welcome Hatice!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-hatice/";
            },},{id: "news-kerim-won-the-people-s-choice-award-in-the-vchri-heat-of-the-ubc-3-minute-thesis-competition",
          title: 'Kerim won the People’s Choice Award in the VCHRI Heat of the UBC...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-kerim3mt/";
            },},{id: "news-berkay-gave-a-talk-at-big25-research-day",
          title: 'Berkay gave a talk at BIG25 Research Day!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-berkaybigg/";
            },},{id: "news-happy-birthday-berkay-and-james-we-celebrated-their-birthdays-at-salsa-amp-agave-mexican-grill",
          title: 'Happy birthday Berkay and James! We celebrated their birthdays at Salsa &amp;amp; Agave...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-berkayjamesbd/";
            },},{id: "news-rosie-and-james-presented-their-posters-for-their-honor-s-theses",
          title: 'Rosie and James presented their posters for their Honor’s Theses!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-rosiejamesposter/";
            },},{id: "news-happy-birthday-kerim-aarush-preeti-dogancan-shabnam-and-funda-we-held-the-april-birthday-bash-with-a-big-gathering-at-the-ubc-campus",
          title: 'Happy birthday Kerim, Aarush, Preeti, Dogancan, Shabnam, and Funda! We held the April...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-aprilbdbash/";
            },},{id: "news-rosie-and-james-graduated",
          title: 'Rosie and James graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-rosiejamesgrad/";
            },},{id: "news-lack-lab-presented-at-the-19th-lorne-d-sullivan-research-day",
          title: 'Lack Lab presented at the 19th Lorne D. Sullivan Research Day!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-lornedsullivan/";
            },},{id: "news-nathan-is-awarded-research-teaching-award-for-excellence-in-basic-science",
          title: 'Nathan is awarded Research teaching award for Excellence in Basic Science!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-nathanaward/";
            },},{id: "news-kerim-is-awarded-the-vchri-rising-star-award",
          title: 'Kerim is awarded the VCHRI Rising Star Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-kerimvchrirs/";
            },},{id: "news-kerim-and-nathan-attended-the-embo-workshop-on-enhancer-mechanics-and-enhanceropathies-in-middelfart-denmark",
          title: 'Kerim and Nathan attended the EMBO Workshop on Enhancer Mechanics and Enhanceropathies in...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-emboworkshop/";
            },},{id: "news-sila-graduated-congratulations-on-a-wonderful-master-s-thesis-defence-and-best-of-luck-in-your-future-endeavours-sila",
          title: 'Sila graduated! Congratulations on a wonderful Master’s thesis defence and best of luck...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-silagrad/";
            },},{id: "news-berkay-is-awarded-cancer-research-society-s-doctoral-research-award",
          title: 'Berkay is awarded Cancer Research Society’s Doctoral Research Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-berkaycrs/";
            },},{id: "news-our-lab-is-awarded-the-cihr-project-grant",
          title: 'Our lab is awarded the CIHR Project Grant!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-cihr/";
            },},{id: "news-kerim-s-review-paper-is-published-in-bioscience-reports",
          title: 'Kerim’s review paper is published in Bioscience Reports!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-kerimreview/";
            },},{id: "news-daniel-completed-his-co-op-term-with-us",
          title: 'Daniel completed his co-op term with us!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-danielfarewell/";
            },},{id: "news-happy-birthday-rosie-flora-daniel-tunc-jane-meric-and-aaira-we-held-the-september-birthday-bash-with-a-big-dinner-at-dosanko-restaurant",
          title: 'Happy Birthday Rosie, Flora, Daniel, Tunc, Jane, Meric and Aaira! We held the...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-septbdbash/";
            },},{id: "news-meric-graduated-congratulations-on-a-wonderful-ph-d-thesis-defence-and-a-very-well-deserved-ph-d-degree",
          title: 'Meric Graduated! Congratulations on a wonderful Ph.D. thesis defence and a very well...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-mericgrad/";
            },},{id: "news-emir-joined-our-vancouver-lab-to-get-his-hands-wet",
          title: 'Emir joined our Vancouver Lab to get his hands wet!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-emirvancouver/";
            },},{id: "news-meric-and-meltem-got-married-we-gathered-for-a-breakfast-in-vancouver-to-watch-the-live-stream-of-their-wedding-in-turkey-all-the-best-in-your-shared-future-meric-and-meltem",
          title: 'Meric and Meltem got Married! We gathered for a breakfast in Vancouver to...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-mericandmeltem/";
            },},{id: "news-happy-birthday-ivan-we-celebrated-ivan-s-birthday-at-miso-taco",
          title: 'Happy Birthday Ivan! We celebrated Ivan’s birthday at Miso Taco!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-ivanbd/";
            },},{id: "news-kenan-sevinc-joined-our-istanbul-lab-as-a-postdoctoral-researcher-welcome-kenan",
          title: 'Kenan Sevinc joined our Istanbul lab as a postdoctoral researcher. Welcome Kenan!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-kenan/";
            },},{id: "news-we-had-a-lab-dinner-at-mongo-bongo-mongolian-grill",
          title: 'We had a lab dinner at Mongo Bongo Mongolian Grill!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-mongobongo/";
            },},{id: "news-betul-and-shreyas-paper-is-published-in-pnas",
          title: 'Betul and Shreyas’ paper is published in PNAS!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-pnashobx13/";
            },},{id: "news-olka-was-selected-for-the-falling-walls-female-science-talents-intensive-track-2026",
          title: 'Olka was selected for the Falling Walls Female Science Talents Intensive Track 2026!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-olkafallingwalls/";
            },},{id: "news-we-had-our-annual-end-of-the-year-gathering-to-celebrate-the-hard-work-throughout-the-year-and-also-the-newlyweds-meric-and-meltem",
          title: 'We had our annual end of the year gathering to celebrate the hard...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-christmasparty/";
            },},{id: "news-isabelle-hwang-joined-our-vancouver-lab-as-a-co-op-student-welcome-isabelle",
          title: 'Isabelle Hwang joined our Vancouver lab as a co-op student! Welcome Isabelle!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-isabelle/";
            },},{id: "news-berkay-presented-at-vpc-terry-fox-seminar-series",
          title: 'Berkay presented at VPC Terry Fox Seminar Series!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-berkayterryfox/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-ivanaacr/";
            },},{id: "news-our-lab-is-awarded-the-tübi̇tak-1001-research-grant",
          title: 'Our lab is awarded the TÜBİTAK 1001 research grant!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-tubitak1001/";
            },},{id: "news-berkay-presented-at-vpc-terry-fox-seminar-series",
          title: 'Berkay presented at VPC Terry Fox Seminar Series!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-ivanterryfox/";
            },},{id: "news-happy-birthday-olka-and-nathan-we-celebrated-their-birthday-at-our-lab-favourite-restaurant-akbarjoojeh-19th",
          title: 'Happy birthday Olka and Nathan! We celebrated their birthday at our lab favourite...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-olkanathanbd/";
            },},{id: "news-brandon-graduated-congratulations-and-best-of-luck-in-your-future-endeavours-brandon",
          title: 'Brandon graduated! Congratulations and best of luck in your future endeavours Brandon!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-brandongrad/";
            },},{id: "news-olka-is-awarded-mitacs-accelerate-functionally-characterizing-enhancers-in-neuroendocrine-prostate-cancer",
          title: 'Olka is awarded Mitacs Accelerate Functionally Characterizing Enhancers in Neuroendocrine Prostate Cancer!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-olkamitacs/";
            },},{id: "news-happy-birthday-isabelle-and-berkay-we-celebrated-their-birthday-at-zab-zaab-thai-cuisine",
          title: 'Happy birthday Isabelle and Berkay! We celebrated their birthday at Zab Zaab Thai...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-isabelleberkaybd/";
            },},{id: "news-emir-presented-at-the-vpc-terry-fox-seminar-series",
          title: 'Emir presented at the VPC Terry Fox Seminar Series!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-emirterryfox/";
            },},{id: "news-meric-presented-at-the-vpc-terry-fox-seminar-series",
          title: 'Meric presented at the VPC Terry Fox Seminar Series!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-mericterryfox/";
            },},{id: "team-bengul",
          title: 'Bengul',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/bengul/";
            },},{id: "team-berkay",
          title: 'Berkay',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/berkay/";
            },},{id: "team-betul",
          title: 'Betul',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/betul/";
            },},{id: "team-brandon",
          title: 'Brandon',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/brandon/";
            },},{id: "team-ceren",
          title: 'Ceren',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/ceren/";
            },},{id: "team-daniel",
          title: 'Daniel',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/daniel/";
            },},{id: "team-derya",
          title: 'Derya',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/derya/";
            },},{id: "team-dogancan",
          title: 'Dogancan',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/dogancan/";
            },},{id: "team-elif",
          title: 'Elif',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/elif/";
            },},{id: "team-emir",
          title: 'Emir',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/emir/";
            },},{id: "team-fatma",
          title: 'Fatma',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/fatma/";
            },},{id: "team-firat",
          title: 'Firat',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/firat/";
            },},{id: "team-flora",
          title: 'Flora',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/flora/";
            },},{id: "team-gizemhazal",
          title: 'Gizemhazal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/gizemhazal/";
            },},{id: "team-hatice",
          title: 'Hatice',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/hatice/";
            },},{id: "team-hilal",
          title: 'Hilal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/hilal/";
            },},{id: "team-isabelle",
          title: 'Isabelle',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/isabelle/";
            },},{id: "team-ivan",
          title: 'Ivan',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/ivan/";
            },},{id: "team-james",
          title: 'James',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/james/";
            },},{id: "team-kenan",
          title: 'Kenan',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/kenan/";
            },},{id: "team-kerim",
          title: 'Kerim',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/kerim/";
            },},{id: "team-lynn",
          title: 'Lynn',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/lynn/";
            },},{id: "team-meric",
          title: 'Meric',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/meric/";
            },},{id: "team-nathan",
          title: 'Nathan',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/nathan/";
            },},{id: "team-olka",
          title: 'Olka',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/olka/";
            },},{id: "team-roselyn",
          title: 'Roselyn',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/roselyn/";
            },},{id: "team-shreyas",
          title: 'Shreyas',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/shreyas/";
            },},{id: "team-sila",
          title: 'Sila',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/sila/";
            },},{id: "team-tunc",
          title: 'Tunc',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/tunc/";
            },},{id: "team-ugur",
          title: 'Ugur',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/ugur/";
            },},{id: "team-zeynep",
          title: 'Zeynep',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/zeynep/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://lacklab.bsky.social", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lacklab", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/lacklaboratory", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/lack_lab", "_blank");
        },
      },];
