import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      {/* <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            One of the most iconic views in Luzon, Mt.taal boasts a volcano
            inside a lake an island. if you fancy a closer look, the hike up to
            the crater is a mere 45 minutes, and is easy enough for beginners.
            Guides will assist you most of the way and you'll see the peculiar
            environment found on active volcano, including volcanic rocks and
            steam vents. the hike can be dusty and hot so plan for an early
            morning trip and then unwind with some bulalo before heading back
            home!
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1} />
          <img alt="img" src={Mountain2} />
        </div>
      </div> */}
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt.taal boasts a volcano
      inside a lake an island. if you fancy a closer look, the hike up to
      the crater is a mere 45 minutes, and is easy enough for beginners.
      Guides will assist you most of the way and you'll see the peculiar
      environment found on active volcano, including volcanic rocks and
      steam vents. the hike can be dusty and hot so plan for an early
      morning trip and then unwind with some bulalo before heading back
      home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer. check out Mt.Daguldul ins San Juan Batangas. You'll start your hike from beach and pass through tropical rain forest, different rock formations and small streams.there's a small store half way up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down head straight to the beach for a refreshing well deserved swim."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
