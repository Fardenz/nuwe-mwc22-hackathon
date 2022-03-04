import Image from "next/image";
import Logos from '../../public/img/logos.png'
import { LogosContainer } from "./style";

const Footer = () => {
    return (
        <footer>
            <LogosContainer>
            <Image src={Logos} alt='logos'/>
            </LogosContainer>
        </footer>
      );
}
 
export default Footer;