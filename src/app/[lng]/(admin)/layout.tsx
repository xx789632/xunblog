import type { Metadata } from "next";
import "@/app/styles/globals.css";
import {dir} from "i18next";
import { languages } from '../../i18n/settings'
import Header from "@/components/header/Header";
import SideBar from "@/components/sideBar/SideBar";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default function Layout({
                                       children,
                                       params: {lng}}:{
    children: React.ReactNode, params: {lng: string} })
{
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>
                <Header/>
                <SideBar lng={lng}/>
                {children}
            </body>
        </html>
    )
}
