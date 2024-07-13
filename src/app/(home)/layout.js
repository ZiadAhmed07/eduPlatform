import Header from "@/components/header/header";


export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
}
