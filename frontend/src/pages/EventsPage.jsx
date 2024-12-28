import React, {useState, useEffect} from 'react'
import EventItem from '../components/EventItem'
import Pagination from '../components/Pagination'



const EventsPage = () => {

  let [events, setEvents] = useState([])
  let [currentPage, setCurrentPage] = useState(1)
  let [eventsPerPage, setEventsPerPage] = useState(8)

  useEffect(() => { 
    getEvents()
  }, [])


  let getEvents = async () => {

    let response = await fetch("/api/events-list/")
    let data = await response.json()
    setEvents(data)

  }

  //Get Current Events (Pagination)
  let indexOfLastEvent = currentPage * eventsPerPage
  let indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  let currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

  let paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid lg:grid-cols-4 gap-8 container mx-auto  ">
        {currentEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Pagination
          eventsPerPage={eventsPerPage}
          totalEvents={events.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default EventsPage