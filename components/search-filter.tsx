"use client"
import { useState } from "react"

interface SearchFilterProps {
  placeholder?: string
  onSearch: (query: string) => void
  onFilterChange?: (filter: string) => void
  filters?: { value: string; label: string }[]
}

export default function SearchFilter({ 
  placeholder = "🔍 Cari...", 
  onSearch,
  onFilterChange,
  filters = []
}: SearchFilterProps) {
  const [query, setQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const handleSearchChange = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)
    if (onFilterChange) {
      onFilterChange(value)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Search Input */}
      <div className="relative flex-1 w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-md border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all text-gray-800 placeholder-gray-500 font-medium shadow-lg"
        />
        {query && (
          <button
            onClick={() => handleSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters */}
      {filters.length > 0 && (
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              selectedFilter === "all"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
            }`}
          >
            Semua
          </button>
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                selectedFilter === filter.value
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
