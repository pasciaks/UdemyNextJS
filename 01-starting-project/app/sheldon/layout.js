import "../globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function SheldonLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <p>Sheldon Layout</p>
        </div>
        {children}
      </body>
    </html>
  );
}
