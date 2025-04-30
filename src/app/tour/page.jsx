export default function Tour() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tour Dates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourDates.map((date, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{date.city}</h2>
              <p className="text-md">{date.venue}</p>
              <p className="text-sm mb-4">{date.date}</p>
              <div className="flex justify-between items-center">
                <a href={date.ticketLink} className="text-indigo-500 hover:text-indigo-300">Buy Tickets</a>
                <a href={date.moreInfoLink} className="text-indigo-500 hover:text-indigo-300">More Info</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Example data
const tourDates = [
  {
    city: "New York, NY",
    venue: "Madison Square Garden",
    date: "March 5, 2025",
    ticketLink: "#",
    moreInfoLink: "#"
  },
  {
    city: "Chicago, IL",
    venue: "United Center",
    date: "March 10, 2025",
    ticketLink: "#",
    moreInfoLink: "#"
  },
  {
    city: "Los Angeles, CA",
    venue: "Staples Center",
    date: "March 15, 2025",
    ticketLink: "#",
    moreInfoLink: "#"
  },
  // Add more dates as needed
];





  