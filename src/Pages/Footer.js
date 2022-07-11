import SimpleReactFooter from "simple-react-footer"
import logo from '../../Assets/img/logo.png';
import './FooterStyles.scss'
export const Footer = () => {

  const description = "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.";
  const image = logo;
  const columns = [
    {
        title: "Company",
        class:"dddd",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Blog",
                link: "/blog"
            },
            {
                name: "All Products",
                link: "/products"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "FAQ",
                link: "/faq"
            },
            {
                name: "Contact us",
                link: "/contactus"
            }
        ]
    },
    {
        title: "Services",
        resources: [
            {
                name: "Cart",
                link: "/cart"
            },
            {
                name: "Wish List",
                link: "/wishlist"
            },
            {
                name: "Login",
                link: "/Login"
            },
            {
                name: "Checkout",
                link: "/Checkout"
            },
            {
                name: "Terms & Conditions",
                link: "/term"
            },
            {
                name: "Promotional Offers",
                link: "/offers"
            }
        ]
    },
     {
        title: "Customer Care",
        resources: [
            {
                name: "Login",
                link: "/login"
            },
            {
                name: "My Account",
                link: "/account"
            },
            {
                name: "Wish List",
                link: "/wishlist"
            },
            {
                name: "Add Listing",
                link: "/account"
            },
            {
                name: "FAQ",
                link: "/faq"
            },
            {
                name: "Contact us",
                link: "/contactus"
            }
        ]
    },
     {
        title: "Newsletter",
        resources: [
            {
                description: "LLorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.ogin",
            },
            {
                name: "My Account",
                link: "/account"
            },
          
        ]
    },

 ];

 return <SimpleReactFooter 
    description={description} 
    Image={logo}
    columns={columns}
    copyright="All Rights Reserved @ Company 2022"
    backgroundColor="#171b2a"
    fontColor="var(--white-color)"
    // <Image source={logo} /> 
    
 />;


}

export default Footer;