// import { FC, PropsWithChildren } from 'react';
// // import { IMeta } from "./meta.interface"
// import Head from 'next/head';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Metadata',
//     description: 'Metadata',
// }



// const getTitles = (title: string) => `${title} | NFT SALE`

// interface IMeta {
//     title: string;
//     description: string;
// }

// const generateMetadata = ({ title, description }: IMeta) => {
//     return {
//         title: `${title}`,
//         description: `${description}`,
//     };
// };

// export default generateMetadata;

// const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
//     return <>
//         <Head>
//             <title>{getTitles(title)}</title>
//             {description ? (
//                 <>
//                     <meta name='description' content={description} />
//                     <meta name='og:title' content={getTitles(title)} />
//                     <meta name='og:description' content={description} />
//                 </>
//             ) : (<meta name='robots' content='noindex, nofollow' />)}
//         </Head>
//         {children}
//     </>
// };
// export default Meta;