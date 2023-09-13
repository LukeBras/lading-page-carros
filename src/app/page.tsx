import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Galeria } from "@/components/Galeria";
import { Header } from "@/components/Header";
import { Social } from "@/components/Social";
import { SubArea } from "@/components/SubArea";
import { Choose } from "@/components/choose";

const Page = ()=>{
  return(
    <div className="flex flex-col">
      <Header/>
      <Banner/>
      <Galeria/>
      <Choose/>
      <SubArea/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Page;