import { useEffect, useState } from "react"

export default function useHeader() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ mobile, setMobile ] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const device = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    setMobile(device !== null);
  }, []);

  return {
    mobile,
    menuOpen,
    handleMenu
  }
}
