 
import logo from '../../Assets/img/logo-w.png'
import payment from '../../Assets/img/payment.png'
import {BiMap} from 'react-icons/bi'
import {FiPhoneCall} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import {FaFacebookF, FaTwitter, FaLocationArrow} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
const logoabout = [
{
  image:logo,
  about:"Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.",
  locationicon:<BiMap/>,
  locationlabel:"Brooklyn, New York, United States",
  numbericon:<FiPhoneCall/>,
  numverlable:"+0123-4567890",
  mailicon:<GoMail />,
  maillable:"example@example.com",
  socialfb:<FaFacebookF/>,
  socialtw:<FaTwitter/>,
  socialin:<AiOutlineInstagram/>,
  socialdr:<BsDribbble/>,

}
]

const Company = [
    {
     title:"Company",
     list1:"About",
     list2:"Blog",
     list3:"All Product",
     list4:"Contact",
     list5:"FAQ",
     list6:"Contact us"
    }
]
const Services = [
    {  
       title:"Services",
       list1:"Cart",
       list2:"Wish List",
       list3:"Login",
       list4:"Checkout",
       list5:"Terms & Conditions",
       list6:"Promotional Offers",
    }
]

const Customer= [
    {
      title:"Customer Care",
      list1:"Login",
      list2:"My Account",
      list3:"Wish List",
      list4:"Add Lisitng",
      list5:"FAQ",
      list6:"Contact us",
    }
]

const Newsletter = [
  {
    title:"Newsletter",
     description:"Subscribe to our weekly Newsletter and receive updates via email.",
     titlesec:"We Accept",
     image:payment,
     locationicon:<FaLocationArrow/>

  }
]

export {Company, Newsletter, Customer, Services, logoabout}