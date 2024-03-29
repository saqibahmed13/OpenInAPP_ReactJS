import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <div className="flex w-screen h-screen">
        <div className="hidden md:block">
            <Sidebar/>
        </div>
        {children}
    </div>
  );
}
