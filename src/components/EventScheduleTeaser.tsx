"use client";
import React, { useState } from "react";
import { Clock, ChevronRight, MapPin } from "lucide-react";

const EventScheduleTeaser = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = [
    {
      day: 1,
      title: "Opening Day: Keynotes & Presentations",
      events: [
        {
          time: "09:00 AM",
          title: "Opening Keynote",
          location: "Main Hall",
          type: "keynote",
        },
        {
          time: "11:00 AM",
          title: "Paper Presentations",
          location: "Track Rooms",
          type: "presentation",
        },
        {
          time: "02:00 PM",
          title: "Industry Keynote",
          location: "Main Hall",
          type: "keynote",
        },
      ],
    },
    {
      day: 2,
      title: "Interactive Day: Workshops & Panels",
      events: [
        {
          time: "09:30 AM",
          title: "Morning Workshops",
          location: "Workshop Rooms",
          type: "workshop",
        },
        {
          time: "01:30 PM",
          title: "Panel Discussions",
          location: "Conference Room",
          type: "panel",
        },
        {
          time: "04:00 PM",
          title: "Closing Session",
          location: "Main Hall",
          type: "closing",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join us for two days of inspiring talks, hands-on workshops, and
          engaging discussions.
        </p>
      </div>

      {/* Day Selection Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {scheduleData.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDay === day.day
                ? "bg-[#1e8f26] text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Day {day.day}
          </button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
        {scheduleData.map(
          (day) =>
            day.day === activeDay && (
              <div key={day.day}>
                <h3 className="text-2xl font-bold mb-6 text-[#c12b23]">
                  {day.title}
                </h3>
                <div className="space-y-4">
                  {day.events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-[#1e8f26]">
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{event.time}</span>
                          </div>
                          <div className="h-4 w-px bg-gray-300"></div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              event.type === "keynote"
                                ? "bg-[#eacf34] text-gray-800"
                                : event.type === "workshop"
                                ? "bg-[#1e8f26] text-white"
                                : event.type === "panel"
                                ? "bg-[#c12b23] text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {event.type.charAt(0).toUpperCase() +
                              event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold mt-3">
                        {event.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      {/* View Full Schedule Button */}
      <div className="text-center mt-8">
        <a
          href="#full-schedule"
          className="inline-flex items-center px-6 py-3 bg-[#1e8f26] text-white rounded-lg font-semibold hover:bg-[#167d1f] transition-colors duration-300"
        >
          View Full Schedule
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default EventScheduleTeaser;
