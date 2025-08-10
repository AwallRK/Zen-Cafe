"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Phone, Calendar, Eye, Trash2, Search, Filter, MoreVertical, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: 'unread' | 'read' | 'replied'
  priority: 'low' | 'medium' | 'high'
}

export default function ContactsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read' | 'replied'>('all')
  
  const [contacts, setContacts] = useState<ContactMessage[]>([
    {
      id: '1',
      name: 'Yuki Tanaka',
      email: 'yuki.tanaka@email.com',
      subject: 'Tea Ceremony Booking',
      message: 'Hello, I would like to book a private tea ceremony session for 4 people this weekend. Could you please let me know the availability and pricing? We are particularly interested in the traditional matcha ceremony experience.',
      date: '2024-01-15T10:30:00Z',
      status: 'unread',
      priority: 'high'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      subject: 'Catering Request',
      message: 'We are organizing a corporate event for 50 people and would like to inquire about your catering services. The event is scheduled for next month. Please provide details about menu options and pricing.',
      date: '2024-01-14T14:20:00Z',
      status: 'read',
      priority: 'medium'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      subject: 'General Inquiry',
      message: 'I visited your cafe last week and had an amazing experience! I wanted to ask about the matcha powder you use - is it available for purchase? Also, do you offer any tea ceremony classes for beginners?',
      date: '2024-01-13T09:15:00Z',
      status: 'replied',
      priority: 'low'
    },
    {
      id: '4',
      name: 'Hiroshi Yamamoto',
      email: 'h.yamamoto@email.com',
      subject: 'Private Event',
      message: 'I am planning a birthday celebration for my mother who loves Japanese culture. Would it be possible to reserve a section of your cafe for about 15 people? She particularly enjoys traditional sweets and tea.',
      date: '2024-01-12T16:45:00Z',
      status: 'unread',
      priority: 'medium'
    },
    {
      id: '5',
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      subject: 'Feedback',
      message: 'Thank you for the wonderful experience at your cafe yesterday. The ceremonial matcha was exceptional, and the atmosphere was so peaceful. I will definitely be returning and recommending to friends!',
      date: '2024-01-11T11:30:00Z',
      status: 'read',
      priority: 'low'
    }
  ])

  useEffect(() => {
    const token = localStorage.getItem('cms_auth_token')
    if (!token) {
      router.push('/cms/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (id: string, newStatus: 'unread' | 'read' | 'replied') => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, status: newStatus } : contact
    ))
    toast.success('Status updated successfully')
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setContacts(contacts.filter(contact => contact.id !== id))
      setSelectedMessage(null)
      toast.success('Message deleted successfully')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'unread': return <Clock size={16} className="text-orange-500" />
      case 'read': return <Eye size={16} className="text-blue-500" />
      case 'replied': return <CheckCircle size={16} className="text-green-500" />
      default: return null
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#465775]/30 border-t-[#465775] rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#EAE7E3]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/cms/dashboard">
                <button className="p-2 hover:bg-[#EAE7E3] rounded-lg transition-colors duration-300">
                  <ArrowLeft size={20} />
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-light text-[#333333] tracking-wide">
                  Contact Messages
                </h1>
                <p className="text-sm text-[#333333] opacity-80">
                  Manage customer inquiries and feedback
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                {contacts.filter(c => c.status === 'unread').length} Unread
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#EAE7E3] mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#465775]" size={20} />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {filteredContacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedMessage(contact)}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-[#EAE7E3] cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedMessage?.id === contact.id ? 'ring-2 ring-[#465775]' : ''
                  } ${contact.status === 'unread' ? 'border-l-4 border-l-[#465775]' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#333333]">{contact.name}</h3>
                        <p className="text-sm text-[#333333] opacity-60">{contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(contact.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>
                        {contact.priority}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-[#333333] mb-2">{contact.subject}</h4>
                  <p className="text-sm text-[#333333] opacity-80 line-clamp-2 mb-3">
                    {contact.message}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#333333] opacity-60">
                    <span>{formatDate(contact.date)}</span>
                    <span className="capitalize">{contact.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            {selectedMessage ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] sticky top-8"
              >
                <div className="p-6 border-b border-[#EAE7E3]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#333333]">Message Details</h3>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {selectedMessage.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#333333]">{selectedMessage.name}</h4>
                        <p className="text-sm text-[#333333] opacity-60">{selectedMessage.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-[#465775]" />
                      <span className="text-sm text-[#333333] opacity-80">
                        {formatDate(selectedMessage.date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedMessage.priority)}`}>
                        {selectedMessage.priority} priority
                      </span>
                      <span className="flex items-center space-x-1 text-sm text-[#333333] opacity-80">
                        {getStatusIcon(selectedMessage.status)}
                        <span className="capitalize">{selectedMessage.status}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-medium text-[#333333] mb-3">{selectedMessage.subject}</h4>
                  <p className="text-sm text-[#333333] opacity-80 leading-relaxed mb-6">
                    {selectedMessage.message}
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-[#333333]">Actions</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        onClick={() => handleStatusChange(selectedMessage.id, 'read')}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm"
                      >
                        Mark as Read
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedMessage.id, 'replied')}
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm"
                      >
                        Mark as Replied
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedMessage.id, 'unread')}
                        className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm"
                      >
                        Mark as Unread
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] p-12 text-center">
                <Mail className="mx-auto mb-4 text-[#D3D3D3]" size={48} />
                <h3 className="text-lg font-medium text-[#333333] mb-2">Select a Message</h3>
                <p className="text-sm text-[#333333] opacity-80">
                  Choose a message from the list to view details and take actions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: '#F8F5F2',
          color: '#333333',
          border: '1px solid #EAE7E3'
        }}
      />
      
      <SakuraCursor />
    </div>
  )
}
