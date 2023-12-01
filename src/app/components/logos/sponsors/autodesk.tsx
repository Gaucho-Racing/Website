// import { SVGProps } from "react"
// const AutodeskLogo = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={500}
//     height={200}
//     transform="translate(0,0)"
//     preserveAspectRatio="xMidYMid"
//     fill="current"
//     {...props}
//   >
   
//   </svg>
// )

export default function AutodeskLogo({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                fill="currentColor"
                // preserveAspectRatio="xMidYMid"
                viewBox="0 0 500 200"
            >
                 <path d="m185.316 153.977 81.824-50.679h42.44c1.31 0 2.484 1.033 2.484 2.473 0 1.169-.519 1.685-1.174 2.093l-40.202 23.994c-2.62 1.549-3.521 4.674-3.521 7.011l-.027 15.108h51.065V66.125c0-1.685-1.31-3.125-3.275-3.125h-48.691l-81.633 50.461v40.543h.71v-.027ZM126.5 182.836 114 215.254h8.597l2.184-6.087h13.946l2.156 6.087h8.871l-12.664-32.418H126.5Zm.737 19.456 4.558-12.717 4.476 12.717h-9.034ZM173.253 202.781c0 4.212-2.593 5.924-7.042 5.924-4.312 0-7.123-1.794-7.123-5.924v-20.054h-8.297v20.978c0 9.375 8.379 12.282 15.42 12.282 7.014 0 15.339-2.907 15.339-12.282v-20.978h-8.297v20.054ZM185.343 189.846h10.508v25.408h8.297v-25.408h10.481v-7.01h-29.286v7.01ZM271.725 182.836h-15.229v32.418h15.229c11.681 0 14.902-4.348 14.902-16.44 0-11.413-3.111-15.978-14.902-15.978Zm-.327 25.407h-6.605v-18.397h6.605c5.213 0 6.768 1.413 6.768 8.968-.027 6.875-1.774 9.429-6.768 9.429ZM386 182.836h-9.88l-11.845 13.179v-13.179h-8.297l.027 32.418h8.27v-12.31l11.245 12.31H386l-15.12-16.006L386 182.836ZM291.267 215.254h26.201v-7.011h-17.904v-5.87h14.41v-7.065h-14.41v-5.462h17.904v-7.01h-26.201v32.418ZM233.952 181.939c-11.845 0-17.986 7.255-17.986 17.01 0 9.81 6.141 17.093 17.986 17.093 11.872 0 18.04-7.283 18.04-17.093 0-9.755-6.168-17.01-18.04-17.01Zm0 26.82c-6.141 0-9.525-3.723-9.525-9.81 0-5.951 3.384-9.728 9.525-9.728 6.195 0 9.525 3.777 9.525 9.728 0 6.087-3.33 9.81-9.525 9.81ZM342.577 196.178l-7.56-.843c-4.449-.489-5.54-1.576-5.54-3.07 0-1.658 2.292-3.152 6.714-3.152 4.285 0 6.523 1.576 6.932 3.967h8.133c-.409-6.848-6.195-11.114-14.601-11.114-10.017 0-15.066 3.967-15.066 10.978 0 5.707 3.33 8.397 10.262 9.13l7.697.816c2.92.326 4.285 1.467 4.285 2.907 0 1.658-1.965 3.152-6.687 3.152-5.459 0-7.642-1.386-8.024-4.13h-7.97c.355 7.446 5.24 11.277 15.721 11.277 9.552 0 14.902-4.185 14.902-10.462-.027-5.489-3.221-8.777-9.198-9.456Z"/>
            </svg>
        </div>
    );
  }