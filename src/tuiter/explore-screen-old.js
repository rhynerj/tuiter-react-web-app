import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item";

function ExploreScreen() {
    return (
        <div>
            <h1>Explore</h1>
            <TuitSummaryItem />
            <TuitSummaryItem tuit={{
                "topic": "Space",
                "userName": "NASA",
                "time": "2h",
                "title": `The National Aeronautics and Space Administration, commonly referred to as NASA,
            is an independent agency of the U.S. federal government responsible for the
            civil space program, aeronautics research, and space research`,
                "image": "nasa.png"
            }} />
            <TuitSummaryItem tuit={{
                "topic": "Space",
                "userName": "SpaceX",
                "time": "2h",
                "title": `100s of SpaceX Starships land on Mars after a 6 month
                journey. 1000s of Martian colonists being building Mars Base 1`,
                "image": "spacex.jpeg"
            }} />
            <TuitSummaryItem tuit={{
                "topic": "Energy",
                "userName": "Tesla",
                "time": "4d",
                "title": `Tesla FSD finally makes driving obsolete. After years of delay, 
                Tesla Full Self Driving can drive you to work while you work, play, or sleep`,
                "image": "tesla.jpeg"
            }} />
        </div>
    );
}

export default ExploreScreen