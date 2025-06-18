import PropertyCard from "./PropertyCard";
import SidebarFilters from "./SidebarFilters";


const Card = () => {
    return (
        <div className="flex flex-1">
            <SidebarFilters />
           
            <main className="flex-1 p-4 bg-gray-100">
                <h2 className="text-xl font-semibold text-orange-600 mb-4">
                    122 Casas para alugar em Fortaleza - CE
                </h2>
                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <PropertyCard key={i} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Card;