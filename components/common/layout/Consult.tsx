"use client"

import { MdEmail, MdPhone } from "react-icons/md";
import { type HeaderProps } from "./InfoHeader";

const getTimezoneContactData = (timezone: string, data: HeaderProps[]) => {
    if (timezone.includes("America")) {
        return data?.filter((item) => item?.location === "USA")[0];
    } else if (timezone === "Asia/Dubai") {
        return data?.filter((item) => item?.location === "UAE")[0];
    } else {
        return data?.filter((item) => item?.location === "Nepal")[0];
    }
};


export const Consult = ({ data }: { data: HeaderProps[] }) => {
    // Get user's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get contact data based on timezone
    const contactData = getTimezoneContactData(timezone, data);

    if (!contactData) return null; // If no valid contact data for timezone

    return (
        <ul className='email-phone flex flex-row items-center justify-between xmd:gap-8'>
            {contactData?.email && (
                <li className='hidden md:block'>
                    <a href={`mailto:${contactData?.email}`} className='flex items-center justify-center gap-2'>
                        <span>
                            <MdEmail fill='#FF7500' size={24} />
                        </span>
                        <span>{contactData?.email}</span>
                    </a>
                </li>
            )}

            {contactData?.contact && (
                <li>
                    <a href={`tel:${contactData?.contact}`} className='flex items-center gap-2 text-sm xmd:text-base'>
                        <span>
                            <MdPhone fill='#FF7500' className='text-xl xmd:text-2xl' />
                        </span>
                        {contactData?.contact}
                    </a>
                </li>
            )}
        </ul>
    );
};
