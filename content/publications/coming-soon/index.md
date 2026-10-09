---
title: "Factorized basis modulation network: A flexible and efficient basis-utilization framework for solving multiscale PDEs"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Zihao Li
  - Wenbo Shen

# Author notes (optional)
# author_notes:
#   - ""

date: 2027-01-01

# Schedule page publish date (NOT publication date).
publishDate: 2026-10-09

# Publication type from the CSL standard.
# Accepts a single type but formatted as a YAML list (Hugo requirement).
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Neurocomputing*, 709, 135308"
publication_short: "*Neurocomputing*"

abstract: |
  Multiscale partial differential equations (PDEs) arise widely in scientific computing and engineering applications. However, accurately approximating their solutions remains challenging for standard physics-informed neural networks (PINNs), since multiscale solutions often contain coupled localized structures and rapidly varying components. In this paper, we propose the Factorized Basis Modulation Network (FBMN), a flexible and efficient basis-utilization framework for solving multiscale PDEs. This framework improves the representation of multiscale solutions by embedding basis functions into neural feature representations through factorized basis modulation. Specifically, basis functions are organized into compact basis units and coupled by chained linear mappings and pointwise modulation, allowing localized and rapidly varying components to be captured efficiently without explicit multivariate basis enumeration. Furthermore, the modular nature of factorized basis modulation enables FBMN to exploit the complementary strengths of different basis families. When multiscale solutions require diverse representations, distinct basis types can be incorporated as separate branches and fused within a shared feature space to leverage their specific structural priors, such as oscillatory features from trigonometric bases and localized structures from radial basis functions. Numerical experiments on various multiscale PDEs demonstrate the effectiveness of FBMN, showing that it achieves high approximation accuracy and favorable convergence behavior.

# Summary. An optional shortened abstract.
summary: "A flexible and efficient basis-utilization framework for solving multiscale partial differential equations."

# tags:
#   - Research
#   - Data

# Display this page in the Featured widget?
# featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: "10.1016/j.neucom.2026.135308"

# Custom links
links:
  - type: source
    url: "https://doi.org/10.1016/j.neucom.2026.135308"
#   - type: code
#     url: ""
#   - type: dataset
#     url: ""
#   - type: poster
#     url: ""
#   - type: project
#     url: ""
#   - type: slides
#     url: ""
#   - type: source
#     url: ""
#   - type: video
#     url: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project folder name without extension.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck folder name without extension.
# slides: ""

draft: false
---

**Status:** Accepted in *Neurocomputing*. Assigned to Volume 709 (January 2027), Article 135308.

**Authors:** Yang Xu, Zihao Li, and Wenbo Shen.

**DOI:** [10.1016/j.neucom.2026.135308](https://doi.org/10.1016/j.neucom.2026.135308)

## Citation

Xu, Y., Li, Z., & Shen, W. (2027). Factorized basis modulation network: A flexible and efficient basis-utilization framework for solving multiscale PDEs. *Neurocomputing, 709*, 135308. https://doi.org/10.1016/j.neucom.2026.135308
