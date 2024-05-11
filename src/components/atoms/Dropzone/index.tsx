import React, { InputHTMLAttributes, forwardRef, useRef, useState } from 'react'

interface DropzoneProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>(
  ({ label, error, ...props }, ref) => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const dropzoneRef = useRef<HTMLDivElement>(null)

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      // Check if the relatedTarget (where the mouse is going) is not inside the dropzone
      if (!dropzoneRef.current?.contains(e.relatedTarget as Node)) {
        setIsDragOver(false)
      }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragOver(false)

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0]
        console.log(file)
      }
    }

    return (
      <div className="col-span-full">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>

        <div
          ref={dropzoneRef}
          className={`mt-2 flex items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${isDragOver ? 'bg-gray-200' : ''}`}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Selecione</span>
                <input ref={ref} type="file" className="sr-only" {...props} />
              </label>
              <p className="pl-1">ou arraste e solte aqui</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG até 10MB</p>
          </div>
        </div>

        {error && (
          <p className="mt-3 text-sm leading-6 text-[#d76161]">{error}</p>
        )}
      </div>
    )
  },
)

Dropzone.displayName = 'Dropzone'

export { Dropzone }
