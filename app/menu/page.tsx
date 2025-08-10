"use client"

const ITEMS_PER_PAGE = 6;


import { useState, useMemo, useCallback, useEffect } from "react"
import { type MenuItem, type Category } from "@/data/menu-items"
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CategoryTabs from "@/components/menu/category-tabs"
import Footer from "@/components/footer"
import MenuGrid from "@/components/menu/menu-grid"
import MenuModal from "@/components/menu/menu-modal"
import Navigation from "@/components/navigation"
import Pagination from "@/components/menu/menu-pagination"
import SakuraCursor from "@/components/sakura-cursor"
import { useCart } from "@/context/CartContext"




export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("tea")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null)
  const [categories, setCategories] = useState<Category[] | null>(null)
  const { cart, addToCart } = useCart()

  useEffect(() => {
    fetch("/api/menu-item")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch(() => setMenuItems([]));
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, [])

  const filteredItems = useMemo(
    () => (menuItems ? menuItems.filter((item) => item.category === selectedCategory) : []),
    [menuItems, selectedCategory],
  )

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentItems = filteredItems.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    // Smooth scroll to top of menu section
    window.scrollTo({ top: 300, behavior: "smooth" })
  }, [])

  const handleItemClick = useCallback((item: MenuItem) => {
    setSelectedItem(item)
  }, [])

  const handleAddToCart = useCallback((item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      quantity: 1,
      price: item.price,
      image: item.image,
    })
    toast.success(`${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }, [addToCart])

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const handleAddToCartFromModal = useCallback(() => {
    if (selectedItem) {
      handleAddToCart(selectedItem)
      setSelectedItem(null)
    }
  }, [selectedItem, handleAddToCart])

  if (!menuItems || !categories) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F2]">
        <div className="flex flex-col items-center text-center p-4 animate-fade-in">
          {/* The Ripple Animation Container */}
          <div className="relative w-40 h-40 flex items-center justify-center mb-8">
            {/* The central anchor point (replaces the image) */}
            <div className="w-5 h-5 bg-[#465775] rounded-full shadow-inner"></div>
            {/* Three ripple divs, each with a different animation delay to create a pulse effect */}
            <div className="ripple" style={{ borderColor: 'rgba(70, 87, 117, 0.4)' }}></div>
            <div className="ripple" style={{ borderColor: 'rgba(70, 87, 117, 0.4)', animationDelay: '1s' }}></div>
            <div className="ripple" style={{ borderColor: 'rgba(70, 87, 117, 0.4)', animationDelay: '2s' }}></div>
          </div>
          {/* The Text Content */}
          <h2 className="text-2xl font-light text-[#465775] mb-2 tracking-wide animate-pulse">
            A moment of calm...
          </h2>
          <p className="text-[#333333] opacity-70 text-lg max-w-xs">
            Preparing your experience while you wait.
          </p>
        </div>
        {/* CSS for the animations is placed directly in the component for simplicity */}
        <style>{`
            @keyframes ripple-effect {
              0% {
                transform: scale(0.5);
                opacity: 1;
              }
              100% {
                transform: scale(2.5);
                opacity: 0;
              }
            }
            @keyframes fade-in {
              from { 
                opacity: 0;
                transform: translateY(10px);
              }
              to { 
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in {
              animation: fade-in 0.8s ease-out forwards;
            }
            .ripple {
              position: absolute;
              border-width: 2px;
              border-radius: 50%;
              width: 100%;
              height: 100%;
              animation: ripple-effect 3s infinite cubic-bezier(0.215, 0.610, 0.355, 1);
              opacity: 0;
            }
          `}</style>
      </div>
    );
  }




  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Navigation cartItems={cart} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light text-[#333333] mb-4 tracking-wide">Our Menu</h1>
            <p className="text-lg text-[#333333] opacity-80 max-w-2xl mx-auto">
              Discover our carefully curated selection of traditional Japanese teas, sweets, and light meals
            </p>
          </motion.div>

          {/* Category Tabs */}
          <CategoryTabs
            categories={categories as Category[]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-[#333333] opacity-70">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)} of {filteredItems.length} items
            </p>
            <p className="text-sm text-[#333333] opacity-70">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          {/* Menu Grid */}
          <MenuGrid items={currentItems} onItemClick={handleItemClick} onAddToCart={handleAddToCart} />

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>

      {/* Menu Modal */}
      <MenuModal item={selectedItem} onClose={handleCloseModal} onAddToCart={handleAddToCartFromModal} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "#F8F5F2",
          color: "#333333",
          border: "1px solid #EAE7E3",
        }}
      />

      <Footer />
      <SakuraCursor />
    </div>
  )
}
