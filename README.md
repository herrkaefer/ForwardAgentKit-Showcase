# ForwardAgentKit showcase

Public presentation of the closed-source ForwardAgentKit SDK and two apps built with it: Linberry and Violet.

Website: https://herrkaefer.github.io/ForwardAgentKit-Showcase/

The SDK implementation is maintained separately in a private repository. This repository contains only the static website and public assets.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1 --directory site`.

## Deployment

GitHub Pages publishes only `site/` through the workflow in `.github/workflows/pages.yml`.

## Assets

App icons belong to their respective apps. Manrope is distributed under the SIL Open Font License; see `site/assets/Manrope-OFL.txt`.

Interactive examples are illustrations, not live API calls or captured app UI. Provider and model availability depends on configuration and account access.
