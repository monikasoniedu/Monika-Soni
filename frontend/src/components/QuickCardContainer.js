import QuickCard from "../QuickCard"
const QuickCardContainer = () => {
    const quickCardData = [
        {
            id: "1",
            image: "/../assets/breakfast.jpg",
            title: "BreakFast",
            description: "start your breakfast with exclusive breakfast offers",
        },

        {
            id: "2",
            image: "/../assets/lunch.jpg",
            title: "Lunch",
            description: "start your breakfast with exclusive breakfast offers",
        },
        {
            id: "3",
            image: "/../assets/snacks.png",
            title: "Snacks",
            description: "start your breakfast with exclusive breakfast offers",
        },
        {
            id: "4",
            image: "/../assets/dinner.png",
            title: "Dinner",
            description: "start your breakfast with exclusive breakfast offers",
        },

        {
            id: "5",
            image: "/../assets/nightlife.png",
            title: "Nightlife",
            description: "start your breakfast with exclusive breakfast offers",
        },

        {
            id: "6",
            image: "/../assets/drinks.png",
            title: "Drinks",
            description: "start your breakfast with exclusive breakfast offers",
        },
    ];

    return (
        <div className="quick">
            <h2>Quick Searches</h2>
            <p>Discover restaurants by type of meal</p>
            <div className="quick-card-container">

                {quickCardData.map((quickCard) => (
                    <QuickCard key={quickCard.id}
                        image={quickCard.image}
                        title={quickCard.title}
                        description={quickCard.description}
                    />
                ))}
            </div>
        </div>
    );
};
export default QuickCardContainer;