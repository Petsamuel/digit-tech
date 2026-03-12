import { notFound } from "next/navigation";
import { allServices } from "@/lib/services-data";
import { ServiceLayout } from "@/components/service-layout";

export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-0">
      <ServiceLayout service={service} />
    </div>
  );
}
