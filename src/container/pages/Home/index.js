import Hero from "../../../components/Hero/Hero";
import Navbar from "../../../components/Navbar/Navbar";
import Section from "../../../components/Section/Section";
import API from "../../../config/api";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero url={API.fetchTrending} />
            <Section title="Discover Movies" url={API.fetchMovie()} all="movies/1" type="movie" />
            <Section title="Discover TV" url={API.fetchTv()} all="tv/1" type="tv" />
        </div>
    )
}

export default Home;