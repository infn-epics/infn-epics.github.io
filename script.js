const copy = {
  en: {
    skip:'Skip to content',navMission:'Mission',navRepos:'Repositories',navFacilities:'Facilities',navResearch:'Research',navResources:'Resources',
    heroEyebrow:'INFN-A CONTROLS NETWORK · OPEN SOFTWARE',heroLine1:'Controls',heroLine2:'that connect.',
    heroLead:'From a device in the machine to a view in the control room: reusable EPICS software and EPIK8S make accelerator systems easier to build, deploy and share.',
    exploreEpik8s:'Explore EPIK8S',viewCode:'Explore the code',heroNote:'An open software space connected to the INFN-A EPICS controls network.',
    heroFoot:'Software, shared practice and operational context for accelerator facilities.',identityLabel:'FROM EPICS TO EPIK8S',
    sectionMission:'THE NETWORK',missionTitle:'Shared controls knowledge moves everyone forward.',
    missionLead:'The INFN-A EPICS controls network promotes common guidelines, reusable code and the exchange of experience across the INFN community.',
    missionBody:'This GitHub organization is a practical home for IOC images, support modules, operator interfaces, EPIK8S charts and related software. It connects engineering work in facilities with tools that other teams can inspect and adapt.',
    networkLink:'Meet the INFN-A EPICS network',
    councilQuote:'The primary responsibility of this group, as outlined in the “Epics Council” document, is to provide and disseminate guidelines and best practices to the broader INFN community. This extends beyond sharing code and hardware catalogs; it also includes sharing experiences to prevent the duplication of efforts and ensure efficient resource utilization.',
    councilCredit:'EPICS Council · INFN-A controls network',
    contributorsLabel:'CONTRIBUTIONS ACROSS INFN',contributorsTitle:'A network built by its laboratories.',lnfTitle:'Laboratori Nazionali di Frascati',lnfBody:'At LNF, the transition to EPICS through EPIK8S brings containerized IOCs and shared services to accelerator facilities including SPARC_LAB and DAFNE BTF.',lnfLink:'Read about the EPIK8S transition',lnlTitle:'Laboratori Nazionali di Legnaro',lnlBody:'LNL contributes EPICS control engineering, IOC development and experience from accelerator systems including SPES.',lnlLink:'Explore EPICS@LNL',lasaTitle:'LASA and STAR controls',lasaBody:'The INFN Milano/LASA contribution brings the experience of the EPICS-based control system for the STAR light source into the network.',lasaLink:'Read about STAR controls',
    diamondLabel:'INTERNATIONAL COLLABORATION',diamondTitle:'INFN × Diamond Light Source',diamondBody:'EPIK8S builds on the epics-containers framework developed at Diamond Light Source. Collaboration around containerized IOCs and IBEK connects the INFN implementation with a wider EPICS community.',diamondDocs:'Explore epics-containers',diamondTalk:'EPIK8S at the EPICS meeting',
    stackTitle:'Describe once. Deploy with confidence.',stackLead:'EPIK8S uses a declarative beamline configuration and GitOps workflow to bring EPICS IOCs and supporting services into Kubernetes.',quickStartCta:'Quick start',architectureCta:'Architecture & manuals',
    flowConfig:'Beamline YAML',flowConfigBody:'Devices, IOCs and services',flowTemplatesBody:'Templates and charts',flowGitopsBody:'GitOps synchronization',flowRuntimeBody:'IOCs and services',flowRoom:'Control room',flowRoomBody:'Operational interfaces',flowNote:'Conceptual overview of the architecture described in the EPIK8S paper.',
    stackReason1:'REPRODUCIBLE',stackH1:'Configuration in Git',stackP1:'Beamline changes can be reviewed, traced and applied from declared configuration.',
    stackReason2:'REUSABLE',stackH2:'Shared IOC building blocks',stackP2:'Container images, support definitions and charts help teams reuse tested patterns.',
    stackReason3:'OPERABLE',stackH3:'A consistent runtime',stackP3:'Kubernetes and ArgoCD provide a common route from configuration to running services.',
    sectionRepos:'THE CODE',repoTitle:'A working library for accelerator controls.',repoLead:'Start with the main IOC image, then explore deployment, support and operator interface repositories.',allRepos:'All repositories',
    repoKindMain:'MAIN IOC IMAGE',repoMainBody:'The generic containerized IOC image with INFN support modules and IBEK templates.',
    repoChartBody:'Helm chart for the EPICS stack and beamline deployments managed through ArgoCD.',repoKindPlatform:'PLATFORM',repoPlatformBody:'Services and setup for the Kubernetes platform behind EPIK8S beamlines.',
    repoSupportBody:'INFN support modules used to assemble device specific IOC configurations.',repoTemplatesBody:'Shared templates for IBEK support definitions and IOC generation.',repoOpiBody:'Reusable operator interfaces and scripts for device groups in the control room.',
    sectionFacilities:'IN OPERATION',facilityTitle:'Designed with real facilities, across borders.',facilityBody:'The EPIK8S paper reports operational experience from three facilities: the SPARC_LAB photoinjector and the DAFNE Beam Test Facility at INFN-LNF, and the ELI-NP gamma beam system in Romania.',readPaper:'Read the paper',facilitySparc:'Photoinjector',facilityBtf:'Beam Test Facility',facilityEli:'Gamma beam system',
    sectionResearch:'THE RESEARCH',paperTitle:'The architecture behind EPIK8S.',openPublication:'Open publication',downloadPaper:'PDF at publisher',
    sectionResources:'LEARNING RESOURCES',resourcesTitle:'Learn, present, document. Share the next step.',resourcesLead:'A starting library for the INFN EPICS community, combining completed training with presentations and source documentation.',
    coursesLabel:'COURSES',courseDescription:'Inter-structure course · 20–24 October 2025',completed:'Completed',
    presentationsLabel:'PRESENTATIONS',presentationsTitle:'EPIK8S presentations',presentationsBody:'Training and workshop material from the LNF DA Control Group.',trainingSlides:'EPIK8S training slides',workshopSlides:'CCR 2024 workshop',
    conferenceTalksLabel:'CONFERENCE PRESENTATIONS',conferenceTalksTitle:'EPIK8S in the community',conferenceTalksLead:'Talks tracing the project from control as a service to connected operational knowledge.',
    talk2024Event:'INFN Computing Workshop · Palau · 23 May 2024',talk2025Event:'EPICS Collaboration Meeting · ISIS, UK · 9 April 2025',talk2026Event:'INFN National Computing Conference, CSN5 · 21 October 2026',
    docsLabel:'DOCUMENTATION',docsTitle:'Build on the sources',docsBody:'Official EPICS documentation, the new EPIK8S guide and the main INFN IOC repository.',epicsDocs:'EPICS documentation',epik8sDocs:'EPIK8S guide',iocDocs:'INFN IOC repository',
    sectionArgus:'A CONNECTED ECOSYSTEM',argusTitle:'From live controls to lasting knowledge.',
    argusBody:'EPIK8S deploys and operates EPICS controls. ARGUS Knowledge Hub connects the equipment, configuration, incidents, activities and documents around those systems for accelerator control room teams.',
    argusImport:'ARGUS can import EPIK8s beamline configuration and help IOC engineers inspect templates, draft entries and check them before deployment.',discoverArgus:'Discover ARGUS',iocGuide:'IOC engineer guide',
    sectionConnect:'CONNECT',closingTitle:'Build once. Share what works.',closingBody:'Explore the repositories, meet the INFN-A EPICS network and use the research as a starting point for your next control system.',closingGithub:'Browse GitHub organization',closingNetwork:'INFN-A controls network',closingArgus:'ARGUS ecosystem',
    footerTag:'Open controls software and shared practice for accelerator facilities.',footerInstitution:'Connected with the INFN-A EPICS controls network',
    title:'INFN EPICS — Controls that connect',description:'INFN EPICS: an open ecosystem for accelerator control systems, containerized IOCs, EPIK8S and shared operational knowledge.'
  },
  it: {
    skip:'Vai al contenuto',navMission:'Missione',navRepos:'Repository',navFacilities:'Infrastrutture',navResearch:'Ricerca',navResources:'Risorse',
    heroEyebrow:'RETE CONTROLLI INFN-A · SOFTWARE APERTO',heroLine1:'Controlli',heroLine2:'che connettono.',
    heroLead:'Dal dispositivo nella macchina alla vista in sala controllo: software EPICS riusabile ed EPIK8S rendono i sistemi per acceleratori più semplici da costruire, distribuire e condividere.',
    exploreEpik8s:'Scopri EPIK8S',viewCode:'Esplora il codice',heroNote:'Uno spazio software aperto collegato alla Rete Controlli EPICS di INFN-A.',
    heroFoot:'Software, pratiche condivise e contesto operativo per le infrastrutture acceleratrici.',identityLabel:'DA EPICS A EPIK8S',
    sectionMission:'LA RETE',missionTitle:'Condividere la conoscenza sui controlli fa avanzare tutti.',
    missionLead:'La Rete Controlli EPICS di INFN-A promuove linee guida comuni, codice riusabile e scambio di esperienze nella comunità INFN.',
    missionBody:'Questa organizzazione GitHub raccoglie immagini IOC, moduli di supporto, interfacce operative, chart EPIK8S e software collegato. Mette in relazione il lavoro nelle infrastrutture con strumenti che altri gruppi possono studiare e adattare.',
    networkLink:'Scopri la Rete Controlli EPICS di INFN-A',
    councilQuote:'La responsabilità principale di questo gruppo, come delineato nel documento “Epics Council”, è fornire e diffondere linee guida e buone pratiche alla comunità INFN. Oltre alla condivisione di codice e cataloghi hardware, questo comprende lo scambio di esperienze per evitare duplicazioni e usare le risorse in modo efficiente.',
    councilCredit:'EPICS Council · Rete Controlli INFN-A',
    contributorsLabel:'I CONTRIBUTI INFN',contributorsTitle:'Una rete costruita dai laboratori.',lnfTitle:'Laboratori Nazionali di Frascati',lnfBody:'A LNF il passaggio a EPICS tramite EPIK8S porta IOC containerizzati e servizi condivisi nelle infrastrutture acceleratrici, fra cui SPARC_LAB e DAFNE BTF.',lnfLink:'Leggi del passaggio a EPIK8S',lnlTitle:'Laboratori Nazionali di Legnaro',lnlBody:'LNL contribuisce con competenze nei controlli EPICS, nello sviluppo di IOC e con l’esperienza sui sistemi degli acceleratori, fra cui SPES.',lnlLink:'Esplora EPICS@LNL',lasaTitle:'LASA e controlli di STAR',lasaBody:'Il contributo di INFN Milano/LASA porta nella rete l’esperienza del sistema di controllo basato su EPICS della sorgente di luce STAR.',lasaLink:'Leggi dei controlli STAR',
    diamondLabel:'COLLABORAZIONE INTERNAZIONALE',diamondTitle:'INFN × Diamond Light Source',diamondBody:'EPIK8S si basa sul framework epics-containers sviluppato a Diamond Light Source. La collaborazione sugli IOC containerizzati e su IBEK collega l’implementazione INFN alla più ampia comunità EPICS.',diamondDocs:'Esplora epics-containers',diamondTalk:'EPIK8S all’incontro EPICS',
    stackTitle:'Descrivi una volta. Distribuisci con fiducia.',stackLead:'EPIK8S usa una configurazione dichiarativa della beamline e un flusso GitOps per distribuire IOC EPICS e servizi di supporto su Kubernetes.',quickStartCta:'Guida rapida',architectureCta:'Architettura e manuali',
    flowConfig:'YAML della beamline',flowConfigBody:'Dispositivi, IOC e servizi',flowTemplatesBody:'Template e chart',flowGitopsBody:'Sincronizzazione GitOps',flowRuntimeBody:'IOC e servizi',flowRoom:'Sala controllo',flowRoomBody:'Interfacce operative',flowNote:'Schema concettuale dell’architettura descritta nell’articolo su EPIK8S.',
    stackReason1:'RIPRODUCIBILE',stackH1:'Configurazione in Git',stackP1:'Le modifiche alla beamline possono essere verificate, tracciate e applicate dalla configurazione dichiarata.',
    stackReason2:'RIUSABILE',stackH2:'Componenti IOC condivisi',stackP2:'Immagini container, definizioni di supporto e chart aiutano a riusare soluzioni collaudate.',
    stackReason3:'GESTIBILE',stackH3:'Un runtime coerente',stackP3:'Kubernetes e ArgoCD offrono un percorso comune dalla configurazione ai servizi attivi.',
    sectionRepos:'IL CODICE',repoTitle:'Una libreria operativa per i controlli degli acceleratori.',repoLead:'Parti dall’immagine IOC principale, poi esplora i repository per deployment, supporto e interfacce operative.',allRepos:'Tutti i repository',
    repoKindMain:'IMMAGINE IOC PRINCIPALE',repoMainBody:'L’immagine IOC generica containerizzata con moduli di supporto INFN e template IBEK.',
    repoChartBody:'Chart Helm per lo stack EPICS e i deployment di beamline gestiti con ArgoCD.',repoKindPlatform:'PIATTAFORMA',repoPlatformBody:'Servizi e configurazione della piattaforma Kubernetes per le beamline EPIK8S.',
    repoSupportBody:'Moduli di supporto INFN per costruire configurazioni IOC specifiche dei dispositivi.',repoTemplatesBody:'Template condivisi per le definizioni di supporto IBEK e la generazione degli IOC.',repoOpiBody:'Interfacce operative e script riusabili per gruppi di dispositivi in sala controllo.',
    sectionFacilities:'IN ESERCIZIO',facilityTitle:'Nato con infrastrutture reali, anche oltre confine.',facilityBody:'L’articolo su EPIK8S riporta l’esperienza operativa in tre infrastrutture: il fotoiniettore SPARC_LAB e la DAFNE Beam Test Facility ai Laboratori Nazionali di Frascati, e il sistema gamma di ELI-NP in Romania.',readPaper:'Leggi l’articolo',facilitySparc:'Fotoiniettore',facilityBtf:'Beam Test Facility',facilityEli:'Sistema di fasci gamma',
    sectionResearch:'LA RICERCA',paperTitle:'L’architettura alla base di EPIK8S.',openPublication:'Apri la pubblicazione',downloadPaper:'PDF dell’editore',
    sectionResources:'RISORSE FORMATIVE',resourcesTitle:'Imparare, presentare, documentare. Condividere il prossimo passo.',resourcesLead:'Una raccolta iniziale per la comunità INFN EPICS, con formazione svolta, presentazioni e documentazione di riferimento.',
    coursesLabel:'CORSI',courseDescription:'Corso inter-struttura · 20–24 ottobre 2025',completed:'Svolto',
    presentationsLabel:'PRESENTAZIONI',presentationsTitle:'Presentazioni EPIK8S',presentationsBody:'Materiale formativo e workshop del gruppo Controlli della DA di LNF.',trainingSlides:'Slide della formazione EPIK8S',workshopSlides:'Workshop CCR 2024',
    conferenceTalksLabel:'PRESENTAZIONI A CONFERENZE',conferenceTalksTitle:'EPIK8S nella comunità',conferenceTalksLead:'Interventi che raccontano il progetto, dal controllo come servizio alla conoscenza operativa connessa.',
    talk2024Event:'Workshop sul Calcolo nell’INFN · Palau · 23 maggio 2024',talk2025Event:'EPICS Collaboration Meeting · ISIS, Regno Unito · 9 aprile 2025',talk2026Event:'Conferenza Nazionale sul Calcolo nella CSN5 · 21 ottobre 2026',
    docsLabel:'DOCUMENTAZIONE',docsTitle:'Parti dalle fonti',docsBody:'Documentazione ufficiale EPICS, nuova guida EPIK8S e repository principale degli IOC INFN.',epicsDocs:'Documentazione EPICS',epik8sDocs:'Guida EPIK8S',iocDocs:'Repository IOC INFN',
    sectionArgus:'UN ECOSISTEMA CONNESSO',argusTitle:'Dai controlli in funzione alla conoscenza che resta.',
    argusBody:'EPIK8S distribuisce e gestisce i controlli EPICS. ARGUS Knowledge Hub collega apparati, configurazioni, problemi, attività e documenti che li riguardano per i gruppi delle sale controllo degli acceleratori.',
    argusImport:'ARGUS può importare la configurazione delle beamline EPIK8s e aiutare gli ingegneri IOC a consultare i template, preparare le voci e verificarle prima del deployment.',discoverArgus:'Scopri ARGUS',iocGuide:'Guida per ingegneri IOC',
    sectionConnect:'CONTATTI E RISORSE',closingTitle:'Costruisci una volta. Condividi ciò che funziona.',closingBody:'Esplora i repository, conosci la Rete Controlli EPICS di INFN-A e usa la ricerca come punto di partenza per il prossimo sistema di controllo.',closingGithub:'Esplora l’organizzazione GitHub',closingNetwork:'Rete Controlli INFN-A',closingArgus:'Ecosistema ARGUS',
    footerTag:'Software aperto e pratiche condivise per i controlli degli acceleratori.',footerInstitution:'Collegato alla Rete Controlli EPICS di INFN-A',
    title:'INFN EPICS — Controlli che connettono',description:'INFN EPICS: un ecosistema aperto per i controlli degli acceleratori, IOC containerizzati, EPIK8S e conoscenza operativa condivisa.'
  }
};

function setLanguage(value) {
  const lang = value === 'it' ? 'it' : 'en';
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t[node.dataset.i18n] || node.textContent; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.querySelectorAll('[data-external]').forEach(link => {
    const dest = {
      argusHub: `https://infn-argus.github.io/argus-knowledge-hub/${lang}/`,
      iocGuide: `https://infn-argus.github.io/argus-knowledge-hub/${lang}/manuals/ioc-engineer/`,
      argusRoot: `https://infn-argus.github.io/?lang=${lang}`
    };
    link.href = dest[link.dataset.external];
  });
  document.querySelectorAll('[data-epik8s-docs]').forEach(link => {
    const anchor = link.dataset.epik8sDocs;
    link.href = `./epik8s/?lang=${lang}${anchor ? '#' + anchor : ''}`;
  });
  document.querySelector('.menu-toggle').setAttribute('aria-label', lang === 'it' ? 'Apri menu' : 'Open menu');
  try { localStorage.setItem('infn-epics-site-language', lang); } catch (_) {}
  const url = new URL(location.href); url.searchParams.set('lang', lang);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const menu = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); mobile.hidden = !open; });
mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobile.hidden = true; menu.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
let saved; try { saved = localStorage.getItem('infn-epics-site-language'); } catch (_) {}
const chosen = new URL(location.href).searchParams.get('lang') || saved || ((navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en');
setLanguage(chosen);
