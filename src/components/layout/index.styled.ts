import styled, { createGlobalStyle } from "styled-components"
import { mediaMax, mediaMaxTablet } from "../../helpers/MediaQueries"

import TTNormsRegTTF from "../../assets/fonts/TTNorms-Regular.ttf"
import TTNormsRegWOFF from "../../assets/fonts/TTNorms-Regular.woff"
import TTNormsRegWOFF2 from "../../assets/fonts/TTNorms-Regular.woff2"
import TTNormsRegEOT from "../../assets/fonts/TTNorms-Regular.eot"
import TTNormsRegOTF from "../../assets/fonts/TTNorms-Regular.otf"

import TTNormsMedEOT from "../../assets/fonts/TTNorms-Medium.eot"
import TTNormsMedWOFF2 from "../../assets/fonts/TTNorms-Medium.woff2"
import TTNormsMedWOFF from "../../assets/fonts/TTNorms-Medium.woff"
import TTNormsMedTTF from "../../assets/fonts/TTNorms-Medium.ttf"

import TTNormsLightEOT from "../../assets/fonts/TTNorms-Light.eot"
import TTNormsLightWOFF2 from "../../assets/fonts/TTNorms-Light.woff2"
import TTNormsLightWOFF from "../../assets/fonts/TTNorms-Light.woff"
import TTNormsLightTTF from "../../assets/fonts/TTNorms-Light.ttf"

import TTNormsBoldEOT from "../../assets/fonts/TTNorms-Bold.eot"
import TTNormsBoldWOFF2 from "../../assets/fonts/TTNorms-Bold.woff2"
import TTNormsBoldWOFF from "../../assets/fonts/TTNorms-Bold.woff"
import TTNormsBoldTTF from "../../assets/fonts/TTNorms-Bold.ttf"

import TTNormsThinEOT from "../../assets/fonts/TTNorms-Thin.eot"
import TTNormsThinWOFF2 from "../../assets/fonts/TTNorms-Thin.woff2"
import TTNormsThinWOFF from "../../assets/fonts/TTNorms-Thin.woff"
import TTNormsThinTTF from "../../assets/fonts/TTNorms-Thin.ttf"


import ACaslonProRegularttf from "../../assets/fonts/ACaslonPro-Regular.ttf"
import ACaslonProRegularotf from "../../assets/fonts/ACaslonPro-Regular.otf"
import ACaslonProItalicttf from "../../assets/fonts/ACaslonPro-Italic.ttf"
import ACaslonProItalicotf from "../../assets/fonts/ACaslonPro-Italic.otf"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsBoldEOT});
    src: local('TT Norms Bold'), local('TTNorms-Bold'),
    url(${TTNormsBoldEOT}) format('embedded-opentype'),
    url(${TTNormsBoldWOFF2}) format('woff2'),
    url(${TTNormsBoldWOFF}) format('woff'),
    url(${TTNormsBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsThinEOT});
    src: local('TT Norms Thin'), local('TTNorms-Thin'),
    url(${TTNormsThinEOT}) format('embedded-opentype'),
    url(${TTNormsThinWOFF2}) format('woff2'),
    url(${TTNormsThinWOFF}) format('woff'),
    url(${TTNormsThinTTF}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsLightEOT});
    src: local('TT Norms Light'), local('TTNorms-Light'),
    url(${TTNormsLightEOT}) format('embedded-opentype'),
    url(${TTNormsLightWOFF2}) format('woff2'),
    url(${TTNormsLightWOFF}) format('woff'),
    url(${TTNormsLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsMedEOT});
    src: local('TT Norms Medium'), local('TTNorms-Medium'),
    url(${TTNormsMedEOT}) format('embedded-opentype'),
    url(${TTNormsMedWOFF2}) format('woff2'),
    url(${TTNormsMedWOFF}) format('woff'),
    url(${TTNormsMedTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT Norms';
    src: url(${TTNormsRegEOT});
    src: local('TT Norms Regular'), local('TTNorms-Regular'),
    url(${TTNormsRegOTF}) format('otf'),
    url(${TTNormsRegEOT}) format('embedded-opentype'),
    url(${TTNormsRegWOFF2}) format('woff2'),
    url(${TTNormsRegWOFF}) format('woff'),
    url(${TTNormsRegTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  
  @font-face {
    font-family: "Adobe-Caslon-Pro";
    font-style: normal;
    src: url(${ACaslonProRegularttf}) format('truetype');
    src: url(${ACaslonProRegularotf}) format('opentype');
  }
  @font-face {
    font-family: "Adobe-Caslon-Pro";
    font-style: italic;
    src: url(${ACaslonProItalicttf}) format('truetype');
    src: url(${ACaslonProItalicotf}) format('opentype');
  }

  body {
    margin: 0;
    background-color: var(--color-dark);
    color: var(--color-white);
  }
  
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  *::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  :root {
    /* Colors: */
    --color-dark: #151515;
    --color-darken: #292929;
    --color-white: #FFFFFF;
  }
  .caption_1 {
    font-family: "TT-Norms", serif;
    font-weight: 500;
  }
  .caption_2 {
    font-family: "TT-Norms", serif;
    font-weight: 300;
  }



article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

progress {
  vertical-align: baseline;
}

[hidden],
template {
  display: none;
}

a {
  text-decoration: none;
  background-color: transparent;
}

a:active,
a:hover {
  outline-width: 0;
}

b,
strong {
  font-weight: inherit;
}


img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}

optgroup {
  font-weight: 700;
}

button,
select {
  text-transform: none;
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
  color: var(--color-white);
}

*:before {
  box-sizing: inherit;
}

*:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
  padding: 0;
  margin: 0;
}

h1 {
  padding: 0;
  margin: 0;
}

h2 {
  padding: 0;
  margin: 0;
}

h3 {
  padding: 0;
  margin: 0;
}

h4 {
  padding: 0;
  margin: 0;
}

h5 {
  padding: 0;
  margin: 0;
}

h6 {
  padding: 0;
  margin: 0;
}

hgroup {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-position: outside;
  list-style-image: none;
}

ol {
  padding: 0;
  margin: 0;
  list-style-position: outside;
  list-style-image: none;
}

dl {
  padding: 0;
  margin: 0;
}

dd {
  padding: 0;
  margin: 0;
}

p {
  padding: 0;
  margin: 0;
}

figure {
  padding: 0;
  margin: 0;
}

pre {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
}

fieldset {
  padding: 0;
  margin: 0;
}

blockquote {
  padding: 0;
  margin: 0;
}

form {
  padding: 0;
  margin: 0;
}

noscript {
  padding: 0;
  margin: 0;
}

iframe {
  padding: 0;
  margin: 0;
}

hr {
  padding: 0;
  margin: 0 0 calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}

b {
  font-weight: bold;
}

strong {
  font-weight: bold;
}

li {
  margin-bottom: calc(1.45rem / 2);
}

ol li {
  padding-left: 0;
}

ul li {
  padding-left: 0;
}
.pb-10 {
  padding-bottom: 1.25vh;
}
.pb-20 {
  padding-bottom: 2.5vh;
}
.pb-40 {
  padding-bottom: 5vh;
}
.pb-60 {
  padding-bottom: 7.5vh;
}
.pb-80 {
  padding-bottom: 10vh;
}
.h1 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 71px;
  font-feature-settings: 'liga' off;
}
.h1i {
  font-family: 'Adobe Caslon Pro', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 72px;
  line-height: 86px;
  display: flex;
}
.h2 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 57px;
}
.h2i {
  font-family: 'Adobe Caslon Pro', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
}
.h3 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
}
.h3i {
  font-family: 'Adobe Caslon Pro', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
}
.h4 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}
.copy_t1 {
  font-family: 'Adobe Caslon Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}
.copy_t2 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
}
.caption_t1 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
}
.caption_t2 {
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.relative {
  position: relative;
}
.panel {
  will-change: transform;
  width: 100%;
  height: 100%;
}
.topContrast {
  position: absolute;
  width: 100%;
  height: 50vh;
  left: 0;
  top: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(196, 196, 196, 0) 100%);
  mix-blend-mode: multiply;
}
`;

export const LayoutWrapper = styled.div`
`;
