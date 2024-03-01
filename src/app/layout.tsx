import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/theme";
import SiderBarPage from "@/components/SiderBarPage";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChordTrek",
  description: "Chords Getter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={roboto.className}>
          <CssBaseline />
          <SiderBarPage>{children}</SiderBarPage>
        </body>
      </ThemeProvider>
    </html>
  );
}
