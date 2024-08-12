import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="flex flex-col items-center px-20 py-12 mt-16 w-full border-t border-solid border-black border-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 items-start w-full max-w-[1240px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-2xl font-bold ">
          <Link href={"/"}>
              <Image
                loading="lazy"
                src="/images/avatar1.jpg"
                className="shrink-0 my-auto  w-[200px] h-auto"
                width={150}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex w-full items-start justify-start 
                     ml-6    text-start gap-8 text-2xl mt-5 ">
                           <Button variant='ghost' size="4"   >
                           <Link href="/">
                             <FaFacebookF />
                            </Link>
                           </Button>
                           <Button variant='ghost' size="4"   >
                           <Link href="/">
                             <FaInstagram />
                            </Link>
                           </Button>
                           <Button variant='ghost' size="4"   >
                           <Link href="/">
                             <FaTwitch />
                            </Link>
                           </Button>
                           <Button variant='ghost' size="4"   >
                           <Link href="/">
                             <FaLinkedinIn />
                            </Link>
                           </Button>
                            
                        </div>
                    
                    
          <div className="mt-16  text-base text-neutral-400 max-md:mt-10">
            400 University Drive Suite 200 <br/>
            Coral Gables, FL 33134 <br />USA
          </div>
        </div>
        <div className="mx-10 flex flex-col self-stretch text-base
         font-medium  whitespace-nowrap">
          <Text size="4" color="gray">Links</Text>
          <div className="mt-16 max-md:mt-10">Home</div>
          <div className="mt-14 max-md:mt-10">Shop</div>
          <div className="mt-14 max-md:mt-10">About</div>
          <div className="mt-14 max-md:mt-10">Contact</div>
        </div>
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base font-medium  max-md:mt-10">
              <Text size="4" color="gray">Help</Text>
                <div className="mt-16 max-md:mt-10">Payment Options</div>
                <div className="mt-14 max-md:mt-10">Returns</div>
                <div className="mt-14 max-md:mt-10">Privacy Policies</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
              <Text size="4" color="gray">
                  Newsletter
                </Text>
                <div className="flex gap-3 mt-16 text-sm max-md:mt-10">
                  <div className="flex flex-col text-neutral-400">
                    <div>Enter Your Email Address</div>
                    <div className="shrink-0 mt-2 h-px
                     bg-black border border-black border-solid" />
                  </div>
                  <div className="flex flex-col self-start font-medium  whitespace-nowrap">
                    <div>SUBSCRIBE</div>
                    <div className="shrink-0 mt-2 h-px bg-black border border-black border-solid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-14 max-w-full h-px border border-solid bg-zinc-300 border-zinc-300 w-[1240px] max-md:mt-10" />
      <div className="flex gap-10 mx-auto justify-center mt-4">
                            <p className='text-[14px] relative hover:underline cursor-pointer'>Terms and Conditions</p>
                            <Link href="/aviso">
                            <p className='text-[14px] relative hover:underline cursor-pointer'>Privacy</p>
                            </Link>
                            <Link href="/cookies">
                            <p className='text-[14px] relative hover:underline cursor-pointer'>
                               Cookies Policy</p>
                            </Link>
                        </div>
                         <p className='text-center pt-5'>Copyrigth &copy; {new Date().getFullYear()},
                          Forniturer, all rigths reserved.</p>
                        <br/>
    </div>
  );
};


export default Footer;
