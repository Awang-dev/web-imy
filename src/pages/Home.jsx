import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutUs from "../components/AboutUs";
import VisiMisi from "../components/VisiMisi";
import Struktur from "../components/Struktur";
import ProgramKerja from "../components/ProgramKerja";
import ContactCTA from "../components/ContactCTA";

// Home hanya merakit section sesuai urutan di mockup.
// Id anchor (#tentang-kami, #visi-misi, #struktur-pengurus, #program-kerja, #kontak) ada di tiap komponen.
export default function Home() {
  // onOpenModal disediakan MainLayout lewat <Outlet context={...} />. Bisa kosong, ContactCTA sudah menanganinya.
  const { onOpenModal } = useOutletContext() ?? {};

  return (
    <>
      <Hero />
      <Marquee />
      <AboutUs />
      <VisiMisi />
      <Struktur />
      <ProgramKerja />
      <ContactCTA onOpenModal={onOpenModal} />

    </>
  );
}
