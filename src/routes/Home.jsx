import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../components/HeroStyles.css";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        // style={{ width: 1500 + "px" }}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/Register"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
