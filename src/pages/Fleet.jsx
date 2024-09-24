import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FAQ from "../components/faq/Faq";
import LongTermForm from "../components/LongTermForm/LongTermForm";
import useGetData from "../hooks/useGetData";
import Loader from "../loaders/Loader";

const Fleet = () => {
  const { data, loading, error } = useGetData("fleets");

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    dropoffDate: null,
  });

  const [filters, setFilters] = useState({
    type: [],
    passengers: [],
    transmission: "",
    doors: [],
  });

  const [filteredCars, setFilteredCars] = useState(data);
  console.log(filteredCars);

  useEffect(() => {
    if (data) {
      setFilteredCars(data);
    }
  }, [data]);

  // Handle Form Data Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFilters((prevFilters) => {
        const updatedFilter = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);

        return { ...prevFilters, [name]: updatedFilter };
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      passengers: [],
      transmission: "",
      doors: [],
    });
    setFilteredCars(data); // Reset filtered cars to show all
  };

  const filterCars = () => {
    let filtered = data;

    if (filters.type.length > 0) {
      filtered = filtered.filter((car) => filters.type.includes(car.type));
    }

    if (filters.passengers.length > 0) {
      filtered = filtered.filter((car) => {
        return filters.passengers.some((seatFilter) => {
          if (
            seatFilter === "2-5 passengers" &&
            car.passengers >= 2 &&
            car.passengers <= 5
          ) {
            return true;
          }
          if (seatFilter === "6+ passengers" && car.passengers > 5) {
            return true;
          }
          return false;
        });
      });
    }

    if (filters.transmission) {
      filtered = filtered.filter(
        (car) => car.transmission === filters.transmission
      );
    }

    if (filters.doors.length > 0) {
      filtered = filtered.filter((car) =>
        filters.doors.includes(`${car.doors} Doors`)
      );
    }

    setFilteredCars(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or availability check logic here
    console.log(formData);

    // Filter cars based on form data
    filterCars();

    // Reset form data
    setFormData({
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: null,
      dropoffDate: null,
    });
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-5 bg-[#F1F1F1]">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
        <div className="w-full md:col-span-2 order-2 md:order-1">
          <div className="bg-white p-6 rounded-3xl shadow-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-xl">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear Filters
              </button>
            </div>

            {/* Car Type */}
            <div className="mb-6">
              <h4 className="font-medium text-md mb-2">Car Type</h4>
              <div className="space-y-2">
                {["Small", "Medium", "SUV", "Bike"].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      name="type"
                      value={type}
                      checked={filters.type.includes(type)}
                      onChange={handleFilterChange}
                      className="form-checkbox h-3 w-3 text-red-600"
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* passengers */}
            <div className="mb-6">
              <h4 className="font-medium text-md mb-2">Seats</h4>
              <div className="space-y-2">
                {["2-5 passengers", "6+ passengers"].map((seat) => (
                  <label key={seat} className="flex items-center">
                    <input
                      type="checkbox"
                      name="passengers"
                      value={seat}
                      checked={filters.passengers.includes(seat)}
                      onChange={handleFilterChange}
                      className="form-checkbox h-3 w-3 text-red-600"
                    />
                    <span className="ml-2 text-gray-700">{seat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Automatic or Manual */}
            <div className="mb-6">
              <h4 className="font-medium text-md mb-2">Automatic or Manual</h4>
              <div className="space-y-2">
                {["Automatic", "Manual"].map((trans) => (
                  <label key={trans} className="flex items-center">
                    <input
                      type="radio"
                      name="transmission"
                      value={trans}
                      checked={filters.transmission === trans}
                      onChange={handleFilterChange}
                      className="form-radio h-3 w-3 text-red-600"
                    />
                    <span className="ml-2 text-gray-700">{trans}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Doors */}
            <div className="mb-6">
              <h4 className="font-medium text-md mb-2">Doors</h4>
              <div className="space-y-2">
                {["4 Doors", "4+ Doors"].map((door) => (
                  <label key={door} className="flex items-center">
                    <input
                      type="checkbox"
                      name="doors"
                      value={door}
                      checked={filters.doors.includes(door)}
                      onChange={handleFilterChange}
                      className="form-checkbox h-3 w-3 text-red-600"
                    />
                    <span className="ml-2 text-gray-700">{door}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={filterCars}
              className="bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="w-full md:col-span-6 md:col-start-3 order-1 md:order-2">
          <div
            className="w-full h-[25vh] md:[40vh] lg:h-[65vh] flex justify-center items-center rounded-3xl"
            style={{
              backgroundImage: `url('/images/hero-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="mb-0 lg:mb-2 text-center text-white text-[12px] lg:text-xl font-bold animate__animated animate__fadeInUp">
                BOOK THE BEST CAR AT THE LOWEST PRICE
              </p>
              <h1 className="text-white text-3xl lg:text-6xl font-bold animate__animated animate__fadeInUp">
                Discover our Fleet
              </h1>
              <img
                className="w-2/3 md:w-1/3 mt-1 md:mt-3 animate__animated animate__fadeInUp"
                src="/images/underline.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full p-5 md:p-10 rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col md:flex-row items-center gap-4 justify-between"
            >
              {/* Pick-up Location */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Pick-up Location
                </label>
                <select
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>

              {/* Drop-off Location */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Drop-off Location
                </label>
                <select
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>

              {/* Pick-up Date */}
              <div className="w-full relative">
                <label className="block text-gray-700 font-semibold mb-2">
                  Pick-up Date
                </label>
                <DatePicker
                  selected={formData.pickupDate}
                  onChange={(date) =>
                    setFormData({ ...formData, pickupDate: date })
                  }
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy h:mm aa"
                  className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
                  placeholderText="dd/mm/yyyy"
                  required
                />
              </div>

              {/* Drop-off Date */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Drop-off Date
                </label>
                <DatePicker
                  selected={formData.dropoffDate}
                  onChange={(date) =>
                    setFormData({
                      ...formData,
                      dropoffDate: date,
                    })
                  }
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  timeCaption="Time"
                  className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
                  placeholderText="dd/mm/yyyy"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white font-semibold px-6 py-4 mt-2 md:mt-8 rounded-lg hover:opacity-90 transition duration-300"
                >
                  Check availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
        <div className="w-full md:col-span-2 order-2 md:order-1"></div>
        <div className="w-full md:col-span-6 md:col-start-3 order-1 md:order-2">
          {/* Cars Display Section */}
          {filteredCars?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {filteredCars?.map((car) => (
                <div
                  key={car.id}
                  className="w-full bg-white p-4 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
                >
                  <span className="bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white text-sm px-3 py-1 rounded-md">
                    {car.type}
                  </span>
                  <div className="w-full flex items-center justify-between mt-3">
                    <div>
                      <h3 className="text-lg md:text-2xl font-semibold">
                        {car.brand + " " + car.model}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        or similar same group vehicle
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">
                        € {parseInt(car.daily_rate).toFixed(2)}
                      </p>
                      <p>Price per day</p>
                    </div>
                  </div>
                  <img
                    src={car.main_image}
                    alt={car.name}
                    className="h-32 object-contain my-4 mx-auto"
                  />

                  <div className="flex justify-between w-full">
                    <span className="text-gray-600">
                      <i className="fas fa-users"></i> {car.passengers}{" "}
                      passengers
                    </span>
                    <span className="text-gray-600">
                      <i className="fas fa-door-open"></i> {car.doors} Doors
                    </span>
                    <span className="text-gray-600">
                      <i className="fas fa-cog"></i> {car.transmission}
                    </span>
                    <span className="text-gray-600">
                      <i className="fas fa-gas-pump"></i> {car.fuel_type}
                    </span>
                  </div>
                  <div className="mt-4 flex w-full justify-between gap-5">
                    <button className="w-full bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white py-2 px-6 rounded-md">
                      Choose
                    </button>
                    <button className="w-full bg-gray-100 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-200">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <lord-icon
                src="https://cdn.lordicon.com/hbtheitu.json"
                trigger="loop"
                delay="2000"
                colors="primary:#121331,secondary:#fbbb04"
                style={{ width: "100px", height: "80px" }}
              ></lord-icon>
              <p className="text-red-500 text-center">No cars found</p>
            </div>
          )}

          {/* FAQ */}
          <div className="my-5 md:my-10">
            <FAQ />
          </div>

          {/* Long Term Form */}
          <div className="mb-12">
            <LongTermForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
