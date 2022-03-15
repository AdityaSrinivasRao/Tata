
import client from "./sanity";
// import {imageUrlBuilder} from "@sanity/image-url";

//logo
const blogFields = `
'image':image.asset->url,
`

// export default function urlFor(source) {
//   return imageUrlBuilder(client).image(source)
// }

//carosal
const carosalFields = `

'carosalImage':carosalImage.asset->url,
`

//carosal with content
const carosalOneFields = `

description,
'image':image.asset->url,
content,
`
const contentOneFields = `
header,
bodyOne,
bodyTwo,
bodyThree,
bodyFour,
bodyFive,
bodySix,
bodySeven,
'image':image.asset->url,
`

const ContentTwoFields = `
headerOne,
headerTwo,
bodyOne,
bodyOneO,
bodyTwo,
`

const ContentThreeFields = `
headerOne,
headerTwo,
bodyOneA,
bodyOneB,
bodyOneC,
bodyTwoA,
bodyTwoAO,
bodyTwoB,
bodyTwoBO,
footer,
`
const ContentFourFields = `
bodyOne,
bodyTwo,
bodyThree,
`
const ContentFiveFields =`
headOne,
headTwo,
bodyOneA,
bodyOneB,
bodyTwoA,
bodyTwoB,
bodyTwoC,
headOneD,
`

const ContentSixFields = `
header,
bodyOne,
bodyTwo,
bodyThree,
bodyFour,
bodyFive,
bodySix,
`

const ChartFields = `
'image':image.asset->url,
`

const ClanderFields = `
'image':image.asset->url,
`
const BlogFieldsOnes = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
cSeven,
`
const BlogFieldsTwos = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
cSeven,
`
const BlogFieldsThrees = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`
const BlogFieldsFours = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`
const BlogFieldsFives = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`

//Footer Content

const Brands = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
`
const Company = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Investors = `
header,
cOne,
cTwo,
`
const Development = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Responsibility = `
header,
cOne,
cTwo,
`
const Career = `
header,
cOne,
cTwo,
`
const PressRoom = `
header,
cOne,
cTwo,
`
const Contact = `
header,
cOne,
`
const subFooters = `
headerOne,
headerTwo,
headerThree,
headerFour,
headerFive,
`
const joinOur = `
content,
btn,
`
const footers = `
'logo':logo.asset->url,
'TajIcon':TajIcon.asset->url,
'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
'vivantaIcon':vivantaIcon.asset->url,
'gingerIcon':gingerIcon.asset->url,
'expressionsIcon':expressionsIcon.asset->url,
'tajSatsIcon':tajSatsIcon.asset->url,
brands,
content,
`


//blog logo 
export async function getLogo(){
    const results = await client
    .fetch(`*[_type =='blog']{${blogFields}}`);
  return results;
}

//carosal
export async function getCarosal(){
  const results = await client
  .fetch(`*[_type == 'carosalImages']{${carosalFields}}`);
return results;
}

//carosal with content
export async function getCarosalImages(){
  const results = await client
  .fetch(`*[_type == 'carosalOne']{${carosalOneFields}}`);
return results;
}

export async function getContentOne(){
  const results = await client
  .fetch(`*[_type == 'companyInformations']{${contentOneFields}}`);
return results;
}

export async function getContentTwo(){
  const results = await client
  .fetch(`*[_type == 'corporateAnnouncement']{${ContentTwoFields}}`);
return results;
}

export async function getContentThree(){
  const results = await client
  .fetch(`*[_type == 'financialResult']{${ContentThreeFields}}`);
return results;
}

export async function getContentFour(){
  const results = await client
  .fetch(`*[_type == 'agms']{${ContentFourFields}}`);
return results;
}

export async function getContentFive(){
  const results = await client
  .fetch(`*[_type == 'corporateAction']{${ContentFiveFields}}`);
return results;
}

export async function getContentSix(){
  const results = await client
  .fetch(`*[_type == 'investorToolKit']{${ContentSixFields}}`);
return results;
}

export async function getChart(){
  const results = await client
  .fetch(`*[_type == 'chart']{${ChartFields}}`);
return results;
}

export async function getClander(){
  const results = await client
  .fetch(`*[_type == 'calender']{${ClanderFields}}`);
return results;
}

export async function BlogFieldsOne(){
  const results = await client
  .fetch(`*[_type == 'companyInformation']{${BlogFieldsOnes}}`);
return results;
}

export async function BlogFieldsTwo(){
  const results = await client
  .fetch(`*[_type == 'Financialsipts']{${BlogFieldsTwos}}`);
return results;
}

export async function BlogFieldsThree(){
  const results = await client
  .fetch(`*[_type == 'corporateAnnouncements']{${BlogFieldsThrees}}`);
return results;
}

export async function BlogFieldsFour(){
  const results = await client
  .fetch(`*[_type == 'investorToolkit']{${BlogFieldsFours}}`);
return results;
}

export async function BlogFieldsFive(){
  const results = await client
  .fetch(`*[_type == 'Disclosures']{${BlogFieldsFives}}`);
return results;
}

//footer content 
export async function footerBrands(){
  const results = await client
  .fetch(`*[_type == 'footerBrands']{${Brands}}`);
return results;
}

export async function footerCompany(){
  const results = await client
  .fetch(`*[_type == 'footerCompany']{${Company}}`);
return results;
}

export async function footerInvestors(){
  const results = await client
  .fetch(`*[_type == 'footerInvestors']{${Investors}}`);
return results;
}

export async function footerDevelopment(){
  const results = await client
  .fetch(`*[_type == 'footerDevelopment']{${Development}}`);
return results;
}

export async function footerResponsibility(){
  const results = await client
  .fetch(`*[_type == 'footerResponsibility']{${Responsibility}}`);
return results;
}

export async function footerCareer(){
  const results = await client
  .fetch(`*[_type == 'footerCareer']{${Career}}`);
return results;
}

export async function footerPressRoom(){
  const results = await client
  .fetch(`*[_type == 'footerPressRoom']{${PressRoom}}`);
return results;
}

export async function footerContact(){
  const results = await client
  .fetch(`*[_type == 'footerContact']{${Contact}}`);
return results;
}

export async function subFooter(){
  const results = await client
  .fetch(`*[_type == 'subFooter']{${subFooters}}`);
return results;
}

export async function joinUs(){
  const results = await client
  .fetch(`*[_type == 'joinUs']{${joinOur}}`);
return results;
}

export async function footer(){
  const results = await client
  .fetch(`*[_type == 'footer']{${footers}}`);
return results;
}