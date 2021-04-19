# Telia test case

## GitHub Pages
https://energizer91.github.io/telia-test/

Keep in mind that this link will not play videos. Your CDN returns CONNECTION_REFUSED when trying to play them through HTTPS in Chrome.
In order to play them you can clone the repo, install and run.

## Docs
https://energizer91.github.io/telia-test/docs

```bash
yarn
yarn doc
```

## Installation
```bash
yarn
yarn start
```

## Other notes
You haven't provided responsive и style for mobile devices, so I've just rendered them in on one column.
Yes, I know, we can move description thumbnail one level up and decrease number of html elements, but I think it's a bit over engineering for no reasons.
Also I decided to use just one CSS file since we don't have many styles, and I don't want to use some third party style libraries.
