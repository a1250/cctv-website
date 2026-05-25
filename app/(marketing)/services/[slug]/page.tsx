import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ServiceCta from "@/components/sections/services/ServiceCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ServiceHero service={service} />
        <ServiceFeatures service={service} />
        <ServiceCta />
      </main>
      <Footer />
    </>
  );
}
