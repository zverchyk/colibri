import '../styles/links.css'

export default function Socials({ socialIcon, socialLink }) {

    return (
        <>
            <a href={socialLink} className='socialLink'><img class="social_icon" src={socialIcon.src} alt="" /></a>
        </>
    )

}