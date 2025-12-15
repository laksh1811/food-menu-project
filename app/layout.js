import "./globals.css";

export const metadata = {
  title: "Online Menu",
  description: "Food Menu App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
