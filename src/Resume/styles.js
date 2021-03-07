import { StyleSheet, Font } from '@react-pdf/renderer'
import * as fonts from './fonts'


Font.register({ family: 'Source Sans Pro', fonts: [
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/sourcesanspro/SourceSansPro-ExtraLight.ttf", fontWeight: 200 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/sourcesanspro/SourceSansPro-Light.ttf", fontWeight: 300 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/sourcesanspro/SourceSansPro-Regular.ttf" },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/sourcesanspro/SourceSansPro-SemiBold.ttf", fontWeight: 600 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/sourcesanspro/SourceSansPro-Bold.ttf", fontWeight: 700 },
]});

Font.register({ family: 'Overpass', fonts: [
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/overpass/Overpass-ExtraLight.ttf", fontWeight: 200 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/overpass/Overpass-Light.ttf", fontWeight: 300 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/overpass/Overpass-Regular.ttf" },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/overpass/Overpass-SemiBold.ttf", fontWeight: 600 },
  { src: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/overpass/Overpass-Bold.ttf", fontWeight: 700 },
]});

Font.register({ family: 'San Francisco Display', fonts: [
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff", fontWeight: 100 },
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff", fontWeight: 200 },
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff", fontWeight: 400 },
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff", fontWeight: 500 },
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff", fontWeight: 600 },
  { src: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff", fontWeight: 700 },
]});

Font.register({ family: 'San Francisco Text', fonts: [
  { src: "https://cdn.jsdelivr.net/gh/pedrouid/san-francisco-fonts/assets/SFProText-Regular.ttf", fontWeight: 400 },
  { src: "https://cdn.jsdelivr.net/gh/pedrouid/san-francisco-fonts/assets/SFProText-Medium.ttf", fontWeight: 500 },
  { src: "https://cdn.jsdelivr.net/gh/pedrouid/san-francisco-fonts/assets/SFProText-SemiBold.ttf", fontWeight: 600 },
  { src: "https://cdn.jsdelivr.net/gh/pedrouid/san-francisco-fonts/assets/SFProText-Bold.ttf", fontWeight: 700 },
]});

Font.register({ family: 'San Francisco Compact Text', fonts: [
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-Light.ttf", fontWeight: 200 },
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-Regular.ttf", fontWeight: 400 },
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-Medium.ttf", fontWeight: 500 },
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-SemiBold.ttf", fontWeight: 600 },
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-Bold.ttf", fontWeight: 700 },
  { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFCompact/TrueType/SFCompactText-Heavy.ttf", fontWeight: 900 },
]});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


const styles = StyleSheet.create({
  page: {
    padding: 72/2,
    justifyContent: "space-between",
    fontFamily: "San Francisco Display",
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  name: {
    // marginTop: -2,
    fontSize: 42,
  },

  contact: {
    alignSelf: "stretch",
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: 14,
    lineHeight: 1.5,
  },

  tagline: {
    // marginLeft: 72/2,
    fontFamily: "San Francisco Display",
    fontWeight: 100,
    fontSize: 22,
    marginBottom: 10,
  },

  section: {
    position: "relative",
    paddingLeft: 72/2 - 5,
  },

  sectionNamePositioner: {
    position: 'absolute',
    top: 2,
    left: -72*10 - 4,
    width: 72*10,
    height: 1,
  },

  sectionName: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: "rotate(-90deg)",
    transformOrigin: "right top",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },

  item: {
    fontFamily: "San Francisco Compact Text",
    fontSize: 10,
    lineHeight: 1.2,
    marginBottom: 5,
  },

  itemFirstLine: {
    lineHeight: 1.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemSummary: {
    flexDirection: "row",
  },

  divider: {
    marginLeft: 3,
    marginRight: 3,
  },

  summary1: {
    fontWeight: 700,
  },

  dates: {
    // fontFamily: "Oswald",
    fontSize: 10,
  },

  itemBullet: {
    flexDirection: "row",
    alignItems: "center",
  },

  bullet: {
    marginLeft: 7,
    marginRight: 4,
    marginTop: -2,
  },
})


export default styles
