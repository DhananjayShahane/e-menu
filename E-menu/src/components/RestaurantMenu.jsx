import { useState, useEffect } from 'react';
import RestaurantMenuItem from './RestaurantMenuItem';

const RestaurantMenu = ({ menu }) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(1); // Default to 1
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    // Filter the menu based on search query and filter
    const newFilteredMenu = menu?.map((m, index) => ({
      ...m,
      card: {
        ...m.card,
        card: {
          ...m.card.card,
          itemCards: m.card.card.itemCards?.filter((item) => {
            const itemName = item?.card?.info?.name.toLowerCase();
            const itemDescription = item?.card?.info?.description.toLowerCase();
            const isVeg = item?.card?.info?.isVeg;

            const matchesSearchQuery =
              itemName.includes(searchQuery.toLowerCase()) ||
              itemDescription.includes(searchQuery.toLowerCase());
            const matchesFilter =
              filter === 'all' ||
              (filter === 'veg' && isVeg) ||
              (filter === 'non-veg' && !isVeg);

            return matchesSearchQuery && matchesFilter;
          }),
        },
      },
    }));

    // Set filtered menu and no results message
    setFilteredMenu(newFilteredMenu);
    const hasResults = newFilteredMenu.some((m) => m.card.card.itemCards?.length > 0);
    setNoResults(!hasResults);

    // Set activeAccordionIndex to the index of the first menu with results or a default if no results
    if (searchQuery) {
      const firstResultIndex = newFilteredMenu.findIndex((m) => m.card.card.itemCards?.length > 0);
      if (firstResultIndex !== -1) {
        setActiveAccordionIndex(firstResultIndex);
      } else {
        setActiveAccordionIndex(null); // No results
      }
    }

  }, [searchQuery, filter, menu]);

  const handleToggleAccordion = (index) => {
    setActiveAccordionIndex(index === activeAccordionIndex ? null : index);
  };

  return (
    <div className='container bg-white mx-auto p-4'>
      <div className='flex flex-wrap gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search for items...'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            // Reset activeAccordionIndex on search change to ensure a valid index is set
            if (!e.target.value) {
              setActiveAccordionIndex(1); // Default index when search is cleared
            }
          }}
          className='flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <div className='flex gap-2'>
          <button
            onClick={() => setFilter('all')}
            className={`p-2 px-4 rounded-lg shadow-md transition-all ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('veg')}
            className={`p-2 px-4 rounded-lg shadow-md transition-all ${
              filter === 'veg' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Veg
          </button>
          <button
            onClick={() => setFilter('non-veg')}
            className={`p-2 px-4 rounded-lg shadow-md transition-all ${
              filter === 'non-veg' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Non-Veg
          </button>
        </div>
      </div>
      {noResults ? (
        <div className='p-4 text-center text-red-600 bg-red-100 rounded-lg'>
          No items found matching your criteria.
        </div>
      ) : (
        filteredMenu?.map((m, i) => {
          if (m?.card?.card?.title) {
            return (
              <RestaurantMenuItem
                items={m}
                key={i}
                index={i}
                activeIndex={activeAccordionIndex}
                setActiveIndex={handleToggleAccordion}
              />
            );
          } else {
            return null;
          }
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
