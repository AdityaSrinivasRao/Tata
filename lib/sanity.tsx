/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import SanityClient from '@sanity/client'

const options = {
    
dataset : process.env.SANITY_DATASET_NAME,
projectId : process.env.SANITY_PROJECT_ID,
useCdn : process.env.NODE_ENV === 'production'
// USEcDN === true, gives you first response, it will get you cached data..
//USEcDN === false , gives you little slow response , but latest data..
}

export default SanityClient(options);

console.log(options);
