import { StoreContextProvider } from "@/context/StoreContext";
import "./globals.css";

export const metadata = {
  title: "Willify",
  description: "Willify is an e-commerce app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
