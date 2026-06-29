import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Exams from "../components/Exams";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

function Home() {

    return (

        <MainLayout>

            <Hero />

            <Stats />

            <Features />

            <Exams />

            <WhyChooseUs />

            <CTA />

        </MainLayout>

    );

}

export default Home;