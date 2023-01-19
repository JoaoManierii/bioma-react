import React from 'react'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import Linkedin from './icons/Linkedin'


interface IconProps {
    iconType: "INSTAGRAM" | "LINKEDIN" | "FACEBOOK"
}

export default function Icon({ iconType }: IconProps) {

    if (iconType === "FACEBOOK") return <Facebook />
    if (iconType === "INSTAGRAM") return <Instagram />
    if (iconType === "LINKEDIN") return <Linkedin />


    return <></>
}
