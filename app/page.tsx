import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ResponsiveContent from "@/components/ResponsiveContent"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ResponsiveContent />
      <Footer />
    </div>
  )
}
