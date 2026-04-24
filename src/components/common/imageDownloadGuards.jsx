import { useEffect } from "react"

const isImageLikeTarget = (target) => {
  if (!target || !target.nodeType) return false
  const t = target.nodeName
  if (t === "IMG" || t === "PICTURE") return true
  if (t === "SVG" && target.getAttribute("role") === "img") return true
  if (target.closest) {
    return (
      target.closest("picture") ||
      target.closest(".gatsby-image-wrapper") ||
      target.closest(".gatsby-image-outer-wrapper")
    )
  }
  return false
}

const ImageDownloadGuards = () => {
  useEffect(() => {
    const onContextMenu = (e) => {
      if (isImageLikeTarget(e.target)) e.preventDefault()
    }

    const onDragStart = (e) => {
      if (e.target && e.target.nodeName === "IMG") e.preventDefault()
    }

    const onAuxClick = (e) => {
      if (e.button === 1 && e.target && e.target.nodeName === "IMG")
        e.preventDefault()
    }

    document.addEventListener("contextmenu", onContextMenu, true)
    document.addEventListener("dragstart", onDragStart, true)
    document.addEventListener("auxclick", onAuxClick, true)

    return () => {
      document.removeEventListener("contextmenu", onContextMenu, true)
      document.removeEventListener("dragstart", onDragStart, true)
      document.removeEventListener("auxclick", onAuxClick, true)
    }
  }, [])

  return null
}

export default ImageDownloadGuards
