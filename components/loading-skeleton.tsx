"use client"

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'image' | 'list'
  count?: number
}

export default function LoadingSkeleton({ type = 'card', count = 1 }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white rounded-3xl shadow-lg p-8 animate-pulse">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-6"></div>
            <div className="h-8 bg-gray-200 rounded-lg mb-4 w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="mt-6 h-12 bg-gray-200 rounded-full w-full"></div>
          </div>
        )
      
      case 'image':
        return (
          <div className="animate-pulse">
            <div className="w-full h-64 bg-gray-200 rounded-3xl"></div>
          </div>
        )
      
      case 'text':
        return (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-11/12"></div>
            <div className="h-4 bg-gray-200 rounded w-10/12"></div>
            <div className="h-4 bg-gray-200 rounded w-9/12"></div>
          </div>
        )
      
      case 'list':
        return (
          <div className="bg-white rounded-xl p-6 animate-pulse border-2 border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  )
}
