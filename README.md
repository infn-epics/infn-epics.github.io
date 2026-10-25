# INFN EPICS organization website

Public site for the [INFN EPICS GitHub organization](https://github.com/infn-epics),
published at [infn-epics.github.io](https://infn-epics.github.io/).

It introduces the INFN-A EPICS controls network, the EPIK8S architecture, selected
public repositories, the facilities discussed in the 2026 JINST paper, and the
connection to ARGUS Knowledge Hub. It also gathers courses, presentations, and
documentation for the EPICS network. The site is static and bilingual (English and
Italian). The home page is in `index.html`, `script.js`, and `styles.css`.
`epik8s/` contains the bilingual quick start, architecture, and manual. The
downloadable `epik8s/examples/demo-values.yaml` was checked with `helm template`
against the current `epik8s-chart`; it is a non-deployable example with a
documentation-only device address.

Sources for the technical descriptions:

- [INFN-A EPICS controls network](https://acceleratori.infn.it/rete-controlli-epics/)
- [INFN EPICS repositories](https://github.com/orgs/infn-epics/repositories)
- [EPIK8S paper](https://doi.org/10.1088/1748-0221/21/04/P04010)
- [ARGUS EPIK8s import and IOC engineer manuals](https://infn-argus.github.io/argus-knowledge-hub/en/manuals/)
- [EPIK8S project page and presentation files](https://confluence.infn.it/spaces/LDCG/pages/250085378/EPIK8S)
- [EPICS official documentation](https://docs.epics-controls.org/en/latest/)
- [EPIK8S at the 2024 INFN Computing Workshop](https://agenda.infn.it/event/40160/contributions/230228/)
- [EPIK8S at the 2025 EPICS Collaboration Meeting](https://indico.stfc.ac.uk/event/1233/contributions/8395/)
- [EPIK8S and ARGUS at the 2026 CSN5 Computing Conference](https://agenda.infn.it/event/52618/contributions/302965/)

Visual marks: `assets/rete-epics.png` is the network emblem supplied by the
site maintainer. `assets/epics-official.svg` is the official EPICS logo from
[epics-controls.org](https://epics-controls.org/wp-content/uploads/2018/07/EPICS_black_blue_logo_rgb_crop_web_v03.svg).
`assets/epik8s-hang-transparent.png` is a preliminary EPIK8S mark from the
[INFN Confluence project page](https://confluence.infn.it/spaces/LDCG/pages/250085378/EPIK8S).

Site source is Apache-2.0, matching the main `infn-epics-ioc` repository.
