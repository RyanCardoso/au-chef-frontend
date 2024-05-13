import React, { InputHTMLAttributes, forwardRef, useRef, useState } from 'react'
import { PreviewImg } from '../PreviewImg'

interface DropzoneProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string
  error?: string
  value?: File | string
  onChange?: (file: File | null) => void
}

const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>(
  ({ label, error, value, onChange, ...props }, ref) => {
    const [file, setFile] = useState<File | string | null>(value || null)
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const dropzoneRef = useRef<HTMLDivElement>(null)

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (!dropzoneRef.current?.contains(e.relatedTarget as Node)) {
        setIsDragOver(false)
      }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragOver(false)

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFile = e.dataTransfer.files[0]

        setFile(droppedFile)
        onChange && onChange(droppedFile)
      }
    }

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = ev.target

      if (files && files.length > 0) {
        const selectedFile = files[0]

        setFile(selectedFile)
        onChange && onChange(selectedFile)
      }
    }

    const handleRemoveFile = () => {
      setFile(null)
      onChange && onChange(null)
    }

    return (
      <div className="col-span-full">
        <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>

        {!file && (
          <div
            ref={dropzoneRef}
            className={`flex items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${isDragOver ? 'bg-gray-200' : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Selecione</span>
                  <input
                    ref={ref}
                    type="file"
                    className="sr-only"
                    {...props}
                    onChange={handleChange}
                  />
                </label>
                <p className="pl-1">ou arraste e solte aqui</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG até 10MB
              </p>
            </div>
          </div>
        )}

        {file && (
          <PreviewImg src={file} alt={label} onRemove={handleRemoveFile} />
        )}

        {error && (
          <p className="mt-3 text-sm leading-6 text-[#d76161]">{error}</p>
        )}
      </div>
    )
  },
)

Dropzone.displayName = 'Dropzone'

export { Dropzone }
