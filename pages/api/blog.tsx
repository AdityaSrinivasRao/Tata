// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAllBlogs } from '../../lib/api';


// export default async function getBlogs (_ : NextApiRequest,res: NextApiResponse) {
// const data = await getAllBlogs();
// res.status(200).json({data : 'some-data'})
// }

// import { getAllBlogs } from "../../lib/api";

// export async function getStaticProps() {
//     const blog = await getAllBlogs();
//     return {
//         props:{
//             blog
//         }
//     }
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
        export default function handler(
        req: NextApiRequest, res: NextApiResponse<Data>){
        res.status(200).json({ name: 'John Doe' })}
