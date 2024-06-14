import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffers from "@/components/SpecialOffers";
import Subscribe from "@/components/Subscribe";
import SuperQuality from "@/components/SuperQuality";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding bg-[#0c1d30]">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 bg-[#0c1d30]">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-[#0c1d30]">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-[#0c1d30] padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
