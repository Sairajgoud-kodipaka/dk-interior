'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ type = 'info', title, message, duration = 5000 }) => {
    const id = Date.now() + Math.random()
    const newToast = { id, type, title, message, duration, createdAt: Date.now() }
    
    setToasts(prev => [...prev, newToast])
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
    
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const dismissAll = useCallback(() => {
    setToasts([])
  }, [])

  const success = useCallback((title, message) => {
    return addToast({ type: 'success', title, message })
  }, [addToast])

  const error = useCallback((title, message) => {
    return addToast({ type: 'error', title, message })
  }, [addToast])

  const warning = useCallback((title, message) => {
    return addToast({ type: 'warning', title, message })
  }, [addToast])

  const info = useCallback((title, message) => {
    return addToast({ type: 'info', title, message })
  }, [addToast])

  // Auto-remove toasts after 10 seconds if they haven't been manually dismissed
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setToasts(prev => prev.filter(toast => {
        if (toast.duration === 0) return true // Keep persistent toasts
        return (now - toast.createdAt) < toast.duration
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ToastContext.Provider value={{ success, error, warning, info, removeToast, dismissAll }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

const ToastContainer = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  )
}

const Toast = ({ toast, removeToast }) => {
  const { type, title, message } = toast

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-50 to-green-100',
          border: 'border-green-200',
          icon: 'text-green-600',
          iconBg: 'bg-green-100',
          title: 'text-green-800',
          message: 'text-green-700',
          progress: 'bg-green-400'
        }
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-50 to-red-100',
          border: 'border-red-200',
          icon: 'text-red-600',
          iconBg: 'bg-red-100',
          title: 'text-red-800',
          message: 'text-red-700',
          progress: 'bg-red-400'
        }
      case 'warning':
        return {
          bg: 'bg-gradient-to-r from-amber-50 to-amber-100',
          border: 'border-amber-200',
          icon: 'text-amber-600',
          iconBg: 'bg-amber-100',
          title: 'text-amber-800',
          message: 'text-amber-700',
          progress: 'bg-amber-400'
        }
      case 'info':
      default:
        return {
          bg: 'bg-gradient-to-r from-[#f5f4f2] to-[#e8e6e3]',
          border: 'border-[#B85042]/20',
          icon: 'text-[#B85042]',
          iconBg: 'bg-[#B85042]/10',
          title: 'text-[#0f1115]',
          message: 'text-[#6b7280]',
          progress: 'bg-[#B85042]'
        }
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />
      case 'error':
        return <AlertCircle className="w-5 h-5" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />
      case 'info':
      default:
        return <Info className="w-5 h-5" />
    }
  }

  const styles = getToastStyles()

  return (
    <div
      className={`${styles.bg} ${styles.border} border-2 rounded-xl shadow-xl backdrop-blur-sm p-4 max-w-sm transform transition-all duration-300 ease-out animate-in slide-in-from-right-full hover:shadow-2xl`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start space-x-3">
        <div className={`${styles.iconBg} p-2 rounded-lg flex-shrink-0`}>
          <div className={styles.icon}>
            {getIcon()}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`${styles.title} font-semibold text-sm mb-1`}>
              {title}
            </h4>
          )}
          {message && (
            <p className={`${styles.message} text-sm leading-relaxed`}>
              {message}
            </p>
          )}
        </div>
        
        <button
          onClick={() => removeToast(toast.id)}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors duration-200"
          aria-label="Close toast"
        >
          <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
      
      {/* Progress bar for auto-dismiss */}
      {toast.duration > 0 && (
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className={`${styles.progress} h-1 rounded-full transition-all duration-1000 ease-linear`}
            style={{ 
              width: `${Math.max(0, 100 - ((Date.now() - toast.createdAt) / toast.duration) * 100)}%` 
            }}
          />
        </div>
      )}
    </div>
  )
}

export { ToastProvider }
