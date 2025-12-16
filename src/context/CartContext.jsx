import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Masa Madre desde cero',
      type: 'Online',
      price: 899,
      quantity: 1,
      image: '/src/assets/images/masaMadre.png'
    },
    {
      id: 2,
      name: 'Pan de Muerto',
      type: 'Presencial',
      price: 1299,
      quantity: 1,
      image: '/src/assets/images/panMuerto.png'
    }
  ])

  const toggleCart = () => setIsCartOpen(!isCartOpen)
  const closeCart = () => setIsCartOpen(false)

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const addToCart = (workshop) => {
    const existingItem = cartItems.find(item => item.id === workshop.id)
    
    if (existingItem) {
      updateQuantity(workshop.id, existingItem.quantity + 1)
    } else {
      setCartItems([...cartItems, {
        id: workshop.id,
        name: workshop.title,
        type: workshop.type,
        price: workshop.price,
        quantity: 1,
        image: workshop.image
      }])
    }
    
    setIsCartOpen(true)
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      isCartOpen,
      cartItems,
      toggleCart,
      closeCart,
      removeItem,
      updateQuantity,
      addToCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}
