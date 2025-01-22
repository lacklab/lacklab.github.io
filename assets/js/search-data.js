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
        },{id: "news-anıl-kaplan-joined-churchill-lab-for-a-six-month-intership",
          title: 'Anıl Kaplan joined Churchill Lab for a six month intership',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-09-anilox/";
            },},{id: "news-we-had-the-opportunity-to-present-at-the-3rd-intl-congress-of-the-mol-bio-association-of-turkey",
          title: 'We had the opportunity to present at the 3rd Intl. Congress of the...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-09-izmir/";
            },},{id: "news-hilal-saraç-attended-eacr-cancer-genomics-conference-with-a-travel-award",
          title: 'Hilal Saraç attended EACR Cancer Genomics conference with a travel award.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-06-hilaleacr/";
            },},{id: "news-uğur-gatfar-msc-graduated",
          title: 'Uğur Gatfar (MSc) graduated',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-08-ugurmsc/";
            },},{id: "news-nathan-passed-his-docentlik-associate-professorship-exam",
          title: 'Nathan passed his Docentlik/Associate Professorship exam!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-09-docent/";
            },},{id: "news-hilal-saraç-attended-university-of-oxford-for-six-months-as-a-guest-researcher",
          title: 'Hilal Saraç attended University of Oxford for six months as a guest researcher...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-04-hilaloxford/";
            },},{id: "news-the-lack-lab-observing-a-radical-prostatectomy-at-koç-university-hospital",
          title: 'The Lack Lab observing a radical prostatectomy at Koç University Hospital',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-05-rp/";
            },},{id: "news-zeynep-kaya-msc-graduated",
          title: 'Zeynep Kaya (MSc) graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-06-zeynepmsc/";
            },},{id: "news-nathan-was-awarded-the-tuba-gebip-award-as-one-of-the-top-young-scientists-in-turkey",
          title: 'Nathan was awarded the TUBA-GEBIP award as one of the top young scientists...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-02-tubagebip/";
            },},{id: "news-lack-lab-2017",
          title: 'Lack Lab 2017!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-03-groupphoto/";
            },},{id: "news-the-lack-lab-dinner",
          title: 'The Lack Lab dinner',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-04-dinner/";
            },},{id: "news-the-lack-lab-lynn-valley-trip",
          title: 'The Lack Lab Lynn Valley trip',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-08-valley/";
            },},{id: "news-hilal-saraç-phd-graduated",
          title: 'Hilal Saraç (PhD) graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-09-hilalphd/";
            },},{id: "news-fatma-özgün-phd-graduated",
          title: 'Fatma Özgün (PhD) graduated!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-09-fatmaphd/";
            },},{id: "news-the-lack-lab-at-brunch-missing-one-person-though",
          title: 'The Lack Lab at brunch -- missing one person though',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-09-brunch/";
            },},{id: "news-nathan-won-the-early-career-poster-award-at-the-2019-pacrim-meeting",
          title: 'Nathan won the Early Career Poster Award at the 2019 PacRim meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-pacrim/";
            },},{id: "news-we-organized-the-chemical-epigenetics-minisymposium-with-tugba-amp-tamer-onder-labs",
          title: 'We organized the Chemical Epigenetics Minisymposium with Tugba &amp;amp; Tamer Onder labs.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-minisymposium/";
            },},{id: "news-doğancan-attended-the-aacr-annual-meeting-with-a-global-scholar-in-training-scholarship",
          title: 'Doğancan attended the AACR Annual Meeting with a Global Scholar-In-Training Scholarship!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-aacrdogancan/";
            },},{id: "news-we-went-out-to-deep-cove-for-kayaking",
          title: 'We went out to Deep Cove for kayaking!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-08-deepcove/";
            },},{id: "news-going-away-lunch-for-erinç-barçın-and-mukadder-ezel-yılmaz",
          title: 'Going away lunch for Erinç Barçın and Mukadder Ezel Yılmaz',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-08-lunch/";
            },},{id: "news-shreyas-was-awarded-the-pcfbc-39-s-grant-in-aid-award",
          title: 'Shreyas was awarded the PCFBC&amp;#39;s Grant-in-Aid award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-09-shreyasgia/";
            },},{id: "news-first-post-covid-in-person-lab-meeting-in-istanbul",
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
            },},{id: "news-congratulations-to-ivan-for-his-beautiful-talk-at-the-vpc-terry-fox-seminar-series",
          title: 'Congratulations to Ivan for his beautiful talk at the VPC/Terry Fox Seminar Series....',
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
            },},{id: "news-congratulations-to-emir-for-earning-the-2nd-best-presentation-award-in-the-kuttam-grc",
          title: 'Congratulations to Emir for earning the 2nd Best Presentation Award in the KUTTAM...',
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
            },},{id: "news-congratulations-to-rosie-and-james-on-completing-their-co-op-and-starting-their-internships",
          title: 'Congratulations to Rosie and James on completing their Co-Op and starting their internships!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-coopendjr/";
            },},{id: "news-emir-visited-his-wet-lab-colleagues-in-vancouver",
          title: 'Emir visited his wet lab colleagues in Vancouver!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-emirvan/";
            },},{id: "news-happy-birthday-to-rosie-flora-emir-and-meric-we-had-a-wonderful-hotpot-dinner-together-in-happy-lamb",
          title: 'Happy Birthday to Rosie, Flora, Emir, and Meric! We had a wonderful hotpot...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-groupbd/";
            },},{id: "news-happy-birthday-flora-dinner-celebration-at-homura-yakiniku-japanese-bbq",
          title: 'Happy Birthday, Flora! Dinner celebration at Homura Yakiniku, Japanese BBQ.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-florabd/";
            },},{id: "news-happy-birthday-ivan-celebrated-with-a-dinner-at-sun-bo-kong-a-vegetarian-chinese-restaurant",
          title: 'Happy Birthday, Ivan! Celebrated with a dinner at Sun Bo Kong, a vegetarian...',
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
            },},{id: "news-lack-lab-warmly-welcomes-mayuko-and-daniel-with-a-dinner-at-akbar-joojeh-persian-restaurant",
          title: 'Lack Lab warmly welcomes Mayuko and Daniel with a dinner at Akbar Joojeh...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-dinner/";
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
            },},{id: "team-hilal",
          title: 'Hilal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/hilal/";
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
            },},{id: "team-kerim",
          title: 'Kerim',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/kerim/";
            },},{id: "team-luisa",
          title: 'Luisa',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/luisa/";
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
