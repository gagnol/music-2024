
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructor from "@/components/Instructor";
import BlogPost from "@/components/blogs/blog-posts";
import Accordion from "@/components/accordion/accordion";

export default async function Home() {


  return (
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <FeaturedCourses/>
        </section>
        <section>
          <WhyChooseUs/>
        </section>
        <section>
          <TestimonialCard/>
        </section>
        <section>
          <UpcomingWebinar/>
        </section>
        <section>
          <BlogPost/>
        </section>
        <section>
          <Accordion/>
        </section>
        <section>
          <Instructor/>
        </section>
      </main>

  );
}
