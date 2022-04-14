import styled, { createGlobalStyle } from "styled-components"
import { mediaMax, mediaMaxTablet } from "../../helpers/MediaQueries"

import TTNormsRegularotf from "../../assets/fonts/TTNorms-Regular.otf"
import TTNormsRegularwoff from "../../assets/fonts/TTNorms-Regular.woff"
import TTNormsRegularwoff2 from "../../assets/fonts/TTNorms-Regular.woff2"

import TTNormsLightwoff from "../../assets/fonts/TTNorms-Light.woff"
import TTNormsLightwoff2 from "../../assets/fonts/TTNorms-Light.woff2"

import TTNormsThinwoff from "../../assets/fonts/TTNorms-Thin.woff"
import TTNormsThinwoff2 from "../../assets/fonts/TTNorms-Thin.woff2"

import ACaslonProRegularttf from "../../assets/fonts/ACaslonPro-Regular.ttf"
import ACaslonProRegularotf from "../../assets/fonts/ACaslonPro-Regular.otf"
import ACaslonProItalicttf from "../../assets/fonts/ACaslonPro-Italic.ttf"
import ACaslonProItalicotf from "../../assets/fonts/ACaslonPro-Italic.otf"

export const GlobalStyle = createGlobalStyle`

    @font-face {
  font-family: "TT-Norms-Pro";
  src: url(${TTNormsRegularwoff}) format('woff'),
       url(${TTNormsRegularwoff2}) format('woff2'),
       url(${TTNormsRegularotf}) format('otf'),
  }
  
  @font-face {
    font-family: "TT-Norms-Light";
    src: url(${TTNormsLightwoff}) format('woff');
    src: url(${TTNormsLightwoff2}) format('woff2');
  }
  
  @font-face {
    font-family: "TT-Norms-Thin";
    src: url(${TTNormsThinwoff}) format('woff');
    src: url(${TTNormsThinwoff2}) format('woff2');
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
    //background: #292929;
    background: ${(props: { lightTheme: boolean }) =>
      props.lightTheme ? "#fff" : "#292929"};
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
`
export const HeaderLogo = styled.div`
  position: fixed;
  top: 37px;
  left: 28px;
  width: 99px;
  z-index: 3;
  cursor: pointer;
  opacity: 0;
  ${mediaMax.tablet`
    top: 32px;
    display: none;
  `}
  ${mediaMaxTablet.tabletLandscape`
    top: 32px;
  `}
  ${mediaMax.phoneLarge`
    width: 64px;
  `}
  img {
    width: 100%;
  }
`

export const LayoutWrapper = styled.div``
