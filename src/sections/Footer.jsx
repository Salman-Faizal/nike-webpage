import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex max-lg:flex-col justify-between items-start gap-20 flex-wrap">
        <div>
          <a href="/">
            <img src={footerLogo} alt="footer-logo" width={150} height={46} className="m-0"/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5"> 
            {socialMedia.map(icon => (
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full" key={icon.alt}>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 flex-wrap xl:max-w-[620px]">
          {footerLinks.map(group => (
            <div key={group.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {group.title}
              </h4>
              <ul>
                {group.links.map(link => (
                  <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between items-center max-sm:flex-col gap-2.5 text-white-400 text-sm cursor-pointer font-montserrat">
        <div className="flex items-center gap-2">
          <img src={copyrightSign} alt="copyright-symbol" width={20} height={20} className="rounded-full m-0"/>
          <p>
            Copyright. All rights reserved.
          </p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer