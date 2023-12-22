import SideNav from "./sharedProfile/SideNav";

export default function DashboardLayout({
  children, 
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideNav ></SideNav>
      
   
      {children}
      
    </section>
  );
}
