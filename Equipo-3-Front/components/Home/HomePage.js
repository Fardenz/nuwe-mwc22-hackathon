import { ContainerHome, Text, ImageWrapper, ContainerText } from "./style";
import Link from "next/link";
import Image from "next/image";
import ImageAvion from "../../public/img/ala.png";
import Button from "@mui/material/Button";

const HomePage = () => {
  return (
    <ContainerHome>
      <ContainerText>
        <Text>Welcome to the landing page</Text>
        <Link href="/company-form">
          <Button>Create Company</Button>
        </Link>
      </ContainerText>

      <Image src={ImageAvion} alt="avion" />
    </ContainerHome>
  );
};

export default HomePage;
