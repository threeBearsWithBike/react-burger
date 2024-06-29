import { useState, useCallback } from "react"

export const useModal = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    const closeModal = useCallback(() => {
        setOpenModal(false);
    }, [])
    const openModal = useCallback(() => {
        setOpenModal(true);
    }, [])
      return {isOpenModal, openModal, closeModal}
}