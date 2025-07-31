import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
export default function App() {
  return (
    <>

      <div className="">
        <Navbar />
     <div className="md:flex flex-1 ">
         <Form/>
         <Card/>
     </div>
      </div>

      
    </>
  );
}
