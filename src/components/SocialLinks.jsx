
import { useState } from 'react';
import '../styles/links.css'

export default function Socials({ socialIcon, socialLink }) {

    return (
        <>
            <a href={socialLink} className='socialLink'>{socialIcon}</a>
        </>
    )

}