import { Navbar } from "@/components/organisms/Navbar";
import "./globals.css";
import { TodoListContextProvider } from "@/context/TodoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-lime-50">
        <TodoListContextProvider>
          <Navbar />
          {children}
        </TodoListContextProvider>
      </body>
    </html>
  );
}
