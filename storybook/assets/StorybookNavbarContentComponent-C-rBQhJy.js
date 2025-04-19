import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./BasicLayout-BYo8Ed5F.js";import{L as r}from"./Logo-BdjsM1M9.js";import"./LogoFull-Ja5zr25l.js";function i(){return e.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"GitHub"}),e.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}i.__docgenInfo={description:"",methods:[],displayName:"GithubIcon"};function t(){return e.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"LinkedIn"}),e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})}t.__docgenInfo={description:"",methods:[],displayName:"LinkedInIcon"};function c(){return e.jsx("div",{className:"bg-base-100 absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"})}c.__docgenInfo={description:"",methods:[],displayName:"BlueFadeBackground"};function m(){return e.jsx("div",{className:"bg-base-100 dark:bg-base-300 absolute inset-0 z-[-2] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:16px_16px] dark:bg-[radial-gradient(#46464645_1px,transparent_1px)]"})}m.__docgenInfo={description:"",methods:[],displayName:"GridBackground"};function p({backgroundElement:n,navbarElement:s,footer:a,onGithubClick:o,onLinkedInClick:d,children:l}){return e.jsxs("div",{className:"flex min-h-screen flex-col overflow-x-hidden",children:[n,e.jsx("div",{className:"sticky top-0 z-40",children:s}),e.jsxs("div",{className:"container mx-auto mb-8",children:[e.jsx("div",{className:"navbar"}),e.jsx("main",{className:"flex lg:px-10",children:l})]}),e.jsx("div",{className:"flex flex-1"}),a&&e.jsxs("footer",{className:"glass footer footer-horizontal footer-center p-10 dark:bg-none",children:[e.jsxs("aside",{children:[e.jsx(r,{size:"large"}),e.jsx("p",{className:"text-base font-bold",children:"Made with ☕ by Petter Hancock"}),e.jsx("p",{children:"Copyright © 2024 - All right reserved"})]}),e.jsx("nav",{children:e.jsxs("div",{className:"grid grid-flow-col gap-4",children:[e.jsx("button",{className:"btn btn-square btn-ghost fill-primary p-2",onClick:o,children:e.jsx(i,{})}),e.jsx("button",{className:"btn btn-square btn-ghost fill-primary p-2",onClick:d,children:e.jsx(t,{})})]})})]})]})}p.__docgenInfo={description:"",methods:[],displayName:"NavbarLayout",props:{navbarElement:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"boolean"},description:""},backgroundElement:{required:!1,tsType:{name:"ReactNode"},description:""},onGithubClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLinkedInClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function u({title:n,centerElement:s,endElement:a}){return e.jsx("div",{className:"glass navbar bg-opacity-55 dark:bg-opacity-100 p-0 dark:bg-none",children:e.jsxs("div",{className:"navbar container mx-auto min-h-0 p-0",children:[e.jsxs("div",{className:"navbar-start h-full",children:[e.jsx(r,{size:"small"}),e.jsx("span",{className:"text-base font-semibold md:text-2xl",children:n})]}),e.jsx("div",{className:"navbar-center h-8",children:s}),e.jsx("div",{className:"navbar-end h-8",children:a})]})})}u.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{title:{required:!0,tsType:{name:"string"},description:""},centerElement:{required:!1,tsType:{name:"ReactNode"},description:""},endElement:{required:!1,tsType:{name:"ReactNode"},description:""}}};function x(){return e.jsxs("ul",{className:"menu menu-horizontal px-1",children:[e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:"Parent"}),e.jsxs("ul",{className:"p-2",children:[e.jsx("li",{children:e.jsx("a",{children:"Submenu 1"})}),e.jsx("li",{children:e.jsx("a",{children:"Submenu 2"})})]})]})}),e.jsx("li",{children:e.jsx("a",{children:"Item 1"})})]})}x.__docgenInfo={description:"",methods:[],displayName:"StorybookNavbarContentComponent"};export{c as B,i as G,t as L,u as N,x as S,p as a,m as b};
//# sourceMappingURL=StorybookNavbarContentComponent-C-rBQhJy.js.map
