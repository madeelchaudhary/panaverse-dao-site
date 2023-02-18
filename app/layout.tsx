import ChakraWrapper from "@/src/components/chakra";
import Main from "@/src/components/layout/main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <Main>{children}</Main>
        </ChakraWrapper>
      </body>
    </html>
  );
}
