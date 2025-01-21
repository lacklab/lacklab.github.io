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
            },},{id: "team-ceren",
          title: 'Ceren',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/team/ceren/";
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
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
