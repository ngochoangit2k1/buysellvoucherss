import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Đặt lại scroll position mỗi khi route thay đổi
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Không có gì để render
}

export default ScrollToTop
